# Campus Intranet and Local-First Infrastructure

*A long-term backbone, offered as a direction for VSU ICT and DIGITS*

Much of what VSU's people write, post, and share is made on campus for other people on campus, yet it leaves through an internet provider to someone else's servers and comes back, even when the sender and the reader sit in the same building. [Unresolved] This chapter proposes a different default: what VSU makes lives on VSU's own network and servers, phones keep what their owners need, and the wider internet becomes the outer ring, still open for everything that comes from outside. [Proposed] It remains a direction offered to VSU ICT and the DIGITS program, not a request. CAMPUS does not ask VSU to build, fund, or host anything here. [Established] (D-022)

> **In short.** VSU has already built most of the physical layer this idea needs: a fiber backbone, Wi-Fi across most of the Main Campus, a typhoon-hardened data center, and links to its other campuses. [Established] What CAMPUS would add is a rule about where things live, set out below as four rings. [Proposed] Two parts of the original idea do not survive the evidence: caching whatever people browse, which stopped working for most of the web once it was encrypted, and inspecting traffic to catch breaches, which would mean decrypting everyone's traffic. [Established] Whether the rest is worth doing depends on measurements only VSU ICT can make. [Unresolved]

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | Campus-made information travels through outside platforms and the internet link even between people in the same building, so campus services slow or stop when that link does, and the data sits outside VSU's control. Students pay for mobile data to reach what the university provides, and campus Wi-Fi may serve dormitory residents far better than everyone else. [Unresolved] Nothing has been measured at VSU yet. |
| Who needs it? | Every student on campus, including the majority who live outside the 25 dormitories and cottages that had free Wi-Fi in 2023 [Proposed]; offices that need continuity; people sheltering on campus in emergencies ([Chapter 4.1](04a-emergencies.md)); and VSU ICT as the operator. [Proposed] |
| What evidence? | VSU's public records of its network and of the 2013 typhoon outage, and research on caching and encryption. [Established] Nothing yet on VSU's traffic, hosting, or outage history. [Unresolved] |
| Relation to existing systems? | It builds on infrastructure VSU ICT already runs and depends entirely on its network, hosting, and security, and on DIGITS plans this document does not assume. [Established] |
| Stage? | Research direction only. A small local-first experiment may fit inside prototyping, but a campus deployment is not on the table. [Established] (v0.1 D-012) The first step would be a measurement with VSU ICT. [Proposed] (D-058) |
| Privacy, governance, and cost? | The heaviest of any direction: hardware, staff on call, security, synchronization, and network logs, which are personal data under the Data Privacy Act. [Proposed] |
| How could it be disproved? | Measurement shows little campus-to-campus traffic and rare, short outages; students on campus mostly use their own mobile data; running it costs more than it returns; or DIGITS already covers the need. [Proposed] |

## The idea

### From an offline platform to campus-first

The idea began as an intranet students could use without mobile data, refreshed every few minutes and carried mainly as text. The July 2026 version of this document reframed it after a fair objection: most students already have some internet access. What survived was an architecture organized around how campus information behaves, with tiered sync, now the network's starting architecture. [Established] (D-034) This version widens the idea from one app to the whole campus, and its reasoning runs in five steps. [Proposed]

1. People, documents, offices, and places at VSU sit close together, and most campus information is made and read on campus.
2. Yet a message between two students in the same building, a file shared within a class, or a notice from an office usually travels out through an internet provider to a platform's servers and back.
3. If campus-made information lived on VSU's servers and moved over VSU's own network, it would arrive faster, keep working when the internet link fails, and stay under university governance.
4. The internet stays as the outer layer: for research, for talking with people outside the campus, and for outsiders reaching VSU.
5. Some outside content is read by many people on campus, so one copy kept on campus could serve them all.

Each step is a hypothesis. [Proposed] Steps 1 and 2 need VSU measurements (Q-24). [Unresolved] Step 5 is where the web has changed most since the idea was first technically possible; see the section on caching below. [Established]

### What local-first means here

In software research, local-first means that the primary copy of a person's data lives on their own device and syncs with others when it can (Kleppmann et al., 2019). [Established] In this document the term is wider: VSU-made data, and the services that handle it, live on campus first, and the device-level technique is the innermost ring. [Proposed] (D-055)

### Four rings

```text
Ring 4  Internet    outside sites and platforms, and anyone
                    outside reaching VSU through a gateway
Ring 3  VSU-wide    the other VSU campuses and offices on
                    VSU's network, and a research network
                    if VSU joins one
Ring 2  Campus      VSU's servers, fiber, and Wi-Fi;
                    campus-made data lives here
Ring 1  Device      what each phone or laptop keeps, so the
                    latest notices open with no connection
```

The rule is that each ring keeps working when every ring outside it fails. [Proposed] A phone out of coverage still shows the notices it last synced. If the internet link is cut, campus services still work for anyone on campus Wi-Fi. If the campus network itself goes down, phones fall back on what they keep, and a copy of critical data held off the Main Campus survives. [Proposed] v0.1's hybrid model, a local campus layer syncing with outside services (v0.1 §6.15), is the second and fourth rings on their own. [Established]

## What it is for: access and reliability

The direction's main benefit is accessibility and reliability over the long term: everyone on campus gets free, dependable access to what the university provides, wherever they are on campus, and those services keep working when outside links fail. [Established] (D-059) Five pieces make up that case. [Proposed]

- **Everyone on campus, not only residents.** In 2023, VSU's free Wi-Fi gave dormitory residents 4 Gbps with no cap or time limit, and listed free access in academic departments and other places. [Established] The author's observation is that students outside the dormitories, the majority, are served far less well during class hours. [Unresolved] (Q-29) [Chapter 4.2](04b-campus-network.md) explains why coverage on paper and service at the busiest hour can differ, and how to find out.
- **Lower costs for students.** In the author's experience, many students spend about ₱100 a week on mobile data promos, about ₱1,800 over a semester of roughly 18 weeks, before any home Wi-Fi. [Unresolved] If the campus network carried everything academic, the data a student buys would only need to cover life off campus; Smart's no-expiry Magic Data packs cost ₱249 for 8 GB or ₱349 for 16 GB in March 2026. [Established] The difference is the possible saving per student per semester, and only the student survey can say how large it really is. [Unresolved] (Q-28) A Senate bill filed in August 2026 proposes a 20% student discount on mobile data, a sign that the cost is a national concern. [Established]
- **Light use from afar.** Campus services stay reachable from anywhere through the gateway. Built text-first, with phones fetching only what changed, they use little data; course files and videos are the exception, best downloaded on campus Wi-Fi, as Moodle's mobile app already allows for platforms like VSUEE ([Chapter 4.2](04b-campus-network.md)). [Proposed] Carriers could also let students reach VSU's services without spending data, as Globe and Smart did for DepEd's learning platform in 2020 ([Chapter 9](09-related-work.md)). [Unresolved]
- **Academic first, everything else shared fairly.** The campus network would put university and academic services first, including the cloud services classes rely on, and carry everything else, social media and entertainment included, on a fair share for every user instead of blocking it. [Established] (D-059) This matches the aim VSU's ICT office stated in 2023, that its free Wi-Fi be distributed equitably and used properly, mainly for academic purposes. [Established] How to do it without misjudging what counts as academic is in [Chapter 4.2](04b-campus-network.md). [Proposed] Whether it helps students focus is a hope rather than a mechanism, since anyone can switch to their own data at any time; the case rests on access, cost, and reliability. [Proposed]
- **Where mobile signal is weak.** The author also reports weak mobile signal in parts of the campus. [Unresolved] Where that holds, campus Wi-Fi is the only dependable connection, and carriers can add coverage on a campus, as Smart did at Ifugao State University in 2022 ([Chapter 4.2](04b-campus-network.md)). [Proposed]

## What VSU already has

Public VSU sources describe most of the physical layer that the campus ring needs. How each part is configured, and how much capacity it has today, cannot be seen from outside. [Established]

| Element | What VSU's public sources say | Source |
| --- | --- | --- |
| Fiber backbone | Typhoon Haiyan destroyed the internet leased line and about 90% of the fiber backbone in November 2013. A temporary Wi-Fi backbone carried the network until a new fiber backbone was finished in 2017. | Computer Center projects page |
| Internet links | A 2 Mbps leased line from 2000 to 2013; a 15 Mbps line raised to 60 Mbps in 2018, for 185 Mbps across all links; about 450 Mbps in January 2021, with 1 Gbps as the target; and 4 Gbps set aside for dormitories alone by May 2023, on leased lines funded by CHED | Computer Center, 2018; VSU news, 2021 and 2023 |
| Wi-Fi | About 60% of the campus covered in January 2021, with 95% as the target; close to 98% of the Main Campus on the VSU Unifi network by May 2023, though the first access points, bought in 2017, needed upgrading | VSU news, 2021 and 2023 |
| Dormitories | Free Wi-Fi with no data cap or time limit in 25 dormitories and cottages, for 1,772 resident students | VSU news, 2023 |
| Data center | A climate-proof data center funded by a CHED smart campus grant and designed to withstand typhoons, earthquakes, and flooding; the grant also covered a security management system for VSU's in-house servers | VSU news, 2021 and 2023 |
| Power | A hybrid solar system backs the data center and the administration building and keeps connectivity up during power interruptions | Third SOUA, 2026 |
| Other campuses | The four component campuses, at Alangalang, Isabel, Tolosa, and Villaba, and the liaison offices in Manila and Cebu, are connected to the Main Campus network | VSU news, 2023 |
| Cloud services | Email and documents through Google's education services, and library subscriptions to e-book and journal publishers, all depending on the internet link | Computer Center projects page |
| Continuity | The STRIDES framework for disaster preparedness and continuity of essential services, adopted in 2026 | Third SOUA, 2026 |

Every row is official information from VSU's own pages. [Established] Some of it is years old, and the network has likely changed since. [Unresolved]

Three systems that matter here run on software built to be hosted by the institution itself: VSUEE on Moodle, the helpdesk on osTicket, and staff chat on Output Messenger, which its maker describes as self-hosted and able to work over a local network ([Chapter 9](09-related-work.md)). [Established] Where VSU hosts each of them is not public. [Unresolved] (Q-25)

The roads, in other words, largely exist. What travels on them, and where it is stored, is the open question, and CAMPUS's contribution would be a rule for that and services built to follow it, not a new network. [Proposed]

## Where each kind of traffic should live

Not all traffic can or should stay on campus. Where it belongs depends on who made the content and who it is for. [Proposed]

| Kind of traffic | Examples at VSU | Where it lives | How |
| --- | --- | --- | --- |
| Made on campus, for campus | Office notices, course files, group discussions, messages between members, Hop-It orders | Campus ring | Hosted on VSU servers, so campus users reach them without any provider carrying the traffic |
| Made on campus, for everyone | News, admissions information, research outputs | Campus ring, published outward | Served to outsiders through a public gateway or a public copy |
| Open, stable outside content | Wikipedia, open textbooks, software packages, phone and computer updates | A copy on campus | Mirrors, caches run with the content's owners, and an offline library refreshed on a schedule |
| Licensed outside content | The library's e-books and journals | Internet ring | Through the library's access arrangements, with local copies only where licenses allow |
| Personal or encrypted outside content | Facebook, YouTube, Gmail, banking | Internet ring | Shared copies exist only in caches the platforms place with internet providers |
| Outsiders reaching VSU | Applicants, alumni, partners, staff working away from campus | A gateway into the campus ring | The same addresses as on campus, with sign-in for anything not public |

Every row is a proposal [Proposed], except the fifth, which follows from how encryption works rather than from a choice. [Established]

### Keeping campus traffic on campus is the easy part

When a service runs on VSU's own servers, a phone on campus Wi-Fi reaches it entirely inside VSU's network, whatever address it uses; no internet provider carries that traffic. [Established] Three details decide whether it keeps working when the internet link is down.

- **Names.** Split-horizon DNS, where a name resolves to an inside address on campus and an outside address elsewhere, is optional. Phones set to send their lookups to an outside encrypted resolver never see the inside answer, a gap a 2025 standard addresses (RFC 9704). [Established]
- **Sign-in.** A service hosted on campus still stops if the only way to sign in runs through an outside account provider. VSUEE's login page offers a username-and-password form alongside Google sign-in for @vsu.edu.ph accounts. [Established] How most people sign in is not known. [Unresolved]
- **Certificates.** Web traffic is now encrypted by default, and Google announced that Chrome would warn before opening public sites over plain HTTP by default from October 2026. [Established] Campus services therefore need certificates that browsers trust, and the longest such a certificate may last falls to 200 days from March 2026, 100 days from March 2027, and 47 days from March 2029. [Established] Renewal goes over the internet, so the campus ring can run on its own for weeks, not indefinitely. [Proposed]

### Caching what people browse: what changed

The original idea, in the author's words, was an efficient way to store and retrieve the content many people on campus ask for, designed for this campus, and never a record or analysis of anyone's browsing. [Established] (D-056) Research from the years when shared web caches were common supports the intuition. A 1999 study of Web traffic from about 23,000 University of Washington clients found that a shared cache, holding only what was allowed to be cached, would have answered about 43% of all requests, and that the benefit of sharing rose steeply up to about 2,500 clients and only slowly after. [Established] (Wolman et al., 1999) A campus the size of VSU's Main Campus is well past that point. [Proposed]

What changed is encryption. In 2025, Google reported that about 98% of page loads on public sites in Chrome on Windows used HTTPS, and more on Android and Mac. [Established] A cache in the middle can neither read nor store an encrypted page. A 2014 study at a European mobile carrier measured what that costs: its transparent cache had saved about 15% of all data volume, savings that disappear once content moves entirely to HTTPS. [Established] (Naylor et al., 2014)

The only way to cache encrypted traffic in general is to decrypt it, by making every device trust a campus certificate. Researchers who measured such interception found that nearly all the products doing it made connections less secure, and a large share opened serious security holes. [Established] (Durumeric et al., 2017) It would also mean the university reading every student's banking, messages, and searches, against the Data Privacy Act's principles of legitimate purpose and proportionality. [Proposed] CAMPUS therefore proposes never to do it. [Proposed] (D-057)

What remains is caching designed for the campus, which never keeps a record of who asked for what (D-056):

- **VSU's own services.** VSU holds the certificates for its own sites, so a campus cache can store and serve their pages, course files, and media as often as people ask. This is the caching the original idea meant, and probably the largest share of what a campus cache could hold. [Proposed]
- **Updates and apps.** Apple's content caching keeps software updates, apps, and encrypted iCloud content on a campus machine for every Apple device on the network, and Microsoft Connected Cache does the same for Microsoft content, in a version for enterprise and education that is generally available. [Established] LanCache stores large downloads still served without encryption and passes encrypted traffic through untouched. [Established]
- **Video and social media.** Google Global Cache and Netflix Open Connect place servers inside the networks of internet providers and other operators that meet their traffic and routing requirements; Netflix's embedded servers, for example, require at least 5 Gbps of peak Netflix traffic and an operator with its own public network number. [Established] For a single campus, the realistic lever is its choice of providers and where they connect, not hardware on campus. [Proposed]
- **Names.** A campus DNS resolver keeps recent lookups for everyone, which saves time rather than bandwidth. [Established]

How much this saves at VSU depends on what its traffic is made of, which is not known. [Unresolved] (Q-24) In Sandvine's 2024 global measurements, on-demand streaming was 54% of downstream traffic, and Google, Facebook, and Netflix together carried about two-thirds of traffic on both fixed and mobile networks. [Established] If VSU's traffic looks like that, hosting campus services on campus saves few bytes, and the case rests on speed, continuity, and control rather than bandwidth. [Proposed] VSU's own history points the same way: its internet capacity grew from 2 Mbps before 2013 to at least 4 Gbps by 2023, so bandwidth is something VSU has repeatedly been able to buy. [Proposed]

### A campus library of the open web

The hybrid part of the idea, a campus database filled from what people browse, is better built as a library: chosen collections kept on campus, each labelled with where it came from. [Proposed] (D-056)

- **Reference.** Kiwix packages Wikipedia, Stack Exchange sites, Project Gutenberg, and other open collections as files that a campus server can offer as an ordinary website. The full English Wikipedia with pictures took 110 GB in November 2024. [Established]
- **Learning.** Kolibri ([Chapter 9](09-related-work.md)) and Internet-in-a-Box serve open courses, maps, and references from a local server, and a University of the Philippines Open University team has built and described a fully offline Moodle, the platform VSUEE uses, served over a standalone local network. [Established]
- **Software.** Universities elsewhere run public mirrors of open-source software, such as the University of Science and Technology of China. [Established] A mirror matters to VSU only if its computing courses and labs download heavily, which is not known. [Unresolved]
- **VSU's own knowledge.** Theses, guides, notices, and community knowledge are the part no outside library has, and the part the social/academic network would produce ([Chapter 2](02-social-network.md)). [Proposed]

Every item keeps its source type from [Chapter 8](08-governance.md): a cached Wikipedia article is external, not official. [Proposed] Copying whatever people browse into a permanent store is not proposed. Most of it is encrypted, much of it is personal, keeping and redistributing other people's pages raises copyright questions that caching rules do not settle, and the store would amount to a record of what everyone read. [Proposed] Any collection beyond openly licensed or VSU-made material needs legal review first. [Unresolved]

### Real-time communication on campus

The network's real-time chat raises the cost question this direction has carried since v0.1: always-on services need always-on operation (Q-04). [Unresolved] Two facts narrow it. VSU staff already chat on Output Messenger, software built to run on the institution's own server, while VSU's public list of services shows no equivalent for students ([Chapter 9](09-related-work.md)). [Established] And TU Dresden and LMU Munich run their own Matrix chat servers for students and staff. [Established]

Hosted on campus, a message between two people in the same building would stay inside VSU's network instead of crossing to a platform's servers. [Proposed] Shorter paths matter most when connections are set up: a 2014 study found that the round trips encryption needs before any data moves added the most delay when servers were far away. [Established] (Naylor et al., 2014) Whether slow chat is a problem students actually have is for field research to show. [Unresolved]

An earlier version of the idea would broadcast campus updates once for every device to receive. Wi-Fi works against that: broadcast frames go out at the slowest rate any device needs and without acknowledgments, so networks often convert them into individual copies (RFC 9119). [Established] The practical form of "send once, serve many" is a campus server plus phones that fetch only what changed, the tiered sync of the channel model. [Proposed] (D-034)

### Security without surveillance

The original idea held that a network whose users are known, the students, faculty, and staff, can detect and stop breaches more easily, with university accounts made mandatory to use it. [Established] (D-057) That holds because "known" means identity, not inspection. [Proposed]

- **University accounts at the door.** Joining the campus network takes a VSU account. [Established] (D-057) Wi-Fi that signs each person in this way, as eduroam does, ties every connection to a member without reading what they do. The national research network PREGINET offers eduroam, which UP Diliman, UP Open University, and UP Los Baños use, and under it only a person's home institution can see their network activity. [Established] Whether VSU takes part is not known. [Unresolved] (Q-27)
- **Separate lanes.** Students, staff, servers, and campus devices on separate network segments, so that a compromised phone cannot reach an office's servers. [Proposed]
- **Patterns, not content.** Attacks detected from connection metadata such as volumes, timing, and destinations, kept briefly and in aggregate. [Proposed]

CAMPUS rules out decrypting traffic, keeping records of what each person browses, and filtering beyond what law and VSU policy require. [Proposed] (D-057) Three laws bear on this, and two leave questions open:

1. The Data Privacy Act of 2012 requires transparency, legitimate purpose, and proportionality, and data that is adequate and not excessive. [Established]
2. The Free Internet Access in Public Places Act of 2017 covers state universities and colleges and bars its program's administrators from collecting, using, or disclosing user data, anonymous traffic data included. [Established] Whether any of VSU's Wi-Fi belongs to that program is not known. [Unresolved]
3. The Cybercrime Prevention Act of 2012 requires service providers, defined as any entity that lets its users communicate through a computer system, to preserve traffic data for at least six months. [Established] Whether that covers VSU's network is a legal question. [Unresolved]

In 2023 a VSU task force was drafting a policy for fair, secure, and proper use of the campus Wi-Fi. [Established] Anything CAMPUS proposes here should feed that policy, not write its own. [Proposed]

History carries a warning. Tsinghua University's SMTH bulletin board, among China's first campus discussion networks, was made campus-only and real-name in March 2005 under a Ministry of Education mandate; off-campus addresses were blocked, university network staff took physical control of its server, and its administrators were dismissed. [Established] Infrastructure a university controls can be used to control speech. CAMPUS's answer is governance that binds the institution as well as its members, the question Q-16 already asks of the network. [Proposed]

### Staying up when the link fails

VSU has lived the scenario the campus ring is for. When Typhoon Haiyan struck in November 2013, the university's internet leased line was destroyed and could not be restored, and about 90% of the fiber backbone was lost. [Established] A campus-first answer has four parts. [Proposed]

1. **Island mode.** Campus services, sign-in, and name lookups that keep working with the uplink cut, tested in a scheduled drill rather than discovered in a storm.
2. **Copies away from the data center.** The data center is hardened, but it is still one building. Critical data needs a second copy elsewhere, for example at a component campus over VSU's network or with a cloud provider.
3. **More than one way out.** Uplinks from different providers, entering the campus by different routes. After Typhoon Opong in 2025, the DICT began installing 100 donated satellite terminals across Masbate in October to restore communications. [Established] Satellite service could be VSU's last-resort link. [Proposed] The Konektadong Pinoy Act of 2025 lets data transmission providers operate without a congressional franchise, which may widen VSU's choice of providers. [Established] Its effect on VSU is not known. [Unresolved]
4. **Phones that remember.** The device ring keeps notices and schedules readable when every network is down. (D-034)

VSU's STRIDES framework and its continuity planning are where such measures would belong, and [Chapter 4.1](04a-emergencies.md) works them through for the two emergencies VSU has already faced, including a network that opens to everyone sheltering on campus. [Proposed] (D-060)

## How the hardware would be structured

VSU's land runs from the shore of the Camotes Sea to the top of Mt. Pangasugan, 1,099.4 hectares in all, but its campus grounds cover 61.6 hectares, and its 188 buildings include 21 student dormitories and 17 academic buildings. [Established] Wireless coverage follows people, so planning starts from buildings and gathering places rather than from the land area or a few tall towers. [Proposed]

```text
Phones, laptops, sensors                             Ring 1
      │  Wi-Fi with university sign-in
Access points on PoE+ switches in each building
      │  fiber
Building switches ── fiber backbone ── core switches  Ring 2
      │
Data center: server cluster · storage · backup
Campus services: names · sign-in · caches · library
                 chat · campus systems · CAMPUS apps
      │
Firewalls and gateway ── other VSU campuses           Ring 3
      │
Two or more internet providers on separate routes     Ring 4
```

| Layer | What it does | What VSU has, from public sources | What campus-first would add |
| --- | --- | --- | --- |
| Devices | Apps keep what people need and fetch only what changed | Phones and laptops on campus Wi-Fi | CAMPUS apps built to work offline first [Proposed] |
| Access | Access points powered and connected by building switches, outdoor units where people gather, and wireless bridges where fiber cannot reach | Close to 98% coverage in 2023, with the first access points due for upgrade [Established] | Access points sized by how many people use a space, and sign-in with university accounts [Proposed] |
| Backbone and core | Fiber from buildings to redundant core switches in the data center | A fiber backbone since 2017 [Established]; its layout and redundancy are not public [Unresolved] | Two paths to each major building, so one cut does not isolate it [Proposed] |
| Data center | Servers, storage, backup, power, and cooling | A climate-proof data center with solar backup [Established] | A small cluster for campus services, and a copy of critical data off the Main Campus [Proposed] |
| Campus services | Name lookups, sign-in, caches, the library, chat, and hosting for campus systems and CAMPUS products | Systems built on self-hostable software; where they are hosted is not public [Unresolved] | A rule that campus-made data lives here by default [Proposed] |
| Edge | Firewalls, the gateway for outside access, and links to providers | Leased lines funded by CHED; Globe was a provider in 2018 [Established] | Providers on separate routes, and peering at an exchange if VSU holds its own address space [Proposed] |
| Later | A low-power sensor network and a local message broker | DIGITS envisions sensors for energy, water, and facilities [Established] | Sensor data kept on campus for a smart green campus and any digital twin ([Chapter 5](05-later-directions.md)) [Deferred] |

[Chapter 4.2](04b-campus-network.md) takes the access layer further: why access points rather than towers, how to size crowded rooms, cost references from Philippine state universities, and what changes for VSUEE, the portal, Cumulus, and VSU's other systems. [Proposed]

## How it compares with today

| Question | Today, as far as public sources show | Campus-first, as proposed |
| --- | --- | --- |
| Where campus-made files and messages live | Largely with outside providers: Google's services for email and documents, and Facebook and Messenger for much campus conversation [Unresolved] | On VSU's servers by default, with outside services where they serve better [Proposed] |
| What works when the internet link fails | Outside services stop for everyone on campus; anything hosted on campus may continue if its sign-in does not depend on an outside provider [Unresolved] | Campus services, sign-in, and the library keep working on campus [Proposed] |
| Speed of campus interactions | For services hosted outside, each request crosses to the provider's servers and back [Established] | Requests stay inside VSU's network [Proposed] |
| Who is served best | Dormitory residents, by the author's account [Unresolved] | Everyone on campus, wherever they are [Proposed] |
| Cost to students | Weekly or monthly mobile data packs for academic needs, by the author's account [Unresolved] | Free on campus; smaller packs for life off campus [Proposed] |
| Bandwidth | Bought in steps, from 2 Mbps before 2013 to at least 4 Gbps by 2023 [Established] | Savings mainly from updates and the library if, as worldwide, outside video dominates [Proposed] |
| Running cost | Providers run the outside services; what VSU pays for them is not public [Unresolved] | VSU runs more: patches, backups, monitoring, and staff on call [Proposed] |
| Privacy and control | Data held under the providers' terms, in their data centers [Established] | Data held under VSU's terms, with the Data Privacy Act's duties on VSU [Proposed] |
| Disaster | Data held by providers survives a campus disaster, but the campus loses access to it when its link fails [Established] | The campus works on its own, but its data center becomes a single point of failure unless copied elsewhere [Proposed] |

Nothing in the campus-first design is exotic; universities already run every component listed here. [Established] Its feasibility is an organizational question: whether VSU wants to operate more of its own services, and whether its traffic and outage records show enough campus-to-campus traffic and enough lost time to justify that. [Proposed]

## Who has built pieces of this

No university found in this review runs the whole design, which does not prove that none does. [Unresolved] Many run parts of it: discussion boards hosted on campus networks in China and Taiwan since 1995, university software mirrors, a cloud that 22 German universities run from university data centers, university chat servers, offline libraries in universities without internet, and, in the Philippines, eduroam at three UP campuses, a fully offline Moodle from UP Open University, and a 5G campus testbed at Ateneo. [Established] [Chapter 9](09-related-work.md) reviews each, with its lesson and sources. What CAMPUS adds is a combination rather than a component, shaped by VSU's typhoon history, its resident students, and a network that already joins five campuses, and each difference still needs its evidence half from VSU ICT and the field. [Proposed]

## Stages, each with a way to stop

Every stage is a proposal for VSU ICT to accept, change, or decline. [Proposed] (D-058)

| Stage | What happens | What it needs | Stop or narrow if |
| --- | --- | --- | --- |
| 0. Measure | With VSU ICT: a typical week of traffic by type of destination, a list of outages and what kept working, and a map of where each system is hosted and how people sign in | VSU ICT's agreement; totals only, never data about a person | Nothing to stop yet: this stage produces the evidence |
| 1. Quick wins | A campus name resolver, update caches, and a trial library server | A few ordinary servers and some ICT time | The caches serve little, or the library goes unused for a semester |
| 2. Campus first | Campus-made data hosted on campus by default, sign-in that works on campus without the internet, academic priority with a fair share for everything else under VSU's network policy, and island-mode and emergency drills | Ownership by VSU ICT and the Crisis Management Committee | The drill shows services cannot run on their own, and fixing that costs more than it returns |
| 3. Campus platform | The social/academic network and its chat run on campus servers, if those products pass their own gates | The network's pilot gate ([Chapter 2](02-social-network.md)) | The network fails its pilot |

Research only, and not on the roadmap: broadcasting campus content over radio or multicast, named-data networking, a private campus cellular network with its own SIM cards, keeping copies of outside content beyond what its owners allow, and the sensor platform for a digital twin. [Deferred]

## What would prove or disprove it

- **Traffic.** If campus-to-campus traffic is a small share of VSU's total and outside video dominates, the bandwidth argument fails, and the case narrows to continuity, speed, and control. [Proposed]
- **Outages.** If the internet link rarely fails and never for long, island mode is insurance rather than a need. [Proposed]
- **How students connect.** Filipino smartphone users spend about 56% of their time connected to Wi-Fi, the fourth-highest share in Asia-Pacific, and only 5% rely on mobile data alone, according to Opensignal. [Established] Whether VSU students on campus use campus Wi-Fi or their own data is a question for the student survey (Q-13). [Unresolved] If they mostly use mobile data, campus-hosted services still work but lose their speed and continuity advantages, and Yik Yak's history shows students route around campus Wi-Fi when it suits them ([Chapter 9](09-related-work.md)). [Proposed]
- **Cost to students.** If students spend little on mobile data for academic needs, or would buy the same packs anyway, the savings case fails, and access and reliability carry the argument alone. [Proposed]
- **Capacity.** If VSU ICT cannot staff more services, nothing here should move, however good the evidence. [Proposed]

## A direction, not an ask

VSU ICT owns the network, and DIGITS is VSU's own roadmap. Whether CAMPUS relates to DIGITS at all is for VSU to decide ([Chapter 6](06-vsu-context.md)). [Established] This chapter's job is narrower: to show where CAMPUS products could run if VSU ever chose a campus-first backbone, and to keep today's work from blocking that path. [Proposed]

In practice, that means building products that could move to campus servers later, from open components with no dependence on one cloud's proprietary services. [Proposed] Hop-It is built from components (Docker, PostgreSQL, FastAPI) that run on hardware VSU could own. [Proposed]

## Open questions

- Which functions genuinely benefit from running on campus, and which are better left with outside providers?
- What data needs to sync, and how are conflicts resolved?
- How does sign-in work when the campus is cut off from the internet?
- What infrastructure is realistic for VSU, and who would operate it?
- How much of VSU's traffic runs between campus users and campus systems, and which outside destinations carry the most? (Q-24)
- Where is each VSU system hosted, and which can be signed into only through an outside provider? (Q-25)
- How often, and for how long, has the Main Campus lost its internet link since 2017, and what kept working? (Q-26)
- Is VSU connected to PREGINET or eduroam, and does it hold its own address space for peering? (Q-27)
- Do students on campus connect through campus Wi-Fi or their own mobile data? (Q-13)
- How much do VSU students spend on mobile data, and how much of it goes to academic needs? (Q-28)
- How well does campus Wi-Fi serve students outside the dormitories during class hours, and where is mobile signal weak? (Q-29)
- Is the added complexity worth it?

[Unresolved] (v0.1 §7.7)

## Sources

Checked on 8 October 2026. The source type follows each entry ([Chapter 8](08-governance.md)).

- Visayas State University. [VSU's ICT team successfully deploys free WIFI to all main campus dorms](https://www.vsu.edu.ph/articles/news/2353-vsu-s-ict-team-successfully-deploys-free-wifi-to-all-main-campus-dorms), 30 May 2023; [VSU gets 15M CHED grant to build smart campus](https://www.vsu.edu.ph/articles/news/1889-vsu-gets-15m-ched-grant-to-build-smart-campus), 18 January 2021; [Third State of the University Address](https://www.vsu.edu.ph/articles/news/3045-3rd-state-of-the-university-address), 18 September 2026; [Location and Facilities](https://www.vsu.edu.ph/about/overview/location-and-facilities); [E-Learning Environment login](https://elearning.vsu.edu.ph/login/index.php). Official.
- VSU University Computer Center. [Projects](https://ucc.vsu.edu.ph/projects), undated, describing work through 2017; [Leased line upgraded from 15mbps to 60mbps](https://ucc.vsu.edu.ph/2018/03/15/leased-line-upgraded-from-15mbps-to-60mbps), March 2018. Official.
- [Republic Act No. 10173, Data Privacy Act of 2012](https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html); [Republic Act No. 10929, Free Internet Access in Public Places Act](https://lawphil.net/statutes/repacts/ra2017/ra_10929_2017.html); [Republic Act No. 10175, Cybercrime Prevention Act of 2012](https://lawphil.net/statutes/repacts/ra2012/ra_10175_2012.html). Official.
- DOST-ASTI. [PREGINET services](https://preginet.asti.dost.gov.ph/service); [PREGINET connects institutions with eduroam](https://asti.dost.gov.ph/news-articles/paving-the-way-for-ph-research-dost-astis-preginet-connects-institutions-with-eduroam/), 6 February 2024. Official.
- [Philippines and access for all: Konektadong Pinoy Act ushers in a new connectivity regime](https://conventuslaw.com/report/philippines-and-access-for-all-konektadong-pinoy-act-ushers-in-a-new-connectivity-regime-implementing-rules-issued/), Conventus Law, on Republic Act No. 12234 and its implementing rules. External.
- [DICT deploys 100 Starlink units in Masbate](https://newsbytes.ph/2025/10/27/dict-deploys-100-starlink-units-in-masbate-to-restore-connectivity-after-typhoon-opong/), NewsBytes.PH, 27 October 2025. External.
- [Philippines leads Asia-Pacific in WiFi usage](https://www.philstar.com/business/2026/02/04/2505478/philippines-leads-asia-pacific-wifi-usage-study), Philstar, 4 February 2026, reporting an Opensignal study. External.
- [Smart Magic Data prices](https://www.noypigeeks.com/?p=264989), NoypiGeeks, 4 March 2026. External.
- [Tulfo pushes for 20% student discount on mobile data](https://newsinfo.inquirer.net/2285443/tulfo-pushes-for-20-student-discount-on-mobile-data), Inquirer, 16 August 2026, on Senate Bill No. 2275. External.
- [Sandvine's 2024 Global Internet Phenomena Report](https://csimagazine.com/csi/sandvine-2024-internet-report.php), CSI Magazine, April 2024. External.
- [HTTPS by default](https://security.googleblog.com/2025/10/https-by-default.html), Google, October 2025. External.
- CA/Browser Forum. [Ballot SC081v3](https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/), April 2025, with its schedule summarized by [DNSimple](https://support.dnsimple.com/articles/announcement-ssl-certificate-validity-changes/). External.
- IETF. [RFC 9704: Establishing Local DNS Authority in Validated Split-Horizon Environments](https://www.rfc-editor.org/rfc/rfc9704.html), January 2025; [RFC 9119: Multicast Considerations over IEEE 802 Wireless Media](https://www.rfc-editor.org/rfc/rfc9119.html), October 2021. External, standards.
- Caches: Apple, [Intro to content caching](https://support.apple.com/guide/deployment/intro-to-content-caching-depde72e125f/web); Microsoft, [Microsoft Connected Cache](https://learn.microsoft.com/windows/deployment/do/waas-microsoft-connected-cache); [LanCache documentation](https://lancache.net/docs/); Google, [Introduction to GGC](https://support.google.com/interconnect/answer/9058809?hl=en); [Open Connect](https://en.wikipedia.org/wiki/Open_Connect), Wikipedia. External.
- [Output Messenger](https://www.outputmessenger.com/), the maker's site. External, vendor.
- [Kiwix](https://en.wikipedia.org/wiki/Kiwix), Wikipedia; [Internet-in-a-Box](https://internet-in-a-box.org/). External.
- [USTC Open Source Software Mirror](https://mirrors.ustc.edu.cn/), University of Science and Technology of China. External.
- [SMTH BBS](https://en.wikipedia.org/wiki/SMTH_BBS), Wikipedia. External.
- Wolman, A., Voelker, G. M., Sharma, N., Cardwell, N., Karlin, A., and Levy, H. M. (1999). [On the scale and performance of cooperative Web proxy caching](https://research.cs.washington.edu/networking/websys/pubs/sosp99). *SOSP 1999*. Scholarly.
- Naylor, D., Finamore, A., Leontiadis, I., Grunenberger, Y., Mellia, M., Munafò, M., Papagiannaki, K., and Steenkiste, P. (2014). The Cost of the "S" in HTTPS. *CoNEXT 2014*, 133–140. [doi:10.1145/2674005.2674991](https://doi.org/10.1145/2674005.2674991). Scholarly.
- Durumeric, Z., Ma, Z., Springall, D., Barnes, R., Sullivan, N., Bursztein, E., Bailey, M., Halderman, J. A., and Paxson, V. (2017). [The Security Impact of HTTPS Interception](https://www.ndss-symposium.org/ndss2017/ndss-2017-programme/security-impact-https-interception). *NDSS 2017*. Scholarly.
- Kleppmann, M., Wiggins, A., van Hardenberg, P., and McGranaghan, M. (2019). Local-first software: you own your data, in spite of the cloud. *Onward! 2019*, 154–178. [doi:10.1145/3359591.3359737](https://doi.org/10.1145/3359591.3359737). Scholarly.
- Lactuan, L. K., Pugoy, R. A., and others (2026). [Building a Fully Offline Moodle Ecosystem: Designing Local-Network Learning for Connectivity-Restricted Environments](https://indico.global/event/15189/contributions/142269/). MoodleMoot Japan 2026. Scholarly, conference abstract.
