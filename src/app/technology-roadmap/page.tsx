import type { Metadata } from "next";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { InfrastructureVisual } from "@/components/site/InfrastructureVisual";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { roadmapPhases } from "@/lib/data";

export const metadata: Metadata = {
  title: "AWS + AI Platform Roadmap | Jirow Energy Intelligence",
  description:
    "Jirow Technologies roadmap covers Energy Intelligence, smart infrastructure visibility, AWS cloud architecture, AI-powered insights, predictive maintenance and automated optimization.",
  alternates: {
    canonical: "/technology-roadmap"
  }
};

export default function TechnologyRoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <PageHero
          description="Jirow's phased roadmap uses AWS cloud architecture, advanced analytics and AI models to build smarter energy intelligence for facilities and infrastructure operators."
          eyebrow="Future Intelligence Roadmap"
          primaryHref="/energy-intelligence-assessment"
          primaryLabel="Start With Assessment"
          secondaryHref="/#contact"
          secondaryLabel="Discuss Roadmap"
          title="Building Africa's Energy Intelligence Platform."
        >
          <p className="text-sm leading-7 text-steel-300">
            The roadmap is staged deliberately: visibility first, intelligence
            next, predictive operations after that, and autonomous intelligence
            when the data foundation can support automated recommendations.
          </p>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:items-start">
              <InfrastructureVisual variant="monitoring" />
              <div className={enterprisePanel("p-6 sm:p-7")}>
                <p className="text-sm font-semibold uppercase text-gold-200">
                  Platform Logic
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                  AI-powered infrastructure starts with trusted operating data.
                </h2>
                <p className="mt-5 leading-8 text-steel-300">
                  Jirow&apos;s approach avoids superficial dashboards. The roadmap
                  begins with assessments and reporting, then advances toward
                  AWS-backed data ingestion, real-time monitoring, predictive
                  maintenance, fault detection and automated optimization as
                  data quality matures.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand}>
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm font-semibold uppercase text-gold-200">
                Roadmap Phases
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                A staged path from infrastructure visibility to autonomous
                intelligence.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {roadmapPhases.map((phase) => {
                const Icon = phase.icon;

                return (
                  <article className={enterpriseModule("p-6")} key={phase.title}>
                    <div className="flex items-start justify-between gap-5">
                      <div className={enterprise.iconAmber}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold uppercase text-gold-200">
                          {phase.phase}
                        </p>
                        <p className="mt-1 text-xs text-steel-400">
                          {phase.status}
                        </p>
                      </div>
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold text-cream-50">
                      {phase.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-steel-300">
                      {phase.description}
                    </p>
                    <div className="mt-6 grid gap-2">
                      {phase.items.map((item) => (
                        <div
                          className="rounded-sm border border-white/10 bg-ink-950/45 px-4 py-3 text-sm text-steel-200"
                          key={item}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
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
