# The Facebook Landscape Study

*How VSU communicates on public Facebook pages and groups, observed by hand*

The network is proposed as VSU's own alternative to Facebook for campus life (D-035), yet what VSU's Facebook landscape actually looks like has never been mapped. [Established] This study maps it by observation alone: which public pages and groups exist, who runs them, how official information travels through them, and what happens to the questions people ask there. It has not started. [Established] (D-041)

## Why observe before asking

- The network's problem hypotheses about Facebook come from the author's own observations as an alumnus, which makes them community knowledge, not evidence ([Chapter 7](07-evidence.md)). [Established]
- Interviews and the survey record what people say they do. This study records what is publicly visible. Each can check the other. [Proposed]
- What it finds can sharpen interview probes, and it can supply the documentary site and the pitch with real VSU patterns, described without identifying anyone. [Proposed]

## Scope and conduct

These rules come from the owner's brief. [Established] (D-041)

- **Public channels only.** Public pages and public groups related to VSU Main Campus. Private groups, group chats, and personal profiles are out of scope, whether or not the author can see them.
- **By hand.** The author does all Facebook work manually. No scraping, scripts, browser automation, or AI tools open, browse, or collect from Facebook or any Meta site.
- **Observation only.** The author does not post, comment, react, or message in the channels studied.
- **Nothing that identifies people.** No names, profile links, post links, or screenshots are recorded. Field notes are paraphrases, with no quotes, names, or links.

Public visibility does not settle whether studying something is ethical, and verbatim quotes can be found again by searching for them, which identifies their authors; the Association of Internet Researchers' guidelines note that reworded quotes or composites can reduce that risk. [Established] Recording no quotes, names, or links applies that advice. [Established]

What counts as a VSU Main Campus channel, and how to treat channels shared with other VSU campuses, is still open. [Unresolved] (Q-20)

## Starting hypotheses

The owner set four starting hypotheses. Each tests a problem hypothesis from [Chapter 7](07-evidence.md). [Established] (D-042)

| ID | Starting hypothesis | Chapter 7 hypothesis it tests | What observation can show |
| --- | --- | --- | --- |
| H1 | Official information is fragmented across channels | Information is scattered; official notices and rumor look alike | Where official announcements first appear, where they reappear, how late, and whether they change on the way |
| H2 | Serious questions go unanswered in community groups | Students take institutional questions to unofficial groups | How many questions sampled days hold, and whether an official source, a peer, or no one answered |
| H3 | Groups drift and get replaced when their founders leave | Knowledge is lost when officers change | Which groups replace earlier ones, and which have gone inactive |
| H4 | Students prefer pseudonymous participation | Accountable identity against safety to speak (Q-16) | Behavior only; a preference needs interviews and the survey |

H4 is about why people participate as they do, which observation cannot see. Rewording it as something observable, or handing it to the interviews, is open. [Unresolved] (Q-23) Field notes that fit no hypothesis are coded NEW, so the study can find what it was not looking for. [Proposed] (D-043) Changes to the hypotheses after the first tally are entered in the decision register with a date. [Proposed]

## The instrument

The study runs on a spreadsheet workbook built for Google Sheets (v1, 7 October 2026). It starts blank, with a dropdown for every categorical field. [Established] The tabs follow the owner's brief; splitting traces into two tabs, the IDs, the working definitions, and the row checks are proposals awaiting the owner. [Proposed] (D-043)

| Tab | One row per | What it records |
| --- | --- | --- |
| Guide | working definition | Tier, run by, replaces an earlier group, appearance, consistency, question, answered by, selling post, rule-breaking post, and day tally |
| Search log | search the author ran | What was searched and what it found, so the census can be repeated |
| Census | page or group, with IDs from C001 | What exists, its tier, who runs it, and which earlier group it replaces |
| Traces | official announcement, with IDs from A001 | Where official information starts |
| Trace appearances | reappearance of a traced announcement | Delay in hours, and whether the content stayed the same, was altered, or was contradicted |
| Day tallies (optional) | sampled day in one group | Counts of questions and who answered them (official, peer, or no one), selling posts, and rule-breaking posts |
| Field notes | observation | A paraphrase of what happened, coded to H1 to H4 or NEW |
| Sampling plan | planned day in one group | Which days to tally, listed as overdue, due today, upcoming, or done |
| Summary | figure | Totals and rates, by formula only |

The workbook guards its own rules. Every data tab checks each row and explains problems in plain language, the census flags any address that looks like a post or a profile rather than a page or group, and field notes flag links, @-mentions, and quote marks. [Proposed] (D-043)

A copy filled with synthetic data matched independent calculations for every summary figure, planned date, and row check, with no formula errors. [Established] It has not yet been tested inside Google Sheets itself. [Unresolved]

## Sampling

Day tallies sample days, not posts: random days for each included group, stratified by weekday, each tallied two days after it happens so that replies have time to arrive. [Established] (D-042)

The proposed design is a constructed week. Each group gets `k` dates for every weekday inside an `N`-week window, and with `k` above 1 the window splits into `k` blocks, one date per weekday in each. The dates come from a fixed seed, so the plan can be reproduced and no date can be swapped later for a busier one. [Proposed] (D-043) With `k` = 1, each group needs seven tallies, so twenty groups need 140. [Established]

In newspaper content analysis, Riffe, Aust, and Lacy found that samples stratified by weekday estimated six months of content better than simple random or consecutive-day samples, and that one constructed week did about as well as four. [Established] Whether that efficiency carries over to Facebook groups has not been tested. [Unresolved] The start date, `N`, and `k` are open, a choice between workload and steadier rates. [Unresolved] (Q-21) So is whether long-inactive groups stay in the census, which matters for H3. [Unresolved] (Q-22)

## What it cannot show

- **What happens in private.** Private groups and chats are invisible to this study. A problem that doesn't appear in public channels may still exist. [Established]
- **Reasons.** It records what people do, not why. [Established]
- **What was removed.** Posts deleted or hidden before a tally are missed, and counts keep changing after it. [Established]
- **How many people a problem affects.** Activity in public groups is not a measure of the student body; the survey measures prevalence. This study alone cannot put a problem on a pitch slide, and the D-038 bars stay as they are. [Established]
- **A second opinion.** One person codes everything. The working definitions limit drift, and recoding a random tenth of the field notes some weeks later would show how consistent the coding is. [Proposed]

## How it could be proved wrong

Each hypothesis has a result that counts against it. [Proposed]

| ID | Counts against it |
| --- | --- |
| H1 | Official announcements come from one or two channels, and where they reappear in groups they arrive unchanged |
| H2 | Most questions on sampled days get an answer, from an official source or a peer, within the two-day window |
| H3 | Long-lived groups stay active through changes of officers and batches, and few groups replace earlier ones |
| H4 | Not testable by observation as worded (Q-23) |

The numbers that turn these into pass or fail are to be fixed before the first tally, as D-038 fixed the pitch bars before any data was read. [Proposed] What those numbers are is open. [Unresolved] (Q-23)

## Reporting

Proposed rules for what leaves the workbook. [Proposed] (D-044)

- The workbook stays private, outside this repository, as the stakeholder log does (D-030).
- This chapter gains a findings section with counts and rates by kind of channel.
- Official VSU pages may be named. Community-run pages and groups, their admins, and their members are not.
- Examples in the documentary site and the pitch are paraphrased composites, never quotes, screenshots, or links.
- Findings enter the evidence register in [Chapter 7](07-evidence.md), typed by the kind of channel observed: official or community knowledge.

## Status, October 2026

- The workbook is built and verified with synthetic data. [Established]
- No channel has been censused and no day tallied. [Established]
- Before the first tally: Q-20 to Q-23 need answers, and D-043 and D-044 need the owner's confirmation. [Proposed]

## Sources

Checked on 7 October 2026. The source type follows each entry ([Chapter 8](08-governance.md)).

- franzke, a. s., Bechmann, A., Zimmer, M., Ess, C., and the Association of Internet Researchers. [Internet Research: Ethical Guidelines 3.0](https://aoir.org/reports/ethics3.pdf), 2020. Scholarly.
- Riffe, D., Aust, C. E., and Lacy, S. R. [The Effectiveness of Random, Consecutive Day and Constructed Week Sampling in Newspaper Content Analysis](https://aejmc.us/wp-content/uploads/sites/29/2012/09/Journalism-Quarterly-1993-RiffeAustLacy-133-39.pdf), Journalism Quarterly 70(1), 133–139, 1993. Scholarly.
