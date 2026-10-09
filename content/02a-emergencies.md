# The Campus Ring in Emergencies

*Keeping campus information and contact alive when power and outside links fail*

Three times in thirteen years, weather has tested VSU's connections. In November 2013, Typhoon Haiyan destroyed the university's internet leased line and about 90% of its fiber backbone ([Chapter 2](02-intranet.md)). In December 2021, five days after Typhoon Odette, power and internet at the Main Campus were only partly restored. In April 2022, after four days of rain from Tropical Storm Agaton, students were trapped on campus, floodwater entered dormitories and academic buildings, and residents from shorelines, waterways, and slopes nearby were evacuated into VSU's academic buildings. [Established] This chapter asks what the campus ring could do on days like those. Like the rest of the intranet direction, it is a proposal for VSU, not a request. [Proposed] (D-060)

> **In short.** In an emergency the campus ring's job narrows to five things: official advisories, where to go, who is safe, how to reach help, and keeping fact apart from rumor. It can do them without the internet if three conditions hold: power at the right buildings, a network open to everyone sheltering there, and services that live on campus and on phones. [Proposed] After Odette, VSU's own staff did parts of this under pressure: generators from VSU's power plant, free Wi-Fi at two places, free charging, and a second provider's line. [Established] Emergency mode would plan and power these in advance, so they are ready before the next storm. [Proposed]

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | When power, mobile networks, or the internet link fail, students and evacuees on campus lose official information and contact, and rumors fill the gap. [Unresolved] During Agaton, Smart warned that fiber cuts and commercial power failures could disrupt service for some of its Leyte customers. [Established] |
| Who needs it? | Students stranded on campus, of whom more than 150 could not go home after Agaton; residents sheltering in academic buildings; and the Crisis Management Committee that coordinates the response. [Established] |
| What evidence? | VSU's own accounts of Haiyan, Odette, and Agaton, carriers' advisories, and emergency Wi-Fi practice in Japan. [Established] Nothing yet on what people on campus needed most and could not get. [Unresolved] |
| Relation to existing systems? | It would carry WAIS advisories and notices from VSU's offices, serve the Crisis Management Committee and the STRIDES framework, and add to, not replace, the national alerts mobile carriers send. [Proposed] |
| Stage? | A design direction inside the intranet direction. A tabletop exercise with the Crisis Management Committee would come before any equipment. [Proposed] |
| Privacy, governance, and cost? | Backup power for network closets and shelter buildings, an open network that needs its own rules, and check-in data about people at their most vulnerable. [Proposed] |
| How could it be disproved? | Mobile networks and power return within hours in most emergencies; the buildings used as shelters have no power for a network; or the Crisis Management Committee already reaches everyone it needs. [Proposed] |

## Three tests

### Haiyan, 2013: the outside link fails

VSU lost its internet leased line, which could not be restored, and about 90% of its fiber backbone, and ran its network on a temporary Wi-Fi backbone until new fiber was finished in 2017. [Established] Across the region, carriers' sites ran on batteries and diesel generators while grid power was out, debris blocked crews from reaching damaged sites, and within four days Globe and Smart had each restored about half of their service in the affected areas. Both set up free-call centers and phone-charging stations, and portable networks were brought in to fill gaps. [Established]

### Odette, 2021: five days on generators and partial links

Typhoon Odette crossed the central Philippines in December 2021. On 17 December, VSU reported uprooted trees across the campus, impassable roads, and cut electrical and telecommunication cables. [Established] Five days later it reported: [Established] (E-042)

- More than half of the Main Campus was running on the main generators of the VSU Power Plant, with priority for some Lower Campus apartments and critical office buildings.
- PLDT's line was the only telecom line running right after the typhoon, until Globe restored fiber circuits to VSU's core offices. The campus then had partial connectivity from both, which could be unstable.
- Free Wi-Fi was open at the VSU Guardpost and the Department of Computer Science and Technology building for faculty, stranded students, and community members, and free charging stations had been set up.
- Mobile data had been hard to reach in the days before.

VSU said the restored connection let people contact their families, let staff coordinate a donation drive for typhoon victims in Southern Leyte, and kept basic operations going. [Established]

### Agaton, 2022: the campus becomes a shelter

The university activated its Crisis Management Committee to monitor conditions and plan evacuation and relief, used its own crisis funds for the first relief goods, and reached 2,361 students and their families, including more than 150 students who could not go home. [Established] Landslides in Baybay City and Abuyog killed many people, and some students lost their homes and family members. [Established] Smart warned that fiber cuts and power failures could disrupt service for some Leyte customers, and set up free calls and phone charging at the Baybay City evacuation center. [Established]

The three events failed in different ways. In 2013 the outside link broke. In 2021 power and the links failed together, and VSU's staff put in place part of what this chapter proposes: free Wi-Fi at two places and free charging, while a second provider's line kept running. In 2022 the campus itself became a place people had to stay and shelter. [Established] The campus ring helps in each case only if it has power. [Proposed]

## What people need in the first days

| Need | Example | Where it would live |
| --- | --- | --- |
| Official advisories | WAIS weather and hazard advisories, suspensions of classes and work | The campus ring, and a copy on each phone |
| Where to go | Which buildings are open as shelters, where relief is handed out, where to charge a phone | The campus ring, as a simple page and map |
| Who is safe | Students, staff, and dormitory residents checking in, so the Crisis Management Committee knows who is unaccounted for | The campus ring, kept only for the emergency |
| Reaching help and family | Calls and messages beyond the campus | The internet ring when any link works; carriers' free-call stations otherwise |
| Fact apart from rumor | Official posts marked official, unconfirmed reports marked unverified | The campus ring, using the information types of [Chapter 9](09-governance.md) |

Every row is a proposal, and the list itself is a hypothesis for interviews with the Crisis Management Committee and with students who lived through Agaton on campus. [Proposed] (Q-31)

## Emergency mode

Emergency mode is the campus ring's design for those days. Each part is a proposal. [Proposed]

1. **Power first.** VSU's solar backup already powers the data center and the administration building, can keep internet services running up to four hours in an outage, and is planned to reach other offices and research labs, and in the long term the whole ICT network; after Odette, the VSU Power Plant's generators carried more than half of the Main Campus. [Established] (E-042, E-043) Emergency mode would add battery backup in the network closets of the buildings used as shelters, sized for a night rather than a few hours. [Proposed] In Haiyan, power and fuel decided which networks stayed up, and Japan's emergency Wi-Fi guideline recommends backup power for installations meant for shelters. [Established]
2. **A network open to everyone sheltering.** In normal times, joining the campus network takes a VSU account (D-057). In emergency mode, shelter buildings would also broadcast an open network that anyone can join, residents included. Japan's 00000JAPAN works this way: after a disaster, participating Wi-Fi providers open a network with no sign-in, no time limit, and no registration, at public places and at shelters, sometimes before a typhoon arrives. [Established] VSU did a version of this after Odette, opening free Wi-Fi at its guardpost and the DCST building to faculty, stranded students, and community members. [Established] (E-042) Campus emergency services would always be reachable on it, and the internet whenever a link exists, shared fairly among everyone connected. [Proposed]
3. **Services that live on campus and on phones.** A lightweight emergency page with advisories, a shelter map, check-in, and announcements, hosted on campus and kept on phones by the CAMPUS app, so that it opens even with no connection. [Proposed] (D-034) If the backbone itself is cut, a small server holding the emergency page, on the same battery as the shelter's access point, keeps it reachable inside that building. [Proposed]
4. **Charging.** Phones need power as much as they need a network: carriers set up charging stations after Haiyan and Agaton, and VSU set up free charging stations after Odette. [Established] Each shelter building would have powered charging points next to its Wi-Fi. [Proposed]
5. **A way out.** A second provider on a separate route, a satellite terminal kept for a last-resort link, and arrangements made in advance with the Office of Civil Defense, the DICT, and the carriers. After Odette, PLDT's line was the only one running at first, until Globe restored fiber to VSU's core offices. [Established] (E-042) By 2021 the DICT and the World Food Programme had prepositioned a Government Emergency Communications System vehicle set, GECS-MOVE, in Tacloban City. [Established] After Typhoon Opong in 2025, the DICT began installing 100 donated satellite terminals across Masbate in October to restore communications. [Established]
6. **Off-grid text, research only.** When power and every network are down, low-power LoRa radios such as those of the open-source Meshtastic project can relay short text messages without any cell or internet service. [Established] Whether they suit VSU's Crisis Management Committee, and whether such radios need a license in the Philippines, has not been checked. [Deferred]

## Catching up after an outage

When the link comes back, thousands of phones reconnect at once. If each immediately sends and fetches everything it missed, the surge can knock the service over again. [Proposed] Two habits prevent it. [Proposed] The first is jitter: a short, random delay before each retry spreads requests out instead of letting them arrive together, and cuts the total work. [Established] (Brooker, 2015) The second is order: what phones send and fetch goes in order of importance. [Proposed]

1. Emergency reports and advisories.
2. Official notices, such as suspensions and where to go.
3. Requests and reports to offices.
4. Discussion and questions.
5. Background work: search indexes, media, and backups.

The order extends the tiers of D-034, and [Chapter 2.3](02c-ring-tests.md) tests it with hundreds of simulated phones reconnecting at once. [Proposed]

## A campus emergency report, research only

The owner's brainstorm asked whether a student could press one button and reach campus responders even when mobile networks and the internet are down. [Established] Over campus Wi-Fi, with power, the campus part of that would work without a cellular plan; a call beyond the campus would not, since it needs a cellular signal, an internet link, or a telephone line. [Proposed]

Campus safety apps show the pattern where networks work. At the University at Albany, the Rave Guardian app lets members call the university's police directly on campus and 911 off campus, and shares a member's location only during an emergency call or a safety timer. [Established] (E-048) A VSU version would answer project rule 3's questions this way:

| Question | Current answer |
| --- | --- |
| What problem? | When mobile networks fail, people on campus may have no way to reach campus responders. [Unresolved] Mobile data was hard to reach in the days after Odette. [Established] (E-042) |
| Who needs it? | Students and staff on campus during an emergency, and whichever office responds. [Proposed] |
| What evidence? | None at VSU on how people reached help during Haiyan, Odette, or Agaton. [Unresolved] (Q-31) |
| Relation to existing systems? | It would reach VSU's own responders and never replace 911, the national emergency hotline since 2018, or the alerts carriers must send. [Proposed] Which VSU office could receive reports at any hour is not known. [Unresolved] (Q-55) |
| Stage? | Research only, until VSU asks for it and a desk staffed around the clock exists to answer. A button no one answers is worse than none. [Proposed] |
| Privacy, governance, and cost? | A report carries who sent it, what is happening, and a place the person chooses or confirms; a building suggested from the Wi-Fi access point would be offered only at the moment they press the button, never otherwise (D-089). It would be seen only by the responding desk and kept only as long as the response and its follow-up need. [Proposed] The Data Privacy Act allows processing needed to protect a person's life and health (Sections 12 and 13). [Established] How that applies is for VSU's data protection officer. [Unresolved] Staffing a desk at all hours is the main cost, and false alarms and minors need rules first. [Proposed] |
| How could it be disproved? | Mobile networks stay up in most campus emergencies, VSU has no desk to answer, or people would not use it. [Proposed] |

## How it fits what already exists

- **National alerts.** The Free Mobile Disaster Alerts Act of 2014 requires mobile carriers to send free alerts, issued by agencies such as the NDRRMC, PAGASA, and PHIVOLCS, to subscribers in and near affected areas. [Established] The campus ring would add what national alerts cannot: instructions specific to the campus. [Proposed]
- **WAIS.** VSU's Weather Advisory and Information System gives localized advisories for the Main Campus and is being upgraded into a multi-hazard dashboard. [Established] If WAIS is hosted off campus, its advisories would stop reaching the campus when the outside link fails, and a copy on campus would keep them flowing. [Proposed] Where WAIS is hosted is not known. [Unresolved]
- **The Crisis Management Committee.** It was activated during Agaton. [Established] Emergency mode would be its tool, switched on and off by it, not by the network's administrators alone. [Proposed]
- **STRIDES and continuity planning.** Through BOR Resolution No. 30, s. 2026, VSU adopted the Strategic Resilience and Incident Management Framework for Disaster and Emergency Scenarios, the STRIDES Framework, as its institutional framework for disaster preparedness, emergency response, crisis management, and continuity of essential services. It shares its name with VSU's guiding principles ([Chapter 3](03-social-network.md)). VSU also held a public service continuity plan workshop with the Office of Civil Defense in Region VIII in June 2026. [Established] Emergency mode belongs inside that plan, owned by VSU. [Proposed]

## Rules for emergency mode

- **Who decides.** The Crisis Management Committee, or someone it names, switches emergency mode on and off. [Proposed]
- **Logs.** An open network has no sign-in and no consent screen. Japan's guideline bars providers from using its connection logs for commercial purposes. [Established] On campus, emergency logs would be kept only as long as the emergency requires. [Proposed]
- **Check-in data.** Who is safe, and where, is sensitive, and some students are minors. It would be visible only to those coordinating the response, and deleted once the emergency ends. [Proposed]
- **Location.** Nothing in emergency mode locates people from the network; a place is shared only when a person sends it (D-089). [Proposed]
- **Accuracy.** Only designated offices post as official; everything else carries its type, so that a rumor never looks like an advisory. [Proposed]
- **Misuse.** Open networks attract misuse, so emergency mode would offer campus emergency services and a fair share of the internet, nothing more. [Proposed]

## Drills, not hopes

1. A tabletop exercise with the Crisis Management Committee, using Agaton as the scenario. [Proposed]
2. An island-mode drill: in a maintenance window, the uplink is cut for an hour to see what still works, then restored to see how phones catch up. [Proposed]
3. A power test: the network in each shelter building runs on battery alone, and the hours it lasts are recorded. [Proposed]
4. All three before typhoon season, with the results written into the continuity plan. [Proposed]

## What would prove or disprove it

- If carriers restore service within hours in most emergencies, emergency mode matters for fewer hours, though it still matters for students stranded on campus. [Proposed]
- If the buildings used as shelters have no power or network, Wi-Fi there is moot until that changes. [Proposed]
- If the Crisis Management Committee already reaches everyone it needs, the case narrows to rumor control and check-in. [Proposed]
- Interviews with students who lived through Agaton on campus would show what they lacked. [Proposed]

## Open questions

- Which buildings serve as shelters, and which of them have backup power and Wi-Fi? (Q-30)
- How did students and staff get information during Agaton, what did they lack, and who would switch emergency mode on? (Q-31)
- Does VSU have an office staffed around the clock that could receive campus emergency reports, and would it want them? (Q-55)
- Would Meshtastic-style radios be allowed and useful for the Crisis Management Committee?

[Unresolved]

## Sources

Checked on 8 October 2026, except those added on 9 October 2026 after the owner's brainstorm. The source type follows each entry ([Chapter 9](09-governance.md)).

- Visayas State University. [Around 2,000 students and their families receive relief assistance after TS Agaton](https://www.vsu.edu.ph/articles/news/2178-around-2-000-students-and-their-families-receive-relief-assistance-after-ts-agaton), 26 April 2022; [Third State of the University Address](https://www.vsu.edu.ph/articles/news/3045-3rd-state-of-the-university-address), 18 September 2026. Official.
- VSU University Computer Center. [Projects](https://ucc.vsu.edu.ph/projects), undated, describing work through 2017. Official.
- Visayas State University, added 9 October 2026. [IN PHOTOS: #OdettePH leaves major damages to VSU](https://www.vsu.edu.ph/articles/news/2120-in-photos-odetteph-leaves-major-damages-to-vsu), 17 December 2021; [Power, internet temporarily restored at Main Campus 5 days after #OdettePH](https://vsu.edu.ph/articles/news/2121-power-internet-temporarily-restored-at-main-campus-5-days-after-odetteph), 22 December 2021; [VSU installs hybrid solar power system to strengthen ICT resilience](https://www.vsu.edu.ph/articles/news/3007-vsu-installs-hybrid-solar-power-system-to-strengthen-ict-resilience), 30 June 2026. Official.
- Brooker, M. [Exponential Backoff And Jitter](https://aws.amazon.com/blogs//architecture/exponential-backoff-and-jitter/), AWS Architecture Blog, 4 March 2015. External, vendor.
- University at Albany Police. [Rave Guardian personal safety app](https://www.albany.edu/police/rave-guardian-personal-safety-app). External, from another university.
- [EO makes 911 country's emergency hotline number](https://newsinfo.inquirer.net/996682/eo-makes-911-countrys-emergency-hotline-number), Inquirer, June 2018, on Executive Order No. 56. External.
- PLDT and Smart. [Advisories on Tropical Storm Agaton](https://cms.pldt.com/drupal/node/3982), 10 to 13 April 2022. External.
- GSMA. [Typhoon Yolanda (Haiyan): initial responses and network restoration update](https://www.gsma.com/mobilefordevelopment/programme/mobile-for-humanitarian-innovation/typhoon-yolanda-haiyan-initial-responses-and-network-restoration-update/), November 2013. External.
- Wi-Biz, Japan's wireless LAN business association. [00000JAPAN guideline, version 5.0](https://www.wlan-business.org/wp-content/uploads/2024/03/00000JAPAN_Guideline_V5.0.pdf), April 2024, in Japanese; SoftBank, [00000JAPAN](https://www.softbank.jp/en/sbnews/entry/20220913_01), updated December 2025. External.
- DICT and World Food Programme. [GECS-MOVE factsheet](https://www.etcluster.org/sites/default/files/documents/20211027_DICT%20GECS%20MOVE%20Factsheet.pdf), September 2021. External, via the Emergency Telecommunications Cluster.
- [DICT deploys 100 Starlink units in Masbate](https://newsbytes.ph/2025/10/27/dict-deploys-100-starlink-units-in-masbate-to-restore-connectivity-after-typhoon-opong/), NewsBytes.PH, 27 October 2025. External.
- [Republic Act No. 10639, Free Mobile Disaster Alerts Act](https://lawphil.net/statutes/repacts/ra2014/ra_10639_2014.html), 2014. Official.
- [Meshtastic introduction](https://meshtastic.org/docs/introduction/), the project's documentation. External.
