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

  const unit = load("overview.html");
  await settle(unit, (d) => d.getElementById("chapter")?.getAttribute("aria-busy") === "false");
  const md = unit.window.renderMarkdown;
  check(md("Hi <script>alert(1)</script>").includes("&lt;script&gt;"), "renderer escapes HTML");
  check(md("[x](javascript:alert(1))").includes('href="#"'), "renderer blocks javascript: links");
  check(md("[Hop-It](03-hop-it.md)", { "03-hop-it.md": "hop-it.html" }).includes('href="hop-it.html"'), "renderer rewrites chapter links");
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
