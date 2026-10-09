# Project CAMPUS — Master Document

CAMPUS (Connecting All Members, Places, and University Services) is a proposal for a different approach to digital transformation at Visayas State University: a digital layer over the physical university that connects people, organizations, knowledge, places, services, and opportunities, designed around VSU's own culture, values, policies, geography, and people.

**Live:** https://project-campus-gilt.vercel.app · **Version:** 0.2, October 2026 · **Status:** an independent proposal, not reviewed or endorsed by any VSU office.

## Read the document

- **Start here:** [00 Overview](content/00-overview.md)
- **Part I, the vision:** [01 CAMPUS](content/01-campus.md)
- **Part II, products and directions:** [02 Campus Intranet and Local-First Infrastructure](content/02-intranet.md), [02.1 The Campus Ring in Emergencies](content/02a-emergencies.md), [02.2 Wireless Access and Existing Systems](content/02b-campus-network.md), [02.3 Testing the Campus Ring](content/02c-ring-tests.md), [03 The Social/Academic Network](content/03-social-network.md), [03.1 Network Use Cases](content/03a-use-cases.md), [03.2 How the Network Would Work](content/03b-network-design.md), [03.3 The Network and VSU's Systems](content/03c-network-fit.md), [03.4 Proposing the Network to VSU](content/03d-network-proposal.md), [04 Digital Twin](content/04-digital-twin.md), [05 Products](content/05-products.md), [05.1 Hop-It](content/05a-hop-it.md), [05.2 Marketplace](content/05b-marketplace.md), [05.3 Housing](content/05c-housing.md), [06 Later Directions](content/06-later-directions.md)
- **Part III, grounding:** [07 VSU Context](content/07-vsu-context.md), [08 Problems and Evidence](content/08-evidence.md), [08.1 The Facebook Landscape Study](content/08a-facebook-study.md), [09 Information, Governance, and Privacy](content/09-governance.md), [10 Related Work](content/10-related-work.md), [11 Risks and Stop Conditions](content/11-risks.md)
- **Part IV, records:** [12 Roadmap and Milestones](content/12-roadmap.md), [13 Decision Register and Open Questions](content/13-decisions.md)

## Sources of truth

- **This repository** is the master document. A decision counts once it is in [the decision register](content/13-decisions.md).
- **What people read** (the concept note, the documentary site, and the pitch deck) is built from this repository and points back to it (D-082).
- **Hop-It** is governed by its Alpha PRD v1.0 and Functional Specification v1.0, which this repository summarizes but does not yet contain.
- **Stakeholder records** are kept in a private log outside this repository, by design (D-030).

## Repository layout

```
project-campus/
├── index.html            cover page
├── <slug>.html           25 chapter pages, identical except for their head metadata; each renders its Markdown file
├── document.html         every chapter on one page, for reading through or printing
├── content/              the master document, one Markdown file per chapter
├── data/chapters.json    chapter registry: order, titles, parts, status, source file
├── js/main.js            renders nav, contents, and chapters (small Markdown renderer)
├── css/style.css         design system
├── img/                  icon and link-preview card
├── favicon.ico           the icon, for browsers that ask for it by name
├── scripts/sync-meta.js  writes each page's title, description, and preview tags
├── scripts/archive-sources.js  lists cited pages and whether the Wayback Machine holds a copy
├── scripts/hooks/        the name guard as a local pre-commit hook, for commits made on your own computer
├── archive/v0.1/         the v0.1 blueprint and planning file, unchanged
├── tests/                jsdom render test
├── .github/workflows/    the render test and the name guard on every pull request; a weekly link check
├── CLAUDE.md             working rules for Claude sessions in this repository
└── vercel.json           cache headers and redirects from v0.1 URLs
```

## Editing

- **Change a chapter:** edit its file in `content/`. GitHub and the site read the same file.
- **Add a chapter:** see [content/README.md](content/README.md).
- **Change a title or subtitle:** edit `data/chapters.json`, then run `node scripts/sync-meta.js` so link previews match. The render test fails until you do.
- **Record a decision:** add a row to `content/13-decisions.md`.
- **Add evidence:** add a row to the evidence register in `content/08-evidence.md`, with its source linked, a confidence rating, and the date you checked it. The render test enforces the format.
- **Name guard** (D-030). On GitHub, open Settings > Secrets and variables > Actions, choose New repository secret, name it `PRIVATE_NAMES`, and enter the names, one per line. From then on, every pull request and every push to `main` fails the "Name guard" check if a line it adds contains one of them. The check names the file and line, never the name. Full names or surnames work best, since a common first name can also appear in a citation. If you commit from your own computer, the same check can run before each commit: `git config core.hooksPath scripts/hooks`, with the names in `~/.config/project-campus/private-names.txt`.

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

GitHub runs the same checks on every pull request and every push to `main`, and shows the result on the PR as "Render test". A separate "Link check" runs every Monday, and on demand from the Actions tab, and fails when a cited page stops answering; it never requests Facebook or any other Meta site (D-041). To see which cited pages have a copy in the Wayback Machine, with save links for the rest, run `node scripts/archive-sources.js --missing`.

## Deploy

Push to GitHub and Vercel redeploys (framework preset "Other", no build command). `.vercelignore` keeps `tests/`, `scripts/`, `.github/`, and `CLAUDE.md` out of deploys. Old v0.1 URLs, including `/instructions.txt`, redirect to their nearest v0.2 page.

## Design notes

- **Palette and type:** a field-notebook look. Newsreader for headings, IBM Plex Sans for body text, and IBM Plex Mono for numbers, stamps, and status tags. Paper and ink tones, because this is a reference document, not a product pitch.
- **VSU green and gold, used sparingly.** Green marks what the cursor is on (links, chapter rows, buttons, the scrollbar), the part labels, and the university's name in the lockup. Gold marks where you are (the current chapter), the stamps, and the pins. Soft light comes in from the page's corners, gold from the top right and green from the bottom left, and the sidebar has a green wash at its top. The theme toggle is a gold sun by day and a green crescent by night. The values are tuned to this paper palette, not taken from an official VSU brand guide.
- **The spine nav is the table of contents.** It renders from `chapters.json` everywhere, grouped by part, so status never drifts between the cover and the sidebar. Sub-chapters (2.1, 3.4, 5.3) fold under their chapter: a chevron opens them, and a chapter's own pages open it automatically. Available chapters carry no status label; only an outline or an unstarted chapter says so.
- **Scrollbars** are thin and rounded with no track, in both themes. When you change an asset in `css/` or `js/`, bump the `?v=` key on every page, because browsers cache those files for a day.
- **On this page.** On wide screens, chapters with four or more sections list them beside the text and mark the one being read.
- **Evidence view.** Under each chapter's subtitle, a switch highlights the Established, Proposed, or Unresolved claims, with a count of each, and dims everything else. A claim is the text a tag closes, plus any citation in brackets right after it. The choice carries from page to page in the same tab.
- **Printing.** Printing any page, or saving it as a PDF, gives a plain light copy: no sidebar or glows, chapters on new pages, outside web addresses written out, and a line naming the source and saying the proposal is independent. `document.html` puts every chapter on one page for printing the whole document at once; the cover and the sidebar link to it.
- **References preview.** Every D-, Q-, C-, E-, and P- number in a chapter links to its row in the decision register or the evidence chapter, and shows that row on hover or keyboard focus; evidence rows show their confidence too. The row you land on is highlighted.
- **Link previews.** Each page carries its own title and description for Messenger, Facebook, and search engines, with one shared card image (`img/og-card.png`). If an old preview sticks after a change, Facebook's Sharing Debugger refreshes it.
- **Claim tags are stamps.** Established is solid sea-blue, Proposed is gold, and Unresolved has a dashed border, so a reader can scan a page's evidence at a glance.
- **Field cards,** the dashed and slightly rotated boxes, hold principles and notes like pinned index cards from field research.

Not officially affiliated with Visayas State University.
