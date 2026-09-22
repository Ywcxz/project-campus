# Project CAMPUS — Vision Document Site

A static site for the Project CAMPUS living vision document. Same approach
as CampusOS · VSU's housing site: plain HTML/CSS/JS, no framework, no build
step, data-driven chapter list. This one deploys to Vercel instead of
Netlify, otherwise the philosophy is identical.

## Structure

```
project-campus/
├── index.html                  ← cover page: hero, flagship panel, table of contents
├── campus-rd-blueprint.html    ← Chapter 01
├── project-definition.html     ← Chapter 02
├── executive-summary.html      ← Chapter 03
├── problem-statement.html      ← Chapter 04
├── research-questions.html     ← Chapter 05
├── css/
│   └── style.css          ← design system (paper/ink/brass/sea tokens)
├── js/
│   └── main.js              ← fetches data/chapters.json, renders the spine
│                               nav, the cover-page TOC, and the prev/next
│                               chapter footer on every page
├── data/
│   └── chapters.json      ← the chapter registry — this is the only file
│                             you need to edit to add a new chapter
├── vercel.json            ← cache headers, no config needed beyond this
└── README.md
```

## Adding a new chapter

1. Write a descriptive HTML filename such as `research-questions.html` — copy
   the existing chapter page as a starting template: same head, topbar,
   spine, and shell markup, just swap out the contents of the chapter
   article itself.
2. In `data/chapters.json`, set that chapter's `"slug"` to the filename
   (without `.html`) and `"status"` to `"available"`.
3. That's it — the spine nav, the cover-page table of contents, and the
   prev/next footer links all update automatically because they're rendered
   from that one JSON file, not hardcoded per page.

## Running locally

Same caveat as the CampusOS site: opening the HTML files directly
(`file://...`) won't work because the pages `fetch()` `data/chapters.json`,
and browsers block that over `file://`. Run a tiny local server instead:

```bash
cd project-campus
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying to Vercel

### First deploy
1. Push this folder to a GitHub repository (or drag-and-drop at
   [vercel.com/new](https://vercel.com/new) if you don't want to set up
   GitHub yet).
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Other** (it's a plain static site — no build
   command, no output directory override needed).
4. Deploy. You get a `*.vercel.app` URL immediately; a custom domain can be
   added later under **Project Settings → Domains**, free of charge.

### Every update after that
Push to GitHub → Vercel redeploys automatically. Editing `chapters.json` or
adding a new chapter page works the same way as updating `listings.json` on
the CampusOS site: edit, commit, push, done.

## Design notes

- **Palette / type:** a field-notebook aesthetic — Newsreader (serif) for
  headings and pull-quotes, IBM Plex Sans for body text, IBM Plex Mono for
  chapter numbers, stamps, and status tags. Paper/ink tones rather than a
  typical SaaS-landing look, since this is a reference document, not a
  product pitch.
- **The spine nav is the table of contents.** It's rendered from
   `chapters.json` everywhere, so "available" vs. "not started" status can
  never drift out of sync between the cover page and the sidebar.
- **Field-card callouts** (the dashed, slightly-rotated boxes) are used for
  the "Engineering Observation" / "Design Principle" numbered entries —
  styled like pinned index cards, matching the project's field-research
  origin rather than generic numbered feature markers.
- **VSU is the flagship pilot, named explicitly** — the cover page links
  directly to the live Housing Marketplace and Campus Life Map rather than
  describing them abstractly, per the "ship real tools before designing
  speculative ones" principle carried over from the CampusOS vision doc.

Not officially affiliated with Visayas State University.
