# Writing chapters

Every chapter of the master document is a Markdown file in this folder. GitHub shows it as written, and the site renders the same file, so there is only one version of the text.

## Change, add, or decide

- **Change a chapter:** edit its file here. Nothing else needs to change.
- **Add a chapter:** write `NN-slug.md` here, starting with `# Title` (it must match the title in `data/chapters.json`) and an italic subtitle line. Copy any chapter page, for example `hop-it.html`, to `slug.html` without editing it. Add an entry to `data/chapters.json`, then run `node scripts/sync-meta.js` to give the new page its own title and link preview.
- **Record a decision:** add a row to `13-decisions.md`. A decision made anywhere else does not count until it is there. Writing its ID, such as D-081, anywhere in a chapter links to that row automatically.

## IDs

Five kinds of row can be referred to anywhere by ID, and each links to its row with a preview:

- **D-** decisions, **Q-** open questions, and **C-** corrections, in `13-decisions.md`
- **E-** evidence and **P-** problem hypotheses, in `08-evidence.md`

Take the next free number when you add a row. Numbers are never reused or renumbered; a retired row stays, marked as superseded or resolved.

## Evidence entries

Each E- row has seven cells: ID, claim, type, source, what it affects, confidence, and the date it was checked. The source is a link with its date. Confidence follows the rubric in Chapter 8: High, Medium, or Low. Checked is the date someone last opened the source and confirmed it still says this, or a dash. Write the claim no stronger than the source: if the source says "planned", the claim says planned. The render test fails if any of this is missing.

## Supported Markdown

The site renders a small subset (see `js/main.js`):

- `#` title (once per chapter), `##` sections, `###` subsections
- paragraphs, kept on one line each; `**bold**`, `*italic*`, inline code, and `[links](url)`
- `- ` and `1. ` lists, one level deep
- pipe tables with a `| --- |` separator row and no `|` inside cells
- `> **Label.** text` for a pinned field card, `> text` for a pull quote
- fenced code blocks for text diagrams, and `---` for a rule

Link between chapters by file name, as in `[Hop-It](03g-hop-it.md)`. The site rewrites these to its own pages.

## Claim tags

Write `[Established]`, `[Proposed]`, or `[Unresolved]` after a claim. The site shows them as stamps. The decision register also uses `[Deferred]`, `[Superseded]`, `[Rejected]`, `[Investigating]`, and `[Under review]`.

- **Established:** supported by documents, completed work, or a recorded decision.
- **Proposed:** a design idea or hypothesis not yet validated.
- **Unresolved:** an open question or an unverified claim.

## Citations

Put a claim's source in brackets right after its tag, as in `[Established] (D-098, D-099)` or `[Proposed] (Ostrom, 1990; E-023)`. The site shows it as a superscript number, thesis style, against the claim's last word and before its stamp, and ends the chapter with a numbered References list, in the order sources are first cited. Clicking a number opens what it cites: the page itself for a web source, including an evidence row's source, the row for a decision, question, or correction, and the chapter for a chapter. Only a source with no link, such as a v0.1 section, goes to its entry in the References list. Anything that leaves the page, a number, a register ID, or a link in the References list, opens in a new tab, so the reader keeps their place. Hovering shows the full reference first. A source cited again keeps its first number. Separate sources with semicolons; a list of IDs can use commas.

- A register ID (D-, Q-, C-, E-, P-) becomes a reference to its row, with the row's text, and for evidence its source link.
- An author and year, such as `Ostrom, 1990`, becomes the matching entry in the chapter's `## Sources` list, if one entry names that author and year. Otherwise it is listed as written.
- Anything else, such as a link, a chapter link, or `v0.1 §15.4`, is listed as written.

A source written before the tag, as in `([Chapter 3](03-social-network.md)). [Established]`, stays in the text and is not numbered.

Every `[Established]` claim cites its source (D-162). An `[Unresolved]` claim cites its open question and a `[Proposed]` claim its decision where one exists; an author's own proposal needs none.

In a chapter's `## Sources` list, give each source its own entry, starting with the author and date a citation names: `- VSU. [Title](https://…), 30 May 2023. Official.` Use `n.d.` for an undated page, and the page's subject as its author when it has none, as in `- Kiwix. [Kiwix](https://…), Wikipedia, n.d. External.` A fact already in the evidence register is cited by its E- number instead. A table with a Source column can write each cell as a citation, `(VSU, 30 May 2023; E-010)`, and the site numbers it like the rest.

Source types are tracked separately from tags: official, community knowledge, opinion, unverified, scholarly, and external. See Chapter 9.

## Privacy

Never name stakeholders or cite private conversations in this repository. They belong in the private stakeholder log (decision D-030). Deleting something after a push does not remove it from git history. The "Name guard" check fails any pull request that adds a name from the owner's private list, which is kept as a GitHub secret and never in this repository; see the main README to set it up.

Community-run Facebook pages and groups are never named or linked, and neither is an article whose web address names one: link the publication's section page instead (D-044). No automated tool, including the link check and the archive script, requests Facebook or any other Meta site (D-041).

## Test before pushing

`cd tests && npm install && npm test` renders every chapter in jsdom and fails on raw Markdown, broken links, mismatched titles, table rows with the wrong number of cells, evidence entries missing a link, rating, or check date, and the retired name (D-040). GitHub also runs it on every pull request and shows the result on the PR.
