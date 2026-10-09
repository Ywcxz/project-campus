# Project CAMPUS: notes for Claude

This repository is the master document for Project CAMPUS (Connecting All Members, Places, and University Services), an independent proposal for Visayas State University by one alumnus. It is the reference layer: the concept note, the documentary site, and the pitch deck are built from it (D-082). A decision counts only once it is a row in `content/13-decisions.md`.

## Before you edit

- Read the live file you are changing, and `content/README.md` for the writing rules. Never rebuild a file from memory or from an earlier conversation.
- Take the next free ID from the register at the moment you edit: D- (decisions), Q- (open questions), and C- (corrections) in `content/13-decisions.md`; E- (evidence) and P- (problem hypotheses) in `content/08-evidence.md`. IDs are never reused or renumbered.
- A decision made in a chat goes into the register. Mark it [Proposed] unless the owner has confirmed it, and list the rows that await the owner in the pull request.

## Writing rules

- Tag every significant claim [Established], [Proposed], or [Unresolved]. Never turn an assumption into a fact, and never invent details about VSU's systems, people, policies, or numbers.
- Type every source: official, community knowledge, opinion, unverified, scholarly, or external (Chapter 9).
- An evidence entry links its source, rates confidence by the rubric in Chapter 8, and gives the date the source was last checked, or a dash. Open the source yourself before you date a check.
- Keep the milestones distinct: recognition, interest, alignment, permission to prototype, pilot, collaboration, adoption.
- CAMPUS's relationship to VSU DIGITS is for VSU to decide. Never claim one.
- Every feature answers project rule 3's seven questions: what problem, who needs it, what evidence, relation to existing systems, its stage, its privacy, governance, and resource cost, and how it could be disproved.
- Use only the Markdown subset in `content/README.md`. Plain words, short sentences, no hype.

## Never

- Name stakeholders or describe private conversations (D-030). They live in a private log outside this repository.
- Name or link a community-run Facebook page or group, or link an article whose address names one (D-044).
- Open, fetch, or automate Facebook or any other Meta site, including through link checkers and archive tools (D-041).
- Use the retired expansion of the name (D-040). The render test fails if it appears outside the archive.
- Commit survey responses, contact details, or interview notes (D-086).

## Before you push

```bash
node --check js/main.js
cd tests && npm install && npm test
```

- Changed a title or subtitle in `data/chapters.json`? Run `node scripts/sync-meta.js`.
- Changed anything in `css/` or `js/`? Bump the `?v=` key on every page.
- The owner checks visuals himself. Verify with the render test, not screenshots.
- Work on a branch and open a pull request; the owner merges.
