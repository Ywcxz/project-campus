# How the Network Would Work

*Members, channels, labels, and rules: a design to test before it is built*

This chapter turns the principles of [Chapter 2](02-social-network.md) into a working design: who can join, how the network is organized, what people post and see, how it handles questions, notices, trade, and pseudonymous speech, how it is governed, and what runs underneath. Every part is a proposal for field research and a pilot to test, and the first version would include only what the evidence calls for. [Proposed]

> **In short.** Members sign in with VSU accounts and carry roles. They join channels that belong to real VSU units, places, and organizations, each with a named owner. Everything they post has a type, such as a notice, a question, or a listing, and a label saying whether it is official, community knowledge, opinion, unverified, scholarly, or external. The home screen shows what matters to each member and then ends, notifications have a budget, and pseudonyms hide a member from other members but not from a reveal process that needs two keys. Rules are written with the community, and everything runs on open components VSU could host. [Proposed]

## The model at a glance

```text
Member ──holds──► Role     student · faculty · staff · office · organization
   │
   └──joins──► Channel ──belongs to──► a VSU unit, place, or organization,
                  │                    with a named owner
                  └──holds──► Post     notice · question · answer · discussion
                                │      guide · event · listing · poll · report
                                ├──carries──► Label   official · community
                                │             knowledge · opinion · unverified
                                │             · scholarly · external
                                └──may hand off to──► a VSU system
```

These are concepts to test, not a database schema. [Proposed] They follow the channel model the network starts from (D-034) and the relational domains of [Chapter 1](01-campus.md). [Established]

## Members and roles

### Who can join

Membership would follow VSU accounts. Since 2023, VSU has given every student, faculty member, and employee a university Google account on the vsu.edu.ph domain, with more than 16,000 Google and Microsoft licenses ready across its five campuses and its Integrated High School that year. [Established] Signing in with those accounts would prove membership without a new password, if VSU allows it. [Unresolved] (Q-06) VSU already limits two student-facing services to its accounts: VSUEE offers Google sign-in with them, and WAIS is open only to VSU account holders. [Established]

Four details of VSU's accounts shape the design. [Proposed]

- **Timing.** Student accounts are issued after the late enrollment period. [Established] New students need another way in during their first weeks, such as a temporary pass tied to their enrollment, or a pilot has to start after accounts are issued. [Proposed] (Q-38)
- **Names.** Student accounts are named after school ID numbers by default. [Established] The network would show a name each member chooses and never display an ID number. [Proposed]
- **High school students.** Integrated High School students also hold VSU accounts. [Established] The pilot admits college members only. [Proposed] (D-069)
- **Graduation.** Accounts can be revoked on non-enrollment or graduation. [Established] Alumni would need a separate path, added later. [Proposed]

### Roles

| Role | Who | What it adds |
| --- | --- | --- |
| Student | Enrolled college students | Program and year, shown only if the member chooses |
| Faculty | Teaching and research staff | Department, and consultation hours |
| Staff | Non-teaching employees | Office |
| Office account | A shared account for an office, used by named staff | The only accounts that can post official notices; every post records which staff member made it |
| Organization account | A recognized organization, run by its officers | Survives each change of officers |
| Alumni, later | Graduates, verified separately | Mentoring and question sessions |
| Guest, later | Applicants, parents, and partners, by invitation | Chosen public channels only |

Program and year are education details, which the Data Privacy Act counts as sensitive personal information; processing them needs the member's consent or another basis the Act allows. [Established] Showing them should be each member's choice. [Proposed] Where role details come from is open: VSU's records with VSU's permission, verification by units and organizations, or a member's own statement marked as unverified. [Unresolved] (Q-39)

## Channels: the network shaped like VSU

A channel is the network's unit, a place where a defined group posts and reads. Each has a type, an owner, a membership rule, posting rights, and a sync speed. [Proposed] (D-034, D-062)

| Channel type | Examples at VSU | Owner | Who joins | Who posts | Sync |
| --- | --- | --- | --- | --- | --- |
| University official | The President's office, OVPSAS, the registrar, the disaster risk management office | The office | Every member, automatically | Office accounts; members ask in a linked thread | Within about a minute |
| Faculty and department | The ten Main Campus faculties and their departments | The faculty or department | Its students and staff | Staff post notices; members discuss | Notices fast, discussion slower |
| Organization | The 57 accredited organizations of 2022–23 | Officers, with their adviser | Members | Members | Slower |
| Student council | The University Supreme Student Council and faculty councils | The council | Its constituents | Council and members | Notices fast, discussion slower |
| Residence | VSU's 21 student dormitories | Dormitory management, with residents | Residents | Residents and management | Slower |
| Place | The VSU Market, the library | The office that manages the place | Anyone | Members | Slower |
| Topic | A crop, coastal research, a sport | The members who start it | Anyone | Members | Slower |
| Marketplace | Books, uniforms, gadgets, dormitory items | The network's moderators | Verified members | Verified members | Slower |
| Concerns | Problems with services or facilities | The student council and OVPSAS, jointly | Students | Students, under a pseudonym if they choose | Slower |

The examples come from VSU's public pages. [Established] Which channels a pilot opens depends on the community it serves (Q-34). [Proposed]

Three rules keep channels healthy. [Proposed]

- **Structure follows VSU.** VSU replaced its colleges with faculties in January 2025, after its 2022–23 list of organizations was made. [Established] The list of units should come from VSU and change when VSU's structure does, not be kept by CAMPUS. [Proposed] (D-062)
- **Every channel has an owner.** A channel whose owner leaves without a successor is archived, readable but closed, so that it cannot drift into something else, as a lost-and-found group on Facebook did ([Chapter 2](02-social-network.md)). [Proposed]
- **Channels open when people need them.** Research on starting online communities advises splitting spaces only after they become active, because many empty spaces make a community look dead. [Established] (Resnick, Konstan, and Chen, 2012) A pilot starts with few channels and adds them on demand. [Proposed]

## Posts and their labels

### Types of post

| Type | For | Who can post | It ends when |
| --- | --- | --- | --- |
| Notice | Announcements, advisories, deadlines | Office accounts in official channels; organizations and councils in their own | It expires, or is updated or withdrawn with its history shown |
| Question | Anything about campus life | Members | It is answered, confirmed by an office, or closed |
| Answer | Replying to a question | Members, under name and role, or a pseudonym where the section allows | It is confirmed, replaced, or marked outdated |
| Discussion | Open conversation | Members | It never formally ends; quiet threads fade from view |
| Guide | How-to knowledge that many people edit | Members, checked by the office it concerns | It is reviewed each semester and always shows its date |
| Event | Activities with a time and place | Organizations, offices, and members | It has happened |
| Listing | Items and services offered | Verified members | It is sold, withdrawn, or expired |
| Poll | A question put to a channel | Channel owners | It closes, and its results are kept |
| Report | A problem with a facility or service | Members | It is handed to the office or system that handles it |

### Labels

Every post carries one of the six information types of [Chapter 8](08-governance.md), set by who posted it and where, not chosen freely. [Proposed] (D-063)

- **Official:** only office accounts, only in their official channels.
- **Community knowledge:** guides, and peer answers an office has confirmed.
- **Opinion:** reviews and personal views.
- **Unverified:** claims about official matters from anyone but the office concerned, such as a report that classes are suspended, until the office confirms or denies them.
- **Scholarly:** theses and papers, with their authorship kept.
- **External:** links to outside sources such as PAGASA bulletins.

Labels travel. A reshare or quote keeps the original's label and links back to it. [Proposed] Each official notice has a permanent page that shows whether it is current, updated, or withdrawn, and a share card that prints its short link, so a screenshot passed around anywhere can still be checked. [Proposed] A correction updates the same page with its history visible, instead of starting a new post that competes with the old one. [Proposed] H1 of the Facebook study measures how often notices are altered as they travel today, which is the baseline this design would be judged against. [Established] (D-053)

### Answers someone stands behind

```text
question ──► answers from members (name and role, or a pseudonym where allowed)
         ──► an office confirms one, or posts its own ──► marked confirmed, dated
         ──► searchable; new questions like it are pointed to it
         ──► reviewed when the semester or the rule changes
```

The patterns come from Stack Exchange's accepted answers and Piazza's instructor-endorsed answers ([Chapter 9](09-related-work.md)). [Established] Discourse, an open-source forum, already lets a topic's owner and staff mark a reply as the solution in chosen categories. [Established] A confirmation is only as good as the office behind it, which is why an office's commitment comes before any pilot. [Proposed] (D-068)

## What people see: a home that ends

The home screen is a digest, not a feed. [Proposed] (D-061)

1. **Official now.** Unread notices from the member's official channels, urgent ones first.
2. **For you.** Replies to the member's posts, and questions in their channels that they might answer.
3. **Your channels.** Posts since the last visit, newest first, grouped by channel.
4. **Coming up.** Events and deadlines the member saved or belongs to.
5. **You're caught up.** The end of the page, with nothing loading after it.

No post is ranked by predicted engagement, and there are no public like counts. [Proposed] Reactions give way to signals with a purpose: "helpful" on answers, "same question" on questions, and "going" on events, which tell owners what matters without turning posts into contests. [Proposed] Members can follow, mute, and leave channels. They can mute official channels but not leave them, and notices marked urgent always come through. [Proposed] Search covers every channel the member can see, and nothing else. [Proposed]

## Notifications with a budget

| Tier | What | How it arrives |
| --- | --- | --- |
| Urgent | Suspensions, emergencies, and safety advisories from authorized offices | At once, even during quiet hours |
| Personal | Replies to the member, messages, and confirmations of their questions | At once, outside quiet hours |
| Everything else | New posts, events, and listings | A daily digest the member can turn off |

Quiet hours, overnight by default, protect rest, a reason a Philippine college gave in 2026 when it moved announcements out of group chats. [Established] Urgent notices pass through because VSU's guidelines require typhoon suspensions to be announced by 4:30 a.m. [Established] Each office gets a small, published allowance of urgent notices each semester, so that urgent keeps its meaning. [Proposed]

## Messages and real-time chat

Members can message each other and form group chats. Norms differ by role: a student writing to a faculty member outside their own classes sends a consultation request, which the faculty member can accept, book into office hours, or point to an office, and no one is expected to answer outside working hours. [Proposed]

Whether messages are real-time or sync on a slower cycle is open. [Unresolved] (Q-04) If they are real-time, Matrix is the candidate: an open protocol that TU Dresden and LMU Munich run for their students and staff. [Established] Its cost grows with use. Element's sizing guide, for servers without federation, puts up to 500 users at one core and about 1 GiB of memory for the Synapse server plus one core and 4 GiB for its database, and 2,501 to 10,000 users at ten cores and about 8 GiB plus four cores and 16 GiB, with the database growing by about 0.6 GB per active user each year. [Established] A pilot can start with channel discussions alone and add chat only if the evidence calls for it. [Proposed]

Private messages stay private: moderators cannot read them. A member who reports a message shares that message with the moderators, and anything more needs legal process. [Proposed] Whether to encrypt messages end to end, which also limits what a host can detect and act on, is a question for the legal review. [Unresolved] (Q-36)

## The marketplace and student services

- **Who.** Verified members only, so that a buyer knows the seller is a VSU student or employee. [Proposed]
- **What.** Categories for books, uniforms, gadgets, and dormitory items, and a list of prohibited and regulated items that follows the law and VSU's policies, such as its 2025 policy on raising and selling animals at VSU. [Proposed] What that policy allows is not checked here. [Unresolved]
- **Where.** Suggested meeting points in busy public places on campus. [Proposed]
- **Money.** Payment happens outside the network, as in Hop-It's Alpha ([Chapter 3](03-hop-it.md)). [Proposed]
- **Trust.** After an exchange both sides confirm it, and only confirmed exchanges count toward a seller's record. Scams are reported to moderators, and repeat offenders lose access. [Proposed]
- **Services, later.** Tutoring, printing, layout, and photography listings, reviewed only by confirmed clients, with deliveries handed to Hop-It. [Proposed]

## Pseudonymous sections

Participation is identified by default, and some sections may allow anonymous or pseudonymous posts. [Established] (D-046) Q-16 asks which sections, and anonymous to whom. This design proposes an answer to the second part. [Proposed] (D-065)

| Option | Other members see | The network holds | Proposed use |
| --- | --- | --- | --- |
| Named | Name and role | The member's identity | The default |
| Role only | A role, such as "3rd-year student, Faculty of Engineering" | The member's identity | Answers where a name adds nothing |
| Pseudonym | A stable nickname that other members cannot link to the member | The link, under two keys | Concerns about the university; personal problems |
| Fully anonymous | Nothing | Nothing | Not offered |

Dcard's posting under a verified university affiliation without a name is the tested precedent for the role-only option ([Chapter 9](09-related-work.md)). [Established] Full anonymity is not offered, because no one could act on threats, harassment, or exploitation, as Yik Yak's history and the 2025 case at VSU show. [Proposed]

For pseudonyms, the link between a nickname and a member would be stored so that no single person can open it: one key held by the student council and one by VSU's data protection officer, or by people they name, so that both must agree. [Proposed] An identity would be revealed only for named violations, such as threats, harassment, impersonation, or sexual content involving a minor, or under legal process, and never for criticizing the university. Every reveal would be logged and reported, in aggregate, each semester. [Proposed] (D-065) Which sections get pseudonyms follows the Facebook study's H4, on the topics people already post about anonymously far more than others. [Established] (D-048, D-050)

## Rules and moderation

### Governed as a commons

Ostrom found that commons which lasted shared a set of design principles. [Established] (Ostrom, 1990) Each has a counterpart on the network. [Proposed]

| Ostrom's principle | On the network |
| --- | --- |
| Clear boundaries | Membership through VSU accounts, and channels with defined members |
| Rules suited to local conditions | Rules written for VSU, in its languages, reflecting its principles |
| Those affected help make the rules | A network council with students on it, and rule changes open for comment |
| Monitors accountable to the members | Channel moderators drawn from each channel's own members |
| Graduated sanctions | A reminder, then removal of the post, then a temporary limit, then suspension |
| Quick, low-cost ways to settle disputes | Appeal within the channel first, then to the council |
| The right to organize, recognized | Organizations and councils run their own channels |
| Nested layers | Channels, the network, and VSU's own processes, each handling what the others cannot |

### The speech standard

The rules start from the standard the Supreme Court applied to campus speech in Malabanan v. Ramento: students keep their freedom of speech on campus, discussion of matters affecting their welfare or the public interest is protected, and only conduct that materially disrupts classwork, causes substantial disorder, or invades the rights of others may be restricted, with penalties proportionate to the offense. [Established] On the network, that means criticism of the university, its offices, and its officials stays up, while harassment, threats, doxxing, impersonation, scams, false claims to be official, and sexual content involving minors come down. [Proposed] (D-066)

### Process

The Santa Clara Principles on transparency and accountability in content moderation set out the process the network would adopt: rules in one place with examples, notice to the member naming the rule and the reason, an appeal heard by someone not involved in the first decision, and regular reports with numbers. [Established] They also ask platforms to tell users when the state was involved in an action. [Established] On a network run by a state university, that principle applies with special force: when VSU's administration, rather than a community moderator, asks for an action, the notice should say so. [Proposed] (D-066)

### Layers

| Layer | Who | Handles |
| --- | --- | --- |
| Channel | Moderators chosen from each channel, such as organization officers or dormitory representatives | Everyday conduct in that channel |
| Network | Trained moderators from among students and staff, and a coordinator | Reports, appeals from channels, and the marketplace |
| Network council | Student council representatives, OVPSAS, faculty, and VSU ICT, with the data protection officer advising | The rules, final appeals, transparency reports, and identity reveals |
| VSU processes | The Anti-Sexual Harassment Office, student discipline, and the Legal Office | Cases beyond the network's rules |
| Outside authorities | The police and other agencies | Crimes, under legal process |

The Safe Spaces Act requires schools to act promptly on gender-based sexual harassment, online harassment included, when they know or reasonably should know of it, and to refer cases to a committee on decorum and investigation. [Established] A VSU-run network would route such reports to VSU's Anti-Sexual Harassment Office, whose public page explains how to file complaints but does not mention online harassment. [Established] How the network's reports reach that office, and how fast, is part of the legal review. [Unresolved] (Q-36)

How much moderation the network needs is unknown, so a pilot would measure reports per hundred members each week and how long each takes. [Proposed] SURF's experience suggests identified membership keeps the load low: its Mastodon pilot for Dutch education institutions needed little intervention, partly because institutional logins make users accountable. [Established]

## Phones, data, and language

- **An installable web app first.** Android accounted for about 87% of mobile web page views in the Philippines in September 2026, and iPhones have received push notifications from web apps added to the home screen since iOS 16.4 in 2023. [Established] One web app can therefore reach almost every phone without app store approval. [Proposed]
- **Text first.** Compressed images, no autoplay video, and only what changed fetched at each sync, so daily use costs little mobile data. [Proposed] How little is for a pilot to measure. [Unresolved]
- **Readable offline.** Notices, guides, and saved events stay on the phone, the device ring of [Chapter 4](04-intranet.md). [Proposed] (D-034)
- **Languages.** Members write in any language. The interface would start in English and Filipino and add Cebuano and Waray if the survey shows people want them. [Proposed] (Q-41) VSU's own barangay, Pangasugan, is among the few places where a further language, Baybayanon, is spoken. [Established]
- **Accessibility.** Scalable text, enough contrast, and support for screen readers, aiming at the Web Content Accessibility Guidelines, in line with the services for students with special needs that CHED lists among student affairs services. [Proposed]

## What runs underneath

```text
Phones and laptops: installable web app, offline copies          Ring 1
      │
Server: in the cloud for a pilot, on campus if VSU chooses       Ring 4, later Ring 2
  sign-in with VSU accounts · roles · channels and posts · labels
  search · notifications · moderation and audit log
  chat server, only if tested
      │ reads, with permission               │ links into
VSU's public feeds: website news             VSU systems: helpdesk,
and announcements; WAIS                       document tracker, VSUEE,
                                              my.VSU; Hop-It
```

- **Sign-in.** For a pilot, members can prove membership with a one-time code sent to their VSU email address, which needs no integration with VSU's systems. Single sign-on through OpenID Connect with VSU's Google accounts, limited to the vsu.edu.ph domain, or with VSU's own identity system, would come later with VSU ICT's agreement. [Proposed] (Q-06)
- **Official feeds.** VSU's website already publishes RSS feeds of its news and its announcements. [Established] The network could carry them into the university's channel with their source shown, and could show WAIS advisories, which WAIS already generates as JSON, if VSU's disaster risk management office agrees. [Proposed] (Q-40)
- **Sync.** The channel model's tiers: official notices within about a minute, discussions and listings on a slower cycle, and archives only when opened. [Established] (D-034)
- **Build.** Two paths are open. One composes open-source parts, such as a forum engine like Discourse and, if needed, a Matrix server, behind a thin VSU layer for roles, channels, and labels. The other builds the network from scratch on the stack Hop-It uses. [Proposed] (Q-33) The first is faster and better tested; the second fits the labels and channels more closely and shows more of what the project can build. Either way, everything runs in containers VSU could host later, with no dependence on one cloud's proprietary services ([Chapter 4](04-intranet.md)). [Proposed]
- **Security.** Encrypted connections and storage, a log of every moderator and administrator action, regular backups, and a breach process run with VSU's data protection officer. [Proposed] VSU's own privacy training in 2021 put the guiding rule simply: don't collect what you can't protect. [Established]

## Scenes

These show how the parts would work together. Each is a proposal, and each can become a scenario to test with students. [Proposed]

### 1. A 4:30 a.m. suspension

A typhoon signal is raised overnight. Under VSU's guidelines, collegiate classes are suspended automatically at Signal No. 3, and typhoon suspensions must be announced by 4:30 a.m. [Established] The authorized office posts the suspension once, in the university's official channel. It goes out as an urgent notification, the only kind that passes through quiet hours, and appears at the top of every member's home with the WAIS advisory attached. Students reshare it to Facebook as a card carrying its short link. When the office extends the suspension at noon, it updates the same notice, and the page shows both versions. A post claiming the suspension covers the following week stays labelled unverified until the office speaks. Classes moving to asynchronous mode, as VSU's guidelines provide, are announced in VSUEE, and the network links there. [Proposed]

### 2. The first week

A first-year student whose VSU account has not yet been issued signs in with a temporary pass tied to her enrollment (Q-38). She joins her faculty's channel and the first-year guides. A guide written by seniors and checked by the office answers her first question, about her student ID. Her second, about a scholarship requirement, goes to the scholarships channel, where a senior answers and the scholarship office confirms by the afternoon. [Proposed]

### 3. An organization changes officers

The outgoing president nominates the new officers, the adviser approves, and ownership of the organization's channel moves to them. Members, events, documents, and past announcements stay where they were, and nothing depended on a graduating student's personal account. [Proposed]

### 4. Lost and found

A found phone is posted on the lost-and-found board, which belongs to the office that keeps found items, with the place it was found but none of its details. The owner proves it is theirs at the office. The board stays a lost-and-found board because its owner and its rules keep it one. [Proposed]

### 5. A concern about water in a dormitory

In the concerns section, a student writes under a pseudonym that a dormitory has had no water for three days. Others mark "same issue". A student council representative raises it with the housing office, which replies in the thread as official, posts a repair date, and later marks it fixed. The student's identity is never revealed. [Proposed]

### 6. A consultation

A student wants advice on a thesis topic from a faculty member in another department. She sends a consultation request, and the faculty member offers a time within his consultation hours. No messages arrive at midnight, and none are expected. [Proposed]

### 7. Selling a lab gown

A graduating student lists a lab gown for verified members, suggests the library entrance as a meeting point, and marks it sold after both sides confirm the exchange. [Proposed]

## What stays out of a first version

Anything the evidence does not call for. [Established] (principle 5) In particular: course spaces, which VSUEE serves; payments; recommendation algorithms; artificial intelligence of any kind; analytics about individuals; and the alumni and guest roles. [Proposed] (D-013, D-064)

## Open questions

- Real-time chat or tiered sync, and at what cost? (Q-04)
- Which identity approach would VSU accept? (Q-06)
- Which sections allow pseudonyms, and who holds the two keys? (Q-16)
- Should the pilot be composed from open-source parts or built from scratch? (Q-33)
- What does the law require of VSU as host, including on encrypting messages? (Q-36)
- How would incoming students take part before their VSU accounts are issued? (Q-38)
- Where would role details come from, and which would members choose to show? (Q-39)
- Could the network carry VSU's official feeds and WAIS advisories? (Q-40)
- Which languages should the interface support? (Q-41)

[Unresolved]

## Sources

Checked on 8 October 2026. The source type follows each entry ([Chapter 8](08-governance.md)).

- Visayas State University. [All VSU students and staff to get Microsoft and Google licenses](https://www.vsu.edu.ph/articles/news/2394-all-vsu-students-and-staff-to-get-microsoft-google-licenses), 22 August 2023; [VSU UDRMO unveils WAIS](https://www.vsu.edu.ph/articles/news/3011-vsu-udrmo-unveils-wais-strengthens-climate-resilience-efforts), 9 July 2026; [Accredited Organizations](https://www.vsu.edu.ph/students/accredited-organizations), school year 2022–23; [Main Campus faculties](https://www.vsu.edu.ph/academe/main-campus); [Frequently asked questions on sexual harassment](https://www.vsu.edu.ph/vsu/1356-anti-sexual-harassment); [News feed](https://www.vsu.edu.ph/articles/news?format=feed&type=rss) and [announcements feed](https://www.vsu.edu.ph/articles/bulletin?format=feed&type=rss); [University Policies](https://www.vsu.edu.ph/about/university-policies), including BOR Resolution No. 162, s. 2024, on suspending classes and work, and BOR Resolution No. 100, s. 2025, on raising and selling animals; [VSU commits to data privacy and protection](https://www.vsu.edu.ph/articles/news/1919-vsu-commits-to-data-privacy-and-protection), 24 February 2021. Official.
- [Republic Act No. 10173, Data Privacy Act of 2012](https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html), Section 3(l) and Section 13; [Republic Act No. 11313, Safe Spaces Act](https://lawphil.net/statutes/repacts/ra2019/ra_11313_2019.html), Sections 12, 21, and 22. Official.
- [Malabanan v. Ramento, G.R. No. L-62270](https://chanrobles.com/scdecisions/jurisprudence1984/may1984/gr_l62270_1984.php), 21 May 1984. Official, jurisprudence.
- [The Santa Clara Principles on Transparency and Accountability in Content Moderation](https://santaclaraprinciples.org/), version 2.0. External.
- Ostrom, E. (1990). *Governing the Commons*, Table 3.1. Cambridge University Press. [doi:10.1017/CBO9780511807763](https://doi.org/10.1017/CBO9780511807763). Scholarly.
- Resnick, P., Konstan, J., and Chen, Y. Starting new online communities. In R. E. Kraut and P. Resnick, *Building Successful Online Communities: Evidence-Based Social Design*, MIT Press, 2012; design claims summarized on the [HCL Connections wiki](https://ds-infolib.hcltechsw.com/ldd/lcwiki.nsf/dx/Starting_a_new_online_community). Scholarly.
- Element. [ESS sizing](https://ems-docs.element.io/books/element-server-suite-documentation-lts-2310/page/ess-sizing/revisions/3404), Element Server Suite documentation, LTS 23.10. External, vendor.
- Discourse. [discourse-solved](https://github.com/discourse/discourse-solved), now bundled into Discourse core. External, vendor.
- [Mobile operating system market share in the Philippines](https://gs.statcounter.com/os-market-share/mobile/philippines), StatCounter, September 2026. External.
- WebKit. [Web Push for Web Apps on iOS and iPadOS](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/), 16 February 2023. External, vendor.
- [Beyond X: how universities in the Netherlands are building alternatives to big tech](https://www.blogs.unicamp.br/geict/?p=891), GEICT, Unicamp, 18 March 2026, an interview with SURF. External.
- Villagers Montessori College. [Memo No. 6, s. 2026, on official communication channels](https://vmc.edu.ph/wp-content/uploads/2026/07/VMC-Memo-6-s.-26-Official-Communication-channel.pdf), 15 June 2026. External, from another college.
- [Baybay language](https://en.wikipedia.org/wiki/Baybay_language), Wikipedia. External.
