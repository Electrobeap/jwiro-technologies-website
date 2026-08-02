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
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  analyticsCapabilities,
  analyticsSequenceRationale,
  analyticsSupplyMix
} from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Jirow Energy Analytics | Facility Energy Intelligence",
  description:
    "Jirow Energy Analytics is an energy management and analytics platform for commercial facilities, estates, industrial operations and enterprise portfolios — consolidating metering, asset and consumption data and reading it against national grid context. In development.",
  alternates: {
    canonical: "/products/jirow-energy-analytics"
  }
};

function ConceptPanel() {
  return (
    <div className={enterprisePanel("relative overflow-hidden p-5 sm:p-6")}>
      <div className={cn("absolute inset-0 opacity-45", enterprise.blueprint)} />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-200">
            Jirow Energy Analytics — concept
          </p>
          <span className="rounded-sm border border-technical-300/35 bg-technical-300/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-technical-300">
            Concept
          </span>
        </div>

        <div className="mt-5 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {["Site load", "Blended cost", "Grid context"].map((label) => (
            <div className="bg-[#091F43] px-4 py-4" key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-steel-400">
                {label}
              </p>
              <p className="mt-3 font-mono text-lg text-steel-500">— — —</p>
            </div>
          ))}
        </div>

        <div className={cn("mt-4 p-5", enterprise.inner)}>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-steel-400">
            Supply mix by source
          </p>
          <div className="mt-4 grid gap-3">
            {analyticsSupplyMix.map((source, index) => (
              <div key={source}>
                <div className="flex items-center justify-between text-sm text-steel-300">
                  <span>{source}</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-[2px] bg-white/[0.07]">
                  <div
                    className={cn(
                      "h-full rounded-[2px]",
                      index === 0 ? "bg-gold-300/70" : "bg-technical-400/70"
                    )}
                    style={{ width: `${58 - index * 16}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("mt-4 p-5", enterprise.inner)}>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-steel-400">
            Asset health
          </p>
          <div className="mt-3 grid grid-cols-6 gap-1.5">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                className={cn(
                  "h-6 rounded-[2px]",
                  index % 5 === 0 ? "bg-gold-300/35" : "bg-white/[0.06]"
                )}
                key={index}
              />
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs leading-6 text-steel-500">
          Concept layout — not a capture of a shipped product.
        </p>
      </div>
    </div>
  );
}

export default function EnergyAnalyticsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="An energy management and analytics platform for commercial facilities, residential estates, industrial operations and enterprise portfolios. It applies the measurement discipline established in NigeriaPowerData to the site level."
          eyebrow="In development"
          primaryHref="/contact"
          primaryLabel="Register interest"
          secondaryHref="/products/nigeriapowerdata"
          secondaryLabel="See the live platform"
          title="Jirow Energy Analytics"
        >
          <StatusBadge label="In development" status="in-development" />
          <p className="mt-4 text-sm leading-7 text-steel-300">
            Not yet generally available. This page describes planned capability,
            not a product that can be purchased today.
          </p>
          {/*
            TODO (corporate profile 2026 — internal): state the current
            development stage precisely — architecture and design, prototype, or
            private pilot — and the target availability window.
            docs/internal/corporate-profile-open-items.md
          */}
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[6fr_6fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  What it does
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                  The national discipline, applied to a single site.
                </h2>
                <p className="mt-5 leading-8 text-steel-300">
                  Jirow Energy Analytics consolidates metering, asset and
                  consumption data across a facility or portfolio, and reads that
                  data against the national and state context the flagship
                  platform already maintains.
                </p>
                <div className={cn("my-7 max-w-sm", enterprise.hairline)} />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  Why the sequence matters
                </p>
                <p className="mt-4 leading-8 text-steel-300">
                  {analyticsSequenceRationale}
                </p>
              </div>

              <ConceptPanel />
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="capability">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                Planned capability
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Six capabilities, one data model.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {analyticsCapabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterpriseModule("p-6")}
                    delay={index * 0.04}
                    key={capability.title}
                  >
                    <div className={enterprise.iconCyan}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-cream-50">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel-300">
                      {capability.description}
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
