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
| D-032 | The master document is Markdown in `content/`, rendered by the site with no build step. v0.1 is archived unchanged, and old URLs redirect to the nearest v0.2 chapter. | [Proposed] | v0.2 restructure; ends the two parallel versions of v0.1 |
| D-033 | The five design principles from July 2026 are restored ([Chapter 1](01-campus.md)), with principle 3 reworded to fit D-035. | [Proposed] | July 2026 vision document |
| D-034 | The July 2026 channel model (channels, four layers, tiered sync) is the network's starting architecture: a starting point under D-018 that Q-04 can revise. | [Proposed] | July 2026 vision document |
| D-035 | The network is VSU's own alternative to Facebook for campus life. Its policies, interface, structure, feed, privacy, moderation, speech, and communities are designed and governed for the university, with no ads, reels, stories, or feeds built for endless scrolling. Its purpose is to connect relevant information to the right people and close the gap between students and the institution. Resolves Q-03. | [Established] | Owner's decision, 3 October 2026 |
| D-036 | The pitch's problem slides use only problems with VSU field evidence. [Chapter 2.1](02a-use-cases.md) is the candidate list, and its stages are proposals. | [Proposed] | Project rule 7: credibility comes from evidence |

## Decisions recorded after v0.2

D-037 and D-038 were recorded on 4 October 2026, and D-039 on 5 October 2026.

| ID | Decision | Status | Basis |
| --- | --- | --- | --- |
| D-037 | The student survey runs as the scenes prototype, an interactive page that shows one scene at a time, not as a standard form. Of the two prototypes, the scenes version is the chosen format, with fixes due before launch. The field research kit and the response script follow it. | [Established] | Owner's decision, October 2026 |
| D-038 | A problem earns a pitch slide only if it clears three bars fixed before any data is read: at least 4 of 12 student interviews describe a specific past incident; at least 30% of survey respondents report it several times or often; and most of those rate it moderate or serious. | [Proposed] | Field research kit; D-036 |
| D-039 | The student survey runs on its own site, with its own repository and Vercel project, separate from the master document's site, so respondents don't read the proposal before answering. Responses go to a private Google Sheet through an Apps Script web app, and interview volunteers sign up on a separate Google Form, so contact details never meet survey answers. | [Established] | Owner's decision, 5 October 2026 |

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
| DB-3 | The implementation format stays open | [Under review] (D-032) |

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
| Q-16 | How do accountable identity and a safe way to raise concerns coexist on the network? | P1 | Field research, then a design decision |
| Q-17 | Which offices will commit to answering students on the network, and how fast? | P0 | The OVPSAS pitch |
| Q-18 | What will OneVSU Mobile and the OneVSU Portal cover for students: notices, office directories, service requests, or Q&A? | P1 | Systems discovery, before the pitch |
| Q-19 | How does the academic calendar, including breaks, change Hop-It's demand, and when should the Alpha run? | P1 | Owner's decision, with the Alpha plan |

Q-03 was resolved by D-035, and Q-12 was answered on 4 October 2026 by the Third SOUA, cited in [Chapter 6](06-vsu-context.md). Priorities follow v0.1: P0 blocks the next step, P1 shapes the design and comes early, and P2 can run in parallel. The full v0.1 register of about 65 questions is in the [archive](https://github.com/Ywcxz/project-campus/blob/main/archive/v0.1/campus-rd-blueprint-v0.1.md) (§18.4).

## Corrections

Factual errors found after publication are fixed in place and listed here. [Established]

| ID | Correction | Fixed | Source |
| --- | --- | --- | --- |
| C-01 | OVPSAS is the Office of the Vice President for Student Affairs and Services, not Academic Affairs and Services. Fixed in Chapters 0 and 2.1; Chapter 6 now spells it out. | 4 October 2026 | Third SOUA; VSU Key Officials page |
| C-02 | The e-attendance named under DIGITS tracks employees' daily attendance. Chapter 2.1 had assumed it covered event attendance. | 4 October 2026 | Third SOUA |
