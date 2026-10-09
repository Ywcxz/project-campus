# Wireless Access and Existing Systems

*How people would connect, where the network strains, and what changes for VSU's systems*

The intranet direction rests on two practical questions: whether people can actually connect wherever they are on campus, and what happens to the systems VSU already runs. This chapter takes both from public sources. The real answers sit with VSU ICT, which runs the network. [Established]

## How campus Wi-Fi serves people today

VSU's public record describes broad coverage. [Established]

- In January 2021, Wi-Fi covered about 60% of the campus, with 95% as the target. By May 2023, close to 98% of the Main Campus was on the VSU Unifi network.
- In 2023, free Wi-Fi reached 1,772 students in 25 dormitories and cottages with no data cap or time limit, on 4 Gbps of internet set aside for them. Free access was also listed for all students in academic departments, the library, and other places, including the VSU Market.
- New access points were being ordered for academic units and offices in 2023, and the first ones, bought in 2017, needed upgrading.

The author's observation as an alumnus is different: in practice the network serves dormitory residents best, and falls short for the majority, students outside the dormitories who are on campus during class hours. The author also reports weak mobile signal in parts of the campus. [Unresolved] (Q-29)

Both accounts can be true, because a network can fail people in three separate ways. [Proposed]

| Way a network falls short | What it means | What shows it |
| --- | --- | --- |
| Coverage | No usable signal reaches a place | A signal map, or a walk with a phone |
| Capacity | Signal reaches the room, but there is not enough airtime for everyone at the busiest hour | Clients per access point and airtime use at peak, from the network's controller |
| Access and allocation | People cannot sign in easily, or bandwidth is divided so that some places get far more than others | The sign-in rules, and how bandwidth is allocated across the campus |

Capacity is the likeliest culprit in crowded classrooms. [Proposed] Cisco Meraki's design guide for dense Wi-Fi plans around 25 devices per radio, and notes that adding access points on the same channel where their coverage overlaps does not add capacity. [Established]

Finding out which of the three is happening needs evidence from both sides. [Proposed]

| Evidence | From | What it shows |
| --- | --- | --- |
| Survey questions on where students connect, how it works by place and time, and what they spend on mobile data | Students, through the student survey | Experience, and the cost to students (Q-28) |
| Clients per access point, airtime use, peak hours, and failed sign-ins, as totals only | VSU ICT's controller | Coverage and capacity |
| A signal walk, measuring each carrier's mobile signal along set routes with the author's own phones | The author, without touching VSU's network | Where mobile signal is weak |
| Counts of helpdesk tickets about Wi-Fi, by topic | VSU ICT | Where people struggle most |

## Why access points, and what towers can and cannot do

A wireless link has two directions, and the phone is the weak one. Fortinet's configuration guide notes that an access point can transmit far, while clients may lack the power for the access point to hear them; it puts an iPhone's transmit power around 10 dBm and most laptops' around 14 dBm, and advises matching an access point's power to the weakest client. [Established] A tall mast with a powerful Wi-Fi radio can therefore be heard across campus without hearing the phones that answer it. Wi-Fi for phones works as many small cells close to where people are, not as one big one. [Proposed]

| Option | Good for | Limits | Fit at VSU |
| --- | --- | --- | --- |
| Indoor access points on newer standards | Classrooms, the library, offices, dormitories | Must be sized room by room. The 6 GHz band, opened in the Philippines in 2024, allows up to 250 mW indoors, and only newer phones use it | The main answer, starting with the access points bought in 2017 [Proposed] |
| Outdoor access points on buildings or poles | Walkways, canteens, the market, and other gathering places | Weatherproofing and power; outdoors, the 6 GHz band is limited to 25 mW | Places where students wait between classes [Proposed] |
| Wireless bridges | Linking buildings that fiber cannot reach | They carry the network between buildings, not to phones | VSU ran a temporary Wi-Fi backbone this way after Haiyan [Established] |
| Mesh access points | Coverage where no cable can be laid | Throughput roughly halves with each wireless hop | Temporary or remote spots only [Proposed] |
| Carrier cell sites on campus | Weak mobile signal | Owned and run by the carriers, with permits and siting to settle | Ifugao State University hosted a Smart cell site on its campus in 2022 [Established]; a lease to a carrier or tower company could also earn VSU income [Proposed] |
| A private campus cellular network | Campus-owned coverage through phones' own cellular radios | No Philippine rule setting aside spectrum for private campus networks turned up in this review, SIMs would be needed for thousands of users, and it costs far more | Research only; Ateneo de Manila reported a campus 5G testbed built with carrier partners in 2020 [Deferred] |
| Wi-Fi HaLow and LoRaWAN | Sensors over long range | Built for sensors, not phones; HaLow reaches about 1 km in sub-1 GHz bands | Later, for the smart green campus sensors DIGITS envisions [Deferred] |

The 6 GHz band matters most for crowded rooms. The National Telecommunications Commission opened 5925 to 6425 MHz to Wi-Fi in 2024, at up to 250 mW indoors and 25 mW for general use. [Established] Most of VSU's capacity gain would come from more, better-placed indoor access points; towers would mainly help the carriers' mobile signal. [Proposed]

## Dense spots that move

Crowds move with the class schedule, and access points cannot follow them, so a network is sized for each room's busiest hour. [Proposed] York University's building standard plans one access point per 25 to 30 occupants and assumes each person carries at least two devices, and Cisco Meraki's guide works an example of 600 users needing about 18 access points. [Established] By that rule a hall seating 300 needs ten to twelve access points by itself, so a campus serving thousands at once needs hundreds, not dozens. [Proposed]

- **Room by room.** Size each room from the room inventory and the class schedule. [Proposed]
- **More channels.** Use 6 GHz indoors where devices support it. [Proposed] Cisco Meraki's guide recommends narrow 20 MHz channels in dense rooms. [Established]
- **Fairness on the air.** Per-device bandwidth limits and airtime fairness keep a few heavy users from starving a room. [Proposed]
- **Watch and adjust.** The controller's history shows where demand actually peaks, so access points can be added or moved over the years; portable units can cover events; and schedules can spread the peaks. [Proposed]

## Academic first, a fair share for the rest

The owner's direction is that the campus network puts university and academic services first and carries everything else on a fair share, without blocking it (D-059). [Established] Other universities have done versions of this. [Established]

- **Truman State University** ranks traffic in five tiers: mission-critical services such as its learning platform, university servers, and library databases; academic browsing and collaboration, with academic buildings and classrooms given priority; non-academic browsing, streaming, and gaming; large downloads and updates; and peer-to-peer file sharing, capped. Lower tiers are slowed rather than blocked.
- **Purdue University** found in 2016 that only 4% of the traffic in one life sciences building went to academic sites. It then filtered bandwidth-heavy sites such as Netflix, Hulu, and Steam in classrooms on weekdays from 7 a.m. to 9 p.m., kept a separate recreational network in hallways and lounges, left residence halls out, let instructors ask for exceptions, and saw campus bandwidth use fall by about a third.
- **The University of San Diego** chose to buy more capacity instead. A local video cache it tried stopped helping within about a year, once Netflix encrypted its traffic.

VSU's own stated aim, in 2023, was free Wi-Fi distributed equitably and used properly, mainly for academic purposes. [Established] Five cautions apply. [Proposed]

1. **"Academic" is blurry.** Teachers use YouTube, as one American university's IT chief observed, and in the author's experience many VSU classes coordinate through Messenger group chats. [Unresolved] Until the social/academic network exists, slowing Messenger could slow classes. Priority should follow destinations and places, such as VSUEE, library databases, the education services of Google and Microsoft, and classrooms during class hours, rather than guesses about intent. [Proposed]
2. **Encryption keeps hiding more.** Sorting traffic by destination gets harder as Encrypted Client Hello masks the name of the site a connection goes to; Cloudflare turns it on by default for sites on its free plan. [Established]
3. **Rules in public.** The tiers, and how to ask for an exception, should be published, and traffic slowed, never blocked. [Proposed]
4. **Dormitories are homes.** Purdue left its residence halls out, and VSU's dormitory Wi-Fi in 2023 had no cap or time limit. [Established] A fair share there should be generous. [Proposed]
5. **The free Wi-Fi law.** If any of VSU's Wi-Fi belongs to the national free Wi-Fi program, the law behind it allows filtering only for clear technical risks, besides a ban on pornographic sites. [Established] Whether it does is not known. [Unresolved]

Whether putting academic traffic first helps students focus is a hope rather than a mechanism, since anyone can switch to their own mobile data at any time. The case rests on access, cost, and reliability. [Proposed]

## University accounts at the door

Joining the campus network takes a VSU account. [Established] (D-057) The kind of sign-in eduroam uses would tie each connection to a member without reading what they do. [Proposed] It is the first check, not the last: each service still checks who is asking, on campus or off ([Chapter 2](02-intranet.md); D-087). [Proposed] Four details decide whether it works.

- **Which accounts.** VSU's students have university Google accounts ([Chapter 10](10-related-work.md)). Google's Secure LDAP service lets campus systems such as FreeRADIUS check those accounts and is included in the Education Fundamentals, Standard, and Plus editions, but Google warns that Wi-Fi sign-in can exceed its daily query limits with many users or irregular internet connectivity. [Established] If every sign-in had to reach Google, an internet outage would lock people out of the campus network itself; a campus copy of the directory, or cached credentials, keeps island mode working. [Proposed] (Q-32)
- **Exceptions.** Guests need a visitor network, and emergency mode opens a network to everyone sheltering on campus ([Chapter 2.1](02a-emergencies.md)). [Proposed]
- **Turnover.** Every new class needs accounts on day one; 2,604 first-year students enrolled at the Main Campus in 2026. [Established] Accounts also have to close cleanly when people leave. [Proposed]
- **Logs.** Sign-in ties every connection to a person, so connection logs are personal data and are kept briefly (D-057). [Proposed]

## What changes for VSU's existing systems

Nothing here moves a system or changes its authority; where each system runs is VSU ICT's decision. [Established] (D-004)

| System | What is public | Effect of campus-first | Still open |
| --- | --- | --- | --- |
| VSUEE | A Moodle site with username-and-password and Google sign-in, and a mobile app | Hosted on campus, or fronted by a campus cache for its files, it would serve campus users inside VSU's network [Proposed]. Moodle's mobile app can download courses for offline study, syncs about every ten minutes, and can be set to sync only over Wi-Fi [Established] | Hosting, and how most people sign in (Q-25) |
| my.VSU portal | Grades, subjects, and schedules | Peaks at enrollment and grade release could be served locally on campus, while users off campus come through the gateway [Proposed] | Hosting, and its relation to the OneVSU Portal (Q-18) |
| Cumulus | A helpdesk topic paired with HRIS; function and owner unconfirmed | As a system of record it keeps its authority; only where it runs and how people sign in could change [Proposed] | Function, owner, and hosting (Q-10) |
| UMIS | VSU's University Management Information System; a ₱33.6 million project, reported in June 2026, aims to enhance it, and includes the solar backup for VSU's network (E-043) | As a system of record it keeps its authority; campus-first bears on it mainly through staying available in outages, the project's own aim [Proposed] | What it covers, and where it is hosted (Q-10, Q-25) |
| Document tracker and helpdesk | Document requests with tracking, and an osTicket helpdesk | Small traffic; both would keep working in an outage if hosted on campus [Proposed] | Hosting (Q-25) |
| Output Messenger | Staff chat, software built for the institution's own server | Already campus-first by design if hosted on campus; students still have no equivalent ([Chapter 3](03-social-network.md)) [Proposed] | Hosting (Q-25) |
| WAIS | Localized weather advisories, becoming a multi-hazard dashboard | A campus copy would keep advisories flowing in an outage ([Chapter 2.1](02a-emergencies.md)) [Proposed] | Hosting (Q-25) |
| Google Workspace and Microsoft 365 | Google Workspace accounts for all registered Main Campus students since October 2022, and more than 18,000 Microsoft 365 licenses from September 2023 (E-021, E-045) | They stay in the internet ring, with academic priority [Proposed] | How sign-in to the network would use these accounts (Q-32) |
| DIGITS systems | OneVSU Mobile, the OneVSU Portal, the ERP, the Executive Dashboard, MATS, and electronic attendance, named in the Third SOUA | They could run on a campus-first backbone if VSU chose; CAMPUS assumes nothing about their architecture [Established] (D-017) | Q-11 and Q-18 |
| LANDBANK cashless payments | Rolled out to students and employees from 2 September 2026 | Banking stays in the internet ring; nothing changes [Proposed] | None |
| Library e-resources | Subscriptions to e-book and journal publishers | They stay in the internet ring, under their licenses [Proposed] | None |

Across all of them, five things would change for VSU ICT: how people sign in, which is the largest change; name lookups and certificates for services on campus; capacity at peaks such as enrollment; monitoring; and the staff to run more on campus. [Proposed]

## Long-term cost

- **Access points wear out.** VSU's 2017 access points were already due for upgrade by 2023, and the University of Richmond plans to replace its whole wireless network every five years. [Established] A budget would treat access points as a five-to-six-year cycle, switches as longer, and fiber as decades. [Proposed]
- **Growth touches everything behind the access point.** More access points need more powered switch ports, faster links from each building, and more controller capacity. If, as its name suggests, the VSU Unifi network runs on a single vendor's product line, expansion would likely stay within that line. [Unresolved]
- **Reference costs.** VSU's smart campus grant from CHED was ₱15 million for its first phase, signed in December 2020, with ₱25 million more announced for a second phase. [Established] VSU's hybrid solar generator cost ₱1,499,200, within a ₱33.6 million project funded under the 2025 General Appropriations Act. [Established] (E-043) UP Mindanao's terms of reference for the third phase of its fiber network, procurement PBM 2023-27, set a budget of ₱28.2 million for about 5.6 km of new fiber links, switches, a three-node server cluster with about 69 TB of raw solid-state storage, a 24 TB backup appliance, and software licenses, among other items. [Established]
- **A different kind of smart campus.** Eastern Visayas State University began a smart campus project in 2024, budgeted at ₱1.5 billion for its first phase, with an innovation hub, a fabrication laboratory, smart classrooms, command-and-control facilities, tracking cameras, and face-recognition ID checks. [Established] CAMPUS's version is about where information lives and who governs it, and it proposes no cameras or face recognition. [Proposed]
- **The other side of the ledger.** Savings to students ([Chapter 2](02-intranet.md)) times the number of students, set against the cost of the network, once the survey supplies real numbers. [Proposed]
- **People.** The largest recurring cost is staff: keeping services patched, backed up, monitored, and answered at any hour. VSU ICT's staffing is not public. [Unresolved]

## Open questions

- How much do VSU students spend on mobile data, and where do they connect on campus? (Q-28)
- How well does campus Wi-Fi serve students outside the dormitories during class hours, and where is mobile signal weak? (Q-29)
- Which identity system would check university accounts at network sign-in, and would it work on campus during an outage? (Q-32)
- Would a carrier or tower company place a cell site on campus, and on what terms?

[Unresolved]

## Sources

Checked on 8 October 2026, except those added on 9 October 2026 after the owner's brainstorm. The source type follows each entry ([Chapter 9](09-governance.md)).

- Visayas State University. [VSU's ICT team successfully deploys free WIFI to all main campus dorms](https://www.vsu.edu.ph/articles/news/2353-vsu-s-ict-team-successfully-deploys-free-wifi-to-all-main-campus-dorms), 30 May 2023; [VSU gets 15M CHED grant to build smart campus](https://www.vsu.edu.ph/articles/news/1889-vsu-gets-15m-ched-grant-to-build-smart-campus), 18 January 2021; [Third State of the University Address](https://www.vsu.edu.ph/articles/news/3045-3rd-state-of-the-university-address), 18 September 2026. Official.
- Visayas State University, added 9 October 2026. [VSU rolls out 9,245 free Google Workspace accounts to students in Main Campus](https://www.vsu.edu.ph/articles/news/2255-vsu-rolls-out-9-245-free-google-workspace-accounts-to-all-students-in-main-campus), 4 October 2022; [PLDT inks agreement with VSU; Smart Campus equipment given to colleges](https://www.vsu.edu.ph/articles/news/2401-pldt-inks-agreement-with-vsu-smart-campus-equipment-distributed-to-colleges), 7 September 2023; [VSU installs hybrid solar power system to strengthen ICT resilience](https://www.vsu.edu.ph/articles/news/3007-vsu-installs-hybrid-solar-power-system-to-strengthen-ict-resilience), 30 June 2026. Official.
- VSU University Computer Center. [Projects](https://ucc.vsu.edu.ph/projects), undated, describing work through 2017. Official.
- Cisco Meraki. [High-density Wi-Fi deployments](https://documentation.meraki.com/Architectures_and_Best_Practices/Cisco_Meraki_Best_Practice_Design/Best_Practice_Design_-_MR_Wireless/High_Density_Wi-Fi_Deployments) and [Recommendations for outdoor wireless mesh repeater deployments](https://documentation.meraki.com/Wireless/Design_and_Configure/Architecture_and_Best_Practices/Recommendations_for_Outdoor_Wireless_Mesh_Repeater_Deployments). External, vendor.
- Fortinet. [Signal strength issues](https://docs.fortinet.com/document/fortiap/6.4.2/fortiwifi-and-fortiap-configuration-guide/68434), FortiWiFi and FortiAP configuration guide 6.4.2. External, vendor.
- York University. [Data Comm WIFI AP building standard](https://facilities.info.yorku.ca/files/2018/11/27-21-33-Data-Comm-WIFI-AP-v3.2-20180726.pdf), 2018. External, from another university.
- [NTC allocates partial 6 GHz band for Wi-Fi 7 in the Philippines](https://www.techporn.ph/ntc-allocates-partial-6-ghz-band-for-wi-fi-7-in-the-philippines/), TechPorn, 21 August 2024, on NTC Memorandum Circular No. 002-07-2024. External.
- Ifugao State University. [Smart signal expected as IFSU houses cell site](https://ifsu.edu.ph/postview/eyJpdiI6Ikw0MWVjVUxNcnJDWDJoa2NQaUNQblE9PSIsInZhbHVlIjoidGRzaDhiMytEeWVZUFdmcWc5K3ZIUT09IiwibWFjIjoiYWI3NDIwNDc1YTg5MjJjNTNmZThjNjA2MmM5MTE0YzUwMzliZDJmZTdlNDU4OWFhMzVlNTBjZDkzYWEwNjY1ZSJ9), 16 May 2022. Official, from IFSU.
- Wi-Fi Alliance. [Wi-Fi CERTIFIED HaLow](https://www.wi-fi.org/discover-wi-fi/wi-fi-certified-halow). External.
- Truman State University. [Bandwidth management](https://its.truman.edu/docs/bandwidth-management). External, from another university.
- [Academics vs. entertainment: how colleges manage competing demands on the network](https://edtechmagazine.com/higher/article/2019/08/academics-vs-entertainment-how-colleges-manage-competing-demands-network), EdTech Magazine, 6 August 2019. External.
- Cloudflare. [Encrypted ClientHello (ECH)](https://developers.cloudflare.com/ssl/edge-certificates/ech). External, vendor.
- [Republic Act No. 10929, Free Internet Access in Public Places Act](https://lawphil.net/statutes/repacts/ra2017/ra_10929_2017.html). Official.
- Google. [About the Secure LDAP service](https://knowledge.workspace.google.com/admin/apps/about-the-secure-ldap-service) and [Add LDAP clients](https://knowledge.workspace.google.com/admin/apps/add-ldap-clients). External, vendor.
- Moodle. [Moodle app offline features](https://docs.moodle.org/en/Moodle_app_offline_features). External.
- University of Richmond. [Planning the next wireless network](https://is.richmond.edu/about/newsletter/202310/wireless.html), October 2023. External, from another university.
- UP Mindanao. [Terms of reference, Improvement of the UP Mindanao Fiber Optic Network, Phase III](https://www2.upmin.edu.ph/images/TERMS_OF_REFERENCE___Improvement_of_the_UP_Mindanao_Fiber_Optic_Network_Phase_III__PBM_2023_27-compressed.pdf), PBM 2023-27. Official, from UP Mindanao.
- [Eastern Visayas university starts P1.5-B smart campus project](https://alpha.pna.gov.ph/articles/1223123), Philippine News Agency, 22 April 2024. External.
- [University Campus 5G Testbed and Use Case Deployments in the Philippines](https://archium.ateneo.edu/ecce-faculty-pubs/118/), *Broadband Access Communication Technologies XIV*, SPIE 11307, 2020. Scholarly.
