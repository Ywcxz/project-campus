# Related Work

*Existing systems in the Philippines and abroad, and how CAMPUS must differ*

This is the first pass of the review, made in October 2026 from public sources: VSU's own pages, the President's Third State of the University Address, news reports, vendor material, and research papers. [Established] It covers VSU's own systems, what VSU people already use, Philippine universities, international precedents, campus delivery, local-first infrastructure, and, lightly, campus digital twins. Nothing here replaces field research or systems discovery with VSU ICT. [Established]

> **In short.** VSU already runs or has announced much of the official side of the network: document tracking, a helpdesk, staff chat, weather advisories, and a single OneVSU entry point. Outside precedents suggest campus networks win on daily usefulness and verified membership, fail when campus-only access is the only draw, and break down when anonymity has no limits. No system found here offers the network's narrower claim: a community space governed with VSU, where offices can confirm peer answers and students, faculty, and staff talk under rules suited to each role. [Proposed]

## The test

A difference counts only if it maps to a VSU-specific need with evidence behind it. "Designed for VSU" is not a difference on its own. If an existing system already meets the need, the honest outcome is to say so, then adapt or drop that CAMPUS direction. [Established] (D-021; v0.1 §10.9)

The test starts at home. A system VSU already runs or has announced outranks any outside precedent, because existing systems keep their authority. [Established] (D-004) And because no field evidence exists yet, every difference proposed below still lacks its evidence half; the interviews and the survey are what can supply it. [Established]

## What each entry records

| Field | Question it answers |
| --- | --- |
| What it is | Product, owner, and where it runs |
| Users and scale | Who uses it and how many, with a source |
| Problem | What it was built to solve |
| Evidence of use | Adoption or outcomes, with a source |
| Difference | How CAMPUS differs, concretely |
| VSU need | Which VSU-specific need justifies that difference |
| Lesson | What to copy, avoid, or reconsider |

The tables below compress these fields into what each system is, what happened, and the lesson. Differences and VSU needs are drawn together at the end of the chapter, and where a source is silent, the entry says so. [Established]

## VSU's own systems

These come from VSU's public pages, checked on 4 October 2026. Who owns each system, what data it holds, and how much it is used cannot be seen from outside. [Established] (Q-10)

| System | What it does, from its public page | Overlaps with |
| --- | --- | --- |
| my.VSU student portal | Grades, subjects, and schedules | Learning record (later) |
| VSU E-Learning Environment (VSUEE) | A Moodle learning site with sign-in through @vsu.edu.ph Google accounts and a branded mobile app | Course and subject spaces; identity (Q-06) |
| Document Request and Tracking System | Requests for documents, with tracking | Reach the right office |
| VSU Helpdesk | Ticketing on osTicket with status checks; its help topics cover ICT accounts, library services, and concerns from the four other campuses | Reach the right office; report a campus problem |
| Output Messenger | Office chat, listed on the helpdesk as for VSU employees only | Talk across roles |
| Google Workspace and Microsoft 365 | University accounts, including Google accounts for students | Identity (Q-06) |
| Citizen's Charter 2026 | Service standards, posted on VSU's website | Reach the right office |
| Announcements, news, calendar, and the official Facebook page | Official notices and events; the news and announcements have public RSS feeds | Notices; events |
| Weather Advisory and Information System (WAIS) | Localized weather advisories for the Main Campus, launched in July 2026 | Notices |
| Directory, housing, job posting, alumni updates, facilities booking | Phone directory, student housing information, job openings, alumni relations, and guest services and facilities | Reach the right office; dorms; jobs; alumni |

Every row is drawn from VSU's own pages or the Third SOUA. [Established]

The Third SOUA, delivered on 18 September 2026, also announced plans that touch CAMPUS. [Established]

- **DIGITS.** OneVSU Mobile, the OneVSU Portal, the OneVSU Enterprise Resource Plan, and the University Executive Dashboard, aimed in part at giving students, faculty, staff, alumni, and partners one simpler way into university services and information ([Chapter 7](07-vsu-context.md)).
- **Listening sessions.** The administration intends to hold regular listening sessions with employees and students as a standing practice of governance.
- **Continuity.** A hybrid solar system now backs the data center and the administration building, and the university adopted a framework for disaster response and continuity of essential services.
- **Payments.** A LANDBANK cashless program began rolling out to students and employees on 2 September 2026.
- **Spatial data.** An inventory of roads, water, drainage, electrical systems, and GIS has been completed, and RFID entry to the campus is at the concept stage.

What this means for CAMPUS:

- "Reach the right office", as routing and tracking of service requests, would duplicate the document tracker, the helpdesk, and OneVSU's aim. The network should help people find the right office or system and hand them into it, and leave tracking to VSU's tools. [Proposed]
- The network should carry official notices, including WAIS advisories, to the channels where people will see them, rather than issue notices of its own. [Proposed]
- Staff have an internal chat app, and students have no equivalent channel in VSU's public list of services. Whether students can reach staff through anything besides visits, email, and Facebook is for field research. [Unresolved]
- Town halls and student voice should feed the planned listening sessions, not compete with them. [Proposed]
- VSU already uses @vsu.edu.ph Google sign-in for a student-facing service. Whether it would allow the same for the network is VSU's decision. [Unresolved] (Q-06)
- Whether OneVSU Mobile and the Portal will carry notices, office directories, or Q&A is unknown, and the answer decides how much of the network's first version stands. [Unresolved] (Q-18)

## What VSU people already use

- **Facebook and Messenger.** In the Digital 2026 report, 94.9% of Philippine internet users aged 16 and over had used Facebook in the past month, against a global average of 56.9%, and 90.6% had used Messenger. [Established] This is the network effect the risk register warns about ([Chapter 11](11-risks.md)).
- **Office pages on Facebook.** Universities in the region use Facebook as an official help channel: EVSU directs applicants with questions to its admission office's Facebook page. [Established] VSU keeps an official Facebook page; which VSU offices answer students on Facebook is not known. [Unresolved] The landscape study will map the official pages that exist ([Chapter 8.1](08a-facebook-study.md)). [Proposed]
- **Freedom walls and confession pages.** Philippine university freedom walls are anonymous Facebook pages run by unnamed administrators. [Established] A 2025 student study of the three most followed, at UP Diliman, National University, and Ateneo de Manila, found they open up student discourse but raise cyberbullying, misinformation, and privacy concerns, and it called for accountability within anonymous spaces. [Established] A Canadian study of 2,712 posts on one university's confessions page found that 26.1% supported students' learning, through asking for and giving academic help. [Established] The network's "Answers people can trust" therefore competes partly with anonymous pages students already use for help. [Proposed] Whether VSU has active pages of this kind, and what students use them for, is a question for the landscape study and the interviews. [Unresolved] One VSU case is on record: in April 2025, VSU's student media investigated a public Facebook group for VSU people, with over 12,500 members and anonymous posting, for online hate and a false accusation against a student ([Chapter 3](03-social-network.md)). [Established]
- **Official channels by rule.** A Philippine college designated student email and moderated Facebook groups as its official channels in June 2026, and discouraged class group chats because announcements were drowned out, rumors outran official statements, and notifications disturbed rest. [Established] This is the "Facebook, done better" alternative the network's pilot compares against (D-067). [Proposed]
- **Group chats.** In the author's experience, batches, classes, and organizations coordinate in Messenger group chats, where answers are buried within days and each batch asks again ([Chapter 3](03-social-network.md)). [Unresolved] Group chats are outside the Facebook study's reach, since private groups and chats are out of its scope (D-041), so the interviews and the survey are the only way to see them. [Established]
- **Delivery and errands.** foodpanda delivers in Tacloban and lets customers schedule orders up to seven days ahead. [Established] Errand runs, the *pabili* that Hop-It's name echoes, are an established service: Grab offers a pabili option in which a rider buys items for the customer, and Facebook groups connect people with riders who run errands. [Established] Whether any of these operate in Baybay City or onto the campus has not been checked. [Unresolved] Scheduling and errand-running alone are therefore not Hop-It's difference; pooling scheduled orders into shared runs is. [Proposed]

## Philippine universities and apps

| System | What it is | Lesson for CAMPUS |
| --- | --- | --- |
| EVSU apps portal | Eastern Visayas State University's hub for its student portal, online admission, applications for free higher education, and an alumni web portal | A neighboring state university invests in administrative portals while questions still go to Facebook pages. [Established] |
| Enderun Colleges app (2021) | The college's own app for students, faculty, staff, and alumni, with interest channels, official school channels, push notifications, and access to classes and grades | The closest Philippine precedent to the channel model; whether people kept using it is not public. [Unresolved] |
| ALON CampUs | A student community app for Philippine universities from an independent developer, with school identity verification, announcements, boards for housing, careers, and organizations, and anonymous boards | An Everytime-style app already exists in the Philippines; its reach is unknown. [Unresolved] |
| USC AppDate, De La Salle Araneta University (2018) | A student council app for announcements, built after an earlier online grievance desk fell out of use and stopped | A channel for concerns dies when people don't trust it or see no response. [Established] |
| Iskomunidad, UP Diliman | A community wiki for the UP Diliman community, hosted by its Interactive Learning Center, with organization profiles, projects, directories, and events; 3,722 articles and 6,268 registered users in October 2026 | A Philippine university can host community knowledge for years; its scale is modest beside its student body. [Established] |
| USTeP app, University of Science and Technology of Southern Philippines (2024) | A learning portal app with course management, quizzes, virtual classrooms, and offline course pages | Like VSUEE's app, a state university's app built for learning, not community. [Established] |

No Philippine state university running its own community network turned up in this pass, which does not prove that none exists. [Unresolved]

## International precedents

Workplace from Meta remains the closest precedent: a version of Facebook for internal communication inside organizations. It launched in 2016 and was reported at seven million paying users in 2021. In May 2024 Meta announced it would close Workplace to focus on AI and metaverse technologies; it was set to go read-only on 1 September 2025 and shut down fully on 1 June 2026. Coverage at the time reported that growth had slowed after the pandemic, and that concerns over Meta's data practices had made some enterprise customers hesitant. [Established] Two lessons for CAMPUS: an institution that relies on someone else's platform can lose it to that owner's priorities, and even Meta found adoption hard.

| System | What happened | Lesson for CAMPUS |
| --- | --- | --- |
| Facebook Campus (Meta, US) | A section inside Facebook open only to people with .edu addresses, launched in fall 2020 and covering 204 schools by its end; closed on 10 March 2022, with Meta saying Groups served students best. It launched as US teenagers were leaving Facebook: their use fell from 71% in 2014–15 to 32% in 2022 (Pew) | Campus-only membership does not make people switch, even when Facebook builds it. [Established] At VSU, where nearly everyone uses Facebook, the incumbent is stronger still. [Proposed] |
| Everytime (South Korea) | A company-run app with a verified board for each university, timetables, and course reviews; 7.85 million cumulative users, 2.9 million monthly users, and 377 partner campuses as of December 2025 | Daily academic use plus verified membership is the hook, and the operator is a company, not the universities. [Established] |
| Dcard (Taiwan) | Started in 2011 by university students for verified students; its forum let people post anonymously or under their university's name only; later opened sign-up to phone numbers (2021) and added real-name verification (2022) | Posting under a verified affiliation without a name is a tested middle path for Q-16. [Established] |
| Yik Yak (US) | Anonymous posts by location; racist and violent posts that colleges had little power to stop; bans on campus Wi-Fi failed because students used mobile data; shut down in 2017, relaunched in 2021, sold to Sidechat in 2023 | Unlimited anonymity fails at campus scale, and controlling the campus network does not control behavior. [Established] |
| Pizarra, University of Valladolid (Spain) | A mobile app the university built on its existing information systems as a communication channel for its community, separate from teaching; described in a 2013 paper | Universities have built their own channels before; the source gives no adoption figures. [Unresolved] |
| CampusGroups, Anthology Engage, Presence (US) | Commercial platforms for student organizations and events, with rosters, documents, elections, budgets, and event promotion | Managing organizations is a mature, paid category; CAMPUS should borrow its patterns rather than invent them. [Established] Vendors' adoption claims are unverified. [Unresolved] |
| Matrix at TU Dresden and LMU Munich (Germany) | Both universities run their own Matrix chat servers for students and staff; at TU Dresden only university members can sign in | Real-time chat can run on university servers through an open protocol, owned by the IT unit. [Established] (Q-04) |
| Thefacebook at Harvard (US, 2004) | Opened to Harvard students only; more than half of Harvard's undergraduates registered within the first month, before it spread to Columbia, Stanford, and Yale and then school by school; open to the public from September 2006 | A network wins by being dense in one community first. [Established] |
| Discord Student Hubs | Hubs a student unlocks with a school email, holding student-run servers; not affiliated with or managed by the school, with Discord's own team handling violations | Verification without the school's governance. [Established] |
| Fizz (US, 2022) | An anonymous campus app moderated by students; by its founders' account, used by almost every undergraduate at one college within months; students there reported bullying, homophobia, and misinformation not removed promptly | Demand for campus talk is strong, and anonymity without accountability brings harm. [Established] |
| community@brighton and the Landing (UK and Canada) | The University of Brighton's Elgg network grew to tens of thousands of users, drifted toward course and institutional use, lost members' sense of ownership, and declined after years of neglect; Athabasca University's Landing took its lessons and calls gardening a better metaphor than architecture | Institution-run networks last only with members' ownership and sustained care. [Established] |
| Mastodon at the University of Innsbruck and SURF (Austria and the Netherlands) | Innsbruck runs a Mastodon server on its own hardware for all employees, with university sign-in, since 2024; SURF's pilot for Dutch education institutions uses institutional logins, had over 1,250 users in 2026, and needed little moderation | Institutions can run their own social platforms, and identified membership keeps moderation light. [Established] |
| Viva Engage at the University of Manchester (UK) | Microsoft's enterprise social network, offered to staff and postgraduate researchers only | A university's enterprise social tool can leave students out entirely. [Established] |
| Stack Overflow (US) | Closes accidental duplicate questions with a link to the original and keeps differently worded ones as signposts; its users increased the activity a badge rewarded as they neared it, then returned to their usual level | Point repeated questions to existing answers; public metrics steer behavior toward the metric. [Established] (D-071, D-072) |
| Brainly (Poland; Philippine site since 2014) | A homework network where students earn points by answering and spend them to ask, with rankings and volunteer moderators | A points economy makes asking cost something. [Established] A campus network should never do that. [Proposed] (D-072) |

## Campus delivery

- **Robot delivery.** Starship pioneered campus robot delivery at George Mason University in 2019 and grew to 67 campuses before announcing in May 2026 that it was shifting its US focus away from campuses; by its own estimate, its robots found only about seven months of work a year on a campus. [Established] Others continue: Ohio State's 125 Avride robots made nearly 235,000 deliveries to campus buildings in the 2025–2026 academic year. [Established] Campus demand follows the academic calendar, which Hop-It's PRD does not yet address. [Proposed] (Q-19)
- **Order bundling.** Research using real meal-delivery data treats meal delivery as one of the hardest last-mile problems, since an order is expected within the hour, and finds potential benefits in bundling orders, scheduling courier shifts, and managing demand. [Established] (Yıldız and Savelsbergh, 2019; Reyes et al., 2018) Hop-It's scheduled windows are a form of demand management: they trade speed for orders that can share a run. [Proposed]
- **Scheduled ordering** already exists in mainstream apps (above), so Hop-It's difference is pooling scheduled campus orders into shared runs, with human dispatch and fixed campus drop points. [Proposed]

## Local-first infrastructure

[Chapter 2](02-intranet.md) sets out the campus-first design; this section reviews who has built pieces of it. This pass found no university running the whole design, which does not prove that none does. [Unresolved]

- **Local-first software.** Kleppmann and colleagues (2019) argue that cloud apps take ownership away from users and stop working when a service shuts down, and they propose software that works offline and syncs across devices, using data structures called CRDTs. [Established] It is the research basis for the device ring and the tiered sync in [Chapter 2](02-intranet.md), and it names the risk Workplace's customers met. [Proposed]
- **Kolibri.** An open-source, offline-first learning platform from Learning Equality, launched in 2017, that runs on low-cost devices from a local server. Its makers report reaching more than 13 million learners and teachers in over 220 countries and territories, including government school systems in the Philippines. [Established] It shows the local-server pattern working for learning content; it is not a community network. [Proposed]
- **University chat servers.** The Matrix deployments above show an institution-owned path for messaging. [Established]
- **VSU's continuity work.** The solar-backed data center, the fiber backbone rebuilt after Typhoon Haiyan, and the continuity framework show VSU already investing in keeping ICT running through disruption ([Chapter 2](02-intranet.md)). Whether that extends to student-facing services is for VSU ICT. [Unresolved]

| System | What it is | Lesson for CAMPUS |
| --- | --- | --- |
| SMTH BBS, Tsinghua University, China, 1995 | One of China's first campus bulletin boards, hosted by the university; made campus-only and real-name under a 2005 Ministry of Education mandate, after which network staff took control of its server | The institution that hosts a community can close it. [Established] The network's governance has to bind VSU too (Q-16). [Proposed] |
| PTT, National Taiwan University, 1995 | A non-commercial, open-source bulletin board run by a student club on the university's network, with over 1.5 million registered users by 2014 | A campus-hosted community can outgrow its campus when it is useful and run by its users. [Established] |
| USTC and CERNET, China | A university-run public mirror of open-source software; in 2013, by a student's account, a campus network that billed traffic leaving the national education network | Billing outside traffic gave campus services a practical draw. [Proposed] VSU's costs are not known (Q-24). [Unresolved] |
| sciebo, North Rhine-Westphalia, Germany, 2015 | File sync and sharing for 22 universities, run from three university data centers to comply with German data protection law | Universities can pool data centers instead of each building alone; VSU's five campuses are a smaller version of the same idea. [Proposed] |
| Afripedia, French-speaking Africa | Kiwix servers with offline Wikipedia in universities in 11 countries, some without internet access | Offline reference libraries already run in universities, including some with no internet at all. [Established] |
| Fully offline Moodle, UP Open University, 2026 | Moodle on a local server over a standalone network, keeping completion tracking and progress monitoring | The platform VSUEE runs on has been built to run fully offline by a Philippine team. [Established] |
| 5G campus testbed, Ateneo de Manila University, 2020 | A campus 5G testbed with telecom partners, trying caching and mesh networking | A private campus cellular network has been tried in the Philippines as research, with telecom partners. [Established] |
| eduroam through PREGINET | Wi-Fi sign-in shared across institutions, used by UP Diliman, UP Open University, and UP Los Baños; UP Diliman's campus network also issues its own network accounts | Identity at the door is already available to Philippine universities. [Established] Whether VSU takes part is not known (Q-27). [Unresolved] |
| DepEd Commons, 2020 | Globe and Smart let users reach DepEd's learning platform without spending mobile data | Off campus, telecom whitelisting could do for VSU services what campus Wi-Fi does on campus. [Proposed] Whether telecoms would do it for VSU is not known. [Unresolved] |
| EVSU smart campus, 2024 | A first phase budgeted at ₱1.5 billion, with an innovation hub, a fabrication laboratory, smart classrooms, command-and-control facilities, tracking cameras, and face-recognition ID checks | A neighboring state university is investing heavily in campus infrastructure. [Established] CAMPUS's direction centers on where information lives, and proposes no cameras or face recognition. [Proposed] |
| Truman State University and Purdue University, US | Truman State ranks traffic in five tiers, academic first and peer-to-peer last, and slows lower tiers; Purdue filtered heavy streaming in classrooms on weekday hours and left residence halls out | Academic priority with a fair share is established practice; Purdue also found that only 4% of one building's traffic went to academic sites. [Established] Prioritizing without blocking is the owner's direction (D-059). [Established] |
| Ifugao State University cell site, 2022 | A Smart cell site built on the campus, giving it a second carrier's signal | Weak mobile signal on a campus can be fixed by the carriers themselves. [Established] |
| 00000JAPAN, Japan | Free Wi-Fi with no sign-in that participating providers open after disasters, at public places and shelters | An emergency network open to everyone is a tested practice ([Chapter 2.1](02a-emergencies.md)). [Established] |
| Rave Guardian, University at Albany, US | A campus safety app that calls the university's police directly on campus and 911 off campus, and shares location only during an emergency call or a safety timer | An emergency report needs a staffed desk behind it, and a place shared only at the moment of need. [Established] (E-048) VSU's version stays research only ([Chapter 2.1](02a-emergencies.md)). [Proposed] |
| INASP bandwidth study, 2003 | Case studies of universities in Ethiopia, Tanzania, Uganda, Malawi, Sri Lanka, and South Africa | Measure how bandwidth is used before buying more or building around it. [Established] |
| Proxy cache thesis, UP Los Baños, 1998 | A master's thesis on the performance of a proxy cache hierarchy on a small network | Philippine universities studied campus caching while it was still possible; the full text is not online. [Established] |
| Named Data Networking, US universities | A network design in which routers cache data by name, so repeated requests are answered nearby | The general form of the caching idea remains a research design, not something VSU could deploy today. [Established] |

What CAMPUS adds is a combination, not a component: a campus-first rule for VSU-made data, rings that each survive the failure of those outside them, source labels that travel into caches and the library, and a design shaped by VSU's typhoon history, its resident students, and a network that already joins five campuses. [Proposed] Each of those differences still needs its evidence half from VSU ICT and the field. [Unresolved]

## Campus digital twins

Reviewed only lightly, since the digital twin is research only ([Chapter 4](04-digital-twin.md)). [Established]

- The University of Glasgow built a digital twin of its Western Campus and three heavily used student buildings with an energy-modeling firm, feeding it building-management data, as part of a smart campus program. [Established]
- The University of Manchester turned 3D scans of its music and drama centre into a virtual induction that students complete before using its rehearsal rooms, which helped them get familiar with the space. [Established]
- In this light pass, campus twins serve estates and energy teams first, and the student-facing use is closer to a guide to places. [Proposed] VSU's completed inventory of roads, water, drainage, electrical systems, and GIS is the kind of data a twin would start from. [Established] A simple layer of places inside the network can come long before any twin. [Proposed]

## Patterns the use-case inventory borrows

[Chapter 3.1](03a-use-cases.md) borrows patterns, not products. [Established]

| Pattern | Seen in | Use in CAMPUS | Watch for |
| --- | --- | --- | --- |
| Endorsed answers | Stack Exchange, Piazza, Ed Discussion | Answers offices confirm | Offices must commit to confirming (Q-17) |
| Duplicates linked to an original | Stack Overflow | Existing answers shown before a question posts | Keep differently worded questions as signposts |
| Routing to opted-in helpers | Ling et al., 2005, on unique contributions | Questions sent to members who chose the topic | Caps and rotation, so a few helpers don't carry everything |
| Channels | Telegram, Slack, Enderun's app | Official notices and communities | Channels without owners go stale |
| Verified affiliation | Everytime, Dcard, Facebook Campus | Membership tied to VSU | Verification alone does not bring people |
| Service requests with status | 311 apps, FixMyStreet, VSU Helpdesk | Report a campus problem | Hand off to VSU's helpdesk, not a rival queue |
| Moderated question sessions | Reddit AMAs | Town halls | Fit VSU's planned listening sessions |
| Course reviews | Everytime | Not proposed | Faculty evaluation is sensitive and belongs to VSU |
| Public scores and points | Stack Overflow badges, Brainly points | Not proposed (D-072) | Metrics steer behavior, and points can put a price on asking |

## What the review changes

1. Narrow "Reach the right office" to finding the right office or system and handing off to it, and leave the routing and tracking of service requests to VSU's systems; routing questions to people who know is a different job (D-071). [Proposed]
2. Give the network a daily reason to open, as Everytime does with timetables, using VSU data only where VSU permits; Facebook Campus shows campus-only membership is not enough. [Proposed]
3. For Q-16, test posting under a verified role without a name, such as "3rd-year student, Agriculture", alongside named posting, with the limits Yik Yak lacked. [Proposed]
4. Ask what OneVSU Mobile and the Portal will cover before the pitch (Q-18). [Proposed]
5. Build the academic calendar into Hop-It's demand assumptions (Q-19). [Proposed]
6. For real-time chat, evaluate an open protocol that VSU ICT could host, such as Matrix, before building a chat server (Q-04). [Proposed]
7. For the intranet, start with measurement, keep shared caches to those run with content owners and to curated collections, and build security on identity and metadata rather than inspection (D-056, D-057, D-058). [Proposed]
8. For the network, start dense in one community, be useful to one person before being social, give members ownership of their spaces, and test the network against a well-run Facebook group with the same office commitment (D-062, D-067, D-068). [Proposed]
9. Show existing answers before a question posts, route questions to helpers who opted in, and recognize helpers without public scores or points (D-071, D-072). [Proposed]

## Status

| Area | Status, October 2026 |
| --- | --- |
| VSU's own systems | First pass from public pages; owners and data unknown (Q-10) |
| What VSU people use | Desk research done; VSU-specific use waits on field research |
| Philippine universities | First pass, with additions on 8 October 2026; other state universities in the region not yet checked |
| International platforms | Second pass, 8 October 2026, with [Chapter 3](03-social-network.md) |
| Campus delivery | First pass; delivery coverage in Baybay not yet checked |
| Local-first infrastructure | Second pass, 8 October 2026, with [Chapter 2](02-intranet.md) |
| Campus digital twins | Light pass |

## Sources

Checked on 4 October 2026, except the local-first infrastructure and network sources added on 8 October 2026. The source type follows each entry ([Chapter 9](09-governance.md)). Sources for VSU's own network are listed in [Chapter 2](02-intranet.md), and for VSU's student-facing systems in [Chapter 3.3](03c-network-fit.md).

- Visayas State University. [Third State of the University Address](https://www.vsu.edu.ph/articles/news/3045-3rd-state-of-the-university-address), 18 September 2026. Official.
- Visayas State University. [Key Officials](https://www.vsu.edu.ph/administration), [Citizen's Charter](https://www.vsu.edu.ph/citizens-charter), [Helpdesk](https://helpdesk.vsu.edu.ph/open.php), [Document Request and Tracking System](https://docrequest.vsu.edu.ph/), and [E-Learning Environment](https://elearning.vsu.edu.ph). Official.
- [Digital 2026: The Philippines](https://datareportal.com/reports/digital-2026-philippines), DataReportal, as reported by [OneNews](https://www.onenews.ph/articles/pinoys-top-facebook-youtube-users-globally). External.
- Eastern Visayas State University. [Student Portal guide](https://sites.google.com/evsu.edu.ph/ict/student-portal), [admission announcement](https://dulag.evsu.edu.ph/university-news/announcement-evsu-caa-online-admission-portal-now-open-for-2026/), and [alumni web portal](https://www.evsu.edu.ph/?p=20516). Official, from EVSU.
- [Anonymous Whispers: A Critical Discourse Analysis on Digital Gossip in Select Philippine University Freedom Walls](https://animorepository.dlsu.edu.ph/dlsushsresconproceedings/vol5/iss8/5), DLSU Senior High School Research Congress, 2025. Scholarly, student research.
- [Writings on the wall](https://theguidon.com/?p=38626), The Guidon. External, student press.
- [Information behaviour of undergraduate students using Facebook Confessions for educational purposes](https://mru.arcabc.ca/islandora/object/mru:231), Mount Royal University, 2018. Scholarly.
- [Enderun launches app](https://thepost.net.ph/news/campus/enderun-launches-app/), The Post, 5 December 2021. External.
- [ALON CampUs](https://mwm.ai/apps/alon-campus/6767788686), app store listing via a third-party index. External.
- [USC AppDate: DLSAU University Student Council Mobile Application Using K-Means Algorithm](https://www.ejournals.ph/article.php?id=17840), Lagumlalang 2(1), 2018. Scholarly.
- Facebook Campus: [TechCrunch](https://techcrunch.com/2022/03/02/facebook-is-shutting-down-its-college-student-only-social-network-campus/), [Adweek](https://www.adweek.com/media/meta-pulls-plug-on-facebook-campus/). External.
- Workplace: [TechCrunch](https://techcrunch.com/2024/05/14/sources-meta-is-shutting-down-workplace-its-enterprise-communications-business), [Social Media Today](https://www.socialmediatoday.com/news/meta-is-shutting-down-its-workplace-enterprise-platform/716139/), [TechRadar](https://www.techradar.com/pro/meta-shuts-down-workplace-its-slack-rival-that-never-really-took-off). External.
- Everytime: [Venture Square](https://www.venturesquare.net/en/1019685/), December 2025; [App Store listing](https://apps.apple.com/vn/app/id642416310). External.
- Dcard: [Taiwan Panorama, via udn](https://paper.udn.com/udnpaper/POE0014/367679/web); [Wikipedia](https://en.wikipedia.org/wiki/Dcard). External.
- Yik Yak: [Higher Ed Dive](https://www.highereddive.com/news/anonymous-messaging-app-yik-yak-returns-after-4-year-shutdown/605120/), 2021; [Wikipedia](https://en.wikipedia.org/wiki/Yik_Yak). External.
- [Transforming the students community into a social network](https://eunis2013-journals.rtu.lv/article/view/eunis.2013.011), EUNIS 2013. Scholarly.
- [Replacing Anthology Engage](https://www.readyeducation.com/articles/replacing-anthology-engage-100-institutions-and-counting), Ready Education. External, vendor.
- Matrix: [TU Dresden documentation](https://doc.matrix.tu-dresden.de/en/first-steps); [LMU Chat](https://www.lmu.de/en/about-lmu/structure/central-university-administration/it-services-division/it-service-desk/central-it-services/lmu-chat-matrix/). External.
- [A new class of delivery bots heads to campus](https://axios.com/2026/09/02/delivery-robots-college-campus-starship-avride), Axios, 2 September 2026. External.
- Yıldız, B., and Savelsbergh, M. (2019). Provably high-quality solutions for the meal delivery routing problem. *Transportation Science*. [doi:10.1287/trsc.2018.0887](https://doi.org/10.1287/trsc.2018.0887). Scholarly.
- Reyes, D., Erera, A., Savelsbergh, M., Sahasrabudhe, S., and O'Neil, R. (2018). [The Meal Delivery Routing Problem](https://optimization-online.org/wp-content/uploads/2018/04/6571.pdf). Optimization Online preprint. Scholarly.
- Kleppmann, M., Wiggins, A., van Hardenberg, P., and McGranaghan, M. (2019). Local-first software: you own your data, in spite of the cloud. *Onward! 2019*, 154–178. [doi:10.1145/3359591.3359737](https://doi.org/10.1145/3359591.3359737). Scholarly.
- [5 Questions with Lauren Lichtman](https://the-learning-agency.com/the-cutting-ed/article/5-questions-with-lauren-lichtman/), The Learning Agency, on Kolibri. External.
- [SMTH BBS](https://en.wikipedia.org/wiki/SMTH_BBS) and [PTT Bulletin Board System](https://en.wikipedia.org/wiki/PTT_Bulletin_Board_System), Wikipedia. External.
- [USTC Open Source Software Mirror](https://mirrors.ustc.edu.cn/); [Outbound routes of USTC network](https://01.me/en/2013/07/ustc-network/), a USTC student's account, 23 July 2013. External.
- Vogl, R., Angenent, H., Rudolph, D., Thoring, A., Schild, C., Stieglitz, S., and Meske, C. (2015). [sciebo, the Campuscloud for NRW](https://www.wi.uni-muenster.de/publication/104892). *EUNIS 2015*, 15–26. Scholarly.
- [Kiwix](https://en.wikipedia.org/wiki/Kiwix), Wikipedia, on the Afripedia project. External.
- Lactuan, L. K., Pugoy, R. A., and others (2026). [Building a Fully Offline Moodle Ecosystem: Designing Local-Network Learning for Connectivity-Restricted Environments](https://indico.global/event/15189/contributions/142269/). MoodleMoot Japan 2026. Scholarly, conference abstract.
- [University Campus 5G Testbed and Use Case Deployments in the Philippines](https://archium.ateneo.edu/ecce-faculty-pubs/118/), *Broadband Access Communication Technologies XIV*, SPIE 11307, 2020. Scholarly.
- DOST-ASTI. [PREGINET connects institutions with eduroam](https://asti.dost.gov.ph/news-articles/paving-the-way-for-ph-research-dost-astis-preginet-connects-institutions-with-eduroam/), 6 February 2024. Official. UP Diliman, [DILNET services](https://dilnet.upd.edu.ph/services/). Official, from UP Diliman.
- DepEd Commons: [ABS-CBN News](https://abs-cbn.com/news/04/21/20/access-to-online-study-platform-free-of-data-charges-deped), 21 April 2020; [PLDT and Smart](https://cms.pldt.com/drupal/node/187), 27 April 2020. External.
- [Eastern Visayas university starts P1.5-B smart campus project](https://alpha.pna.gov.ph/articles/1223123), Philippine News Agency, 22 April 2024. External.
- Truman State University, [Bandwidth management](https://its.truman.edu/docs/bandwidth-management); [Academics vs. entertainment: how colleges manage competing demands on the network](https://edtechmagazine.com/higher/article/2019/08/academics-vs-entertainment-how-colleges-manage-competing-demands-network), EdTech Magazine, 6 August 2019. External.
- Ifugao State University. [Smart signal expected as IFSU houses cell site](https://ifsu.edu.ph/postview/eyJpdiI6Ikw0MWVjVUxNcnJDWDJoa2NQaUNQblE9PSIsInZhbHVlIjoidGRzaDhiMytEeWVZUFdmcWc5K3ZIUT09IiwibWFjIjoiYWI3NDIwNDc1YTg5MjJjNTNmZThjNjA2MmM5MTE0YzUwMzliZDJmZTdlNDU4OWFhMzVlNTBjZDkzYWEwNjY1ZSJ9), 16 May 2022. Official, from IFSU.
- University at Albany Police. [Rave Guardian personal safety app](https://www.albany.edu/police/rave-guardian-personal-safety-app), added 9 October 2026. External, from another university.
- Wi-Biz. [00000JAPAN guideline, version 5.0](https://www.wlan-business.org/wp-content/uploads/2024/03/00000JAPAN_Guideline_V5.0.pdf), April 2024, in Japanese. External.
- Venter, G. (2003). [Optimising Internet Bandwidth in Developing Country Higher Education](https://www.inasp.info/sites/default/files/2018-04/optimising_internet_bandwidth_report.pdf). INASP. External, research report.
- Cadapan, E. V. (1998). [Analysis of the performance of a proxy cache hierarchy on a small-scale network](https://www.ukdr.uplb.edu.ph/etd-grad/581). Master's thesis, UP Los Baños. Scholarly.
- Zhang, L., Afanasyev, A., Burke, J., Jacobson, V., claffy, kc, Crowley, P., Papadopoulos, C., Wang, L., and Zhang, B. (2014). Named data networking. *ACM SIGCOMM Computer Communication Review*, 44(3), 66–73. [doi:10.1145/2656877.2656887](https://doi.org/10.1145/2656877.2656887). Scholarly.
- [foodpanda: a Tacloban restaurant page](https://www.foodpanda.ph/restaurant/r1sx/ocho-seafood-and-grill-tacloban); [GrabExpress Pabili](https://www.grab.com/ph/blog/grabexpresscities/), Grab, 2020; [Interaksyon](https://interaksyon.philstar.com/trends-spotlights/2020/04/30/167577/how-filipinos-making-food-delivery-services-easy-amid-covid-19-quarantine/), 2020. External.
- The Amaranth, VSU's student media. "Freedom of speech? Viscan FB group slammed for fueling online hate," 10 April 2025, listed in its [investigative section](https://amaranth.vsu.edu.ph/specials/investigative). Community knowledge, student press.
- Villagers Montessori College. [Memo No. 6, s. 2026, on official communication channels](https://vmc.edu.ph/wp-content/uploads/2026/07/VMC-Memo-6-s.-26-Official-Communication-channel.pdf), 15 June 2026. External, from another college.
- UP Diliman Interactive Learning Center. [Iskomunidad](https://iskomunidad.upd.edu.ph/index.php/Main_Page). Official, from UP Diliman.
- [USTP launches university app for iOS](https://thepost.net.ph/news/campus/ustp-launches-university-app-for-ios/), The Post, 23 January 2024. External.
- [History of Facebook](https://en.wikipedia.org/wiki/History_of_Facebook), Wikipedia. External.
- Discord. [Student Hubs guidelines](https://support.discord.com/hc/articles/4407546283031), updated 16 November 2023. External, vendor.
- [Fizz takes hold of campus, users share mixed reactions](https://thedartmouth.com/article/2022/10/fizz-takes-hold-of-campus-users-share-mixed-reactions), The Dartmouth, 25 October 2022. External, student press.
- Athabasca University's Landing. [RIP community@brighton](https://landing.athabascau.ca/bookmarks/view/974991/rip-communitybrighton) and [Ownership, structures and behaviours](https://landing.athabascau.ca/blog/view/10516/ownership-structures-and-behaviours), about 2010. External, practitioner accounts.
- University of Innsbruck. [Mastodon for all university employees](https://www.uibk.ac.at/en/newsroom/2024/mastodon-for-all-university-employees/), 8 April 2024. External, from another university. [Beyond X: how universities in the Netherlands are building alternatives to big tech](https://www.blogs.unicamp.br/geict/?p=891), GEICT, Unicamp, 18 March 2026. External.
- University of Manchester IT Services. [Microsoft Viva Engage](https://www.itservices.manchester.ac.uk/ourservices/microsoft365/yammer). External, from another university.
- Pew Research Center. [Teens, Social Media and Technology 2022](https://www.pewresearch.org/internet/2022/08/10/teens-social-media-and-technology-2022/), 10 August 2022. External, research.
- Stack Overflow. [Handling duplicate questions](https://stackoverflow.blog/2009/04/29/handling-duplicate-questions/), 29 April 2009. External, vendor.
- [Poland-based social learning network rolls out PH site](https://newsbytes.ph/2014/04/21/poland-based-social-learning-network-rolls-out-ph-site/), NewsBytes.PH, 21 April 2014, on Brainly. External.
- Anderson, A., Huttenlocher, D., Kleinberg, J., and Leskovec, J. (2013). [Steering user behavior with badges](https://archives.iw3c2.org/www2013/proceedings/p95.pdf). *WWW 2013*, 95–106. Scholarly.
- Ling, K., Beenen, G., Ludford, P., and others (2005). Using social psychology to motivate contributions to online communities. *Journal of Computer-Mediated Communication*, 10(4). [doi:10.1111/j.1083-6101.2005.tb00273.x](https://doi.org/10.1111/j.1083-6101.2005.tb00273.x). First reported in Beenen, G., and others, [CSCW 2004](https://presnick.people.si.umich.edu/papers/cscw04) (C-04). Scholarly.
- Digital twins: [University of Glasgow case study](https://wates.co.uk/wp-content/uploads/2023/08/IES-University-of-Glagow-Case-Study.pdf), IES; [University of Manchester](https://matterport.com/news/university-of-manchester-taps-matterport-digital-twins-to-transform), Matterport. External, vendor.
