# Jirow Technologies Limited Website

Corporate website for Jirow Technologies Limited — *The Intelligence Layer for
Africa's Power Systems*. Built with Next.js App Router, TypeScript, Tailwind
CSS v4 and Motion for React.

## Content source of truth

All site content derives from the **Jirow Corporate Profile 2026**
(`public/brochure/jirow-technologies-profile.pdf`). That document supersedes
every earlier company profile, brochure and marketing document. Copy lives in
`src/lib/data.ts`; components render it. When the profile changes, update
`src/lib/data.ts` first.

The profile's internal `[ TO CONFIRM ]` notes are **not** public-facing. They
are tracked in `docs/internal/corporate-profile-open-items.md` and mirrored as
`TODO (corporate profile 2026 — internal)` comments in the files that would
carry the answer.

## Positioning

Jirow is an energy technology, software, data-infrastructure and AI company —
not an engineering consultancy, metering vendor or systems integrator. The
portfolio is:

| Product | Status | Altitude |
| --- | --- | --- |
| NigeriaPowerData | Live | National |
| Jirow Energy Analytics | In development | Facility |
| Jirow AI Energy Assistant | In development | Decision |

Nothing on the site may present the in-development products as purchasable, and
no quantified client-outcome claims are published anywhere.

Jirow also operates a second arm, **Global Trade & Export** (`/global-trade`) —
a Nigerian B2B sourcing and export division. It complements the technology and
energy business rather than replacing it: the site must not read as though
Jirow is primarily an agricultural exporter. The same evidence discipline
applies — that page claims no certifications, volumes, buyers or partnerships,
and `tradeClaimsPosition` in `src/lib/data.ts` states so explicitly.

## Routes

```text
/                                       Homepage
/products                               Portfolio, three-layer architecture
/products/nigeriapowerdata              Flagship platform (live)
/products/jirow-energy-analytics        Facility platform (in development)
/products/jirow-ai-energy-assistant     Assistant layer (in development)
/methodology                            Measured vs modeled, lineage, limits
/platform                               Architecture + security & compliance (#security)
/global-trade                           Global Trade & Export division (#categories, #how-it-works, #enquiry)
/markets                                Buyer groups + business model (#business-model)
/roadmap                                Five sequenced stages
/about                                  Mission, vision, principles, leadership (#leadership)
/contact                                Enquiry form and contact details
/brochure/download                      Corporate profile PDF (attachment)
```

Legacy routes redirect permanently (`next.config.mjs`): `/services` →
`/products`, `/energy-intelligence-assessment` → `/products/nigeriapowerdata`,
`/technology-roadmap` → `/roadmap`.

## Brand assets

- Official transparent logo master: `public/brand/jirow-logo-master.png`
- Dark-background web lockup: `public/brand/jirow-logo-display.png`
- Compact navigation/app mark: `public/brand/jirow-logo-mark.png`
- Social preview image: `public/brand/jirow-social-preview.png`
- Browser and Apple icons: `src/app/icon.png`, `src/app/apple-icon.png`
- Hero imagery: `public/imagery/estate-energy-infrastructure.webp`
- Corporate Profile 2026 PDF: `public/brochure/jirow-technologies-profile.pdf`

## Structure

```text
src/app/                 App Router pages, layout, sitemap, robots, brochure endpoint
src/components/site/     Page sections, diagrams and the visual system
src/components/ui/       Reusable primitives (buttons, badges, reveal, source notes)
src/lib/data.ts          All site copy, product data and contact details
docs/internal/           Internal, non-public implementation checklist
public/                  Brand assets, imagery and the corporate profile PDF
```

Design system tokens live in `src/app/globals.css` (`@theme`) and
`src/components/site/visual-system.ts` (panel, module, icon and hairline
recipes). Dark navy surfaces, gold accents, serif display headings.

Data-integrity primitives worth reusing: `StatusBadge` (live / in development),
`DataBadge` (measured / estimate / derived) and `SourceNote`. Never render a
platform figure without its basis and source.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

Deploy with the default Next.js settings on Vercel or another Node-compatible
host. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` with a country-code-prefixed
number, digits only, when a dedicated Jirow WhatsApp Business contact is
available.
