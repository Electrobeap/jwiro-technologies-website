import type { Metadata } from "next";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { clientSegments, companyPositioning, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Jirow Technologies | Energy Intelligence Company",
  description:
    "Jirow Technologies Limited is an energy intelligence and infrastructure technology company focused on monitoring, analytics, optimization and smarter infrastructure decisions.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <PageHero
          description={companyPositioning}
          eyebrow="About Jirow Technologies"
          primaryHref="/services"
          primaryLabel="Explore Services"
          secondaryHref="/technology-roadmap"
          secondaryLabel="View Roadmap"
          title="An energy intelligence and infrastructure technology company for modern operations."
        >
          <p className="text-sm font-semibold uppercase text-gold-200">
            {siteConfig.location}
          </p>
          <p className="mt-3 text-sm leading-7 text-steel-300">
            Leadership: {siteConfig.founderTitle}
          </p>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
              <div className={enterprisePanel("p-6 sm:p-7")}>
                <p className="text-sm font-semibold uppercase text-gold-200">
                  Company Profile
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                  Improving how energy systems are monitored, managed and
                  optimized.
                </h2>
              </div>

              <div className={enterprisePanel("p-6 sm:p-7")}>
                <p className="leading-8 text-steel-300">
                  Jirow Technologies Limited works with estates, commercial
                  facilities, industrial operations and infrastructure operators
                  to provide operational visibility, performance analytics and
                  energy optimization solutions.
                </p>
                <p className="mt-5 leading-8 text-steel-300">
                  The long-term vision is to build intelligent infrastructure
                  platforms that combine engineering expertise, operational
                  data, cloud technologies and artificial intelligence to create
                  more reliable and efficient energy systems across Africa.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand}>
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm font-semibold uppercase text-gold-200">
                Who We Support
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Built for decision makers responsible for cost, reliability and
                infrastructure performance.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {clientSegments.map((segment) => {
                const Icon = segment.icon;

                return (
                  <article className={enterpriseModule("p-5")} key={segment.title}>
                    <div className={enterprise.iconAmber}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-cream-50">
                      {segment.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel-300">
                      {segment.description}
                    </p>
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
