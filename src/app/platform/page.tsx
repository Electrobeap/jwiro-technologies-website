import type { Metadata } from "next";
import { Check } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { SharedFoundation } from "@/components/site/SharedFoundation";
import {
  enterprise,
  enterpriseModule,
  enterprisePanel
} from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  companionDocuments,
  compliancePosition,
  dataProtectionStatement,
  platformInputs,
  platformPrinciples,
  platformStages,
  procurementReadiness,
  securityPosture
} from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Platform Architecture, Security & Compliance | Jirow Technologies",
  description:
    "All three Jirow products run on a shared cloud-native architecture organised around five stages: ingestion, storage, processing, analysis and delivery — with encryption, access control, audit logging and lineage at every stage.",
  alternates: {
    canonical: "/platform"
  }
};

const statusStyles: Record<string, string> = {
  Operating: "border-gold-300/45 bg-gold-300/10 text-gold-100",
  "In progress": "border-technical-300/35 bg-technical-300/10 text-technical-300",
  Planned: "border-white/15 bg-white/[0.04] text-steel-300"
};

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="All three Jirow products run on a shared cloud-native architecture organised around five stages. Encryption, access control, audit logging and lineage apply at every stage."
          eyebrow="Platform architecture"
          primaryHref="/methodology"
          primaryLabel="Data methodology"
          secondaryHref="#security"
          secondaryLabel="Security & compliance"
          title="How the platform is built"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            Inputs
          </p>
          <ul className="mt-4 grid gap-2">
            {platformInputs.map((input) => (
              <li
                className="rounded-sm border border-white/10 bg-ink-950/45 px-4 py-2 text-sm text-steel-200"
                key={input}
              >
                {input}
              </li>
            ))}
          </ul>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24" id="stages">
          <Container>
            <div className="mb-10 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                Five stages
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Ingestion to delivery, with lineage retained end to end.
              </h2>
            </div>

            <div className="grid gap-4">
              {platformStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterprisePanel(
                      "grid gap-5 p-6 transition duration-300 hover:border-gold-300/35 sm:p-7 lg:grid-cols-[auto_minmax(0,16rem)_1fr] lg:items-start lg:gap-8"
                    )}
                    delay={index * 0.04}
                    key={stage.number}
                  >
                    <div className="flex items-center gap-4">
                      <span className={enterprise.iconAmber}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-2xl font-semibold text-gold-300/70">
                        {stage.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cream-50">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gold-200">
                        {stage.summary}
                      </p>
                    </div>
                    <p className="leading-8 text-steel-300">
                      {stage.description}
                    </p>
                  </SectionReveal>
                );
              })}
            </div>

            <SectionReveal className="mt-6 grid gap-6 lg:grid-cols-[7fr_5fr] lg:items-start">
              <div className={enterprisePanel("p-6 sm:p-7")}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  Operating principles
                </p>
                <ul className="mt-6 grid gap-3">
                  {platformPrinciples.map((principle) => (
                    <li
                      className="flex gap-4 rounded-sm border border-white/10 bg-ink-950/45 px-5 py-4 leading-8 text-steel-200"
                      key={principle}
                    >
                      <Check
                        aria-hidden
                        className="mt-1.5 h-4 w-4 shrink-0 text-gold-300/80"
                      />
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={enterprisePanel("p-6 sm:p-7")}>
                <SharedFoundation />
              </div>
            </SectionReveal>
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="security">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                Security, compliance & governance
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Built for regulated buyers
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-steel-300">
                Jirow&apos;s customers include institutions that cannot adopt
                software without a documented security and data-protection
                posture. We treat that posture as a product requirement rather
                than a procurement afterthought.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {securityPosture.map((item, index) => {
                const Icon = item.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterpriseModule("p-6")}
                    delay={index * 0.05}
                    key={item.title}
                  >
                    <div className={enterprise.iconAmber}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-cream-50">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel-300">
                      {item.description}
                    </p>
                  </SectionReveal>
                );
              })}
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[7fr_5fr] lg:items-start">
              <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  Data protection
                </p>
                <p className="mt-4 leading-8 text-steel-300">
                  {dataProtectionStatement}
                </p>

                <div className={cn("my-7", enterprise.hairline)} />

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  Procurement readiness
                </p>
                <dl className="mt-5 grid gap-3">
                  {procurementReadiness.map((item) => (
                    <div
                      className="grid gap-3 rounded-sm border border-white/10 bg-ink-950/45 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-start"
                      key={item.requirement}
                    >
                      <dt className="text-sm font-semibold text-cream-50">
                        {item.requirement}
                        <span className="mt-1 block text-xs font-normal leading-6 text-steel-400">
                          {item.note}
                        </span>
                      </dt>
                      <dd>
                        <span
                          className={cn(
                            "inline-flex items-center rounded-sm border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em]",
                            statusStyles[item.status] ?? statusStyles.Planned
                          )}
                        >
                          {item.status}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
                {/*
                  TODO (corporate profile 2026 — internal): NDPC registration &
                  DPO, availability & support SLA, and ISO/IEC 27001 or SOC 2 are
                  gating items for any government, utility or enterprise
                  procurement conversation. Update the status rows above and the
                  data in src/lib/data.ts once each is confirmed.
                  docs/internal/corporate-profile-open-items.md
                */}
              </SectionReveal>

              <div className="grid gap-4">
                <SectionReveal className="rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                    Our position
                  </p>
                  <p className="mt-4 leading-8 text-steel-200">
                    {compliancePosition}
                  </p>
                </SectionReveal>

                <SectionReveal
                  className={enterprisePanel("p-6 sm:p-7")}
                  delay={0.06}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                    Companion documents
                  </p>
                  <p className="mt-4 text-sm leading-7 text-steel-300">
                    Three supporting documents carry the specifics excluded from
                    general publication. Available on request.
                  </p>
                  <div className="mt-5 grid gap-3">
                    {companionDocuments.map((document) => {
                      const Icon = document.icon;

                      return (
                        <div
                          className="flex items-start gap-4 rounded-sm border border-white/10 bg-ink-950/45 px-4 py-3"
                          key={document.title}
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-white/10 bg-white/[0.04] text-gold-200">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-cream-50">
                              {document.title}
                            </span>
                            <span className="mt-1 block text-xs leading-6 text-steel-400">
                              {document.description}
                            </span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </SectionReveal>
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
