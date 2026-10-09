#!/usr/bin/env node
// Lists every outside page the master document cites and whether the
// Internet Archive's Wayback Machine holds a copy, so a source that moves or
// disappears can still be checked. For pages with no copy it prints a save
// link to open in a browser. Meta sites are skipped: no automated tool
// requests them (project rule 8; D-041).
//
//   node scripts/archive-sources.js             every cited page
//   node scripts/archive-sources.js --missing   only pages with no copy
//   add --markdown for a list with links, as the weekly link check prints
//   in its run summary on GitHub
//
// It only reads from the Wayback Machine's availability service, one page a
// second. Needs Node 18 or later.
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const META = /(^|\.)(facebook\.com|fb\.com|fb\.me|fb\.watch|instagram\.com|threads\.net|threads\.com|whatsapp\.com|messenger\.com|meta\.com|atmeta\.com)$|^m\.me$/i;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function citedPages() {
  const files = [
    "README.md",
    ...fs.readdirSync(path.join(ROOT, "content")).filter((f) => f.endsWith(".md")).map((f) => `content/${f}`),
  ];
  const pages = new Set();
  for (const f of files) {
    const text = fs.readFileSync(path.join(ROOT, f), "utf8");
    for (const m of text.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) pages.add(m[1]);
  }
  return [...pages].filter((u) => {
    let host = "";
    try { host = new URL(u).hostname; } catch { return false; }
    if (META.test(host)) return false;
    return !(host === "github.com" && /\/ywcxz\/project-campus\b/i.test(u)); // this repository
  }).sort();
}

async function closestCopy(url) {
  const res = await fetch(`https://archive.org/wayback/available?url=${encodeURIComponent(url)}`);
  if (!res.ok) throw new Error(`availability service answered HTTP ${res.status}`);
  const data = await res.json();
  const c = data && data.archived_snapshots && data.archived_snapshots.closest;
  return c && c.available ? { when: c.timestamp, link: c.url } : null;
}

const asDate = (ts) => `${ts.slice(0, 4)}-${ts.slice(4, 6)}-${ts.slice(6, 8)}`;

(async () => {
  const onlyMissing = process.argv.includes("--missing");
  const md = process.argv.includes("--markdown");
  const pages = citedPages();
  let missing = 0;
  let failed = 0;
  if (md) console.log(`## Cited pages${onlyMissing ? " with no Wayback Machine copy" : ""}\n`);
  for (const [i, url] of pages.entries()) {
    if (i) await sleep(1000);
    try {
      const copy = await closestCopy(url);
      if (copy && !onlyMissing) {
        console.log(md ? `- ${url} — [copy of ${asDate(copy.when)}](${copy.link})` : `copy ${asDate(copy.when)}  ${url}\n                 ${copy.link}`);
      }
      if (!copy) {
        missing++;
        const save = `https://web.archive.org/save/${url}`;
        console.log(md ? `- ${url} — [save a copy](${save})` : `no copy          ${url}\n  save it:        ${save}`);
      }
    } catch (err) {
      failed++;
      console.log(md ? `- ${url} — not checked (${err.message})` : `not checked      ${url}  (${err.message})`);
    }
  }
  console.log(`\n${pages.length} cited pages, Meta sites skipped. ${missing} have no copy${failed ? `; ${failed} could not be checked` : ""}.`);
})();
