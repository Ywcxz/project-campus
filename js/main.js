/* ============================================================
   Project CAMPUS — shared script (master document v0.2)
   Include on every page. From data/chapters.json it renders the
   spine nav, the cover-page contents, each chapter's body
   (Markdown from content/), and the prev/next footer.
   GitHub and the site read the same Markdown files.
   ============================================================ */

async function fetchChapters() {
  try {
    const res = await fetch("data/chapters.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("fetchChapters() failed:", err.message);
    return [];
  }
}

function pad2(n) {
  const [whole, part] = String(n).split(".");
  return whole.padStart(2, "0") + (part ? `.${part}` : "");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function currentSlug() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  return file.replace(".html", "") === "" ? "index" : file.replace(".html", "");
}

function isLinked(ch) {
  return Boolean(ch.slug) && (ch.status === "available" || ch.status === "outline");
}

// Available chapters carry no label: being listed means they can be read.
// Only the exceptions say so.
function statusLabel(ch) {
  if (ch.status === "available") return "";
  if (ch.status === "outline") return "Outline";
  return "Not started";
}

// Sub-chapters (2.1, 4.2) belong to the whole-numbered chapter before them.
function isSubChapter(ch) {
  return !Number.isInteger(Number(ch.number));
}

function chapterTree(chapters) {
  const tree = [];
  chapters.forEach((ch) => {
    const parent = isSubChapter(ch)
      ? [...tree].reverse().find((node) => Number(node.ch.number) === Math.floor(Number(ch.number)))
      : null;
    if (parent) parent.children.push(ch);
    else tree.push({ ch, children: [] });
  });
  return tree;
}

const CHEVRON = `<svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function spineEntry(ch, here) {
  const isActive = ch.slug === here;
  const label = statusLabel(ch);
  const inner = `<span class="spine-num">${pad2(ch.number)}</span><span class="spine-title">${escapeHtml(ch.title)}</span>${
    label ? `<span class="spine-status">${label}</span>` : ""
  }`;
  return isLinked(ch)
    ? `<a href="${ch.slug}.html"${isActive ? ' aria-current="page"' : ""}>${inner}</a>`
    : `<span class="disabled">${inner}</span>`;
}

function renderSpine(chapters) {
  const list = document.getElementById("spineList");
  if (!list) return;
  const here = currentSlug();
  let part = null;
  list.innerHTML = chapterTree(chapters)
    .map(({ ch, children }) => {
      let head = "";
      if (ch.part && ch.part !== part) {
        part = ch.part;
        head = `<li class="spine-part">${escapeHtml(part)}</li>`;
      }
      const isActive = ch.slug === here;
      if (!children.length) {
        return `${head}<li class="spine-item${isActive ? " active" : ""}">${spineEntry(ch, here)}</li>`;
      }

      // A chapter with sub-chapters opens only on its own pages; elsewhere
      // the reader opens it with the chevron.
      const childActive = children.some((c) => c.slug === here);
      const open = isActive || childActive;
      const subId = `spine-sub-${String(ch.number).replace(/\W/g, "-")}`;
      const subs = children
        .map((c) => `<li class="spine-item spine-subitem${c.slug === here ? " active" : ""}">${spineEntry(c, here)}</li>`)
        .join("");
      return `${head}<li class="spine-item spine-group${isActive ? " active" : ""}${childActive ? " has-active" : ""}${open ? " open" : ""}">
        <div class="spine-row">
          ${spineEntry(ch, here)}
          <button class="spine-toggle" type="button" aria-expanded="${open}" aria-controls="${subId}"
            aria-label="Sub-chapters of ${escapeHtml(ch.title)}">${CHEVRON}</button>
        </div>
        <div class="spine-sub" id="${subId}"><ol class="spine-sublist">${subs}</ol></div>
      </li>`;
    })
    .join("");

  list.addEventListener("click", (event) => {
    const toggle = event.target.closest(".spine-toggle");
    if (!toggle) return;
    const group = toggle.closest(".spine-group");
    const open = !group.classList.contains("open");
    group.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  revealCurrent(list);
}

// If the current chapter sits below the fold of a long spine, scroll the
// spine (never the page) so it shows about a third of the way down.
function revealCurrent(list) {
  const current = list.querySelector('[aria-current="page"]');
  if (!current || list.scrollHeight <= list.clientHeight) return;
  const top = current.getBoundingClientRect().top - list.getBoundingClientRect().top + list.scrollTop;
  const visible = top >= list.scrollTop && top + current.offsetHeight <= list.scrollTop + list.clientHeight;
  if (!visible) list.scrollTop = Math.max(0, top - list.clientHeight / 3);
}

function renderToc(chapters) {
  const el = document.getElementById("tocGrid");
  if (!el) return;
  let part = null;
  el.innerHTML = chapters
    .map((ch) => {
      let head = "";
      if (ch.part && ch.part !== part) {
        part = ch.part;
        head = `<div class="toc-part">${escapeHtml(part)}</div>`;
      }
      const linked = isLinked(ch);
      const title = linked ? `<a href="${ch.slug}.html">${escapeHtml(ch.title)}</a>` : escapeHtml(ch.title);
      const sub = ch.subtitle ? `<span class="toc-sub">${escapeHtml(ch.subtitle)}</span>` : "";
      const label = statusLabel(ch);
      return `${head}<div class="toc-row${linked ? " is-written" : ""}${ch.status === "outline" ? " is-outline" : ""}${isSubChapter(ch) ? " is-sub" : ""}">
        <span class="n">${pad2(ch.number)}</span>
        <span class="t">${title}${sub}</span>${label ? `\n        <span class="s">${label}</span>` : ""}
      </div>`;
    })
    .join("");
}

function renderChapterNav(chapters) {
  const el = document.getElementById("chapterNav");
  if (!el) return;
  const here = currentSlug();
  const idx = chapters.findIndex((c) => c.slug === here);
  if (idx === -1) return;

  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  const prevHTML = prev
    ? isLinked(prev)
      ? `<a href="${prev.slug}.html"><span class="dir">← Previous</span><span class="label">${escapeHtml(prev.title)}</span></a>`
      : `<span class="disabled"><span class="dir">← Previous</span><span class="label">${escapeHtml(prev.title)}</span></span>`
    : `<span></span>`;

  const nextHTML = next
    ? isLinked(next)
      ? `<a class="next" href="${next.slug}.html"><span class="dir">Next →</span><span class="label">${escapeHtml(next.title)}</span></a>`
      : `<span class="disabled next"><span class="dir">Next</span><span class="label">${escapeHtml(next.title)} — not yet written</span></span>`
    : `<span></span>`;

  el.innerHTML = prevHTML + nextHTML;
}

/* ── Markdown → HTML ──────────────────────────────────────────
   A deliberately small subset, documented in content/README.md.
   ──────────────────────────────────────────────────────────── */

const CLAIM_TAGS = ["Established", "Proposed", "Unresolved", "Deferred", "Superseded", "Rejected", "Investigating", "Under review"];
const TAG_PATTERN = new RegExp(`\\[(${CLAIM_TAGS.join("|")})\\](?!\\()`, "g");

function safeHref(raw, linkMap) {
  const href = raw.replace(/&amp;/g, "&").trim();
  const chapterLink = href.match(/^(?:\.\/)?([\w.-]+\.md)(#[\w-]*)?$/);
  if (chapterLink && linkMap[chapterLink[1]]) return linkMap[chapterLink[1]] + (chapterLink[2] || "");
  if (/^(https?:\/\/|mailto:|#|\.{1,2}\/)/i.test(href) || /^[\w.-]+\.(html|md|txt)(#[\w-]*)?$/i.test(href)) {
    return escapeHtml(href);
  }
  return "#";
}

function renderInline(text, linkMap) {
  const codes = [];
  let s = escapeHtml(text).replace(/`([^`]+)`/g, (_, code) => {
    codes.push(code);
    return `\u0000${codes.length - 1}\u0000`;
  });
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
    const target = safeHref(href, linkMap);
    const external = /^https?:/i.test(target);
    return `<a href="${target}"${external ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
  });
  s = s.replace(TAG_PATTERN, (_, tag) => `<span class="tag tag-${tag.toLowerCase().replace(/\s+/g, "-")}">${tag}</span>`);
  s = s.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^\w*])\*(?!\s)([^*]+?)\*(?![\w*])/g, "$1<em>$2</em>");
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[Number(i)]}</code>`);
}

function isTableSeparator(line) {
  if (!line || !line.includes("|")) return false;
  const cells = line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|");
  return cells.length > 0 && cells.every((c) => /^\s*:?-{3,}:?\s*$/.test(c));
}

function splitRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

function startsBlock(lines, i) {
  const line = lines[i];
  return (
    /^\s*$/.test(line) ||
    /^#{1,4}\s/.test(line) ||
    /^```/.test(line) ||
    /^\s*>/.test(line) ||
    /^\s*([-*]|\d+\.)\s+/.test(line) ||
    /^\s*(-{3,}|\*{3,})\s*$/.test(line) ||
    (line.includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1]))
  );
}

function renderMarkdown(source, linkMap = {}) {
  const lines = String(source).replace(/\r\n?/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let afterTitle = false;

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*$/.test(line)) { i++; continue; }

    if (/^```/.test(line)) {
      const code = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) code.push(lines[i++]);
      i++;
      out.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      afterTitle = false;
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+?)\s*#*\s*$/);
    if (heading) {
      const level = heading[1].length;
      out.push(`<h${level}>${renderInline(heading[2], linkMap)}</h${level}>`);
      afterTitle = level === 1;
      i++;
      continue;
    }

    if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) { out.push("<hr>"); afterTitle = false; i++; continue; }

    if (line.includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const head = splitRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|") && !/^\s*$/.test(lines[i])) rows.push(splitRow(lines[i++]));
      const th = head.map((cell) => `<th>${renderInline(cell, linkMap)}</th>`).join("");
      const body = rows
        .map((row) => `<tr>${head.map((_, k) => `<td>${renderInline(row[k] || "", linkMap)}</td>`).join("")}</tr>`)
        .join("");
      const wide = head.length >= 4 ? ' class="wide"' : "";
      out.push(`<div class="table-wrap"><table${wide}><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table></div>`);
      afterTitle = false;
      continue;
    }

    if (/^\s*>/.test(line)) {
      const quote = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) quote.push(lines[i++].replace(/^\s*>\s?/, ""));
      const text = quote.join(" ").trim();
      const card = text.match(/^\*\*(.+?)\*\*\s*(.*)$/);
      out.push(
        card
          ? `<div class="field-card"><span class="field-card-label">${renderInline(card[1].replace(/[.:]\s*$/, ""), linkMap)}</span><p class="field-card-text">${renderInline(card[2], linkMap)}</p></div>`
          : `<p class="q">${renderInline(text, linkMap)}</p>`
      );
      afterTitle = false;
      continue;
    }

    const item = line.match(/^\s*([-*]|\d+\.)\s+(.*)$/);
    if (item) {
      const ordered = /\d/.test(item[1]);
      const items = [];
      while (i < lines.length) {
        const next = lines[i].match(/^\s*([-*]|\d+\.)\s+(.*)$/);
        if (next && /\d/.test(next[1]) === ordered) { items.push(next[2]); i++; continue; }
        if (!next && items.length && /^\s{2,}\S/.test(lines[i])) { items[items.length - 1] += ` ${lines[i].trim()}`; i++; continue; }
        break;
      }
      const tag = ordered ? "ol" : "ul";
      out.push(`<${tag}>${items.map((it) => `<li>${renderInline(it, linkMap)}</li>`).join("")}</${tag}>`);
      afterTitle = false;
      continue;
    }

    const para = [];
    do { para.push(lines[i].trim()); i++; } while (i < lines.length && !startsBlock(lines, i));
    const text = para.join(" ");
    if (afterTitle && /^\*[^*].*[^*]\*$/.test(text)) out.push(`<p class="subtitle">${renderInline(text.slice(1, -1), linkMap)}</p>`);
    else out.push(`<p>${renderInline(text, linkMap)}</p>`);
    afterTitle = false;
  }
  return out.join("\n");
}

async function renderChapter(chapters) {
  const el = document.getElementById("chapter");
  if (!el) return;
  const ch = chapters.find((c) => c.slug === currentSlug());
  if (!ch) {
    el.innerHTML = `<p class="chapter-error">This page isn't listed in data/chapters.json.</p>`;
    el.setAttribute("aria-busy", "false");
    return;
  }

  document.title = `${ch.title} — Project CAMPUS`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && ch.subtitle) meta.setAttribute("content", `${ch.title}: ${ch.subtitle}`);

  const linkMap = {};
  chapters.forEach((c) => {
    if (c.source && c.slug) linkMap[c.source.split("/").pop()] = `${c.slug}.html`;
  });

  const header = `
    <div class="lockup"><span>Project CAMPUS</span><span class="x">×</span><span class="vsu">${escapeHtml(ch.role || ch.part || "")}</span></div>
    <div class="eyebrow">${ch.number === 0 ? "Start here" : `Chapter ${pad2(ch.number)}`}${ch.status === "outline" ? " · Outline" : ""}</div>`;

  try {
    const res = await fetch(ch.source);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    el.innerHTML = header + renderMarkdown(await res.text(), linkMap);
  } catch (err) {
    console.warn("renderChapter() failed:", err.message);
    el.innerHTML = `${header}<h1>${escapeHtml(ch.title)}</h1>
      <p class="chapter-error">This chapter couldn't be loaded. It lives in <code>${escapeHtml(ch.source || "")}</code> in the repository.</p>`;
  }
  el.setAttribute("aria-busy", "false");
}

function headingSlug(text) {
  return (
    text
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "section"
  );
}

function initSectionAnchors() {
  const used = new Set();
  document.querySelectorAll(".chapter h2").forEach((heading) => {
    if (!heading.id) {
      const base = headingSlug(heading.textContent);
      let id = base;
      let n = 2;
      while (used.has(id) || document.getElementById(id)) id = `${base}-${n++}`;
      heading.id = id;
    }
    used.add(heading.id);
    if (heading.querySelector(".heading-anchor")) return;

    const anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = `#${heading.id}`;
    anchor.textContent = "#";
    anchor.setAttribute("aria-label", `Link to section: ${heading.textContent.trim()}`);
    anchor.title = "Link to this section";
    heading.append(anchor);
  });
}

function scrollToHash() {
  if (!window.location.hash) return;
  const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
  if (target) target.scrollIntoView();
}

function readStoredTheme() {
  try { return localStorage.getItem("campus-theme"); } catch (err) { return null; }
}

function storeTheme(value) {
  try { localStorage.setItem("campus-theme", value); } catch (err) { /* private mode: theme just won't persist */ }
}

function initTheme() {
  const root = document.documentElement;
  const queryTheme = new URLSearchParams(window.location.search).get("theme");
  const storedTheme = readStoredTheme();
  const savedTheme = storedTheme === "ink" ? "dark" : storedTheme === "paper" ? "light" : storedTheme;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const forcedTheme = queryTheme === "ink" ? "dark" : queryTheme === "paper" ? "light" : queryTheme;
  const initialTheme = ["dark", "light"].includes(forcedTheme)
    ? forcedTheme
    : savedTheme || (prefersDark ? "dark" : "light");
  root.dataset.theme = initialTheme;

  let toggleCount = 0;
  const createToggle = (parent) => {
    if (!parent || parent.querySelector(".theme-toggle")) return;
    const id = `tt-mask-${++toggleCount}`;
    const toggle = document.createElement("button");
    toggle.className = "theme-toggle";
    toggle.type = "button";
    // Sun: a disc and eight rays. Moon: the disc grows and a second disc,
    // cut out through the mask, slides across it to leave a crescent.
    const rays = [0, 45, 90, 135, 180, 225, 270, 315]
      .map((deg) => `<line x1="12" y1="2.6" x2="12" y2="4.6" transform="rotate(${deg} 12 12)"/>`)
      .join("");
    toggle.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <mask id="${id}"><rect x="-6" y="-6" width="36" height="36" fill="#fff"/><circle class="tt-bite" cx="16.5" cy="8" r="5.6" fill="#000"/></mask>
      <circle class="tt-disc" cx="12" cy="12" r="4.6" fill="currentColor" mask="url(#${id})"/>
      <g class="tt-rays" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">${rays}</g>
    </svg>`;
    toggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      storeTheme(nextTheme);
      updateToggleLabels();
    });
    parent.append(toggle);
  };

  const updateToggleLabels = () => {
    const darkMode = root.dataset.theme === "dark";
    document.querySelectorAll(".theme-toggle").forEach((toggle) => {
      toggle.setAttribute("aria-pressed", String(darkMode));
      toggle.setAttribute("aria-label", "Dark mode");
      toggle.title = darkMode ? "Switch to light mode" : "Switch to dark mode";
    });
  };

  createToggle(document.querySelector(".spine-head"));
  createToggle(document.querySelector(".topbar"));
  updateToggleLabels();
}

function initMobileSpine() {
  const toggle = document.getElementById("spineToggle");
  const spine = document.getElementById("spine");
  const backdrop = document.getElementById("spineBackdrop");
  if (!toggle || !spine || !backdrop) return;
  const open = () => { spine.classList.add("open"); backdrop.classList.add("open"); };
  const close = () => { spine.classList.remove("open"); backdrop.classList.remove("open"); };
  toggle.addEventListener("click", () => {
    spine.classList.contains("open") ? close() : open();
  });
  backdrop.addEventListener("click", close);
  spine.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  const chapters = await fetchChapters();
  renderSpine(chapters);
  renderToc(chapters);
  renderChapterNav(chapters);
  initMobileSpine();
  await renderChapter(chapters);
  initSectionAnchors();
  scrollToHash();
});
