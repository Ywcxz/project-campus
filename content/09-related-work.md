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
| Announcements, news, calendar, and the official Facebook page | Official notices and events | Notices; events |
| Weather Advisory and Information System (WAIS) | Localized weather advisories for the Main Campus, launched in July 2026 | Notices |
| Directory, housing, job posting, alumni updates, facilities booking | Phone directory, student housing information, job openings, alumni relations, and guest services and facilities | Reach the right office; dorms; jobs; alumni |

Every row is drawn from VSU's own pages or the Third SOUA. [Established]

The Third SOUA, delivered on 18 September 2026, also announced plans that touch CAMPUS. [Established]

- **DIGITS.** OneVSU Mobile, the OneVSU Portal, the OneVSU Enterprise Resource Plan, and the University Executive Dashboard, aimed in part at giving students, faculty, staff, alumni, and partners one simpler way into university services and information ([Chapter 6](06-vsu-context.md)).
- **Listening sessions.** The administration intends to hold regular listening sessions with employees and students as a standing practice of governance.
- **Continuity.** A hybrid solar system now backs the data center and the administration building, and the university adopted a framework for disaster response and continuity of essential services.
- **Payments.** A LANDBANK cashless program began rolling out to students and employees on 2 September 2026.
- **Spatial data.** An inventory of roads, water, drainage, electrical systems, and GIS has been completed, and RFID entry to the campus is at the concept stage.

What this means for CAMPUS:

- "Reach the right office", as routing and tracking, would duplicate the document tracker, the helpdesk, and OneVSU's aim. The network should help people find the right office or system and hand them into it, and leave tracking to VSU's tools. [Proposed]
- The network should carry official notices, including WAIS advisories, to the channels where people will see them, rather than issue notices of its own. [Proposed]
- Staff have an internal chat app, and students have no equivalent channel in VSU's public list of services. Whether students can reach staff through anything besides visits, email, and Facebook is for field research. [Unresolved]
- Town halls and student voice should feed the planned listening sessions, not compete with them. [Proposed]
- VSU already uses @vsu.edu.ph Google sign-in for a student-facing service. Whether it would allow the same for the network is VSU's decision. [Unresolved] (Q-06)
- Whether OneVSU Mobile and the Portal will carry notices, office directories, or Q&A is unknown, and the answer decides how much of the network's first version stands. [Unresolved] (Q-18)

## What VSU people already use

- **Facebook and Messenger.** In the Digital 2026 report, 94.9% of Philippine internet users aged 16 and over had used Facebook in the past month, against a global average of 56.9%, and 90.6% had used Messenger. [Established] This is the network effect the risk register warns about ([Chapter 10](10-risks.md)).
- **Office pages on Facebook.** Universities in the region use Facebook as an official help channel: EVSU directs applicants with questions to its admission office's Facebook page. [Established] VSU keeps an official Facebook page; which VSU offices answer students on Facebook is not known. [Unresolved] The landscape study will map the official pages that exist ([Chapter 7.1](07a-facebook-study.md)). [Proposed]
- **Freedom walls and confession pages.** Philippine university freedom walls are anonymous Facebook pages run by unnamed administrators. [Established] A 2025 student study of the three most followed, at UP Diliman, National University, and Ateneo de Manila, found they open up student discourse but raise cyberbullying, misinformation, and privacy concerns, and it called for accountability within anonymous spaces. [Established] A Canadian study of 2,712 posts on one university's confessions page found that 26.1% supported students' learning, through asking for and giving academic help. [Established] The network's "Answers people can trust" therefore competes partly with anonymous pages students already use for help. [Proposed] Whether VSU has active pages of this kind, and what students use them for, is a question for the landscape study and the interviews. [Unresolved]
- **Delivery and errands.** foodpanda delivers in Tacloban and lets customers schedule orders up to seven days ahead. [Established] Errand runs, the *pabili* that Hop-It's name echoes, are an established service: Grab offers a pabili option in which a rider buys items for the customer, and Facebook groups connect people with riders who run errands. [Established] Whether any of these operate in Baybay City or onto the campus has not been checked. [Unresolved] Scheduling and errand-running alone are therefore not Hop-It's difference; pooling scheduled orders into shared runs is. [Proposed]

## Philippine universities and apps

| System | What it is | Lesson for CAMPUS |
| --- | --- | --- |
| EVSU apps portal | Eastern Visayas State University's hub for its student portal, online admission, applications for free higher education, and an alumni web portal | A neighboring state university invests in administrative portals while questions still go to Facebook pages. [Established] |
| Enderun Colleges app (2021) | The college's own app for students, faculty, staff, and alumni, with interest channels, official school channels, push notifications, and access to classes and grades | The closest Philippine precedent to the channel model; whether people kept using it is not public. [Unresolved] |
| ALON CampUs | A student community app for Philippine universities from an independent developer, with school identity verification, announcements, boards for housing, careers, and organizations, and anonymous boards | An Everytime-style app already exists in the Philippines; its reach is unknown. [Unresolved] |
| USC AppDate, De La Salle Araneta University (2018) | A student council app for announcements, built after an earlier online grievance desk fell out of use and stopped | A channel for concerns dies when people don't trust it or see no response. [Established] |

No Philippine state university running its own community network turned up in this pass, which does not prove that none exists. [Unresolved]

## International precedents

Workplace from Meta remains the closest precedent: a version of Facebook for internal communication inside organizations. It launched in 2016 and was reported at seven million paying users in 2021. In May 2024 Meta announced it would close Workplace to focus on AI and metaverse technologies; it was set to go read-only on 1 September 2025 and shut down fully on 1 June 2026. Coverage at the time reported that growth had slowed after the pandemic, and that concerns over Meta's data practices had made some enterprise customers hesitant. [Established] Two lessons for CAMPUS: an institution that relies on someone else's platform can lose it to that owner's priorities, and even Meta found adoption hard.

| System | What happened | Lesson for CAMPUS |
| --- | --- | --- |
| Facebook Campus (Meta, US) | A section inside Facebook open only to people with .edu addresses, launched in fall 2020 and covering 204 schools by its end; closed on 10 March 2022, with Meta saying Groups served students best | Campus-only membership does not make people switch, even when Facebook builds it. [Established] |
| Everytime (South Korea) | A company-run app with a verified board for each university, timetables, and course reviews; 7.85 million cumulative users, 2.9 million monthly users, and 377 partner campuses as of December 2025 | Daily academic use plus verified membership is the hook, and the operator is a company, not the universities. [Established] |
| Dcard (Taiwan) | Started in 2011 by university students for verified students; its forum let people post anonymously or under their university's name only; later opened sign-up to phone numbers (2021) and added real-name verification (2022) | Posting under a verified affiliation without a name is a tested middle path for Q-16. [Established] |
| Yik Yak (US) | Anonymous posts by location; racist and violent posts that colleges had little power to stop; bans on campus Wi-Fi failed because students used mobile data; shut down in 2017, relaunched in 2021, sold to Sidechat in 2023 | Unlimited anonymity fails at campus scale, and controlling the campus network does not control behavior. [Established] |
| Pizarra, University of Valladolid (Spain) | A mobile app the university built on its existing information systems as a communication channel for its community, separate from teaching; described in a 2013 paper | Universities have built their own channels before; the source gives no adoption figures. [Unresolved] |
| CampusGroups, Anthology Engage, Presence (US) | Commercial platforms for student organizations and events, with rosters, documents, elections, budgets, and event promotion | Managing organizations is a mature, paid category; CAMPUS should borrow its patterns rather than invent them. [Established] Vendors' adoption claims are unverified. [Unresolved] |
| Matrix at TU Dresden and LMU Munich (Germany) | Both universities run their own Matrix chat servers for students and staff; at TU Dresden only university members can sign in | Real-time chat can run on university servers through an open protocol, owned by the IT unit. [Established] (Q-04) |

## Campus delivery

- **Robot delivery.** Starship pioneered campus robot delivery at George Mason University in 2019 and grew to 67 campuses before announcing in May 2026 that it was shifting its US focus away from campuses; by its own estimate, its robots found only about seven months of work a year on a campus. [Established] Others continue: Ohio State's 125 Avride robots made nearly 235,000 deliveries to campus buildings in the 2025–2026 academic year. [Established] Campus demand follows the academic calendar, which Hop-It's PRD does not yet address. [Proposed] (Q-19)
- **Order bundling.** Research using real meal-delivery data treats meal delivery as one of the hardest last-mile problems, since an order is expected within the hour, and finds potential benefits in bundling orders, scheduling courier shifts, and managing demand. [Established] (Yıldız and Savelsbergh, 2019; Reyes et al., 2018) Hop-It's scheduled windows are a form of demand management: they trade speed for orders that can share a run. [Proposed]
- **Scheduled ordering** already exists in mainstream apps (above), so Hop-It's difference is pooling scheduled campus orders into shared runs, with human dispatch and fixed campus drop points. [Proposed]

## Local-first infrastructure

- **Local-first software.** Kleppmann and colleagues (2019) argue that cloud apps take ownership away from users and stop working when a service shuts down, and they propose software that works offline and syncs across devices, using data structures called CRDTs. [Established] It is the research basis for the tiered sync in [Chapter 4](04-intranet.md), and it names the risk Workplace's customers met. [Proposed]
- **Kolibri.** An open-source, offline-first learning platform from Learning Equality, launched in 2017, that runs on low-cost devices from a local server. Its makers report reaching more than 13 million learners and teachers in over 220 countries and territories, including government school systems in the Philippines. [Established] It shows the local-server pattern working for learning content; it is not a community network. [Proposed]
- **University chat servers.** The Matrix deployments above show an institution-owned path for messaging. [Established]
- **VSU's continuity work.** The solar-backed data center and the continuity framework show VSU already investing in keeping ICT running through disruption. Whether that extends to student-facing services is for VSU ICT. [Unresolved]

## Campus digital twins

Reviewed only lightly, since the digital twin is a later direction ([Chapter 5](05-later-directions.md)). [Established]

- The University of Glasgow built a digital twin of its Western Campus and three heavily used student buildings with an energy-modeling firm, feeding it building-management data, as part of a smart campus program. [Established]
- The University of Manchester turned 3D scans of its music and drama centre into a virtual induction that students complete before using its rehearsal rooms, which helped them get familiar with the space. [Established]
- In this light pass, campus twins serve estates and energy teams first, and the student-facing use is closer to a guide to places. [Proposed] VSU's completed inventory of roads, water, drainage, electrical systems, and GIS is the kind of data a twin would start from. [Established] A simple layer of places inside the network can come long before any twin. [Proposed]

## Patterns the use-case inventory borrows

[Chapter 2.1](02a-use-cases.md) borrows patterns, not products. [Established]

| Pattern | Seen in | Use in CAMPUS | Watch for |
| --- | --- | --- | --- |
| Endorsed answers | Stack Exchange, Piazza, Ed Discussion | Answers offices confirm | Offices must commit to confirming (Q-17) |
| Channels | Telegram, Slack, Enderun's app | Official notices and communities | Channels without owners go stale |
| Verified affiliation | Everytime, Dcard, Facebook Campus | Membership tied to VSU | Verification alone does not bring people |
| Service requests with status | 311 apps, FixMyStreet, VSU Helpdesk | Report a campus problem | Hand off to VSU's helpdesk, not a rival queue |
| Moderated question sessions | Reddit AMAs | Town halls | Fit VSU's planned listening sessions |
| Course reviews | Everytime | Not proposed | Faculty evaluation is sensitive and belongs to VSU |

## What the review changes

1. Narrow "Reach the right office" to finding the right office or system and handing off to it, and leave routing and tracking to VSU's systems. [Proposed]
2. Give the network a daily reason to open, as Everytime does with timetables, using VSU data only where VSU permits; Facebook Campus shows campus-only membership is not enough. [Proposed]
3. For Q-16, test posting under a verified role without a name, such as "3rd-year student, Agriculture", alongside named posting, with the limits Yik Yak lacked. [Proposed]
4. Ask what OneVSU Mobile and the Portal will cover before the pitch (Q-18). [Proposed]
5. Build the academic calendar into Hop-It's demand assumptions (Q-19). [Proposed]
6. For real-time chat, evaluate an open protocol that VSU ICT could host, such as Matrix, before building a chat server (Q-04). [Proposed]

## Status

| Area | Status, October 2026 |
| --- | --- |
| VSU's own systems | First pass from public pages; owners and data unknown (Q-10) |
| What VSU people use | Desk research done; VSU-specific use waits on field research |
| Philippine universities | First pass; other state universities in the region not yet checked |
| International platforms | First pass |
| Campus delivery | First pass; delivery coverage in Baybay not yet checked |
| Local-first infrastructure | First pass |
| Campus digital twins | Light pass |

## Sources

Checked on 4 October 2026. The source type follows each entry ([Chapter 8](08-governance.md)).

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
- [foodpanda: a Tacloban restaurant page](https://www.foodpanda.ph/restaurant/r1sx/ocho-seafood-and-grill-tacloban); [GrabExpress Pabili](https://www.grab.com/ph/blog/grabexpresscities/), Grab, 2020; [Interaksyon](https://interaksyon.philstar.com/trends-spotlights/2020/04/30/167577/how-filipinos-making-food-delivery-services-easy-amid-covid-19-quarantine/), 2020. External.
- Digital twins: [University of Glasgow case study](https://wates.co.uk/wp-content/uploads/2023/08/IES-University-of-Glagow-Case-Study.pdf), IES; [University of Manchester](https://matterport.com/news/university-of-manchester-taps-matterport-digital-twins-to-transform), Matterport. External, vendor.
