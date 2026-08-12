import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { ValueChainDiagram } from "@/components/site/ValueChainDiagram";
import {
  enterprise,
  enterpriseModule,
  enterprisePanel
} from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  businessAreas,
  companyPositioning,
  companyStructurePositioning,
  governance,
  leadership,
  leadershipDisciplines,
  mission,
  operatingPrinciples,
  siteConfig,
  thesis,
  vision,
  whatWeAreNot
} from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "About Jirow Technologies | Energy Technology Company in Lagos",
  description:
    "Jirow Technologies Limited is a Lagos-headquartered energy technology company building the software, data infrastructure and AI systems that make power systems legible. Mission, vision, operating principles and leadership.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description={companyStructurePositioning}
          eyebrow="The company"
          primaryHref="/products"
          primaryLabel="Product portfolio"
          secondaryHref="/contact"
          secondaryLabel="Contact Jirow"
          title="About Jirow Technologies"
        >
          <p className={enterprise.eyebrow}>
            Location
          </p>
          <address className="mt-3 not-italic text-sm leading-7 text-steel-300">
            {siteConfig.location}
          </address>
          {/*
            TODO (corporate profile 2026 — internal): add year of incorporation
            and RC number here once confirmed. DFIs and government procurement
            look for it on the company page.
            docs/internal/corporate-profile-open-items.md
          */}
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24" id="mission">
          <Container>
            <div className="grid gap-5 lg:grid-cols-[6fr_6fr]">
              <SectionReveal className={enterprisePanel("p-6 sm:p-8")}>
                <p className={enterprise.eyebrow}>
                  Mission
                </p>
                <p className="display-serif mt-5 text-2xl leading-snug text-cream-50 sm:text-3xl">
                  {mission}
                </p>
                <div className={cn("my-7", enterprise.hairline)} />
                <p className={enterprise.eyebrow}>
                  Vision
                </p>
                <p className="mt-5 text-lg leading-8 text-steel-200">{vision}</p>
              </SectionReveal>

              <div className="grid gap-4">
                <SectionReveal
                  className="rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6 sm:p-7"
                  delay={0.05}
                >
                  <p className={enterprise.eyebrow}>
                    The thesis
                  </p>
                  <p className="mt-4 text-lg leading-8 text-steel-100">
                    {thesis}
                  </p>
                </SectionReveal>

                <SectionReveal
                  className={enterprisePanel("p-6 sm:p-7")}
                  delay={0.1}
                >
                  <p className={enterprise.eyebrow}>
                    Company overview
                  </p>
                  <p className="mt-4 leading-8 text-steel-300">
                    {companyPositioning}
                  </p>
                </SectionReveal>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" id="business-areas">
          <Container>
            <div className="mb-10 max-w-3xl">
              <p className={enterprise.eyebrow}>Business areas</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                Two complementary arms, one company.
              </h2>
              <p className="mt-5 leading-8 text-steel-300">
                Jirow operates through complementary business areas sharing the
                same discipline: verify before you claim, and document what you
                deliver.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {businessAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterprisePanel(
                      "flex flex-col p-6 transition duration-300 hover:border-gold-300/35 sm:p-7"
                    )}
                    delay={index * 0.06}
                    key={area.title}
                  >
                    <span className={enterprise.iconAmber}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-cream-50">
                      {area.title}
                    </h3>
                    <p className="mt-4 flex-1 leading-8 text-steel-300">
                      {area.description}
                    </p>
                    <Link
                      className="group mt-6 inline-flex items-center gap-2 py-1 text-sm font-semibold text-gold-200"
                      href={area.href}
                    >
                      {area.linkLabel}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </SectionReveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="how-we-work">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className={enterprise.eyebrow}>
                How we work
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Four operating principles that shape every product decision.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {operatingPrinciples.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterpriseModule("p-6")}
                    delay={index * 0.05}
                    key={principle.title}
                  >
                    <div className={enterprise.iconAmber}>
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

            <SectionReveal className="mt-6 rounded-md border border-white/10 bg-ink-950/50 p-6 sm:p-7">
              <p className={enterprise.eyebrow}>
                What we are not
              </p>
              <p className="mt-4 max-w-4xl leading-8 text-steel-200">
                {whatWeAreNot}
              </p>
            </SectionReveal>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" id="value-chain">
          <Container>
            <ValueChainDiagram />
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="leadership">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-4xl">
              <p className={enterprise.eyebrow}>
                Leadership & governance
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Who runs Jirow
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-steel-300">
                Jirow is founder-led, with product and engineering direction held
                by an engineer rather than delegated to an external vendor.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[5fr_7fr] lg:items-start">
              {/*
                TODO (corporate profile 2026 — internal): expand into a full
                leadership grid with photograph, name, title and a two-line
                biography per member once the team grows beyond the founder;
                add board and advisors, and state team composition.
                docs/internal/corporate-profile-open-items.md
              */}
              {leadership.map((person) => (
                <SectionReveal
                  className={enterprisePanel("p-6 sm:p-7")}
                  key={person.name}
                >
                  <div className="grid h-14 w-14 place-items-center rounded-sm border border-gold-300/40 bg-gold-300/10 text-lg font-semibold text-gold-100">
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-cream-50">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-200">
                    {person.title}
                  </p>
                  <p className="mt-5 leading-8 text-steel-300">{person.bio}</p>
                </SectionReveal>
              ))}

              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {leadershipDisciplines.map((discipline, index) => {
                    const Icon = discipline.icon;

                    return (
                      <SectionReveal
                        className={enterpriseModule("p-5")}
                        delay={index * 0.05}
                        key={discipline.title}
                      >
                        <div className={enterprise.iconCyan}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-5 text-base font-semibold text-cream-50">
                          {discipline.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-steel-300">
                          {discipline.description}
                        </p>
                      </SectionReveal>
                    );
                  })}
                </div>

                <SectionReveal className={enterprisePanel("p-6")}>
                  <p className={enterprise.eyebrow}>
                    Governance
                  </p>
                  <dl className="mt-5 grid gap-3">
                    {governance.map((item) => (
                      <div
                        className="flex flex-wrap items-baseline justify-between gap-3 rounded-sm border border-white/10 bg-ink-950/45 px-4 py-3"
                        key={item.element}
                      >
                        <dt className="text-sm font-semibold text-cream-50">
                          {item.element}
                          <span className="mt-1 block text-xs font-normal leading-6 text-steel-400">
                            {item.note}
                          </span>
                        </dt>
                        <dd className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-200">
                          {item.status}
                        </dd>
                      </div>
                    ))}
                  </dl>
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
