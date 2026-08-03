import type { Metadata } from "next";

import { ArchitectureStack } from "@/components/site/ArchitectureStack";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { PortfolioTable } from "@/components/site/PortfolioTable";
import { ProductCards } from "@/components/site/ProductCards";
import { SharedFoundation } from "@/components/site/SharedFoundation";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { products, sequenceRationale } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Product Portfolio | Jirow Technologies",
  description:
    "One architecture, three products. NigeriaPowerData is live at national scale; Jirow Energy Analytics and the Jirow AI Energy Assistant extend the same governed data pipeline to the facility and to the operator.",
  path: "/products"
});

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="Jirow's products share a single technical foundation: a governed data pipeline, an analytics layer and an AI layer. What differs is the altitude at which each operates."
          eyebrow="Product portfolio"
          primaryHref="/products/nigeriapowerdata"
          primaryLabel="See the flagship platform"
          secondaryHref="/platform"
          secondaryLabel="Platform architecture"
          title="One architecture, three products"
        >
          <div className="grid gap-3">
            {products.map((product) => (
              <div
                className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                key={product.slug}
              >
                <span className="text-sm text-steel-200">{product.name}</span>
                <StatusBadge label={product.statusLabel} status={product.status} />
              </div>
            ))}
          </div>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mb-10 max-w-3xl">
              <p className={enterprise.eyebrow}>
                The products
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                Three products, one governed foundation.
              </h2>
            </div>

            <ProductCards />

            <div className="mt-14">
              <h2 className={enterprise.eyebrow}>
                The portfolio at a glance
              </h2>
              <PortfolioTable className="mt-6" />
            </div>
          </Container>
        </section>

        <section className={enterprise.sectionBand} id="architecture">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-start">
              <div>
                <p className={enterprise.eyebrow}>
                  The three-layer architecture
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
                  National, facility, decision.
                </h2>
                <ArchitectureStack className="mt-8" />
              </div>

              <div className="grid gap-4">
                <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
                  <SharedFoundation />
                </SectionReveal>
                <SectionReveal
                  className="rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6 sm:p-7"
                  delay={0.06}
                >
                  <p className={enterprise.eyebrow}>
                    Why this sequence
                  </p>
                  <p className="mt-4 leading-8 text-steel-200">
                    {sequenceRationale}
                  </p>
                </SectionReveal>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className={enterprisePanel("p-6 sm:p-8")}>
              <h2 className="text-2xl font-semibold text-cream-50">
                Development status
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-steel-300">
                Jirow Energy Analytics and the Jirow AI Energy Assistant are
                under active development. Neither is generally available, and
                neither is presented here as a product that can be purchased
                today.
              </p>
              {/*
                TODO (corporate profile 2026 — internal): insert target
                availability windows for both in-development products. Investors
                and enterprise buyers read undated "coming soon" claims as a
                negative signal.
                docs/internal/corporate-profile-open-items.md
              */}
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
