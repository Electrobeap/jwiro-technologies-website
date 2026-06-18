import type { Metadata } from "next";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { enterprise, enterpriseModule } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { serviceDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Jirow Technologies Energy Intelligence",
  description:
    "Energy Intelligence Assessments, Infrastructure Analytics, Energy Monitoring, Smart Infrastructure Visibility and AI-Powered Energy Optimization for estates, facilities and industrial operations.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <PageHero
          description="Jirow Technologies helps organizations monitor performance, optimize operations and make smarter data-driven decisions through Energy Intelligence, Infrastructure Analytics and AI-powered optimization."
          eyebrow="Services"
          primaryHref="/energy-intelligence-assessment"
          primaryLabel="Request an Assessment"
          secondaryHref="/#contact"
          secondaryLabel="Schedule a Consultation"
          title="Energy Intelligence services for smarter infrastructure decisions."
        >
          <div className="grid gap-3 text-sm text-steel-300">
            <p>Built for estates, commercial facilities, hotels and industrial sites.</p>
            <p className="text-gold-200">
              Visibility first. Optimization next. Platform readiness over time.
            </p>
          </div>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-5 lg:grid-cols-2">
              {serviceDetails.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    className={enterpriseModule("flex flex-col p-6 sm:p-7")}
                    key={service.title}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className={enterprise.iconAmber}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-gold-200">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="mt-7 text-2xl font-semibold leading-tight text-cream-50">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-8 text-steel-300">
                      {service.summary}
                    </p>
                    <div className="mt-6 rounded-sm border border-white/10 bg-ink-950/45 p-5">
                      <p className="text-sm font-semibold uppercase text-gold-200">
                        Client outcome
                      </p>
                      <p className="mt-3 text-sm leading-7 text-steel-200">
                        {service.outcome}
                      </p>
                    </div>
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <div
                          className="rounded-sm border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-steel-200"
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
