import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { CapacityCascade } from "@/components/site/CapacityCascade";
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
import { SourceNote } from "@/components/ui/SourceNote";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  npdEntityAnalysis,
  npdHeadlineMetrics,
  npdIndicators,
  npdMarketStats,
  npdModules,
  npdReadingOrder,
  npdSourceNote,
  siteConfig
} from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "NigeriaPowerData | Live National Electricity Intelligence",
  description:
    "NigeriaPowerData is Jirow's live energy intelligence platform for the Nigerian electricity market — national generation, DisCo allocation, entity performance and state-level analytics, each figure attributed and labelled measured or modeled.",
  path: "/products/nigeriapowerdata"
});

export default function NigeriaPowerDataPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="A live energy intelligence platform for the Nigerian electricity market, developed and owned by Jirow Technologies Limited. It consolidates Nigeria's publicly reported electricity data into a single continuously updated system of record."
          eyebrow="Flagship platform · Live"
          primaryHref={siteConfig.platformHref}
          primaryLabel="Open the live platform"
          secondaryHref="/methodology"
          secondaryLabel="Data methodology"
          title="NigeriaPowerData"
        >
          <StatusBadge label="Live · in operation" status="live" />
          <a
            className="mt-4 inline-flex items-center gap-2 py-1 text-sm font-semibold text-steel-200 transition hover:text-gold-200"
            href={siteConfig.platformHref}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink className="h-4 w-4" />
            {siteConfig.platformDomain}
          </a>
          <p className="mt-4 text-sm leading-7 text-steel-300">
            Tracks national grid generation and frequency alongside
            distribution-company allocation, preserving the history required to
            distinguish a genuine trend from ordinary daily variation.
          </p>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24" id="market">
          <Container>
            <div className="grid gap-5 lg:grid-cols-[7fr_5fr] lg:items-start">
              <SectionReveal className={enterprisePanel("p-6 sm:p-8")}>
                <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                  {npdHeadlineMetrics.map((metric) => (
                    <div className="bg-[#091F43] px-5 py-5" key={metric.label}>
                      <p className={enterprise.label}>
                        {metric.label}
                      </p>
                      <p className="mt-3 font-mono text-2xl font-semibold text-cream-50">
                        {metric.value}
                        <span className="ml-1 text-sm font-normal text-steel-400">
                          {metric.unit}
                        </span>
                      </p>
                      <DataBadge
                        basis={
                          metric.basis === "measured" ? "measured" : "derived"
                        }
                        className="mt-3"
                      >
                        {metric.basis}
                      </DataBadge>
                    </div>
                  ))}
                </div>

                <CapacityCascade className="mt-8" />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {npdIndicators.map((indicator) => (
                    <div
                      className={cn(enterprise.inner, "p-5")}
                      key={indicator.title}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-200">
                        {indicator.title}
                      </p>
                      <p className="mt-3 font-mono text-xl font-semibold text-cream-50">
                        {indicator.value}
                      </p>
                      <p className="mt-1 text-xs text-steel-400">
                        {indicator.note}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-steel-300">
                        {indicator.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <SourceNote className="mt-7">{npdSourceNote}</SourceNote>
              </SectionReveal>

              <div className="grid gap-4">
                <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
                  <p className={enterprise.eyebrow}>
                    The market it tracks
                  </p>
                  <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                    {npdMarketStats.map((stat) => (
                      <div className="bg-[#091F43] px-5 py-5" key={stat.label}>
                        <p className="font-mono text-2xl font-semibold text-gold-200">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-steel-300">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </SectionReveal>

                <SectionReveal
                  className={enterprisePanel("p-6 sm:p-7")}
                  delay={0.06}
                >
                  <p className={enterprise.eyebrow}>
                    How to read the platform
                  </p>
                  <p className="mt-4 text-sm leading-7 text-steel-300">
                    The platform documents its own reading order. A single
                    reading means little without the history beside it.
                  </p>
                  <ol className="mt-5 grid gap-3">
                    {npdReadingOrder.map((step, index) => (
                      <li
                        className="flex gap-4 rounded-sm border border-white/10 bg-ink-950/45 px-4 py-3 text-sm leading-7 text-steel-200"
                        key={step}
                      >
                        <span className="font-mono text-xs text-gold-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </SectionReveal>
              </div>
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="modules">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className={enterprise.eyebrow}>
                The six modules
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                What the platform publishes.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {npdModules.map((module, index) => {
                const Icon = module.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterpriseModule("p-6")}
                    delay={index * 0.04}
                    key={module.title}
                  >
                    <div className={enterprise.iconAmber}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-cream-50">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel-300">
                      {module.description}
                    </p>
                  </SectionReveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" id="entity-analysis">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[4fr_8fr] lg:items-start">
              <div>
                <p className={enterprise.eyebrow}>
                  Entity-level analysis
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                  Down to the plant, the DisCo and the state.
                </h2>
                <Link
                  className="group mt-6 inline-flex items-center gap-2 py-1 text-sm font-semibold text-gold-200"
                  href="/methodology"
                >
                  How indicators are calculated
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-4">
                {npdEntityAnalysis.map((item, index) => (
                  <SectionReveal
                    className={enterprisePanel("p-6")}
                    delay={index * 0.05}
                    key={item.title}
                  >
                    <h3 className="text-lg font-semibold text-cream-50">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-8 text-steel-300">
                      {item.description}
                    </p>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
