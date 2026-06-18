import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { InfrastructureVisual } from "@/components/site/InfrastructureVisual";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { assessmentAreas, serviceDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Energy Intelligence Assessment | Jirow Technologies",
  description:
    "Jirow's Energy Intelligence Assessment transforms infrastructure data into actionable insights across performance, reliability, efficiency, risk and optimization opportunities.",
  alternates: {
    canonical: "/energy-intelligence-assessment"
  }
};

const assessmentService = serviceDetails[0];

export default function EnergyIntelligenceAssessmentPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <PageHero
          description="The Energy Intelligence Assessment is Jirow's flagship service for transforming infrastructure data into actionable insights, improvement roadmaps and AI-ready operating intelligence."
          eyebrow="Flagship Consulting Service"
          primaryHref="/#contact"
          primaryLabel="Request an Energy Intelligence Assessment"
          secondaryHref="/services"
          secondaryLabel="View Services"
          title="From data to decision: measure, understand, optimize and transform."
        >
          <p className="text-sm leading-7 text-steel-300">
            Designed for estates, commercial facilities, hotels, industrial
            sites and infrastructure operators that need decision-grade energy
            visibility before investing in upgrades.
          </p>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:items-start">
              <div className={enterprisePanel("p-6 sm:p-7")}>
                <p className="text-sm font-semibold uppercase text-gold-200">
                  Overview
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                  A structured diagnostic for smarter infrastructure decisions.
                </h2>
                <p className="mt-5 leading-8 text-steel-300">
                  Jirow reviews how energy data is produced, consumed,
                  monitored, analyzed and reported. The output is a practical
                  roadmap covering performance, maturity, operating risk and
                  AI-powered optimization opportunities.
                </p>
                <ButtonLink className="mt-7" href="/#contact">
                  Start Assessment Request
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </ButtonLink>
              </div>

              <InfrastructureVisual variant="estate" />
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand}>
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase text-gold-200">
                Assessment Areas
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Five review areas that convert field reality into executive
                insight.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {assessmentAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article className={enterpriseModule("p-5")} key={area.title}>
                    <div className={enterprise.iconCyan}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-cream-50">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel-300">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[4fr_8fr]">
              <div>
                <p className="text-sm font-semibold uppercase text-gold-200">
                  Deliverables
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                  What clients receive.
                </h2>
                <p className="mt-5 leading-8 text-steel-300">
                  A concise technical and commercial view of current energy
                  performance, backed by observations, data requirements and
                  prioritized recommendations.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {assessmentService.deliverables.map((item) => (
                  <div
                    className="rounded-md border border-white/10 bg-[#0E2A5A] p-4 text-sm font-medium leading-6 text-steel-100"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
