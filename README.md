# Jirow Technologies Limited Website

Premium corporate landing page for Jirow Technologies Limited, built with
Next.js App Router, TypeScript, Tailwind CSS v4 and Motion for React.

## Brand Assets

- Official transparent logo master: `public/brand/jirow-logo-master.png`
- Dark-background readable web lockup derived from the master: `public/brand/jirow-logo-display.png`
- Compact navigation/app mark derived from the master: `public/brand/jirow-logo-mark.png`
- Branded social preview image: `public/brand/jirow-social-preview.png`
- Next.js browser and Apple app icons: `src/app/icon.png`, `src/app/apple-icon.png`
- Estate infrastructure hero image: `public/imagery/estate-energy-infrastructure.webp`
- Delivered company profile PDF: `public/brochure/jirow-technologies-profile.pdf`

The company profile is linked directly from the website. The legacy
`/brochure/download` route serves the same official PDF for compatibility.

## Structure

```text
src/app/                 App Router pages, layout and brochure endpoint
src/components/site/     Landing page sections and visual system
src/components/ui/       Reusable interface primitives
src/lib/data.ts          Contact details, links and section copy
public/brand/            Brand logo assets
public/imagery/          Optimized site imagery
public/brochure/         Official downloadable company profile
```

## Local Development

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
number, using digits only, when a dedicated Jirow WhatsApp Business contact is
available.

The component structure supports future dashboard, analytics, solar
integration and customer portal routes without changing the core branding
system.
