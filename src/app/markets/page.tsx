import type { Metadata } from "next";
import { Minus } from "lucide-react";

import { BuyerGroups } from "@/components/site/BuyerGroups";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  advisoryConstraint,
  businessModelRationale,
  customerProblems,
  outcomeClaimsPosition,
  revenueLines
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Markets, Customers & Business Model | Jirow Technologies",
  description:
    "Jirow serves regulators, capital and analysis, utilities and enterprise facilities — each entering through a different product. Revenue comes from four recurring software lines built on one data infrastructure.",
  alternates: {
    canonical: "/markets"
  }
};

export default function MarketsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="Jirow serves four groups, each entering through a different product at a different stage. Decentralisation under the Electricity Act 2023 has made the public sector the fastest-emerging segment."
          eyebrow="Markets & customers"
          primaryHref="/products/nigeriapowerdata"
          primaryLabel="See the flagship platform"
          secondaryHref="/contact"
          secondaryLabel="Talk to Jirow"
          title="Four buyer groups, four entry points"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            Customer problems we address
          </p>
          <ul className="mt-4 grid gap-2">
            {customerProblems.map((problem) => (
              <li
                className="flex gap-3 text-sm leading-7 text-steel-300"
                key={problem}
              >
                <Minus
                  aria-hidden
                  className="mt-1.5 h-4 w-4 shrink-0 text-gold-300/70"
                />
                {problem}
              </li>
            ))}
          </ul>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24" id="buyers">
          <Container>
            <BuyerGroups />

            <SectionReveal className="mt-6 rounded-md border border-white/10 bg-ink-950/50 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                Why we publish no outcome claims
              </p>
              <p className="mt-4 max-w-4xl leading-8 text-steel-300">
                {outcomeClaimsPosition}
              </p>
              {/*
                TODO (corporate profile 2026 — internal): insert named reference
                customers, pilot institutions or platform usage figures as they
                become citable — audited or client-attested only.
                docs/internal/corporate-profile-open-items.md
              */}
            </SectionReveal>
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="business-model">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                Business model
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                How Jirow generates revenue
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-steel-300">
                Jirow monetises through recurring software revenue rather than
                billable hours. The model is structured in four lines, all
                drawing on the same underlying data infrastructure.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {revenueLines.map((line, index) => {
                const Icon = line.icon;

                return (
                  <SectionReveal
                    as="article"
                    className="flex h-full flex-col rounded-md border border-white/10 bg-[#0E2A5A] p-6 transition duration-300 hover:border-gold-300/45"
                    delay={index * 0.05}
                    key={line.title}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={enterprise.iconAmber}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-steel-500">
                        {line.line}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-snug text-cream-50">
                      {line.title}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-gold-200">
                      {line.summary}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-7 text-steel-300">
                      {line.description}
                    </p>
                  </SectionReveal>
                );
              })}
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[7fr_5fr]">
              <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  Why this structure
                </p>
                <p className="mt-4 leading-8 text-steel-300">
                  {businessModelRationale}
                </p>
                {/*
                  TODO (corporate profile 2026 — internal): pricing tiers,
                  revenue mix and traction figures belong in the investor data
                  room, not on the public site. Keep this page structural.
                  docs/internal/corporate-profile-open-items.md
                */}
              </SectionReveal>

              <SectionReveal
                className="rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6 sm:p-7"
                delay={0.06}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  Design constraint
                </p>
                <p className="mt-4 leading-8 text-steel-200">
                  {advisoryConstraint}
                </p>
              </SectionReveal>
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
