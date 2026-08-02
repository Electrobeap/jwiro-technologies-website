import type { Metadata } from "next";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import {
  enterprise,
  enterpriseModule,
  enterprisePanel
} from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { DataBadge } from "@/components/ui/DataBadge";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { assistantBoundary, assistantExample, assistantPrinciples } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Jirow AI Energy Assistant | Natural-Language Energy Intelligence",
  description:
    "The Jirow AI Energy Assistant is a natural-language interface to Jirow's platform data — prioritised, sourced answers with provenance badges and timestamps. In development.",
  path: "/products/jirow-ai-energy-assistant"
});

function InteractionPanel() {
  return (
    <div className={enterprisePanel("relative overflow-hidden p-5 sm:p-6")}>
      <div className={cn("absolute inset-0 opacity-45", enterprise.blueprint)} />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-200">
          Illustrative interaction
        </p>

        <div className="mt-5 rounded-sm border border-white/10 bg-ink-950/60 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-steel-500">
            Question
          </p>
          <p className="mt-2 text-base leading-7 text-cream-50">
            &ldquo;{assistantExample.question}&rdquo;
          </p>
        </div>

        <div className="mt-3 rounded-sm border border-gold-300/25 bg-gold-300/[0.05] px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-200">
            Response
          </p>
          <p className="mt-2 leading-7 text-steel-100">
            {assistantExample.answer}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {assistantExample.badges.map((badge) => (
              <DataBadge basis={badge.kind} key={badge.label}>
                {badge.label}
              </DataBadge>
            ))}
          </div>
          <p className="mt-4 border-t border-white/10 pt-3 text-xs text-steel-400">
            {assistantExample.source}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AiEnergyAssistantPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="A natural-language interface to everything Jirow's platforms observe. Users ask in plain language and receive prioritised, sourced answers drawn from live and historical platform data."
          eyebrow="In development"
          primaryHref="/contact"
          primaryLabel="Register interest"
          secondaryHref="/methodology"
          secondaryLabel="Data methodology"
          title="Jirow AI Energy Assistant"
        >
          <StatusBadge label="In development" status="in-development" />
          <p className="mt-4 text-sm leading-7 text-steel-300">
            Every response carries provenance badges and a source timestamp, so
            an answer can be checked rather than trusted blindly.
          </p>
          {/*
            TODO (corporate profile 2026 — internal): confirm the intended model
            strategy — hosted commercial models, self-hosted open models, or a
            combination — and any data-residency commitments attached to it.
            docs/internal/corporate-profile-open-items.md
          */}
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[6fr_6fr] lg:items-start">
              <div>
                <p className={enterprise.eyebrow}>
                  The problem it solves
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                  Making intelligence accessible without a dashboard.
                </h2>
                <p className="mt-5 leading-8 text-steel-300">
                  Dashboards require a user who already knows which question to
                  ask. Most people who need energy intelligence — an estate
                  manager, a state regulator&apos;s analyst, a factory operations
                  lead — do not. The assistant closes that gap.
                </p>
                <div className="mt-7 rounded-md border border-white/10 bg-ink-950/50 p-6">
                  <p className={enterprise.eyebrow}>
                    What it is not
                  </p>
                  <p className="mt-4 leading-8 text-steel-200">
                    {assistantBoundary}
                  </p>
                </div>
              </div>

              <InteractionPanel />
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="principles">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className={enterprise.eyebrow}>
                Design principles
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Sourced, prioritised, and grounded in platform data.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {assistantPrinciples.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterpriseModule("p-6")}
                    delay={index * 0.05}
                    key={principle.title}
                  >
                    <div className={enterprise.iconCyan}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-snug text-cream-50">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel-300">
                      {principle.description}
                    </p>
                  </SectionReveal>
                );
              })}
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
