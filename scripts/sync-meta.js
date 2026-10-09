// Project CAMPUS: writes each page's <head> metadata from data/chapters.json.
//
// Link previews on Messenger, Facebook, and search engines read a page's
// static HTML and never run js/main.js, so every page carries its own
// title, description, and preview tags. This script writes them between
// the <!-- meta --> markers; the render test fails if they drift.
//
// Run after adding a chapter or changing a title or subtitle:
//   node scripts/sync-meta.js
const fs = require("fs");
const path = require("path");

const SITE = "https://project-campus-gilt.vercel.app";
const ROOT = path.resolve(__dirname, "..");
const chapters = JSON.parse(fs.readFileSync(path.join(ROOT, "data/chapters.json"), "utf8"));

const COVER = {
  file: "index.html",
  title: "Project CAMPUS — Master Document",
  description:
    "A proposal for a digital layer over Visayas State University that connects people, organizations, knowledge, places, services, and opportunities. Independent and alumni-led.",
  type: "website",
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const num = (n) => String(n);

function pageMeta(ch) {
  const where = ch.number === 0 ? "The overview" : `Chapter ${num(ch.number)}`;
  return {
    file: `${ch.slug}.html`,
    title: `${ch.title} — Project CAMPUS`,
    description: `${ch.subtitle}. ${where} of Project CAMPUS, an independent proposal for Visayas State University.`,
    type: "article",
  };
}

function block(m) {
  const url = m.file === "index.html" ? `${SITE}/` : `${SITE}/${m.file}`;
  return [
    "<!-- meta: written by scripts/sync-meta.js from data/chapters.json -->",
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="${m.type}">`,
    `<meta property="og:site_name" content="Project CAMPUS">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(m.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${SITE}/img/og-card.png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Project CAMPUS: a different approach to digital transformation for Visayas State University. An independent proposal.">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<link rel="icon" href="img/favicon.svg" type="image/svg+xml">`,
    `<link rel="icon" href="favicon.ico" sizes="32x32">`,
    `<link rel="apple-touch-icon" href="img/apple-touch-icon.png">`,
    `<meta name="theme-color" content="#EAEAE0" media="(prefers-color-scheme: light)">`,
    `<meta name="theme-color" content="#1D251F" media="(prefers-color-scheme: dark)">`,
    "<!-- /meta -->",
  ].join("\n");
}

const DOCUMENT = {
  file: "document.html",
  title: "The Whole Document — Project CAMPUS",
  description:
    "Every chapter of the Project CAMPUS master document on one page, to read straight through, print, or save as a PDF. An independent proposal for Visayas State University.",
  type: "article",
};

const pages = [COVER, DOCUMENT, ...chapters.map(pageMeta)];
const MARKED = /<!-- meta:[\s\S]*?<!-- \/meta -->/;
const LEGACY = /<meta name="description"[^>]*>\n<title>[^<]*<\/title>/;

if (require.main === module) {
  let changed = 0;
  for (const m of pages) {
    const file = path.join(ROOT, m.file);
    const html = fs.readFileSync(file, "utf8");
    const pattern = MARKED.test(html) ? MARKED : LEGACY;
    if (!pattern.test(html)) throw new Error(`${m.file}: no metadata block to replace`);
    const next = html.replace(pattern, block(m));
    if (next !== html) { fs.writeFileSync(file, next); changed++; }
  }
  console.log(`${changed} of ${pages.length} pages updated`);
}

module.exports = { pages, block, MARKED };
