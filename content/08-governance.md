# Information, Governance, and Privacy

*Who said it, who may see it, and who decides*

A campus network raises trust problems before technical ones. CAMPUS labels every piece of information by type, decides who may see a connection separately from whether it exists, and treats governance as part of the design. [Proposed]

## Six types of information

| Type | Meaning | Example |
| --- | --- | --- |
| Official | Published or maintained by an authorized VSU source | An office's announcement |
| Community knowledge | Contributed by members of the community | An organization's guide for freshmen |
| Opinion | One person's view, not an institutional position | A review of a canteen |
| Unverified | Authority or accuracy not established | A rumor that classes are suspended |
| Scholarly | Research, with its authorship and publication status kept | A thesis or a journal article |
| External | From outside the university | A news report or a government advisory |

The types must be distinguishable in the data and, where it matters, on screen. [Established] (v0.1 §15.4) This document follows the same rule for its own sources.

## Connected does not mean public

A relationship can exist while only authorized people see it, only some details show, or only totals appear. Combining harmless facts can also reveal sensitive ones, such as a class schedule plus a dorm, so visibility is decided for combinations as well as single facts. [Proposed] (v0.1 §15.13)

## Privacy by design

Collect only what a feature needs, use it only for that purpose, limit who can access it, keep it only as long as necessary, keep it accurate, say plainly what is collected, and secure it. [Established] (v0.1 §15.14) The Data Privacy Act of 2012 (Republic Act No. 10173) governs personal data in the Philippines, and how it applies to each product needs review before any real users. [Unresolved]

## Governance by product

| Product | Personal data | Main governance risk | Needed before real users |
| --- | --- | --- | --- |
| Hop-It | Name, phone, delivery location, fulfillment evidence | Consent and incident handling | Approved retention, consent, privacy notice, and incident process |
| Social/academic network | Profiles, posts, messages, listings | Moderation, speech, scams, minors | Community rules, a moderation owner at VSU, a privacy review |
| Campus intranet | Whatever the hosted services hold, plus network logs | Security of campus infrastructure, and monitoring that outgrows its purpose | VSU ICT ownership, a security review, and a published network policy that limits logs (D-057) |

## Questions the network's rules must answer

- Who writes the rules, and how can the community change them?
- Who moderates, and how does someone appeal a decision?
- How are corrections and disputes handled?
- How do accountable names and a safe way to criticize the university coexist?
- How are harassment and scams reported, and who acts on them?
- What changes for users under 18?

[Unresolved]

## Ownership and licensing

- Who owns code, documents, and designs depends on who made them and on any later agreements, and it is never assumed. [Established] (v0.1 §15.28)
- Git history records authorship and dates, which gives any future collaboration a clear starting point. [Established]
- This repository has no license yet, so all rights are reserved by default. Whether to open-source any part is undecided. [Unresolved]
- Sensitive institutional information is never sent to third-party services, AI tools included, without authorization. [Established] (v0.1 §15.31)

## When to stop

No product moves to wider use if data authority is unclear, permissions can't be enforced, sensitive relationships are exposed, provenance can't be shown, official and community content can't be told apart, security risks aren't controlled, responsibilities are undefined, or privacy risks outweigh the benefit. [Established] (v0.1 §15.42)
