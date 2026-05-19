# Jirow Technologies Limited Landing Page

Premium corporate landing page for Jirow Technologies Limited, built with Next.js App Router, Tailwind CSS v4 and Motion for React, the current Framer Motion package.

## Folder Structure

```text
.
├── public
│   ├── brand
│   │   └── jirow-logo.png
│   └── brochure
│       └── jirow-technologies-profile.pdf
├── scripts
│   └── generate-brochure.mjs
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── site
│   │   │   ├── About.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── HybridSystems.tsx
│   │   │   ├── InfrastructureVisual.tsx
│   │   │   ├── MaintenanceStrategy.tsx
│   │   │   ├── Monitoring.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── SectionShell.tsx
│   │   │   ├── Solutions.tsx
│   │   │   └── WhyChoose.tsx
│   │   └── ui
│   │       ├── ButtonLink.tsx
│   │       ├── Container.tsx
│   │       ├── SectionReveal.tsx
│   │       └── Tag.tsx
│   └── lib
│       ├── data.ts
│       └── utils.ts
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Deployment

The project is ready for Vercel:

1. Push the repository to GitHub, GitLab or Bitbucket.
2. Import the project in Vercel.
3. Use the default Next.js build settings.
4. Add `NEXT_PUBLIC_WHATSAPP_NUMBER` if Jirow has a dedicated WhatsApp Business number. Use digits only with country code, for example `2348012345678`.
5. Deploy.

The WhatsApp CTA still works as a share/contact prompt when the number is not set. Replace `public/brochure/jirow-technologies-profile.pdf` with the final corporate brochure when it is available, or regenerate the current stub with:

```bash
npm run generate:brochure
```

## Expansion Notes

The current component layout is intentionally ready for future routes such as smart energy dashboards, solar performance pages, analytics modules and a customer portal. Add new App Router routes under `src/app`, keep reusable UI primitives in `src/components/ui`, and keep business copy and capability data in `src/lib/data.ts`.
