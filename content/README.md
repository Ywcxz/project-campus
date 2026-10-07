# Writing chapters

Every chapter of the master document is a Markdown file in this folder. GitHub shows it as written, and the site renders the same file, so there is only one version of the text.

## Change, add, or decide

- **Change a chapter:** edit its file here. Nothing else needs to change.
- **Add a chapter:** write `NN-slug.md` here, starting with `# Title` (it must match the title in `data/chapters.json`) and an italic subtitle line. Copy any chapter page, for example `hop-it.html`, to `slug.html` without editing it. Add an entry to `data/chapters.json`.
- **Record a decision:** add a row to `12-decisions.md`. A decision made anywhere else does not count until it is there.

## Supported Markdown

The site renders a small subset (see `js/main.js`):

- `#` title (once per chapter), `##` sections, `###` subsections
- paragraphs, kept on one line each; `**bold**`, `*italic*`, inline code, and `[links](url)`
- `- ` and `1. ` lists, one level deep
- pipe tables with a `| --- |` separator row and no `|` inside cells
- `> **Label.** text` for a pinned field card, `> text` for a pull quote
- fenced code blocks for text diagrams, and `---` for a rule

Link between chapters by file name, as in `[Hop-It](03-hop-it.md)`. The site rewrites these to its own pages.

## Claim tags

Write `[Established]`, `[Proposed]`, or `[Unresolved]` after a claim. The site shows them as stamps. The decision register also uses `[Deferred]`, `[Superseded]`, `[Rejected]`, `[Investigating]`, and `[Under review]`.

- **Established:** supported by documents, completed work, or a recorded decision.
- **Proposed:** a design idea or hypothesis not yet validated.
- **Unresolved:** an open question or an unverified claim.

Source types are tracked separately from tags: official, community knowledge, opinion, unverified, scholarly, and external. See Chapter 8.

## Privacy

Never name stakeholders or cite private conversations in this repository. They belong in the private stakeholder log (decision D-030). Deleting something after a push does not remove it from git history.

## Test before pushing

`cd tests && npm install && npm test` renders every chapter in jsdom and fails on raw Markdown, broken links, mismatched titles, or table rows with the wrong number of cells. GitHub also runs it on every pull request and shows the result on the PR.
