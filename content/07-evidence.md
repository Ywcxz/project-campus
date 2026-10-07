# Problems and Evidence

*What CAMPUS claims, what it has shown, and how it will find out*

CAMPUS has not yet shown, with VSU evidence, that the problems it addresses exist at VSU. Every problem below is a hypothesis to test, and a negative answer is a valid result. [Established]

## Problem hypotheses

| Hypothesis | Bears on | Status |
| --- | --- | --- |
| Information people need is scattered across offices, websites, documents, group chats, and word of mouth | Network | [Unresolved] |
| Reaching the right office or person takes several visits before a conversation even starts | Network | [Unresolved] |
| Students take institutional questions to unofficial Facebook groups, where peers answer and a wrong answer carries no consequence | Network | [Unresolved] |
| There is no easy place for students, faculty, and staff to interact across roles | Network | [Unresolved] |
| It is hard to find the person, group, place, or opportunity behind a need | Network; later directions | [Unresolved] |
| Official notices and rumor look alike where campus conversation happens | Network | [Unresolved] |
| Finding something doesn't tell people what to do next | Network | [Unresolved] |
| Knowledge is lost when students graduate or organization officers change | Network; learning record | [Unresolved] |
| Places and their services aren't connected to information about them | Later directions | [Unresolved] |
| Individual food runs duplicate effort across scattered campus demand | Hop-It | [Unresolved] |
| Some students can't rely on mobile data for campus services | Intranet | [Unresolved] |

Several of these, especially the network rows, come from the author's own observations as an alumnus. That makes them community knowledge: the right questions to test first, not evidence. [Established] The network's wider list of 29 candidate problems is in [Chapter 2.1](02a-use-cases.md).

CAMPUS does not claim that VSU's systems are inadequate, that every group feels these problems equally, or that technology alone would solve them. [Established]

## Evidence on hand

- The author's own experience and observations as a VSU alumnus. This is community knowledge: useful for asking questions, not proof. [Established]
- Scholarly work on last-mile delivery, which shaped Hop-It's design ([Chapter 3](03-hop-it.md)). [Established]
- A field research plan covering student interviews, a survey, problem synthesis, and prototype scoping, with an interview guide and a survey draft. It has not been run, and it is not yet in this repository. [Established] The student survey will run as an interactive page, the scenes prototype. [Established] (D-037)
- A study of VSU-related Facebook pages and groups: a manual, observation-only census and sampled tallies of public pages and groups, recording no names, links, or screenshots. [Established] (D-041) Its instrument is built, and findings will enter this chapter only as anonymized evidence (D-030). [Established] Its starting hypotheses are that official information is fragmented across channels, that serious questions go unanswered in community groups, that groups drift and get replaced when their founders leave, and that students prefer to take part under pseudonyms. [Unresolved]
- No interviews, surveys, or usage data have been gathered for VSU yet. [Established] Public institutional sources, including the Third SOUA and VSU's service pages, are cited in [Chapter 6](06-vsu-context.md) and [Chapter 9](09-related-work.md). [Established]

## How CAMPUS will find out

The work runs in five streams: problem and user research, institutional systems discovery, technical feasibility, governance and privacy, and research into later directions once they pass a gate. Methods include interviews, observation, surveys, comparative tasks (the current way against a prototype), technical experiments, and Hop-It's Alpha metrics. [Proposed] (v0.1 §11)

Each product passes these gates in order, and any gate can end in proceed, narrow, redefine, or stop. [Proposed] (adapted from v0.1 §11)

1. **Problem.** Is the problem real and meaningful at VSU?
2. **Value.** Does the product do the job better than what people use now?
3. **Feasibility.** Can it be built and run within acceptable complexity?
4. **Institutional fit.** Can it coexist with VSU's systems and governance?
5. **User value in a pilot.** Do real users keep using it for real tasks?
6. **Expansion.** Is there evidence from users, technology, the institution, and governance all at once?

## Evidence register

Every claim that matters gets an entry: the claim, the evidence type, the source and its date, confidence, the decision it affects, and any contradicting evidence. Observations are recorded apart from interpretations, and evidence must be able to change a decision, not just decorate one. [Established] (v0.1 §18.10)

| ID | Claim or finding | Type | Source | Affects |
| --- | --- | --- | --- | --- |
| E-001 | Delivery time windows trade route efficiency against customer service | Scholarly | Agatz et al., 2011 | Hop-It's windows |
| E-002 | Urban delivery demand is growing, and efficiency interventions need evaluating | Scholarly | Savelsbergh and Van Woensel, 2016 | Hop-It's design |
| E-003 | DIGITS is a proposed 2027–2029 roadmap, and OneVSU aims to give students and others one simpler way into university services and information | Official | Third SOUA, 18 September 2026 | The network's first version; Q-11, Q-18 |
| E-004 | VSU runs a document request and tracking system and an osTicket helpdesk with ticket status | Official | VSU service pages, 4 October 2026 | Reach the right office |
| E-005 | VSU's e-learning site offers sign-in with @vsu.edu.ph Google accounts | Official | VSUEE login page, 4 October 2026 | Q-06 |
| E-006 | Meta closed Facebook Campus, a .edu-only section covering 204 schools, in March 2022, saying Groups served students best | External | TechCrunch; Adweek | Network adoption risk |
| E-007 | Yik Yak's anonymity carried racist and violent posts that colleges had little power to stop | External | Higher Ed Dive, 2021 | Q-16 |
| E-008 | Campus delivery robots found only about seven months of work a year, by Starship's estimate | External | Axios, 2 September 2026 | Hop-It demand; Q-19 |

Field evidence will be added as it is gathered. The v0.1 research-question bank, about 65 questions, is in the [archive](https://github.com/Ywcxz/project-campus/blob/main/archive/v0.1/campus-rd-blueprint-v0.1.md) (§5 and §18.4); many of those questions were written for the retired v0.1 prototype.
