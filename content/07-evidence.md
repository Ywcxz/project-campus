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
| First-generation students lack knowledge of how the university works that peers and offices could supply | Network | [Unresolved] |
| Community spaces VSU cannot govern leave harmed students and the university with little recourse | Network | [Unresolved] |
| Places and their services aren't connected to information about them | Later directions | [Unresolved] |
| Individual food runs duplicate effort across scattered campus demand | Hop-It | [Unresolved] |
| Some students can't rely on mobile data for campus services | Intranet | [Unresolved] |
| Campus-made information travels through outside platforms and the internet link even between people on campus | Intranet | [Unresolved] |
| Campus services stop or slow when the internet link fails | Intranet | [Unresolved] |
| Students spend a meaningful share of their money on mobile data for academic needs | Intranet | [Unresolved] |
| Campus Wi-Fi serves dormitory residents far better than students in academic buildings during class hours | Intranet | [Unresolved] |
| In emergencies, people on campus lack official information, contact, and a way to tell fact from rumor | Intranet: emergencies | [Unresolved] |

Several of these, especially the network rows, come from the author's own observations as an alumnus. That makes them community knowledge: the right questions to test first, not evidence. [Established] The network's wider list of 29 candidate problems is in [Chapter 2.1](02a-use-cases.md).

CAMPUS does not claim that VSU's systems are inadequate, that every group feels these problems equally, or that technology alone would solve them. [Established]

## Evidence on hand

- The author's own experience and observations as a VSU alumnus. This is community knowledge: useful for asking questions, not proof. [Established]
- Scholarly work on last-mile delivery, which shaped Hop-It's design ([Chapter 3](03-hop-it.md)). [Established]
- A field research plan covering student interviews, a survey, problem synthesis, and prototype scoping, with an interview guide and a survey draft. It has not been run, and it is not yet in this repository. [Established] The student survey will run as an interactive page, the scenes prototype. [Established] (D-037)
- A manual, observation-only study of public VSU-related Facebook pages and groups, with its instrument built and checked on synthetic data ([Chapter 7.1](07a-facebook-study.md)). It has not started. [Established] (D-041)
- Public VSU records of its network, data center, and the 2013 typhoon outage, cited in [Chapter 4](04-intranet.md). [Established]
- Public VSU records of its accounts, student services, organizations, and notices, and an April 2025 investigation by VSU's student media of a VSU community group on Facebook, cited in [Chapter 2](02-social-network.md) and its sub-chapters. These are signals for the network's case, not field evidence of how often its problems occur. [Established]
- No interviews, surveys, observations, or usage data have been gathered for VSU yet. [Established] Public institutional sources, including the Third SOUA and VSU's service pages, are cited in [Chapter 6](06-vsu-context.md) and [Chapter 9](09-related-work.md). [Established]

## How CAMPUS will find out

The work runs in five streams: problem and user research, institutional systems discovery, technical feasibility, governance and privacy, and research into later directions once they pass a gate. Methods include interviews, observation, surveys, comparative tasks (the current way against a prototype), technical experiments, and Hop-It's Alpha metrics. [Proposed] (v0.1 §11) The first observation study, of public Facebook pages and groups, is set out in [Chapter 7.1](07a-facebook-study.md). [Established] (D-041)

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
| E-009 | Typhoon Haiyan destroyed VSU's internet leased line and about 90% of its fiber backbone in 2013; a new fiber backbone was finished in 2017 | Official | VSU Computer Center projects page | Intranet: continuity |
| E-010 | By May 2023, close to 98% of the Main Campus had VSU Wi-Fi, and 1,772 dormitory residents had free Wi-Fi with 4 Gbps set aside for them | Official | VSU news, 30 May 2023 | Intranet: who it serves |
| E-011 | About 98% of page loads on public sites in Chrome on Windows use HTTPS | External | Google, October 2025 | D-056 |
| E-012 | A shared cache for about 23,000 university clients would have answered about 43% of requests in 1999, with little added benefit beyond about 2,500 clients | Scholarly | Wolman et al., 1999 | Intranet: caching |
| E-013 | Nearly all HTTPS interception products tested made connections less secure | Scholarly | Durumeric et al., 2017 | D-057 |
| E-014 | Filipino smartphone users spend about 56% of their time on Wi-Fi, and 5% rely on mobile data alone | External | Opensignal, via Philstar, 4 February 2026 | Q-13 |
| E-015 | During Tropical Storm Agaton in April 2022, students were trapped on campus, floodwater entered dormitories and academic buildings, and nearby residents were evacuated into academic buildings | Official | VSU news, 26 April 2022 | D-060; Q-30, Q-31 |
| E-016 | Smart warned of fiber cuts and power failures in Leyte during Agaton, and set up free calls and charging at the Baybay City evacuation center | External | PLDT and Smart advisories, 10 to 13 April 2022 | Emergencies |
| E-017 | In 2016, only 4% of the traffic in one Purdue University building went to academic sites, and filtering heavy streaming in classrooms cut campus bandwidth use by about a third | External | EdTech Magazine, 6 August 2019 | D-059 |
| E-018 | The Philippines opened 5925 to 6425 MHz to Wi-Fi in 2024, at up to 250 mW indoors | External | TechPorn, on NTC Memorandum Circular No. 002-07-2024 | Access capacity |
| E-019 | Smart's no-expiry Magic Data packs cost ₱249 for 8 GB and ₱349 for 16 GB | External | NoypiGeeks, 4 March 2026 | Q-28 |
| E-020 | Of 2,604 first-year students enrolled at the Main Campus in 2026, 1,248 (47.9%) are first-generation college students, and 582 were admitted through the affirmative action pathway | Official | Third SOUA, 18 September 2026 | The network's need; [Chapter 2](02-social-network.md) |
| E-021 | VSU issued Google Workspace accounts to all 9,245 registered Main Campus students in October 2022; about 17% were active a day later | Official | VSU news, 4 October 2022 | Q-06; adoption |
| E-022 | Student accounts are named after school ID numbers, issued after the late enrollment period, and revocable on non-enrollment or graduation; Integrated High School students also receive accounts | Official | VSU news, 22 August 2023 and 4 October 2022 | Q-38, Q-39, D-069 |
| E-023 | A public Facebook group for VSU people, with over 12,500 members, anonymous posting, and administrators who were not clearly identified, was investigated by VSU's student media for online hate and a false accusation against a student; VSU's recourse was limited to tracing posters and seeking a takedown | Community knowledge, student press | The Amaranth, 10 April 2025 | Q-16; D-065 |
| E-024 | In early October 2026, VSU's website announcements feed listed 21 items from July 2021 to September 2026, mostly enrollment and exam schedules | Official | VSU announcements feed, checked 8 October 2026 | H1; notices |
| E-025 | VSU announces typhoon suspensions through radio, television, SMS, the website, and other social media, no later than 4:30 a.m. | Official | BOR Resolution No. 162, s. 2024 | Notices; D-063 |
| E-026 | WAIS is open only to VSU account holders, generates its data as JSON, and plans a mobile app with push notifications | Official | VSU news, 9 July 2026 | Q-40 |
| E-027 | VSU's list of accredited organizations for 2022–23 had 57 entries under the college structure that VSU replaced with faculties in January 2025 | Official | VSU accredited organizations page; VSU news, 16 January 2025 | D-062; H3 |
| E-028 | VSU lists its student affairs services under CHED's three groups: student welfare, student development, and institutional student programs | Official | VSU accreditation page for Area IV, 2021; CMO No. 9, s. 2013 | The OVPSAS pitch; [Chapter 2.4](02d-network-proposal.md) |
| E-029 | Engagement-based ranking amplified emotionally charged, out-group hostile political posts compared with a time-ordered feed, and users did not prefer what it chose | Scholarly | Milli et al., arXiv:2305.16941 | D-061 |
| E-030 | A time-ordered feed substantially reduced time spent on Facebook and Instagram, without significant changes in polarization over three months | Scholarly | Guess et al., 2023 | D-061; adoption |
| E-031 | Advertising brought in about 97.6% of Meta's revenue in 2025 | External, company report | Meta, January 2026 | The difference from social media |
| E-032 | The University of Brighton's community network lost its members' sense of ownership as it became more of an institutional channel, and later declined after years of neglect | External, practitioner accounts | Athabasca University's Landing, about 2010 | Risks; D-062 |
| E-033 | SURF's Mastodon pilot for Dutch education institutions needed little moderation, partly because institutional logins make users accountable | External | GEICT interview with SURF, 18 March 2026 | D-046; moderation load |
| E-034 | By its founders' account, Fizz reached almost every undergraduate at one US college within months, while students there reported bullying and misinformation that were not removed promptly | External, student press | The Dartmouth, 25 October 2022 | Adoption; Q-16 |

Field evidence will be added as it is gathered. The v0.1 research-question bank, about 65 questions, is in the [archive](https://github.com/Ywcxz/project-campus/blob/main/archive/v0.1/campus-rd-blueprint-v0.1.md) (§5 and §18.4); many of those questions were written for the retired v0.1 prototype.
