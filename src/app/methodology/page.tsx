import type { Metadata } from "next";
import { Minus } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { MethodologyTable } from "@/components/site/MethodologyTable";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  conservativeClaimsNote,
  methodologyLimits,
  methodologyPipeline
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Data Methodology | Jirow Technologies",
  description:
    "How Jirow separates measured signals from analytical estimates: provenance, retrieval timestamps, lineage, and the limits we state openly. The distinction is enforced in the product, not in a disclaimer.",
  alternates: {
    canonical: "/methodology"
  }
};

export default function MethodologyPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="Every claim NigeriaPowerData makes falls into one of two categories, and the platform states which. We publish what we measure and label what we model — the distinction is enforced in the product, not in a disclaimer."
          eyebrow="Data methodology"
          primaryHref="/products/nigeriapowerdata"
          primaryLabel="See it on the platform"
          secondaryHref="/platform"
          secondaryLabel="Platform architecture"
          title="Measured, modeled, and the line between them"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            Why this matters commercially
          </p>
          <p className="mt-4 text-sm leading-7 text-steel-300">
            A platform that blurs measurement and estimation is unusable in a
            regulatory, investment or procurement context — because nothing it
            reports can be relied upon in a decision that must be defended.
          </p>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24" id="comparison">
          <Container>
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                Two categories, stated at the point of use.
              </h2>
            </div>
            <MethodologyTable />
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="lineage">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                From source to published figure
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Any published figure can be traced back to the input that
                produced it.
              </h2>
            </div>

            <ProcessFlow steps={methodologyPipeline} />
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" id="limits">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[7fr_5fr] lg:items-start">
              <SectionReveal className={enterprisePanel("p-6 sm:p-8")}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  Limits we state openly
                </p>
                <ul className="mt-6 grid gap-3">
                  {methodologyLimits.map((limit) => (
                    <li
                      className="flex gap-4 rounded-sm border border-white/10 bg-ink-950/45 px-5 py-4 leading-8 text-steel-200"
                      key={limit}
                    >
                      <Minus
                        aria-hidden
                        className="mt-2 h-4 w-4 shrink-0 text-gold-300/70"
                      />
                      {limit}
                    </li>
                  ))}
                </ul>
              </SectionReveal>

              <div className="grid gap-4">
                <SectionReveal className="rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                    Stating limits is a commercial asset
                  </p>
                  <p className="mt-4 leading-8 text-steel-200">
                    Technical evaluators discount platforms that claim
                    completeness. Explicit limits are what make the remaining
                    claims credible.
                  </p>
                </SectionReveal>

                <SectionReveal
                  className={enterprisePanel("p-6 sm:p-7")}
                  delay={0.06}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                    On claims
                  </p>
                  <p className="mt-4 leading-8 text-steel-300">
                    {conservativeClaimsNote}
                  </p>
                </SectionReveal>
                {/*
                  TODO (corporate profile 2026 — internal): name the exact
                  upstream data sources publicly, with any attribution or
                  licensing wording those sources require. Unattributed data is
                  the most common reason a sophisticated reader discounts a
                  platform of this type.
                  docs/internal/corporate-profile-open-items.md
                */}
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
