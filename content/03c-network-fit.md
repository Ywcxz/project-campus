# The Network and VSU's Systems

*What VSU already has, what is missing, what would change, and whether it can be done*

The network has to fit a university that already runs many systems and plans more under DIGITS. This chapter takes stock of them from public sources, measures what is missing against the concepts the network depends on, sets out what would change for each system, draws lessons from similar systems, and judges whether the network is feasible. The real answers about VSU's systems sit with their owners. [Established]

> **In short.** VSU already has much of what the network would build on: an account for every member, a learning system with a mobile app, a helpdesk, a document tracker, public feeds of its news and announcements, pages listing its graduate faculty's research interests, and an advisory system. [Established] Measured against seventeen concepts, its systems cover none fully for students, thirteen in part, and three not at all, with one unknown. [Proposed] What is missing is a community space, a memory that keeps what is learned, and the connections between the pieces. The network would change little for any existing system, it is technically easy and cheap to pilot, and its real costs are people, legal duties, a memory that takes years to pay off, and winning students over. [Proposed]

## What VSU already has

| System or channel | What it does for students, from public sources | Overlap with the network | Source |
| --- | --- | --- | --- |
| University Google and Microsoft accounts | An @vsu.edu.ph Google account and a Microsoft 365 account for every student, faculty member, and employee; more than 16,000 licenses ready in 2023, renewed each year | Sign-in (Q-06) | VSU news, 2022 and 2023 |
| VSUEE | VSU's Moodle learning system, university-wide since 2020, with a branded mobile app since July 2022 that downloads course materials and sends push notifications; 17,191 students were enrolled as users by May 2022 | Course discussion and course messages, which stay in VSUEE | VSU news, 2022 |
| my.VSU | Grades, subjects, and schedules | Role details, only with VSU's permission (Q-39) | VSU Students page |
| Helpdesk and document tracker | Tickets with status on osTicket, and document requests with tracking | Reaching the right office; reporting a problem | VSU service pages ([Chapter 10](10-related-work.md)) |
| Website news, announcements, and calendar | Official news and notices, with public RSS feeds | Official notices | VSU website |
| Official Facebook page | University news and notices for the public | Official notices; VSU's public face, which stays | VSU website |
| WAIS | Localized weather advisories for VSU account holders, generated automatically as JSON, with a mobile app and push notifications planned | Advisories in official spaces (Q-40) | VSU news, July 2026 |
| Output Messenger | Office chat, for employees only | Staff keep it; students have no equivalent | VSU helpdesk ([Chapter 10](10-related-work.md)) |
| Student services | Guidance and counseling, career and job placement, organization recognition, admission, scholarships, student housing, campus ministry, and community engagement | The services the network would help students reach | VSU Student Services page |
| Department-Based Guidance Facilitators | Trained in peer support and responsible care | Peer helpers for routes to guidance, designed with the guidance office | Third SOUA |
| Graduate faculty pages | Graduate faculty by department, with each one's specialization and research interest | Topics faculty could choose to help with (D-071) | VSU website |
| Phone directory | Offices' telephone numbers | Finding the right office | VSU Students page |
| Job postings and alumni updates | Job openings, and a site for alumni relations | Opportunities; a path for alumni (Q-45) | VSU Students page |
| Anti-Sexual Harassment Office | Receives complaints; its members include student government | Reports from the network ([Chapter 3.2](03b-network-design.md)) | VSU FAQ page |
| Accredited organizations | A public list, with 57 entries for 2022–23 | Organization communities | VSU website |
| The Amaranth | VSU's student media | Hosted, never edited, under the Campus Journalism Act ([Chapter 3.1](03a-use-cases.md)) | VSU Students page |
| Plans in the Third SOUA | Regular listening sessions, digitized customer feedback for ISO 9001, an accommodation management system, and DIGITS's OneVSU Mobile and Portal | Student voice, notices, and possibly much more (Q-18) | Third SOUA |

Every row is drawn from VSU's public pages and news. [Established] Who owns each system inside VSU, and how much it is used, cannot be seen from outside. [Unresolved] (Q-10)

## What is missing

The network depends on seventeen concepts. The table compares each with the closest thing VSU's systems offer students today. "Partly" means some VSU system offers part of the concept to students, and "No" means none does; the reading is the author's, from public sources. [Proposed]

| Concept | Closest today | VSU systems | What is missing |
| --- | --- | --- | --- |
| Membership limited to VSU people | VSU accounts for VSUEE and WAIS | Partly | A community space limited to members; Facebook groups can admit anyone |
| Roles visible, and shaping what people can do | Teacher and student roles inside VSUEE courses | Partly | Outside courses, no shared place shows who is a student, a faculty member, or an office |
| Official information marked wherever it travels | The website and the official Facebook page | Partly | A notice loses its marks once it is copied or screenshotted, and no one can check whether it is current |
| Knowledge that knows its age | Dated website posts, and policies listed by year | Partly | A mark on an answer or guide that says it was replaced, and by what |
| Questions answered in public and confirmed by offices | Helpdesk tickets, which are private | Partly | Public, searchable answers that an office stands behind |
| Questions routed to the people who know | The phone directory for offices, and graduate faculty pages listing research interests | Partly | A way to send a question to the members who chose its topic, and to see existing answers first |
| Students reaching staff and faculty across roles | Email, messages inside VSUEE courses, and a staff-only chat | Partly | A student-facing way to reach offices and faculty outside one's own courses |
| Spaces shaped like VSU's units, places, and organizations | Website pages for units, and a list of organizations | Partly | Communities where units and organizations meet their people, each with an owner |
| Knowledge that lasts beyond each batch | Website pages, and The Amaranth's archive | No | A memory for guides and answers that outlast each batch |
| Organizations with members, events, records, and handover | Recognition by student services, and the public list | Partly | Organization spaces that keep their records when officers change |
| Events and opportunities in one place, kept afterward | The website calendar, announcements, job postings, and scholarship pages | Partly | One place, with reminders, for what concerns each member, and events that keep their materials |
| Trade among verified members | Nothing at VSU | No | A marketplace where every seller is a verified member, as its own product ([Chapter 5.2](05b-marketplace.md)) |
| Rules for online community spaces, with appeal | The student handbook, whose online provisions are not public | Unknown | Rules for community spaces, written with the community (Q-37) |
| Safe ways to raise concerns, with answers | Planned listening sessions, and offices that take complaints | Partly | A standing channel where concerns can be raised, under a pseudonym if needed, and answered in public |
| A home ordered by relevance that ends, with no ads | The website, which has no ads but is the same for everyone | No | A digest of what matters to each member |
| Community data under VSU's governance | VSU's systems, under its privacy notice | Partly | Campus conversation and its data sit with Meta, outside VSU's privacy program |
| Light data use and offline reading | VSUEE's offline course materials and WAIS's offline mode | Partly | Notices and guides about campus life that open without a connection |

Fully covered for students: none of the seventeen. Covered in part: thirteen. Not covered: three. Unknown: one. [Proposed]

The pattern matters more than the count. VSU's official side is well served, and DIGITS plans to serve it better; what is missing is the community side, a memory that keeps what the community learns, and the connections that would let a student go from a question to the right office, person, notice, or organization without knowing in advance where each lives. [Proposed] Facebook and group chats offer something toward most of these concepts, which is why campus life gathered there, but under none of VSU's governance and with no memory to speak of. [Proposed]

## What would change for VSU's systems

Nothing here moves a system or changes its authority. Each system's owner decides how, or whether, it connects. [Established] (D-004)

| System | Relationship | What changes for its owner | What stays |
| --- | --- | --- | --- |
| Google Workspace, or VSU's own identity system | Sign-in, if VSU allows | Allowing the network as an app that may use VSU sign-in, and deciding which details it may read | Accounts, passwords, and licenses |
| VSUEE | Links only | Nothing; posts about a course link to VSUEE rather than copy it | Course work, grades, forums, and the app |
| my.VSU | Role details only with VSU's permission, or none | Possibly a data-sharing agreement for program and year | Records and their authority |
| Helpdesk and document tracker | Hand-off | Nothing, or a link that opens a new ticket with the question's text | Queues, statuses, and staff workflows |
| Website and official Facebook page | The network reads the public feeds | Possibly a habit of posting each notice once, in the place that feeds the others | VSU's public face; Facebook stays for the public, alumni, and applicants |
| WAIS | Advisories shown in official spaces | Permission to read its JSON | The advisory system and its planned app |
| Output Messenger | None | Nothing | Staff chat |
| Student services and other offices | Office accounts and official spaces | Staff time to answer and confirm, the largest change | Their services and authority |
| Anti-Sexual Harassment Office and student discipline | Reports routed to them | Reports arriving from the network | Their processes |
| Data protection officer | A privacy impact assessment and registration | A new system to assess and register | VSU's privacy program |
| VSU ICT | Possibly hosting, later | Servers, patches, backups, and monitoring, if VSU hosts it ([Chapter 2](02-intranet.md)) | The campus network |
| DIGITS and OneVSU | Undecided | Depends on VSU's choice among the relationships in [Chapter 7](07-vsu-context.md) | VSU's roadmap |

The largest change is not technical: offices would answer some student questions once, in public, instead of many times in private. [Proposed] That is also the network's largest benefit to them. [Proposed]

One more system is not VSU's but changes least of all: the group chats where batches, classes, and organizations coordinate. The network leaves them as they are and links into them with share cards, so a notice passed on in a chat carries the way to check it. [Proposed] (D-074)

### Signing in

VSU's account practices settle much of the identity design, and leave four questions. [Established]

- Student Google accounts use the vsu.edu.ph domain, and Microsoft accounts use 365.vsu.edu.ph with the same username. [Established] Either could serve for single sign-on through OpenID Connect, limited to VSU's domain, without a new password; a pilot can instead send a one-time code to a member's VSU email address, which needs no integration. [Proposed] Which form of sign-on, if any, VSU allows is its decision. [Unresolved] (Q-06)
- Accounts are issued after the late enrollment period, which leaves new students without one in their first weeks. [Established] (Q-38)
- Student usernames are school ID numbers by default. [Established] The network must never display them. [Proposed]
- Integrated High School students also hold accounts, so sign-in alone cannot tell a college student from a high school student. [Established] Roles must come from somewhere else (Q-39), and the pilot admits college members only (D-069). [Proposed]

### What the network would own, and what it would only point to

This extends the own-or-reference rule of [Chapter 7](07-vsu-context.md). [Established]

| Data | The network's role | Where the authority lies |
| --- | --- | --- |
| Membership and role | Reference | VSU accounts and VSU's records |
| Faculties, departments, and offices | Reference | VSU's organizational structure |
| Accredited organizations | Reference | Recognition by student services |
| Official notices | Represent, with the source shown | The issuing office, and the website |
| Weather and hazard advisories | Represent, with the source shown | WAIS and PAGASA |
| Service requests and documents | Reference | The helpdesk and the document tracker |
| Courses and grades | Not held | VSUEE and my.VSU |
| Posts, answers, guides, listings, and messages | Owned, kept or faded under D-070 | The network, under VSU's governance |
| Topics members help with | Owned, as members declare them | Each member |
| Links between pseudonyms and members | Owned, under two keys | The process of D-065 |

## DIGITS and OneVSU

The Third SOUA describes DIGITS as connecting the university's separate systems, offices, and processes so that information moves more efficiently, and OneVSU as a simpler point of access to university services and information. [Established] The network shares those aims from the community side. Whether OneVSU will carry notices, office directories, or questions and answers for students is not known, and the answer decides how much of the network's first version still stands. [Unresolved] (Q-18) Of the six relationships v0.1 listed, the network fits most naturally as a complementary layer, or as a test of ideas before institutional scale; VSU decides. [Proposed] (D-017) The practical rule is to ask what OneVSU will cover before the pitch, then design to complement it. [Proposed]

## Lessons from similar systems

[Chapter 10](10-related-work.md) reviews each precedent. Here each lesson is matched to the design response it calls for. [Proposed]

| Precedent | What happened | Design response |
| --- | --- | --- |
| Thefacebook at Harvard, 2004 | Opened to one university first; more than half its undergraduates joined within a month, before it spread school by school [Established] | Start dense in one community, not thin across the campus |
| Facebook Campus, 2020 to 2022 | A college-only section that Meta closed, saying Groups served students best; it launched as US teenagers were leaving Facebook, whose use among them fell from 71% in 2014–15 to 32% in 2022 [Established] | Campus-only membership is not enough, and at VSU, where nearly everyone uses Facebook, the incumbent is stronger still; the network must do tasks better |
| Messenger group chats | Where campus coordination happens, by the author's observation; answers given there are buried within days [Unresolved] | Complement them as the memory they lack, and link into them with share cards (D-074) |
| Stack Overflow | Closes accidental duplicate questions with a link to the original, and keeps differently worded ones as signposts [Established] | Show existing answers before a question posts (D-071) |
| Brainly, with a Philippine site since 2014 | Students earn points by answering and spend them to ask, with rankings and volunteer moderators [Established] | Never put a price on asking; no public scores (D-072) |
| Stack Overflow badges | Users increased the activity a badge rewarded as they neared it, then returned to their usual level [Established] | Public metrics steer behavior toward the metric; recognize helpers without them (D-072) |
| Everytime, South Korea | Verified boards for each university, plus timetables used daily [Established] | Be useful to one person before being social: notices, deadlines, an office directory, guides |
| Fizz, United States | Almost all undergraduates at one college within months, by its founders' account, with reports of bullying and misinformation [Established] | Demand for campus talk is real; pair it with identity and moderation |
| Yik Yak, United States | Unlimited anonymity brought harm that colleges could not stop, and bans on campus Wi-Fi failed [Established] | No full anonymity; govern behavior, not the pipe |
| community@brighton, United Kingdom | An Elgg network that grew to tens of thousands of users, became more of an institutional channel, lost members' sense of ownership, and declined after years of neglect [Established] | Give members room and ownership, and keep someone caring for it |
| Athabasca University's Landing, Canada | Its builders took Brighton's lessons and called gardening a better metaphor than architecture [Established] | Grow the network with its members, and expect it to change |
| Mastodon at Innsbruck and SURF | University-run servers with institutional sign-in; SURF's needed little moderation, partly because logins made users accountable [Established] | Identified by default |
| Matrix at TU Dresden and LMU Munich | Universities run their own chat for students and staff [Established] | Matrix is the candidate if chat is tested (Q-04) |
| Workplace from Meta | Closed in 2026 as Meta's priorities changed [Established] | Open components VSU could host; no single-vendor dependence |
| Discord Student Hubs | Hubs unlocked by a school email, not affiliated with or run by the school [Established] | Verification without governance is not the model |
| Iskomunidad, UP Diliman | A community wiki hosted by UP Diliman's Interactive Learning Center, with 3,722 articles and 6,268 registered users in 2026 [Established] | A Philippine university can host community knowledge for years |
| USC AppDate, De La Salle Araneta University | Built after an online grievance desk fell out of use [Established] | A concerns channel dies without answers; office commitment comes first |
| VSU's Google Workspace rollout, 2022 | 9,245 Main Campus students received accounts; about 17% were active a day later [Established] | An account is not adoption; plan onboarding and measure it |

## Is it feasible?

### Technical

Every component exists as open-source software that universities already run: forums such as Discourse, which marks accepted answers in its core; chat servers such as Matrix; sign-in through OpenID Connect; and push notifications from web apps on Android and on iPhones since iOS 16.4. [Established] What would be new is VSU-specific rather than technically novel: labels and states that travel with posts, a permanent page for each notice, communities tied to a registry of VSU's units, routing by declared topics, a retention schedule, and the two-key store for pseudonyms. [Proposed] Each needs careful work; none needs research. [Proposed]

### Cost

All prices are vendors' published prices in US dollars, checked in October 2026. [Established] The estimates around them are the author's. [Proposed]

| Item | Pilot: one community, a few hundred members, one semester | Campus-wide: about 10,000 members | Note |
| --- | --- | --- | --- |
| Web app and forum server | One small cloud server, about $24 to $48 a month for 4 to 8 GB of memory | A few servers, in the cloud or on campus | Discourse needs at least 1 GB of memory with swap, and recommends 2 GB or more |
| Chat, if tested | Up to 500 users fit on one core and about 1 GiB for the chat server, plus one core and 4 GiB for its database | About ten cores and 8 GiB, plus four cores and 16 GiB for the database, which grows by about 0.6 GB per active user a year | Element's sizing guide, without federation |
| A hosted alternative | Discourse's free plan, or Pro at $100 and Business at $500 a month, both 85% off when Discourse is a university's main forum | The same plans | Data held under a vendor's terms |
| Sign-in | VSU accounts, with no added license | The same | Needs VSU's permission (Q-06) |
| People | The author's time, one office's answering time, and volunteer moderators | A coordinator, moderators, office time, and ICT time | The main cost, not yet measured |

For scale, VSU spent more than ₱4 million on Google and Microsoft subscriptions for 2023, renewed each year, and about ₱1.5 million on Google licenses alone in 2022. [Established] The network's servers would cost a small fraction of that; its people would not. [Proposed] A pilot measures their time in minutes per week, by office and by moderator, so that a campus-wide budget rests on numbers. [Proposed]

### Law and policy

| Law or rule | What it means for a VSU-run network | Status |
| --- | --- | --- |
| Data Privacy Act of 2012 | Education details, such as program and year, are sensitive personal information; processing them needs consent or another basis the Act allows; personal information may be kept only as long as its purpose requires; and members may have outdated, false, or no longer necessary information blocked or removed | [Established] The network keeps knowledge and lets conversation fade (D-070) [Proposed] |
| NPC Circular 2022-04 | Controllers that process sensitive personal information of 1,000 or more people must register each data processing system, public online and mobile apps included, within 20 days of its start, and renew each year; any system involving profiling or automated decision-making must be registered in all cases | [Established] The network neither scores nor ranks its members (D-061, D-072) [Proposed] |
| VSU's privacy program | In a 2021 workshop, VSU's offices drafted privacy impact assessments for new projects and systems; VSU's privacy notice names a data protection officer who reports to the President | [Established] A new network would need its own assessment [Proposed] |
| Safe Spaces Act | Schools must act on gender-based sexual harassment, online included, when they know or should know of it; heads who fail to act can be fined | [Established] |
| Anti-OSAEC and Anti-CSAEM Act of 2022 | Platforms that let people communicate are internet intermediaries with duties: terms that prohibit child sexual abuse material, removal within 24 hours of notice, keeping certain data for set periods, and reporting | Whether a VSU-run network counts is for legal review [Unresolved] |
| Electronic Commerce Act of 2000, Section 30 | A service provider that merely gives access is not liable for others' content if it lacks actual knowledge of its unlawfulness and gains nothing from it | [Established] A prompt notice-and-action process protects the host [Proposed] |
| Cybercrime Prevention Act of 2012 | Service providers must keep traffic data for set periods ([Chapter 2](02-intranet.md)) | Whether it covers the network is for legal review [Unresolved] |
| Campus Journalism Act of 1991 | Student publications keep their editorial independence | [Established] |
| Malabanan v. Ramento, 1984 | Students keep their freedom of speech on campus, within reasonable limits | [Established] |

None of these blocks a pilot. Together they mean the network needs a legal review, a privacy impact assessment with VSU's data protection officer, and a notice-and-action process before it has real users. [Proposed] (Q-36)

### Adoption

Facebook's network effects are the largest risk ([Chapter 11](11-risks.md)). [Established] They are stronger at VSU than where Facebook Campus failed, because Facebook remains nearly universal in the Philippines. [Proposed] The precedents point both ways: Facebook itself, Everytime, Dcard, and Fizz show students joining campus networks in large numbers when those networks serve them daily, while Facebook Campus, Workplace, and community@brighton show what happens when they do not, or when their owner stops caring. [Established] VSU's own rollout of Google accounts shows that giving people an account is not the same as their using it. [Established]

Research on starting online communities offers tested tactics: a clear and limited scope, tools useful to one person before the community is large, staff who contribute when members have not yet, new spaces only when existing ones are busy, and visible activity. [Established] (Resnick, Konstan, and Chen, 2012) For the network that means a pilot dense in one community; notices, deadlines, an office directory, and guides that are useful from the first day; offices as contributors of last resort; and few communities at first. [Proposed]

Memory changes the arithmetic of a pilot. A kept answer is worth most in the years after it is given, when later batches find it, so one semester shows the least of what the network would be worth. [Proposed] The pilot therefore seeds its memory before launch, with official information and guides from a short guide sprint, and measures reuse directly: how often members find an existing answer instead of asking, and how often kept answers are read again. [Proposed] (D-070)

Helpers are the other half. Routing can pile questions on the few people everyone already knows, until they stop answering, so the pilot caps routed questions per helper, rotates them, and counts how many helpers carry the load. [Proposed] (D-071) Faculty time is the scarcest; whether answering and mentoring on the network could count toward faculty members' recognized service is a question for VSU. [Unresolved] (Q-47)

### Capacity and continuity

One person can build and run a prototype for a pilot; one person cannot moderate and operate a network for 10,000 people. [Proposed] Workplace's closure shows that a platform can disappear when its owner's priorities change, and community@brighton shows that a network can fade when no one keeps caring for it. [Established] The network is therefore built from open components, documented as it goes, and every pilot ends in one of two ways: VSU takes ownership, or the network closes on a set date after members receive their posts and the data is deleted or handed to VSU. [Proposed]

### Verdict

| Dimension | Judgment |
| --- | --- |
| Technical | High |
| Cost of a pilot | Low |
| Cost at campus scale | Moderate, mostly people |
| Operations | The hardest part |
| Memory | Slow to pay off; seed it and measure reuse |
| Law and policy | Manageable with process, not yet reviewed |
| Adoption | Uncertain |
| Institutional fit | Promising, unconfirmed |
| One person's capacity | Enough for a prototype only |

The network is feasible as a bounded pilot with one committed office, a seeded memory, and a named moderation owner, not as a service one person runs, and across the campus only under VSU's ownership. [Proposed]

## Open questions

- What systems does VSU run, who owns them, and which data is authoritative? (Q-10)
- What will OneVSU Mobile and the Portal cover for students? (Q-18)
- Should the pilot be composed from open-source parts or built from scratch? (Q-33)
- What does the law require of VSU as host? (Q-36)
- Does VSU's student handbook cover online conduct? (Q-37)
- How would incoming students take part before their VSU accounts are issued? (Q-38)
- Where would role details come from? (Q-39)
- Could the network carry VSU's official feeds? (Q-40)
- Who would own and staff the network after a pilot? (Q-42)
- How would graduates keep or regain membership as alumni? (Q-45)
- Could faculty contributions count toward their recognized service? (Q-47)

[Unresolved]

## Sources

Checked on 8 and 9 October 2026. The source type follows each entry ([Chapter 9](09-governance.md)).

- Visayas State University. [VSU rolls out 9,245 free Google Workspace accounts to students in Main Campus](https://www.vsu.edu.ph/articles/news/2255-vsu-rolls-out-9-245-free-google-workspace-accounts-to-all-students-in-main-campus), 4 October 2022; [All VSU students and staff to get Microsoft and Google licenses](https://www.vsu.edu.ph/articles/news/2394-all-vsu-students-and-staff-to-get-microsoft-google-licenses), 22 August 2023; [VSU e-Learning app now available](https://www.vsu.edu.ph/articles/news/2225-vsu-e-learning-app-now-available-for-viscans-via-google-play-and-app-store), 29 July 2022; [VSU UDRMO unveils WAIS](https://www.vsu.edu.ph/articles/news/3011-vsu-udrmo-unveils-wais-strengthens-climate-resilience-efforts), 9 July 2026; [Students](https://www.vsu.edu.ph/students); [Student Services](https://www.vsu.edu.ph/vsu/1156-student-services); [Frequently asked questions on sexual harassment](https://www.vsu.edu.ph/vsu/1356-anti-sexual-harassment); [Accredited Organizations](https://www.vsu.edu.ph/students/accredited-organizations); [General Privacy Notice](https://vsu.edu.ph/privacy); [VSU commits to data privacy and protection](https://www.vsu.edu.ph/articles/news/1919-vsu-commits-to-data-privacy-and-protection), 24 February 2021; [Third State of the University Address](https://www.vsu.edu.ph/articles/news/3045-3rd-state-of-the-university-address), 18 September 2026; [News feed](https://www.vsu.edu.ph/articles/news?format=feed&type=rss) and [announcements feed](https://www.vsu.edu.ph/articles/bulletin?format=feed&type=rss); [Graduate faculty of the Department of Food Science and Technology](https://www.vsu.edu.ph/21-content-main/informational/1611-graduate-faculty-of-dept-of-food-science-and-technology), an example of VSU's graduate faculty pages. Official.
- [Republic Act No. 10173, Data Privacy Act of 2012](https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html), Sections 3(l), 11(e), 13, and 16(e); [Republic Act No. 11313, Safe Spaces Act](https://lawphil.net/statutes/repacts/ra2019/ra_11313_2019.html); [Republic Act No. 11930, Anti-OSAEC and Anti-CSAEM Act](https://lawphil.net/statutes/repacts/ra2022/ra_11930_2022.html), Sections 3 and 9; [Republic Act No. 8792, Electronic Commerce Act of 2000](https://lawphil.net/statutes/repacts/ra2000/ra_8792_2000.html), Section 30; National Privacy Commission, [Circular No. 2022-04](https://privacy.gov.ph/wp-content/uploads/2023/05/Circular-2022-04.pdf), on registration of data processing systems, Sections 5 and 7. Official.
- [Malabanan v. Ramento, G.R. No. L-62270](https://chanrobles.com/scdecisions/jurisprudence1984/may1984/gr_l62270_1984.php), 21 May 1984. Official, jurisprudence.
- [History of Facebook](https://en.wikipedia.org/wiki/History_of_Facebook), Wikipedia. External.
- Pew Research Center. [Teens, Social Media and Technology 2022](https://www.pewresearch.org/internet/2022/08/10/teens-social-media-and-technology-2022/), 10 August 2022. External, research.
- Stack Overflow. [Handling duplicate questions](https://stackoverflow.blog/2009/04/29/handling-duplicate-questions/), 29 April 2009. External, vendor.
- [Poland-based social learning network rolls out PH site](https://newsbytes.ph/2014/04/21/poland-based-social-learning-network-rolls-out-ph-site/), NewsBytes.PH, 21 April 2014, on Brainly. External.
- Anderson, A., Huttenlocher, D., Kleinberg, J., and Leskovec, J. (2013). [Steering user behavior with badges](https://archives.iw3c2.org/www2013/proceedings/p95.pdf). *WWW 2013*, 95–106. Scholarly.
- Athabasca University's Landing. [RIP community@brighton](https://landing.athabascau.ca/bookmarks/view/974991/rip-communitybrighton) and [Ownership, structures and behaviours](https://landing.athabascau.ca/blog/view/10516/ownership-structures-and-behaviours), about 2010. External, practitioner accounts.
- University of Innsbruck. [Mastodon for all university employees](https://www.uibk.ac.at/en/newsroom/2024/mastodon-for-all-university-employees/), 8 April 2024. External, from another university.
- [Beyond X: how universities in the Netherlands are building alternatives to big tech](https://www.blogs.unicamp.br/geict/?p=891), GEICT, Unicamp, 18 March 2026. External.
- Discord. [Student Hubs guidelines](https://support.discord.com/hc/articles/4407546283031), updated 16 November 2023. External, vendor.
- [Fizz takes hold of campus, users share mixed reactions](https://thedartmouth.com/article/2022/10/fizz-takes-hold-of-campus-users-share-mixed-reactions), The Dartmouth, 25 October 2022. External, student press.
- UP Diliman Interactive Learning Center. [Iskomunidad](https://iskomunidad.upd.edu.ph/index.php/Main_Page). Official, from UP Diliman.
- Discourse. [Pricing](https://www.discourse.org/pricing); [cloud install guide](https://github.com/discourse/discourse/blob/main/docs/INSTALL-cloud.md); [discourse-solved](https://github.com/discourse/discourse-solved). External, vendor.
- Element. [ESS sizing](https://ems-docs.element.io/books/element-server-suite-documentation-lts-2310/page/ess-sizing/revisions/3404), LTS 23.10. External, vendor.
- DigitalOcean. [Droplet pricing](https://www.digitalocean.com/pricing/droplets). External, vendor.
- Resnick, P., Konstan, J., and Chen, Y. Starting new online communities. In R. E. Kraut and P. Resnick, *Building Successful Online Communities: Evidence-Based Social Design*, MIT Press, 2012, as summarized on the [HCL Connections wiki](https://ds-infolib.hcltechsw.com/ldd/lcwiki.nsf/dx/Starting_a_new_online_community). Scholarly.
