// Project CAMPUS — render test.
// Loads the cover and every chapter page in jsdom, runs js/main.js against
// the real files, and checks what readers would see.
// Run:  cd tests && npm install && npm test
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const chapters = JSON.parse(read("data/chapters.json"));
const mainJs = read("js/main.js");
const meta = require("../scripts/sync-meta.js");
const REF_IDS = new Map();
for (const [file, page] of [["content/12-decisions.md", "decisions.html"], ["content/07-evidence.md", "evidence.html"]]) {
  for (const line of read(file).split("\n")) {
    const m = line.match(/^\|\s*([DQCE]-\d{2,3})\s*\|/);
    if (m) REF_IDS.set(m[1].toLowerCase(), page);
  }
}
let refLinks = 0;
const RAW_TAG = /\[(Established|Proposed|Unresolved|Deferred|Superseded|Rejected|Investigating|Under review)\]/;

let checks = 0;
let failures = 0;
function check(ok, message) {
  checks++;
  if (!ok) { failures++; console.error(`FAIL  ${message}`); }
}

function load(file) {
  const html = read(file).replace(/<script src="js\/main\.js[^"]*"><\/script>/, () => `<script>${mainJs}</script>`);
  return new JSDOM(html, {
    url: `http://localhost/${file}`,
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(window) {
      window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      window.HTMLElement.prototype.scrollIntoView = function () {};
      window.fetch = async (url) => {
        const rel = String(url).replace(/^https?:\/\/[^/]+\//, "").split(/[?#]/)[0];
        const file = path.join(ROOT, rel);
        if (!fs.existsSync(file)) return { ok: false, status: 404, json: async () => null, text: async () => "" };
        const body = fs.readFileSync(file, "utf8");
        return { ok: true, status: 200, json: async () => JSON.parse(body), text: async () => body };
      };
    },
  });
}

async function settle(dom, ready) {
  for (let t = 0; t < 150; t++) {
    if (ready(dom.window.document)) return true;
    await new Promise((r) => setTimeout(r, 20));
  }
  return false;
}

function targetExists(href) {
  if (/^(https?:|mailto:|#)/.test(href)) return true;
  const rel = href.split(/[?#]/)[0];
  if (!rel) return true;
  const resolved = path.posix.normalize(rel).replace(/^(\.\.\/)+/, "");
  return fs.existsSync(path.join(ROOT, resolved));
}

const cellCount = (line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").length;
const isSeparator = (line) => line.includes("|") && cellCountSep(line);
function cellCountSep(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").every((c) => /^\s*:?-{3,}:?\s*$/.test(c));
}

(async () => {
  // Static metadata: what link previews and search engines read.
  for (const m of meta.pages) {
    const html = read(m.file);
    const found = html.match(meta.MARKED);
    check(found && found[0] === meta.block(m), `${m.file}: head metadata matches data/chapters.json (run node scripts/sync-meta.js)`);
  }
  for (const f of ["img/og-card.png", "img/favicon.svg", "img/apple-touch-icon.png", "favicon.ico"]) {
    check(fs.existsSync(path.join(ROOT, f)), `${f} exists`);
  }

  const cover = load("index.html");
  await settle(cover, (d) => d.querySelectorAll("#tocGrid .toc-row").length > 0);
  const c = cover.window.document;
  check(c.querySelectorAll("#tocGrid .toc-row").length === chapters.length, "cover: contents list every chapter");
  check(c.querySelectorAll("#tocGrid .toc-part").length === new Set(chapters.map((ch) => ch.part)).size, "cover: each part labelled once");
  check(c.querySelectorAll("#spineList .spine-item").length === chapters.length, "cover: spine lists every chapter");
  check(!/\bAvailable\b/.test(c.getElementById("tocGrid").textContent), "cover: contents carry no 'Available' label");
  check(!c.querySelector(".spine-dot"), "cover: spine has no status dots");
  const subCount = chapters.filter((ch) => !Number.isInteger(Number(ch.number))).length;
  check(c.querySelectorAll("#spineList .spine-subitem").length === subCount, "cover: every sub-chapter nests under its chapter");
  check(c.querySelectorAll("#tocGrid .toc-row.is-sub").length === subCount, "cover: contents indent every sub-chapter");
  check(!c.querySelector("#spineList .spine-group.open"), "cover: every chapter starts folded");
  const firstToggle = c.querySelector("#spineList .spine-toggle");
  check(firstToggle && firstToggle.getAttribute("aria-expanded") === "false", "cover: chevron reports folded");
  firstToggle.click();
  check(firstToggle.closest(".spine-group").classList.contains("open") && firstToggle.getAttribute("aria-expanded") === "true", "cover: chevron opens a chapter");
  firstToggle.click();
  check(!firstToggle.closest(".spine-group").classList.contains("open") && firstToggle.getAttribute("aria-expanded") === "false", "cover: chevron folds it again");
  cover.window.close();

  const sources = new Set();
  for (const ch of chapters) {
    const label = `${ch.slug}:`;
    check(fs.existsSync(path.join(ROOT, `${ch.slug}.html`)), `${label} page exists`);
    check(fs.existsSync(path.join(ROOT, ch.source)), `${label} source ${ch.source} exists`);
    check(!sources.has(ch.source), `${label} source used once`);
    sources.add(ch.source);

    const lines = read(ch.source).split("\n");
    for (let n = 0; n + 1 < lines.length; n++) {
      if (lines[n].includes("|") && isSeparator(lines[n + 1])) {
        const cols = cellCount(lines[n]);
        for (let m = n + 2; m < lines.length && lines[m].includes("|") && lines[m].trim(); m++) {
          check(cellCount(lines[m]) === cols, `${label} ${ch.source}:${m + 1} has ${cellCount(lines[m])} cells; header has ${cols}`);
        }
      }
    }

    const dom = load(`${ch.slug}.html`);
    check(await settle(dom, (d) => d.getElementById("chapter")?.getAttribute("aria-busy") === "false"), `${label} finished rendering`);
    const d = dom.window.document;
    const article = d.getElementById("chapter");
    const h1 = article.querySelector("h1");
    const h1Text = h1 ? h1.textContent.trim() : "(none)";
    check(h1Text === ch.title, `${label} H1 "${h1Text}" matches registry title "${ch.title}"`);
    check(Boolean(article.querySelector("p.subtitle")), `${label} has a subtitle line`);
    check(article.querySelectorAll("h2").length > 0, `${label} has sections`);
    check(!article.querySelector(".chapter-error"), `${label} loaded without error`);
    const text = article.textContent;
    check(!/\*\*|\]\(|^\s*#{1,4}\s|\|\s*-{3,}/m.test(text), `${label} no raw Markdown in rendered text`);
    check(!RAW_TAG.test(text), `${label} every claim tag rendered as a stamp`);
    article.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      check(href !== "#", `${label} link "${a.textContent.trim()}" has a usable target`);
      check(targetExists(href), `${label} link target exists: ${href}`);
    });
    article.querySelectorAll("a.ref").forEach((a) => {
      refLinks++;
      const [file, hash] = a.getAttribute("href").split("#");
      const id = (hash || "").toLowerCase();
      check(REF_IDS.has(id), `${label} reference ${a.textContent} points to a row that exists`);
      check((file || `${ch.slug}.html`) === REF_IDS.get(id), `${label} reference ${a.textContent} points to the right page`);
    });
    // Evidence view: every stamp in running text closes a claim of its own kind.
    const stamps = [...article.querySelectorAll(":is(p, li, td) .tag")];
    check(stamps.every((t) => t.closest(".claim")?.dataset.claim === t.className.replace(/^tag tag-/, "")), `${label} every claim tag closes a claim of its kind`);
    check(!article.querySelector(".claim .claim"), `${label} claims don't nest`);
    const lens = article.querySelector(".claims-lens");
    if (stamps.length >= 3) {
      check(Boolean(lens), `${label} has the evidence view`);
      const btn = lens && lens.querySelector('button[data-lens="proposed"], button[data-lens="unresolved"], button[data-lens="established"]');
      if (btn) {
        const n = Number(btn.querySelector(".n").textContent);
        check(n === article.querySelectorAll(`.claim[data-claim="${btn.dataset.lens}"]`).length, `${label} evidence view counts match`);
        btn.click();
        check(article.dataset.lens === btn.dataset.lens && btn.getAttribute("aria-pressed") === "true", `${label} evidence view switches on`);
        lens.querySelector('button[data-lens=""]').click();
        check(!article.dataset.lens, `${label} evidence view switches off`);
      }
    }
    // On this page: chapters with four or more sections list them.
    const sections = article.querySelectorAll("h2[id]").length;
    const toc = d.querySelector(".page-toc");
    check(sections >= 4 ? Boolean(toc) && toc.querySelectorAll("a").length === sections : !toc, `${label} section list matches its ${sections} sections`);
    if (toc) toc.querySelectorAll("a").forEach((a) => check(Boolean(d.getElementById(a.getAttribute("href").slice(1))), `${label} section link ${a.getAttribute("href")} has a target`));
    check(Boolean(article.querySelector(".print-source")), `${label} has its print source line`);
    check(d.querySelectorAll("#spineList .spine-item").length === chapters.length, `${label} spine lists every chapter`);
    check(Boolean(d.querySelector("#spineList .spine-item.active")), `${label} spine marks this chapter`);
    check(d.querySelectorAll('#spineList [aria-current="page"]').length === 1, `${label} spine marks exactly one current page`);
    const openGroups = [...d.querySelectorAll("#spineList .spine-group.open")];
    const ownGroup = d.querySelector('#spineList [aria-current="page"]')?.closest(".spine-group");
    check(openGroups.length === (ownGroup ? 1 : 0) && (!ownGroup || openGroups[0] === ownGroup), `${label} only this chapter's group is open`);
    if (ownGroup) check(ownGroup.querySelector(".spine-toggle").getAttribute("aria-expanded") === "true", `${label} open group's chevron says so`);
    check(d.querySelectorAll("#chapterNav a").length >= 1, `${label} previous/next links render`);
    check(d.title.startsWith(ch.title), `${label} document title set`);
    dom.window.close();
  }

  check(refLinks > 100, `decision and question references are linked across chapters (${refLinks})`);
  const reg = load("decisions.html");
  await settle(reg, (d) => d.getElementById("chapter")?.getAttribute("aria-busy") === "false");
  const rd = reg.window.document;
  check(Boolean(rd.querySelector("tr#d-061")) && Boolean(rd.querySelector("tr#q-36")), "register rows carry anchors");
  check(![...rd.querySelectorAll("a.ref")].some((a) => a.textContent === "Q-03"), "resolved questions without a row stay plain text");
  check(!rd.querySelector("tr#d-061 td:first-child a"), "a row's own ID does not link to itself");
  reg.window.close();

  // The whole document on one page.
  const all = load("document.html");
  check(await settle(all, (d) => d.getElementById("chapter")?.getAttribute("aria-busy") === "false"), "document: finished rendering");
  const ad = all.window.document;
  check(ad.querySelectorAll(".doc-chapter").length === chapters.length, "document: every chapter is on the page");
  check(!ad.querySelector(".chapter-error"), "document: every chapter loaded");
  check(ad.querySelectorAll(".doc-contents li").length === chapters.length, "document: contents list every chapter");
  const ids = new Set([...ad.querySelectorAll("[id]")].map((e) => e.id));
  check(ids.size === ad.querySelectorAll("[id]").length, "document: no duplicate ids");
  const inPage = [...ad.querySelectorAll("#chapter a[href^='#'], #spineList a")];
  const broken = inPage.filter((a) => !ids.has(decodeURIComponent(a.getAttribute("href").slice(1))));
  check(broken.length === 0, `document: every in-page link has a target${broken.length ? ` (first broken: ${broken[0].getAttribute("href")})` : ""}`);
  check(![...ad.querySelectorAll("#chapter a:not([href^='http']):is([href$='.html'], [href*='.html#'])")].length, "document: chapter links stay on the page");
  check(Boolean(ad.querySelector(".claims-lens")), "document: has the evidence view");
  check(ad.querySelector(".spine-doc")?.getAttribute("aria-current") === "page", "document: sidebar marks the one-page link");
  all.window.close();

  const unit = load("overview.html");
  await settle(unit, (d) => d.getElementById("chapter")?.getAttribute("aria-busy") === "false");
  const md = unit.window.renderMarkdown;
  check(md("Hi <script>alert(1)</script>").includes("&lt;script&gt;"), "renderer escapes HTML");
  check(md("[x](javascript:alert(1))").includes('href="#"'), "renderer blocks javascript: links");
  check(md("[Hop-It](04a-hop-it.md)", { "04a-hop-it.md": "hop-it.html" }).includes('href="hop-it.html"'), "renderer rewrites chapter links");
  check(md("A claim. [Proposed]").includes('class="tag tag-proposed"'), "renderer turns tags into stamps");
  check(md("> **Note.** Text").includes('class="field-card"'), "renderer makes field cards");
  check(md("# T\n\n*Sub*").includes('class="subtitle"'), "renderer detects the subtitle");
  check(md("| a | b |\n| --- | --- |\n| 1 | 2 |").includes("<td>1</td>"), "renderer builds tables");
  check(md("- one\n- two").includes("<li>two</li>"), "renderer builds lists");
  check(md("*hapit* and **bold**").includes("<em>hapit</em>"), "renderer handles italics");
  unit.window.close();

  console.log(`${checks - failures}/${checks} checks passed`);
  process.exit(failures ? 1 : 0);
})();
