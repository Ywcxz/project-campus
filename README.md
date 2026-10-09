# Project CAMPUS — Master Document

CAMPUS (Connecting All Members, Places, and University Services) is a proposal for a different approach to digital transformation at Visayas State University: a digital layer over the physical university that connects people, organizations, knowledge, places, services, and opportunities, designed around VSU's own culture, values, policies, geography, and people.

**Live:** https://project-campus-gilt.vercel.app · **Version:** 0.2, October 2026 · **Status:** an independent proposal, not reviewed or endorsed by any VSU office.

## Read the document

- **Start here:** [00 Overview](content/00-overview.md)
- **Part I, the vision:** [01 CAMPUS](content/01-campus.md)
- **Part II, products and directions:** [02 The Social/Academic Network](content/02-social-network.md), [02.1 Network Use Cases](content/02a-use-cases.md), [02.2 How the Network Would Work](content/02b-network-design.md), [02.3 The Network and VSU's Systems](content/02c-network-fit.md), [02.4 Proposing the Network to VSU](content/02d-network-proposal.md), [03 Hop-It](content/03-hop-it.md), [04 Campus Intranet](content/04-intranet.md), [04.1 The Campus Ring in Emergencies](content/04a-emergencies.md), [04.2 Wireless Access and Existing Systems](content/04b-campus-network.md), [05 Later Directions](content/05-later-directions.md)
- **Part III, grounding:** [06 VSU Context](content/06-vsu-context.md), [07 Problems and Evidence](content/07-evidence.md), [07.1 The Facebook Landscape Study](content/07a-facebook-study.md), [08 Information, Governance, and Privacy](content/08-governance.md), [09 Related Work](content/09-related-work.md) (first pass), [10 Risks and Stop Conditions](content/10-risks.md)
- **Part IV, records:** [11 Roadmap and Milestones](content/11-roadmap.md), [12 Decision Register and Open Questions](content/12-decisions.md)

## Sources of truth

- **This repository** is the master document. A decision counts once it is in [the decision register](content/12-decisions.md).
- **Hop-It** is governed by its Alpha PRD v1.0 and Functional Specification v1.0, which this repository summarizes but does not yet contain.
- **Stakeholder records** are kept in a private log outside this repository, by design (D-030).

## Repository layout

```
project-campus/
├── index.html            cover page
├── <slug>.html           20 identical chapter pages; each renders its Markdown file
├── content/              the master document, one Markdown file per chapter
├── data/chapters.json    chapter registry: order, titles, parts, status, source file
├── js/main.js            renders nav, contents, and chapters (small Markdown renderer)
├── css/style.css         design system
├── archive/v0.1/         the v0.1 blueprint and planning file, unchanged
├── tests/                jsdom render test
├── .github/workflows/    runs the render test on every pull request
└── vercel.json           cache headers and redirects from v0.1 URLs
```

## Editing

- **Change a chapter:** edit its file in `content/`. GitHub and the site read the same file.
- **Add a chapter:** see [content/README.md](content/README.md).
- **Record a decision:** add a row to `content/12-decisions.md`.

## Run and test locally

Pages fetch `data/chapters.json` and `content/*.md`, which browsers block over `file://`, so serve the folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. To check that every chapter renders cleanly:

```bash
node --check js/main.js
cd tests && npm install && npm test
```

GitHub runs the same checks on every pull request and every push to `main`, and shows the result on the PR as "Render test".

## Deploy

Push to GitHub and Vercel redeploys (framework preset "Other", no build command). `.vercelignore` keeps `tests/` and `.github/` out of deploys. Old v0.1 URLs, including `/instructions.txt`, redirect to their nearest v0.2 page.

## Design notes

- **Palette and type:** a field-notebook look. Newsreader for headings, IBM Plex Sans for body text, and IBM Plex Mono for numbers, stamps, and status tags. Paper and ink tones, because this is a reference document, not a product pitch.
- **VSU green and gold, used sparingly.** Green marks what the cursor is on (links, chapter rows, buttons, the scrollbar), the part labels, and the university's name in the lockup. Gold marks where you are (the current chapter), the stamps, and the pins. A green ribbon over a thin gold line runs across the top of the sidebar and the mobile bar. The values are tuned to this paper palette, not taken from an official VSU brand guide.
- **The spine nav is the table of contents.** It renders from `chapters.json` everywhere, grouped by part, so status never drifts between the cover and the sidebar. Sub-chapters (2.1, 4.2) fold under their chapter: a chevron opens them, and a chapter's own pages open it automatically. Available chapters carry no status label; only an outline or an unstarted chapter says so.
- **Scrollbars** are thin and rounded with no track, in both themes. When you change an asset in `css/` or `js/`, bump the `?v=` key on every page, because browsers cache those files for a day.
- **Claim tags are stamps.** Established is solid sea-blue, Proposed is gold, and Unresolved has a dashed border, so a reader can scan a page's evidence at a glance.
- **Field cards,** the dashed and slightly rotated boxes, hold principles and notes like pinned index cards from field research.

Not officially affiliated with Visayas State University.
