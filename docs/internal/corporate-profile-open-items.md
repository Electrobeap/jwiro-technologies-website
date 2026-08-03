# Corporate Profile 2026 — internal open items

Internal checklist. **Not public-facing.** These are the `[ TO CONFIRM ]`
notes carried in the Jirow Corporate Profile 2026 PDF. None of them are
rendered on the website; each is mirrored as a `TODO (corporate profile 2026
— internal)` comment in the file that would carry the answer.

Status legend: `open` = still outstanding · `partly resolved` = some of it is
now published · `resolved` = closed, nothing further needed on the site.

---

## 1. Company registration details — `open`

**Profile page:** 05 (The Company)
**Site location:** `src/app/about/page.tsx` (PageHero children), `src/lib/data.ts`
**Item:** Publish year of incorporation and RC number.
**Why it matters:** Institutional readers, particularly DFIs and government
procurement, look for this on the company page.

## 2. Availability windows for in-development products — `open`

**Profile page:** 06 (Product Portfolio)
**Site location:** `src/app/products/page.tsx` (Development status section),
`products[].availability` in `src/lib/data.ts`
**Item:** Insert target availability windows for Jirow Energy Analytics and the
Jirow AI Energy Assistant.
**Why it matters:** Investors and enterprise buyers read undated "coming soon"
claims as a negative signal — a stated date that is later revised reads better
than no date at all.

## 3. Named upstream data sources — `partly resolved`

**Profile page:** 08 (Data Methodology)
**Site location:** `/methodology` (Upstream sources), `dataSources` and
`npdSourceNote` in `src/lib/data.ts`

**Done:** the three upstream publishers named in the profile — NERC, NISO and
TCN — are now published as a standing "Upstream sources" block on
`/methodology`, alongside the existing figure-level attribution and retrieval
timestamps.

**Still open:** confirm the exact attribution or licensing wording each
publisher requires, and add it if mandated. Also confirm the list is complete —
if the platform draws on a fourth source, it belongs here.

**Why it matters:** Unattributed data is the most common reason a sophisticated
reader discounts a platform of this type.

## 4. Jirow Energy Analytics development stage — `open`

**Profile page:** 09 (Jirow Energy Analytics)
**Site location:** `src/app/products/jirow-energy-analytics/page.tsx` (PageHero)
**Item:** State the current stage precisely — architecture and design,
prototype, or private pilot — plus the target availability window.
**Why it matters:** Ambiguity here is read as absence of progress.

## 5. AI Assistant model strategy and data residency — `open`

**Profile page:** 10 (Jirow AI Energy Assistant)
**Site location:** `src/app/products/jirow-ai-energy-assistant/page.tsx` (PageHero)
**Item:** Confirm hosted commercial models, self-hosted open models, or a
combination — and any data-residency commitments attached.
**Why it matters:** Government and enterprise buyers will ask where prompts and
data are processed before they will pilot this.

## 6. Procurement gating items — `open` (three rows)

**Profile page:** 12 (Security & Compliance)
**Site location:** `src/app/platform/page.tsx` (`#security`),
`procurementReadiness` in `src/lib/data.ts`

| Requirement | Site status today | Needed |
| --- | --- | --- |
| NDPC registration & DPO | In progress | Registration number + named DPO |
| Availability & support SLA | In progress | Published SLA terms |
| ISO/IEC 27001 or SOC 2 | Planned | Target timeline or documented compensating controls |

The site deliberately publishes no certification it does not hold. Complete all
three before this profile is used in any government, utility or enterprise
procurement conversation — they are gating items, not optional detail.

## 7. Reference customers and usage figures — `open`

**Profile page:** 13 (Markets & Customers)
**Site location:** `src/app/markets/page.tsx` (Why we publish no outcome claims)
**Item:** Insert named reference customers, pilot institutions or platform usage
figures as they become citable. Audited or client-attested figures only.

## 8. Pricing tiers, revenue mix, traction — `resolved as deliberate omission`

**Profile page:** 14 (Business Model)
**Site location:** `src/app/markets/page.tsx` (`#business-model`)

Decided: the public page stays structural — four revenue lines and the economic
rationale, no numbers. Pricing, revenue mix and traction belong in the investor
data room, which is named on `/platform#security` as available on request. No
website change pending; prepare the investor-facing version separately.

## 9. Roadmap timeframes — `open`

**Profile page:** 15 (Roadmap)
**Site location:** `src/app/roadmap/page.tsx`, `roadmapStages` in `src/lib/data.ts`
**Item:** Attach target timeframes to stages two through five.
**Why it matters:** An undated roadmap reads as a wish list; a dated roadmap that
is subsequently revised reads as a company that plans.

## 10. Leadership depth and governance — `open`

**Profile page:** 16 (Leadership & Governance)
**Site location:** `src/app/about/page.tsx` (`#leadership`), `leadership`,
`leadershipDisciplines` and `governance` in `src/lib/data.ts`
**Items:**

- Expand founder biography: years of experience, named prior roles,
  qualifications, professional memberships.
- Team composition (engineering, data, commercial headcount). A small honestly
  stated team is not a weakness; an unstated one is.
- Board and advisors — DFI and government audiences examine this closely.

The site currently publishes only the founder card plus disciplines and the two
governance rows that are confirmed (corporate registration, audited accounts on
request). The unconfirmed rows from the profile are intentionally not rendered.

## 11. Single public phone number and email — `resolved`

**Profile page:** 17 (Differentiation & Contact)
**Site location:** `siteConfig` in `src/lib/data.ts`
The site standardises on one public number (+234 813 783 2844) and one public
address (info@jirowtechnologies.com), used in the navbar, contact page, footer
and structured data. Confirm these remain the intended switchboard and general
enquiries pair before wider distribution.

---

## Deliberate omissions (not TODOs)

- **Vendor-specific infrastructure detail** — cloud provider, managed services,
  model providers. Omitted from public pages by design; supplied in the
  technical annex for due diligence, partner programmes or procurement.
- **Quantified client-outcome claims** — none are published anywhere on the
  site. See `outcomeClaimsPosition` and `conservativeClaimsNote` in
  `src/lib/data.ts`.
- **Companion documents** — technical annex, investor data room and procurement
  pack are named on `/platform#security` as available on request; the documents
  themselves are not hosted on the site.
