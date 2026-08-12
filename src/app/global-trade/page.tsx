import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Mail, MessageCircle, Phone } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { LeadForm } from "@/components/site/LeadForm";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import {
  enterprise,
  enterpriseModule,
  enterprisePanel
} from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  siteConfig,
  tradeBuyerPoints,
  tradeCapabilities,
  tradeCategories,
  tradeClaimsPosition,
  tradeDivisionNote,
  tradeInquiryInterests,
  tradeProcess,
  tradeProcessDetail,
  tradeSummary,
  tradeSupplierPoints
} from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Global Trade & Export | Jirow Technologies",
  description:
    "Jirow Global Trade & Export is a Nigerian B2B sourcing and export division connecting international buyers with qualified Nigerian products — agricultural commodities, agro-processed and food products, and technology and industrial materials.",
  path: "/global-trade"
});

const whatsappBuyer = `${siteConfig.whatsappBase}?text=${encodeURIComponent(
  "Hello Jirow Global Trade & Export, I am an international buyer and would like to discuss a sourcing requirement."
)}`;

const whatsappSupplier = `${siteConfig.whatsappBase}?text=${encodeURIComponent(
  "Hello Jirow Global Trade & Export, I am a Nigerian supplier or producer interested in a partnership."
)}`;

export default function GlobalTradePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description={tradeSummary}
          eyebrow="Global Trade & Export"
          primaryHref="#enquiry"
          primaryLabel="Make a buyer enquiry"
          secondaryHref="#how-it-works"
          secondaryLabel="How it works"
          title="Connecting Nigerian Products and Solutions to Global Markets"
        >
          <p className={enterprise.eyebrow}>A division of Jirow</p>
          <p className="mt-4 text-sm leading-7 text-steel-300">
            {tradeDivisionNote}
          </p>
          <Link
            className="group mt-4 inline-flex items-center gap-2 py-1 text-sm font-semibold text-gold-200"
            href="/products"
          >
            See the technology side
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24" id="model">
          <Container>
            <div className="mb-10 max-w-3xl">
              <p className={enterprise.eyebrow}>The sourcing model</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                Buyer-led sourcing, verified before it ships.
              </h2>
              <p className="mt-5 leading-8 text-steel-300">
                We do not hold a fixed catalogue. A requirement arrives as a
                written specification, and the sourcing, verification and
                documentation work is built around it — so what leaves Nigeria
                matches what was agreed.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {tradeCapabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterpriseModule("p-6")}
                    delay={index * 0.04}
                    key={capability.title}
                  >
                    <div className={enterprise.iconAmber}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-snug text-cream-50">
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

        <section className={enterprise.sectionBand} id="categories">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-3xl">
              <p className={enterprise.eyebrow}>Product categories</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                What we source
              </h2>
              <p className="mt-5 leading-8 text-steel-300">
                Categories are a starting point, not a limit. Each is sourced
                against the buyer&apos;s stated specification.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {tradeCategories.map((category, index) => {
                const Icon = category.icon;

                return (
                  <SectionReveal
                    as="article"
                    className={enterpriseModule("p-6")}
                    delay={index * 0.05}
                    key={category.title}
                  >
                    <div className={enterprise.iconCyan}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-snug text-cream-50">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel-300">
                      {category.description}
                    </p>
                  </SectionReveal>
                );
              })}

              <SectionReveal
                className="rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6"
                delay={0.25}
              >
                <p className={enterprise.eyebrow}>What we state</p>
                <p className="mt-4 text-sm leading-7 text-steel-200">
                  {tradeClaimsPosition}
                </p>
              </SectionReveal>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" id="how-it-works">
          <Container>
            <div className="mb-10 max-w-4xl">
              <p className={enterprise.eyebrow}>How it works</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                From buyer request to shipment.
              </h2>
            </div>

            <ProcessFlow steps={tradeProcess} />

            <div className="mt-6 grid gap-4">
              {tradeProcessDetail.map((stage, index) => (
                <SectionReveal
                  as="article"
                  className={enterprisePanel(
                    "grid gap-5 p-6 transition duration-300 hover:border-gold-300/35 sm:p-7 lg:grid-cols-[5rem_minmax(0,14rem)_1fr] lg:items-start lg:gap-8"
                  )}
                  delay={index * 0.04}
                  key={stage.number}
                >
                  <span className="font-mono text-2xl font-semibold text-gold-200/70">
                    {stage.number}
                  </span>
                  <h3 className="text-xl font-semibold text-cream-50">
                    {stage.title}
                  </h3>
                  <p className="leading-8 text-steel-300">
                    {stage.description}
                  </p>
                </SectionReveal>
              ))}
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="partners">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-3xl">
              <p className={enterprise.eyebrow}>Who we work with</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Two sides of the same order.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <SectionReveal
                className={enterprisePanel("flex flex-col p-6 sm:p-8")}
              >
                <p className={enterprise.eyebrow}>International buyers</p>
                <h3 className="mt-4 text-2xl font-semibold leading-snug text-cream-50">
                  Sourcing from Nigeria without managing it yourself.
                </h3>
                <ul className="mt-6 grid flex-1 gap-3">
                  {tradeBuyerPoints.map((point) => (
                    <li
                      className="flex gap-4 rounded-sm border border-white/10 bg-ink-950/45 px-5 py-4 text-sm leading-7 text-steel-200"
                      key={point}
                    >
                      <Check
                        aria-hidden
                        className="mt-1 h-4 w-4 shrink-0 text-gold-300"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="#enquiry">
                    Send a buyer enquiry
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappBuyer}
                    rel="noreferrer"
                    target="_blank"
                    variant="secondary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </ButtonLink>
                </div>
              </SectionReveal>

              <SectionReveal
                className={enterprisePanel("flex flex-col p-6 sm:p-8")}
                delay={0.06}
              >
                <p className={enterprise.eyebrow}>
                  Nigerian suppliers & producers
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-snug text-cream-50">
                  Reaching international demand through one counterparty.
                </h3>
                <ul className="mt-6 grid flex-1 gap-3">
                  {tradeSupplierPoints.map((point) => (
                    <li
                      className="flex gap-4 rounded-sm border border-white/10 bg-ink-950/45 px-5 py-4 text-sm leading-7 text-steel-200"
                      key={point}
                    >
                      <Check
                        aria-hidden
                        className="mt-1 h-4 w-4 shrink-0 text-technical-300"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="#enquiry" variant="secondary">
                    Register your interest
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappSupplier}
                    rel="noreferrer"
                    target="_blank"
                    variant="ghost"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </ButtonLink>
                </div>
              </SectionReveal>
            </div>
          </Container>
        </section>

        <section className="scroll-mt-28 py-16 sm:py-20 lg:py-24" id="enquiry">
          <Container>
            <div className="mb-10 max-w-3xl">
              <p className={enterprise.eyebrow}>Enquiries</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Start a trade conversation
              </h2>
              <p className="mt-5 leading-8 text-steel-300">
                Buyers: the more precise the specification, quantity and
                destination, the faster we can tell you whether we can meet it.
                Suppliers: tell us what you produce and at what scale.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
              <div className={enterprisePanel("p-6 sm:p-7")}>
                <p className="text-lg font-semibold leading-8 text-cream-50">
                  Jirow Global Trade &amp; Export
                </p>
                <p className="mt-3 text-sm leading-7 text-steel-300">
                  A division of {siteConfig.name}.
                </p>

                <div className="mt-7 grid gap-3">
                  <a
                    className="flex items-center gap-4 rounded-sm border border-white/10 bg-ink-950/55 p-4 text-sm text-steel-200 transition hover:border-gold-300/45 hover:text-cream-50"
                    href={`mailto:${siteConfig.email}?subject=Global%20Trade%20%26%20Export%20enquiry`}
                  >
                    <span className={enterprise.iconAmber}>
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gold-200">
                        Email
                      </span>
                      <span className="mt-1 block break-words">
                        {siteConfig.email}
                      </span>
                    </span>
                  </a>
                  <a
                    className="flex items-center gap-4 rounded-sm border border-white/10 bg-ink-950/55 p-4 text-sm text-steel-200 transition hover:border-gold-300/45 hover:text-cream-50"
                    href={siteConfig.phoneHref}
                  >
                    <span className={enterprise.iconAmber}>
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gold-200">
                        Phone
                      </span>
                      <span className="mt-1 block">{siteConfig.phone}</span>
                    </span>
                  </a>
                </div>

                <div className={cn("my-7", enterprise.hairline)} />
                <p className="text-sm leading-7 text-steel-300">
                  {siteConfig.location}
                </p>
              </div>

              <div className={enterprisePanel("p-6 sm:p-7")}>
                <p className={cn("mb-5", enterprise.eyebrow)}>
                  Trade enquiry
                </p>
                <LeadForm
                  detailsPlaceholder="Product and specification, quantity, destination market and required timeline — or, if you are a supplier, what you produce and at what scale."
                  interests={tradeInquiryInterests}
                  intro="Hello Jirow Global Trade & Export, I would like to discuss a sourcing or supply requirement."
                  submitLabel="Send trade enquiry"
                />
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
