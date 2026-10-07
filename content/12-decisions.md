# Decision Register and Open Questions

*What has been decided, what changed, and what is still open*

This is the only place decisions are recorded. A decision made in a chat, a call, or a draft counts only once it is entered here. [Established]

Each decision carries a status: Established, Proposed (awaiting the project owner), Deferred, Under review, or Superseded by a later decision.

## Decisions recorded in v0.2

All were recorded on 3 October 2026. "Project instructions v2" means the owner's October 2026 instructions for the project.

| ID | Decision | Status | Basis |
| --- | --- | --- | --- |
| D-021 | Scope is VSU specifically. CAMPUS is not a commercial product or a national higher-education reform. This replaces v0.1's "architecture for universities" framing and closes v0.1 questions CQ-01 (commercial viability) and CQ-02 (transferability). | [Established] | Project instructions v2 |
| D-022 | Product structure: CAMPUS is the umbrella; the social/academic network is the centerpiece proposal; Hop-It is the first product; the campus intranet is the long-term backbone, a direction rather than an ask; digital twin, high-school-to-college bridging, learning record, research discovery, and analytics or AI are later directions, not commitments. Pathways is not on the list and stays parked. | [Established] | Project instructions v2 |
| D-023 | The network keeps v0.1's limit of no unrestricted social network: it is bounded and governed by VSU values. Its additions (real-time chat, a marketplace, and the aim of being an alternative to Facebook) each need their own evidence. | [Established] | Project instructions v2; v0.1 §7.2 |
| D-024 | The network leads the first pitch, which goes to OVPSAS. | [Established] | Project instructions v2 |
| D-025 | v0.1's relational-discovery prototype is no longer the first build. Whether any of it shapes the network's first version is unresolved. Supersedes D-019 and puts D-006 and D-007 under review. | [Established] | Follows D-026 |
| D-026 | Hop-It is the first product: built independently of university systems as working proof of capability, and not automatically a CAMPUS subsystem. | [Established] | Project instructions v2; PRD §1 |
| D-027 | Hop-It's sources of truth are the Alpha PRD v1.0 (28 September 2026) and the Functional Specification v1.0 (27 September 2026). The PRD controls where they differ, and this document summarizes them without overriding them. | [Established] | Project instructions v2; PRD §1 |
| D-028 | The housing site is retired, and Hop-It replaces it as the first product. | [Established] | Owner's decision |
| D-029 | The milestone ladder has seven stages: recognition, interest, alignment, permission to prototype, pilot, collaboration, adoption. v0.1's eighth stage, commercialization, is removed. | [Established] | Project rules; follows D-021 |
| D-030 | Stakeholder names and conversations are kept in a private log outside this repository. The repository records only decisions and anonymized evidence. | [Established] | Owner's request, October 2026 |
| D-031 | Claims carry one of three tags (Established, Proposed, Unresolved), and sources are typed separately (official, community knowledge, opinion, unverified, scholarly, external). This replaces DOCUMENT-BLUEPRINT's five tags; the Hop-It PRD keeps its own five labels internally. | [Established] | Project rules 1 and 4 |
| D-032 | The master document is Markdown in `content/`, rendered by the site with no build step. v0.1 is archived unchanged, and old URLs redirect to the nearest v0.2 chapter. | [Established] | v0.2 restructure; ends the two parallel versions of v0.1; confirmed by the owner, 7 October 2026 |
| D-033 | The five design principles from July 2026 are restored ([Chapter 1](01-campus.md)), with principle 3 reworded to fit D-035. | [Established] | July 2026 vision document; confirmed by the owner, 7 October 2026 |
| D-034 | The July 2026 channel model (channels, four layers, tiered sync) is the network's starting architecture: a starting point under D-018 that Q-04 can revise. | [Established] | July 2026 vision document; confirmed by the owner, 7 October 2026 |
| D-035 | The network is VSU's own alternative to Facebook for campus life. Its policies, interface, structure, feed, privacy, moderation, speech, and communities are designed and governed for the university, with no ads, reels, stories, or feeds built for endless scrolling. Its purpose is to connect relevant information to the right people and close the gap between students and the institution. Resolves Q-03. | [Established] | Owner's decision, 3 October 2026 |
| D-036 | The pitch's problem slides use only problems with VSU field evidence. [Chapter 2.1](02a-use-cases.md) is the candidate list, and its stages are proposals. | [Established] | Project rule 7: credibility comes from evidence; confirmed by the owner, 7 October 2026 |

## Decisions recorded after v0.2

D-037 and D-038 were recorded on 4 October 2026, D-039 on 5 October 2026, and D-040 to D-053 on 7 October 2026. On 7 October 2026 the owner also confirmed D-032, D-033, D-034, D-036, D-038, D-043, D-044, and D-045, which had been recorded as proposals.

| ID | Decision | Status | Basis |
| --- | --- | --- | --- |
| D-037 | The student survey runs as the scenes prototype, an interactive page that shows one scene at a time, not as a standard form. Of the two prototypes, the scenes version is the chosen format, with fixes due before launch. The field research kit and the response script follow it. | [Established] | Owner's decision, October 2026 |
| D-038 | A problem earns a pitch slide only if it clears three bars fixed before any data is read: at least 4 of 12 student interviews describe a specific past incident; at least 30% of survey respondents report it several times or often; and most of those rate it moderate or serious. | [Established] | Field research kit; D-036; confirmed by the owner, 7 October 2026 |
| D-039 | The student survey runs on its own site, with its own repository and Vercel project, separate from the master document's site, so respondents don't read the proposal before answering. Responses go to a private Google Sheet through an Apps Script web app, and interview volunteers sign up on a separate Google Form, so contact details never meet survey answers. | [Established] | Owner's decision, 5 October 2026 |
| D-040 | CAMPUS stands for Connecting All Members, Places, and University Services. The earlier expansion, Connected Academic Matrix Platform for Universities and Schools, is retired because it implied a product for many institutions, which D-021 rules out. The v0.1 archive keeps the old name unchanged. | [Established] | Owner's decision, 7 October 2026; follows D-021 |
| D-041 | The Facebook landscape study is manual and observation-only, and it covers public VSU-related pages and groups; private groups, group chats, and personal profiles are out of scope. The author does all Facebook work by hand: no scraping, scripts, browser automation, or AI tools open, browse, or collect from Facebook or any Meta site,. No names, profile links, post links, or screenshots are recorded. See [Chapter 7.1](07a-facebook-study.md). | [Established] | Owner's decision, October 2026; project instructions v3, rule 8 |
| D-042 | The study starts from four hypotheses: H1, official information is fragmented across channels; H2, serious questions go unanswered in community groups; H3, groups drift and get replaced when their founders leave; H4, students prefer pseudonymous participation (reworded by D-048). Day tallies sample random days for each included group, stratified by weekday, and each day is tallied two days after it happens. | [Established] | Owner's brief for the study, October 2026 |
| D-043 | The study's instrument is the v1 workbook of 7 October 2026: traces split into announcements and their reappearances, IDs for channels (C001) and announcements (A001), a NEW code for notes that fit no hypothesis, working definitions, row checks, and guards against post or profile addresses, links, @-mentions, and quote marks in notes. Day tallies follow a constructed week, `k` dates per weekday for each group inside an `N`-week window, drawn from a fixed seed so the plan can be reproduced. | [Established] | Instrument workbook v1, 7 October 2026; confirmed by the owner, 7 October 2026 |
| D-044 | The study's workbook stays outside this repository, which publishes the method and counts and rates by kind of channel. Official VSU pages may be named; community-run pages and groups, their admins, and their members are not. Examples are paraphrased composites, never quotes, screenshots, or links. | [Established] | Follows D-030 and D-041; AoIR ethical guidelines 3.0; confirmed by the owner, 7 October 2026 |
| D-045 | The author's own activity in the Facebook study: while a channel is in the census, the author does not post, comment, react, or message in it. If the author took part there before the study began, the private workbook says so in one line, without describing what was posted, and the author's own posts and comments are never counted or coded. | [Established] | Follows D-041; confirmed by the owner, 7 October 2026 |
| D-046 | On the network, participation is identified by default. Some categories or sections may let members take part anonymously or under a pseudonym, so that integrity, privacy, and freedom of speech are all served. Narrows Q-16. | [Established] | Owner's direction, 7 October 2026 |
| D-047 | The Facebook study's census follows a working rule. University-wide channels, including the official university page, are in and tagged as shared with other campuses; channels tied to a Main Campus college, office, organization, dorm, place, or batch are in; community groups are in if most of what they post is about Main Campus life, judged by their posts rather than their name; channels about another campus only are out. The rule can be revised after the first search pass, with any change entered here. Resolves Q-20. | [Established] | Owner's decision, 7 October 2026 |
| D-048 | H4 is reworded so that observation can test it: where a group or page allows anonymous posts, people post anonymously for some topics far more than for others. Its answer informs which network sections get the setting D-046 allows. The v1 workbook has no field for it, so it needs an addition before the first tally. Replaces H4 in D-042 and settles that part of Q-23. | [Established] | Owner's decision, 7 October 2026 |
| D-049 | In the Facebook study, a random tenth of the field notes is recoded some weeks after first coding, to check consistency while one person codes everything. | [Established] | Owner's decision, 7 October 2026 |
| D-050 | The Facebook study's H4 topics, in order of precedence: complaints about the university, personal problems, buying and selling, offices and services, academics, campus life, and other. A post goes under the first topic that fits, and a post under a group nickname counts as anonymous. | [Established] | Owner's decision, 7 October 2026 |
| D-051 | The study's sampling settings: a six-week window (`N` = 6) with one date per weekday for each group (`k` = 1), raised to 2 only if a practice tally takes under about 15 minutes. Three practice tallies on days outside the sample come first. The window starts on the Monday after the census is settled, inside regular class weeks and clear of exam weeks and breaks. Resolves Q-21. | [Established] | Owner's decision, 7 October 2026 |
| D-052 | Groups with no posts in the 30 days before they are checked stay in the study's census, excluded as inactive, so they can still be named as predecessors for H3. They get no day tallies. Resolves Q-22. | [Established] | Owner's decision, 7 October 2026 |
| D-053 | The study's cut-offs, fixed before any data is read. H1, altered or contradicted reappearances: supports at 25% or more, counts against under 10%, judged after 20 traced announcements. H2, unanswered questions in community groups: supports at 30% or more, counts against at 15% or less, after 50 questions. H3, included community groups that replace an earlier one: supports at 25% or more, counts against under 10%, after 15 community groups. H4, the highest topic rate of anonymous posting against the overall rate: supports at 2× or more, counts against if anonymous posts are under 5% of all posts or no topic reaches 1.5×, after 30 anonymous posts. Results in between are inconclusive, and results below the minimum are not enough data. Resolves Q-23. | [Established] | Owner's decision, 7 October 2026 |

## Decisions carried from v0.1

| ID | Decision | Status in v0.2 |
| --- | --- | --- |
| D-001 | CAMPUS is independently initiated, not an adopted institutional system | [Established] |
| D-002 | CAMPUS is an architecture, not a collection of isolated features | [Established] |
| D-003 | Relationships are first-class architectural elements | [Established] |
| D-004 | Existing specialized systems keep their authority where appropriate | [Established] |
| D-005 | Identity, authorization, provenance, privacy, and security are foundational | [Established] |
| D-006 | Search and discovery are core MVP capabilities | [Under review] (D-025) |
| D-007 | Basic place representation belongs in the MVP | [Under review] (D-025) |
| D-008 | A full digital twin is outside the MVP | [Established] |
| D-009 | Curriculum continuity and learning records are a later dimension | [Deferred] |
| D-010 | Pathways is a later dimension | [Deferred] |
| D-011 | Research collaboration is a later dimension | [Deferred] |
| D-012 | Local-first is a research direction, not a fixed requirement | [Established] |
| D-013 | AI is not foundational to the MVP | [Established] |
| D-014 | Prototype data starts synthetic, public, project-created, or authorized | [Established] |
| D-015 | The prototype is both a software artifact and a research instrument | [Established] |
| D-016 | Strategic alignment is not institutional endorsement | [Established] |
| D-017 | The CAMPUS–DIGITS relationship remains unresolved | [Established] |
| D-018 | Production architecture is not fixed during conceptual R&D | [Established] |
| D-019 | The MVP stays bounded around relational discovery | [Superseded] (D-025) |
| D-020 | Future dimensions need evidence before expansion | [Established] |

v0.1's planning file, DOCUMENT-BLUEPRINT.txt, used the numbers D-001 to D-003 for three different decisions. They are carried here as DB-1 to DB-3 so the numbers never collide again.

| ID | Decision | Status in v0.2 |
| --- | --- | --- |
| DB-1 | A chapter-based living document is the public artifact | [Established] |
| DB-2 | VSU is the working example, with no implied affiliation | No-affiliation rule [Established]; "working example" [Superseded] (D-021) |
| DB-3 | The implementation format stays open | [Superseded] (D-032) |

## Open questions

| ID | Question | Priority | How it gets answered |
| --- | --- | --- | --- |
| Q-01 | Is the campus communication problem real at VSU, and for whom? | P0 | Field interviews and survey |
| Q-02 | Which use cases should the network's first version win? Chapter 2 proposes three. | P0 | Field research, then a bounded test |
| Q-04 | Real-time chat or tiered sync, and at what infrastructure cost? | P1 | Technical experiment |
| Q-05 | Who at VSU would own moderation and the community rules? | P1 | Institutional discussion |
| Q-06 | Which identity approach would VSU accept? | P1 | Systems discovery |
| Q-07 | Hop-It's pilot area, hours, vendors, and approvals | P0 before real users | Operations and campus approval |
| Q-08 | Hop-It's success and guardrail thresholds | P0 before real users | Owner's decision |
| Q-09 | Publish the Hop-It PRD and spec here, or link a Hop-It repository? | P2 | Owner's decision |
| Q-10 | What systems does VSU run, who owns them, and which data is authoritative? | P1 | Systems discovery; the public view is in [Chapter 9](09-related-work.md) |
| Q-11 | How does CAMPUS relate to DIGITS? | P1 | VSU decides |
| Q-13 | Is connectivity a real barrier for the people the intranet would serve? | P2 | Field research |
| Q-14 | Licensing and IP model for this repository and its code | P2 | Owner's decision |
| Q-15 | The related-work review: a first pass is done, other regional state universities and delivery coverage in Baybay remain, and digital twins had only a light pass | P1 | Desk research ([Chapter 9](09-related-work.md)), then field checks |
| Q-16 | Identified by default, with anonymous or pseudonymous sections (D-046): which sections, anonymous to whom (other members only, or VSU too), who may reveal an identity and through what process, and how abuse is handled there? | P1 | Field research, then a design decision |
| Q-17 | Which offices will commit to answering students on the network, and how fast? | P0 | The OVPSAS pitch |
| Q-18 | What will OneVSU Mobile and the OneVSU Portal cover for students: notices, office directories, service requests, or Q&A? | P1 | Systems discovery, before the pitch |
| Q-19 | How does the academic calendar, including breaks, change Hop-It's demand, and when should the Alpha run? | P1 | Owner's decision, with the Alpha plan |

Q-03 was resolved by D-035, Q-20 by D-047, Q-21 by D-051, Q-22 by D-052, and Q-23 by D-053. Q-12 was answered on 4 October 2026 by the Third SOUA, cited in [Chapter 6](06-vsu-context.md). Priorities follow v0.1: P0 blocks the next step, P1 shapes the design and comes early, and P2 can run in parallel. The full v0.1 register of about 65 questions is in the [archive](https://github.com/Ywcxz/project-campus/blob/main/archive/v0.1/campus-rd-blueprint-v0.1.md) (§18.4).

## Corrections

Factual errors found after publication are fixed in place and listed here. [Established]

| ID | Correction | Fixed | Source |
| --- | --- | --- | --- |
| C-01 | OVPSAS is the Office of the Vice President for Student Affairs and Services, not Academic Affairs and Services. Fixed in Chapters 0 and 2.1; Chapter 6 now spells it out. | 4 October 2026 | Third SOUA; VSU Key Officials page |
| C-02 | The e-attendance named under DIGITS tracks employees' daily attendance. Chapter 2.1 had assumed it covered event attendance. | 4 October 2026 | Third SOUA |
