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

// On the one-page document the sidebar links to each chapter's section.
const ONE_PAGE = () => document.getElementById("chapter")?.dataset.mode === "all";
const chapterHref = (ch) => (ONE_PAGE() ? `#ch-${ch.slug}` : `${ch.slug}.html`);

function spineEntry(ch, here) {
  const isActive = ch.slug === here;
  const label = statusLabel(ch);
  const inner = `<span class="spine-num">${pad2(ch.number)}</span><span class="spine-title">${escapeHtml(ch.title)}</span>${
    label ? `<span class="spine-status">${label}</span>` : ""
  }`;
  return isLinked(ch)
    ? `<a href="${chapterHref(ch)}"${isActive ? ' aria-current="page"' : ""}>${inner}</a>`
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

function stampHTML(tag) {
  return `<span class="tag tag-${tag.toLowerCase().replace(/\s+/g, "-")}">${tag}</span>`;
}

/* ── Citations ────────────────────────────────────────────────
   A citation in brackets right after a claim tag, as in
   "… [Proposed] (D-065; Ostrom, 1990)", shows as a superscript
   number, thesis style, against the claim's last word and before
   its stamp, and the chapter ends with its references
   numbered in the order they are first cited. A source cited twice
   keeps its first number. The Markdown itself does not change.
   ──────────────────────────────────────────────────────────── */

const ID = "[DQCEP]-\\d{2,3}";
const ID_LIST = new RegExp(`^${ID}(?: to ${ID})?(?:\\s*,\\s*${ID}(?: to ${ID})?)+$`);
const ID_ONLY = new RegExp(`^${ID}$`);

function newCites(base = "") {
  return { base, list: [], keys: new Map(), sources: [] };
}

// Splits on a separator outside brackets and parentheses.
function splitTop(text, sep) {
  const parts = [];
  let depth = 0;
  let last = 0;
  for (let k = 0; k < text.length; k++) {
    const ch = text[k];
    if (ch === "(" || ch === "[") depth++;
    else if (ch === ")" || ch === "]") depth--;
    else if (ch === sep && depth === 0) { parts.push(text.slice(last, k)); last = k + 1; }
  }
  parts.push(text.slice(last));
  return parts.map((p) => p.trim()).filter(Boolean);
}

function citeItems(inner) {
  return splitTop(inner, ";").flatMap((part) => (ID_LIST.test(part) ? splitTop(part, ",") : [part]));
}

function citeHTML(items, cites) {
  const nums = items.map((raw) => {
    let n = cites.keys.get(raw);
    const first = !n;
    if (first) {
      n = cites.list.length + 1;
      cites.keys.set(raw, n);
      cites.list.push({ n, raw });
    }
    const id = first ? ` id="${cites.base}cite-${n}"` : "";
    return `<a class="cite-link" href="#${cites.base}ref-${n}"${id} data-cite="${n}" data-entry="${cites.base}ref-${n}" aria-label="Reference ${n}">${n}</a>`;
  });
  return `<sup class="cite">[${nums.join(", ")}]</sup>`;
}

// Takes each citation out of the raw text before it is escaped, leaving a
// placeholder before the tag that renderInline swaps for the superscript.
function extractCites(text, cites, sups) {
  if (!cites) return text;
  const re = new RegExp(TAG_PATTERN.source, "g");
  let out = "";
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    const end = m.index + m[0].length;
    const gap = text.slice(end).match(/^ *\(/);
    if (!gap) continue;
    const open = end + gap[0].length - 1;
    let depth = 0;
    let close = -1;
    for (let k = open; k < text.length; k++) {
      if (text[k] === "(") depth++;
      if (text[k] === ")" && --depth === 0) { close = k; break; }
    }
    if (close === -1) continue;
    const items = citeItems(text.slice(open + 1, close));
    if (!items.length) continue;
    sups.push(citeHTML(items, cites));
    const before = text.slice(last, m.index);
    const claim = before.replace(/\s+$/, "");
    out += `${claim}\u0001${sups.length - 1}\u0001${before.slice(claim.length)}${m[0]}`;
    last = close + 1;
    re.lastIndex = last;
  }
  return out + text.slice(last);
}

// An author-date citation resolves to its entry in the chapter's Sources
// list: "Ostrom, 1990", "VSU, 30 May 2023", or "VSU Computer Center, n.d.".
// An entry that starts with the author wins over one that only names it, and
// a full date must match exactly, so a citation never lands on a guess.
function matchSource(raw, sources) {
  const m = raw.match(/^(.+?),\s*(?:s\.\s*)?((?:\d{1,2}\s+)?(?:[A-Z][a-z]+\s+)?\d{4}[a-z]?|n\.d\.)$/) || raw.match(/^(.+?\bet al\.?)$/);
  if (!m) return null;
  const author = m[1].replace(/\s*\bet al\.?$/, "").split(/\s+and\s+|,\s*/)[0].trim().toLowerCase();
  if (author.length < 3) return null;
  const date = m[2] || "";
  const lead = (line) => line.replace(/^[[*\s]+/, "").toLowerCase();
  const starts = sources.filter((line) => lead(line).startsWith(`${author}.`) || lead(line).startsWith(`${author},`));
  const pool = starts.length ? starts : sources.filter((line) => line.toLowerCase().includes(author));
  if (!date) return pool.length === 1 ? pool[0] : null;
  const exact = pool.filter((line) => line.includes(date));
  if (exact.length) return exact[0];
  return /^\d{4}[a-z]?$/.test(date) ? pool.find((line) => line.includes(date.slice(0, 4))) || null : null;
}

const stripTags = (text) => text.replace(TAG_PATTERN, "$1");

function referencesHTML(cites, linkMap) {
  if (!cites || !cites.list.length) return "";
  const items = cites.list
    .map(({ n, raw }) => {
      const source = ID_ONLY.test(raw) ? null : matchSource(raw, cites.sources);
      const body = source ? renderInline(stripTags(source), linkMap) : renderInline(stripTags(raw), linkMap);
      const id = ID_ONLY.test(raw) ? ` data-id="${raw}"` : "";
      return `<li id="${cites.base}ref-${n}"${id}><span class="ref-num">[${n}]</span><span class="ref-body">${body}</span><a class="ref-back" href="#${cites.base}cite-${n}" aria-label="Back to where reference ${n} is first cited">↩</a></li>`;
    })
    .join("");
  return `<h2>References</h2>
<p class="references-note">The sources cited in this chapter, numbered in the order they are first cited. Decisions and evidence link to their rows in the registers.</p>
<ol class="references">${items}</ol>`;
}

function safeHref(raw, linkMap) {
  const href = raw.replace(/&amp;/g, "&").trim();
  const chapterLink = href.match(/^(?:\.\/)?([\w.-]+\.md)(#[\w-]*)?$/);
  if (chapterLink && linkMap[chapterLink[1]]) {
    const target = linkMap[chapterLink[1]];
    const frag = chapterLink[2] || "";
    // One-page document: "#ch-slug" plus "#section" becomes "#slug--section".
    return target.startsWith("#ch-") && frag ? `#${target.slice(4)}--${frag.slice(1)}` : target + frag;
  }
  if (/^(https?:\/\/|mailto:|#|\.{1,2}\/)/i.test(href) || /^[\w.-]+\.(html|md|txt)(#[\w-]*)?$/i.test(href)) {
    return escapeHtml(href);
  }
  return "#";
}

function renderInline(text, linkMap, cites) {
  const codes = [];
  const sups = [];
  let s = escapeHtml(extractCites(text, cites, sups)).replace(/`([^`]+)`/g, (_, code) => {
    codes.push(code);
    return `\u0000${codes.length - 1}\u0000`;
  });
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
    const target = safeHref(href, linkMap);
    const external = /^https?:/i.test(target);
    return `<a href="${target}"${external ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
  });
  s = s.replace(TAG_PATTERN, (_, tag) => stampHTML(tag));
  s = s.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^\w*])\*(?!\s)([^*]+?)\*(?![\w*])/g, "$1<em>$2</em>");
  s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[Number(i)]}</code>`);
  return s.replace(/\u0001(\d+)\u0001/g, (_, i) => sups[Number(i)]);
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

function renderMarkdown(source, linkMap = {}, cites = null) {
  const lines = String(source).replace(/\r\n?/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let afterTitle = false;
  const inline = (text) => renderInline(text, linkMap, cites);

  // The chapter's Sources list, for author-year citations.
  if (cites) {
    let inSources = false;
    lines.forEach((line) => {
      if (/^##\s/.test(line)) inSources = /^##\s+Sources\s*$/.test(line);
      else if (inSources && /^\s*-\s+/.test(line)) cites.sources.push(line.replace(/^\s*-\s+/, ""));
    });
  }

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
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
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
      const th = head.map((cell) => `<th>${inline(cell)}</th>`).join("");
      // A Source column's cell written as a citation, "(VSU, 30 May 2023)",
      // becomes numbered references like any other citation.
      const sourceCol = head.map((cell) => /^sources?$/i.test(cell.trim()));
      const cellHTML = (cell, k) => {
        const c = cell.trim();
        if (cites && sourceCol[k] && /^\(.+\)$/.test(c) && citeItems(c.slice(1, -1)).length) {
          return citeHTML(citeItems(c.slice(1, -1)), cites).replace('class="cite"', 'class="cite cite-cell"');
        }
        return inline(cell);
      };
      const body = rows
        .map((row) => {
          const id = REF_ROW.test(row[0] || "") ? ` id="${row[0].toLowerCase()}"` : "";
          return `<tr${id}>${head.map((_, k) => `<td>${cellHTML(row[k] || "", k)}</td>`).join("")}</tr>`;
        })
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
          ? `<div class="field-card"><span class="field-card-label">${inline(card[1].replace(/[.:]\s*$/, ""))}</span><p class="field-card-text">${inline(card[2])}</p></div>`
          : `<p class="q">${inline(text)}</p>`
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
      out.push(`<${tag}>${items.map((it) => `<li>${inline(it)}</li>`).join("")}</${tag}>`);
      afterTitle = false;
      continue;
    }

    const para = [];
    do { para.push(lines[i].trim()); i++; } while (i < lines.length && !startsBlock(lines, i));
    const text = para.join(" ");
    if (afterTitle && /^\*[^*].*[^*]\*$/.test(text)) out.push(`<p class="subtitle">${inline(text.slice(1, -1))}</p>`);
    else out.push(`<p>${inline(text)}</p>`);
    afterTitle = false;
  }
  return out.join("\n") + referencesHTML(cites, linkMap);
}

/* ── References: D-061, Q-36, C-01, E-010, P-07 ───────────────
   Every decision, open question, and correction has a row in the
   decision register (Chapter 13); every evidence item and problem
   hypothesis has one in the evidence chapter (Chapter 8).
   Mentions anywhere in a chapter link to that row, and show the row
   in a small preview on hover or keyboard focus.
   ──────────────────────────────────────────────────────────── */

const REF_ROW = /^[DQCEP]-\d{2,3}$/;
const REF_MENTION = /\b[DQCEP]-\d{2,3}\b/g;
const REF_KIND = { D: "Decision", Q: "Open question", C: "Correction", E: "Evidence", P: "Problem hypothesis" };
const HAS_TAG = new RegExp(TAG_PATTERN.source); // non-global copy: safe for .test()

function parseRefRows(source, page) {
  const rows = {};
  let section = "";
  String(source).split("\n").forEach((line) => {
    const heading = line.match(/^##\s+(.+)/);
    if (heading) section = heading[1];
    if (!/^\|/.test(line)) return;
    const cells = splitRow(line);
    if (!REF_ROW.test(cells[0])) return;
    const id = cells[0];
    const letter = id[0];
    let status = cells.slice(2).find((c) => HAS_TAG.test(c)) || "";
    if (letter === "Q") status = `Priority ${cells[2] || "not set"}`;
    if (letter === "C") status = cells[2] ? `Fixed ${cells[2]}` : "";
    if (letter === "E") status = [cells[2], cells[5] && `${cells[5]} confidence`].filter(Boolean).join(" · ");
    const kind = letter === "D" && /v0\.1/.test(section) ? "Decision carried from v0.1" : REF_KIND[letter];
    rows[id] = { id, page, kind, text: cells[1] || "", status, source: letter === "E" ? cells[3] || "" : "" };
  });
  return rows;
}

async function loadRefIndex(chapters) {
  const sources = chapters.filter((c) => c.slug === "decisions" || c.slug === "evidence");
  const parts = await Promise.all(
    sources.map(async (c) => {
      try {
        const res = await fetch(c.source);
        return res.ok ? parseRefRows(await res.text(), `${c.slug}.html`) : {};
      } catch (err) {
        return {};
      }
    })
  );
  return Object.assign({}, ...parts);
}

function linkifyRefs(root, index, here) {
  if (!root || !Object.keys(index).length) return;
  const skip = "a, code, pre, h1, h2, h3, h4, .eyebrow, .lockup";
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      REF_MENTION.lastIndex = 0;
      if (!REF_MENTION.test(node.nodeValue)) return NodeFilter.FILTER_SKIP;
      const parent = node.parentElement;
      if (!parent || parent.closest(skip)) return NodeFilter.FILTER_REJECT;
      // A row's own ID cell doesn't link to itself.
      const cell = parent.closest("td");
      if (cell && !cell.previousElementSibling && REF_ROW.test(cell.textContent.trim())) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const text = node.nodeValue;
    const frag = document.createDocumentFragment();
    let last = 0;
    text.replace(REF_MENTION, (id, at) => {
      const ref = index[id];
      if (!ref) return id;
      frag.append(text.slice(last, at));
      const a = document.createElement("a");
      a.className = "ref";
      a.href = `${here === "*" || ref.page === `${here}.html` ? "" : ref.page}#${id.toLowerCase()}`;
      a.dataset.ref = id;
      a.textContent = id;
      frag.append(a);
      last = at + id.length;
      return id;
    });
    if (!last) return;
    frag.append(text.slice(last));
    node.replaceWith(frag);
  });
}

// A reference that is a register row gets the row's kind, status, and text,
// and for evidence its source, so the list reads like a bibliography.
function fillReferences(root, index, linkMap) {
  root.querySelectorAll(".references li[data-id]").forEach((li) => {
    const ref = index[li.dataset.id];
    const body = li.querySelector(".ref-body");
    if (!ref || !body || body.querySelector(".ref-detail")) return;
    const plain = stripTags(ref.text).replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
    const short = plain.length > 220 ? `${plain.slice(0, 220).replace(/\s+\S*$/, "")}…` : plain;
    const meta = [ref.kind, stripTags(ref.status)].filter(Boolean).join(", ");
    const source = ref.source ? ` Source: ${renderInline(stripTags(ref.source), linkMap)}.` : "";
    const detail = document.createElement("span");
    detail.className = "ref-detail";
    detail.innerHTML = ` <span class="ref-meta">${escapeHtml(meta)}.</span> ${renderInline(short, linkMap)}${source}`;
    body.append(detail);
  });
}

// A number opens what it cites: the page itself for a web source, the row for
// a decision, question, or correction, and the chapter for a chapter. Only a
// source with no link, such as a v0.1 section, goes to the References list.
function pointCites(root) {
  root.querySelectorAll("a.cite-link").forEach((a) => {
    const li = document.getElementById(a.dataset.entry);
    const body = li && li.querySelector(".ref-body");
    if (!body) return;
    const id = li.dataset.id || "";
    const isRow = /^[DQCP]-/.test(id);
    const target = isRow
      ? body.querySelector("a.ref")
      : body.querySelector("a:not(.ref)[href^='http']") || body.querySelector("a:not(.ref)");
    if (!target) return;
    a.setAttribute("href", target.getAttribute("href"));
    if (/^https?:/i.test(target.getAttribute("href"))) {
      a.target = "_blank";
      a.rel = "noopener";
      let host = "";
      try { host = new URL(target.href).hostname.replace(/^www\./, ""); } catch (err) { /* keep the plain label */ }
      a.setAttribute("aria-label", `Reference ${a.dataset.cite}, opens ${host || "the source"} in a new tab`);
      a.classList.add("cite-out");
    } else {
      a.setAttribute("aria-label", `Reference ${a.dataset.cite}, opens ${isRow ? id : "the cited chapter"}`);
    }
  });
}

function refPreviewHTML(ref, linkMap) {
  const plain = ref.text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  const short = plain.length > 300 ? `${plain.slice(0, 300).replace(/\s+\S*$/, "")}…` : plain;
  const status = HAS_TAG.test(ref.status) ? renderInline(ref.status, linkMap) : escapeHtml(ref.status);
  return `<div class="ref-preview-head"><span class="ref-preview-id">${escapeHtml(ref.id)}</span><span class="ref-preview-kind">${escapeHtml(ref.kind)}</span>${
    ref.status ? `<span class="ref-preview-status">${status}</span>` : ""
  }</div><p class="ref-preview-text">${renderInline(short, linkMap)}</p>`;
}

function initRefPreviews(root, index, linkMap) {
  if (!root || (!Object.keys(index).length && !root.querySelector(".cite-link"))) return;
  const card = document.createElement("div");
  card.className = "ref-preview";
  card.id = "refPreview";
  card.setAttribute("role", "tooltip");
  card.hidden = true;
  document.body.append(card);
  let current = null;
  let timer = null;

  const place = (a) => {
    const r = a.getBoundingClientRect();
    const w = Math.min(340, window.innerWidth - 24);
    card.style.width = `${w}px`;
    const left = Math.max(12, Math.min(r.left, window.innerWidth - w - 12));
    card.style.left = `${left}px`;
    const below = r.bottom + 8;
    const h = card.offsetHeight;
    card.style.top = `${below + h > window.innerHeight - 8 && r.top - h - 8 > 8 ? r.top - h - 8 : below}px`;
  };
  const show = (a) => {
    let html = "";
    if (a.matches(".cite-link")) {
      const li = document.getElementById(a.dataset.entry);
      const body = li && li.querySelector(".ref-body");
      if (body) html = `<div class="ref-preview-head"><span class="ref-preview-id">[${escapeHtml(a.dataset.cite)}]</span><span class="ref-preview-kind">Reference</span></div><p class="ref-preview-text">${body.innerHTML}</p>`;
    } else if (index[a.dataset.ref]) {
      html = refPreviewHTML(index[a.dataset.ref], linkMap);
    }
    if (!html) return;
    current = a;
    card.innerHTML = html;
    card.hidden = false;
    place(a);
    a.setAttribute("aria-describedby", "refPreview");
  };
  const hide = () => {
    clearTimeout(timer);
    if (current) current.removeAttribute("aria-describedby");
    current = null;
    card.hidden = true;
  };

  root.addEventListener("mouseover", (e) => {
    const a = e.target.closest("a.ref, a.cite-link");
    if (!a || a === current) return;
    clearTimeout(timer);
    timer = setTimeout(() => show(a), 120);
  });
  root.addEventListener("mouseout", (e) => {
    const a = e.target.closest("a.ref, a.cite-link");
    if (a && !a.contains(e.relatedTarget)) hide();
  });
  root.addEventListener("focusin", (e) => {
    const a = e.target.closest("a.ref, a.cite-link");
    if (a) show(a);
  });
  root.addEventListener("focusout", hide);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") hide(); });
  window.addEventListener("scroll", hide, { passive: true });
}

/* ── Evidence view ────────────────────────────────────────────
   Each claim tag closes the claim before it: the text since the
   previous tag in the same paragraph, list item, or cell, plus a
   citation in brackets right after the tag, as in "… [Proposed]
   (D-065)". The evidence view highlights one kind and dims the rest.
   ──────────────────────────────────────────────────────────── */

const LENS_KINDS = ["established", "proposed", "unresolved"];

function tagKind(tag) {
  const cls = [...tag.classList].find((c) => c.startsWith("tag-"));
  return cls ? cls.slice(4) : "other";
}

function groupClaims(root) {
  root.querySelectorAll("p, li, td").forEach((block) => {
    if (!block.querySelector(".tag") || block.closest(".claims-lens, .references")) return;
    const nodes = [...block.childNodes];
    let group = [];
    const wrap = (kind) => {
      const span = document.createElement("span");
      span.className = "claim";
      span.dataset.claim = kind;
      group[0].before(span);
      group.forEach((n) => span.append(n));
      group = [];
    };
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      group.push(node);
      const tag = node.nodeType === 1 && (node.matches(".tag") ? node : node.querySelector(".tag"));
      if (!tag) continue;
      // A citation in brackets right after the tag belongs to the claim.
      // (A numbered citation sits before the tag, inside the claim already.)
      let j = i + 1;
      if (nodes[j] && nodes[j].nodeType === 1 && nodes[j].matches("sup.cite")) {
        group.push(nodes[j]);
        i = j;
      } else if (nodes[j] && nodes[j].nodeType === 3 && /^\s*\(/.test(nodes[j].nodeValue)) {
        let depth = 0;
        for (; j < nodes.length; j++) {
          const n = nodes[j];
          if (n.nodeType === 3) {
            let cut = -1;
            for (let k = 0; k < n.nodeValue.length; k++) {
              if (n.nodeValue[k] === "(") depth++;
              if (n.nodeValue[k] === ")" && --depth === 0) { cut = k + 1; break; }
            }
            if (cut > -1) {
              if (cut < n.nodeValue.length) nodes.splice(j + 1, 0, n.splitText(cut));
              group.push(n);
              j++;
              break;
            }
          }
          group.push(n);
        }
        i = j - 1;
      }
      wrap(tagKind(tag));
    }
  });
}

function readLens() {
  try { return sessionStorage.getItem("campus-lens") || ""; } catch (err) { return ""; }
}
function storeLens(value) {
  try { sessionStorage.setItem("campus-lens", value); } catch (err) { /* private mode: the view just won't carry over */ }
}

function initLens(root, after) {
  if (!root || !after) return;
  const counts = {};
  root.querySelectorAll(".claim").forEach((c) => { counts[c.dataset.claim] = (counts[c.dataset.claim] || 0) + 1; });
  const total = LENS_KINDS.reduce((n, k) => n + (counts[k] || 0), 0);
  if (total < 3) return;
  const label = { established: "Established", proposed: "Proposed", unresolved: "Unresolved" };
  const bar = document.createElement("div");
  bar.className = "claims-lens";
  bar.setAttribute("role", "group");
  bar.setAttribute("aria-label", "Evidence view: highlight claims by their tag");
  bar.innerHTML = `<span class="claims-lens-label">Evidence view</span>
    <button type="button" data-lens="" aria-pressed="true">All</button>${LENS_KINDS.filter((k) => counts[k])
      .map((k) => `<button type="button" data-lens="${k}" aria-pressed="false">${label[k]} <span class="n">${counts[k]}</span></button>`)
      .join("")}`;
  after.after(bar);
  const apply = (value) => {
    if (value && !counts[value]) value = "";
    if (value) root.dataset.lens = value;
    else delete root.dataset.lens;
    bar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lens === value)));
  };
  bar.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    apply(b.dataset.lens);
    storeLens(b.dataset.lens);
  });
  apply(readLens());
}

/* ── On this page ─────────────────────────────────────────────
   Chapters with four or more sections get a list of them beside
   the text on wide screens, marking the section being read.
   ──────────────────────────────────────────────────────────── */

function initPageToc() {
  const article = document.getElementById("chapter");
  const content = document.querySelector(".content");
  if (!article || !content || article.dataset.mode === "all") return;
  const heads = [...article.querySelectorAll("h2[id]")];
  if (heads.length < 4) return;
  const title = (h) => [...h.childNodes].filter((n) => !(n.nodeType === 1 && n.matches(".heading-anchor"))).map((n) => n.textContent).join("").trim();
  const aside = document.createElement("aside");
  aside.className = "page-toc";
  aside.setAttribute("aria-label", "On this page");
  aside.innerHTML = `<p class="page-toc-title">On this page</p><ol>${heads
    .map((h) => `<li><a href="#${h.id}">${escapeHtml(title(h))}</a></li>`)
    .join("")}</ol>`;
  content.append(aside);
  content.classList.add("has-toc");
  const links = [...aside.querySelectorAll("a")];
  let ticking = false;
  const update = () => {
    ticking = false;
    let current = -1;
    heads.forEach((h, i) => { if (h.getBoundingClientRect().top <= 120) current = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = heads.length - 1;
    links.forEach((a, i) => (i === current ? a.setAttribute("aria-current", "location") : a.removeAttribute("aria-current")));
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* ── Printing ─────────────────────────────────────────────────── */

const SITE = "docs.projectcampus.org";
const printSource = (path) =>
  `<p class="print-only print-source">From the Project CAMPUS master document, version 0.2: ${SITE}/${path}. An independent proposal, not officially affiliated with Visayas State University.</p>`;

/* ── The whole document on one page ───────────────────────────── */

async function renderAll(el, chapters) {
  const linkMap = {};
  chapters.forEach((c) => { if (c.source && c.slug) linkMap[c.source.split("/").pop()] = `#ch-${c.slug}`; });
  const refs = loadRefIndex(chapters);
  const texts = await Promise.all(
    chapters.map(async (c) => {
      try {
        const res = await fetch(c.source);
        return res.ok ? await res.text() : null;
      } catch (err) {
        return null;
      }
    })
  );

  const contents = chapters
    .map((c) => `<li class="${isSubChapter(c) ? "is-sub" : ""}"><a href="#ch-${c.slug}"><span class="n">${pad2(c.number)}</span><span class="t">${escapeHtml(c.title)}</span></a></li>`)
    .join("");
  const intro = `<header class="doc-intro">
      <div class="lockup"><span>Project CAMPUS</span><span class="x">×</span><span class="vsu">Visayas State University</span></div>
      <div class="eyebrow">The whole document</div>
      <h1>Project CAMPUS</h1>
      <p class="subtitle">A different approach to digital transformation for Visayas State University</p>
      <p class="doc-byline">Master document, version 0.2. Prepared by Leo M. Subingsubing, Visayas State University Main Campus alumnus, Pangasugan, Baybay City, Leyte.</p>
      <p class="doc-note">Not officially affiliated with Visayas State University. No VSU office has reviewed, endorsed, or adopted this proposal.</p>
      <p class="doc-howto screen-only">Every chapter on one page, to read straight through or to print. To save it as a PDF, use your browser's Print command and choose "Save as PDF".</p>
      <p class="print-only print-source">${SITE}/document.html</p>
    </header>
    <nav class="doc-contents" aria-label="Contents"><p class="doc-contents-title">Contents</p><ol>${contents}</ol></nav>`;

  const sections = chapters
    .map((c, i) => {
      const eyebrow = `<div class="eyebrow">${c.number === 0 ? "Start here" : `Chapter ${pad2(c.number)}`}${c.status === "outline" ? " · Outline" : ""}</div>`;
      const body =
        texts[i] == null
          ? `<h1>${escapeHtml(c.title)}</h1><p class="chapter-error">This chapter couldn't be loaded. It lives in <code>${escapeHtml(c.source || "")}</code> in the repository.</p>`
          : renderMarkdown(texts[i], linkMap, newCites(`${c.slug}--`));
      return `<section class="doc-chapter" id="ch-${c.slug}">${eyebrow}${body}</section>`;
    })
    .join("");
  el.innerHTML = intro + sections;

  // Section anchors carry their chapter's slug, so they stay unique on one page.
  el.querySelectorAll(".doc-chapter").forEach((section) => {
    const slug = section.id.slice(3);
    const used = new Set();
    section.querySelectorAll("h2").forEach((h) => {
      const base = `${slug}--${headingSlug(h.textContent)}`;
      let id = base;
      for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
      used.add(id);
      h.id = id;
    });
  });

  const index = await refs;
  fillReferences(el, index, linkMap);
  linkifyRefs(el, index, "*");
  pointCites(el);
  initRefPreviews(el, index, linkMap);
  groupClaims(el);
  initLens(el, el.querySelector(".doc-howto"));
  el.setAttribute("aria-busy", "false");
}

async function renderChapter(chapters) {
  const el = document.getElementById("chapter");
  if (!el) return;
  if (el.dataset.mode === "all") return renderAll(el, chapters);
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
    <div class="eyebrow">${ch.number === 0 ? "Start here" : `Chapter ${pad2(ch.number)}`}${ch.status === "outline" ? " · Outline" : ""}</div>
    ${printSource(`${ch.slug}.html`)}`;

  const refs = loadRefIndex(chapters);
  try {
    const res = await fetch(ch.source);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    el.innerHTML = header + renderMarkdown(await res.text(), linkMap, newCites());
    const index = await refs;
    fillReferences(el, index, linkMap);
    linkifyRefs(el, index, ch.slug);
    pointCites(el);
    initRefPreviews(el, index, linkMap);
    groupClaims(el);
    initLens(el, el.querySelector(".subtitle"));
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
  document.querySelectorAll(".is-target").forEach((el) => el.classList.remove("is-target"));
  if (!window.location.hash) return;
  const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
  if (!target) return;
  if (target.tagName === "TR") target.classList.add("is-target");
  target.scrollIntoView();
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

// The last entry in the chapter list: every chapter on one page.
function initDocumentLink() {
  const list = document.getElementById("spineList");
  if (!list || list.querySelector(".spine-doc")) return;
  const li = document.createElement("li");
  li.className = "spine-doc-item";
  li.innerHTML = `<a class="spine-doc" href="document.html"${ONE_PAGE() ? ' aria-current="page"' : ""}>The whole document on one page</a>`;
  list.append(li);
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
  initDocumentLink();
  renderToc(chapters);
  renderChapterNav(chapters);
  initMobileSpine();
  await renderChapter(chapters);
  initSectionAnchors();
  initPageToc();
  scrollToHash();
  window.addEventListener("hashchange", scrollToHash);
});
