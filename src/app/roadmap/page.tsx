import type { Metadata } from "next";

import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { RoadmapTimeline } from "@/components/site/RoadmapTimeline";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { roadmapBoundary, roadmapStages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Roadmap | Jirow Technologies",
  description:
    "Jirow's roadmap: the national reference layer is delivered; analytics are deepening; the facility platform and AI assistant follow; then additional African markets where comparable public data exists.",
  alternates: {
    canonical: "/roadmap"
  }
};

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="Sequenced by capability, with each stage anchored to a specific product outcome rather than a general aspiration."
          eyebrow="Roadmap"
          primaryHref="/products"
          primaryLabel="Product portfolio"
          secondaryHref="/platform"
          secondaryLabel="Platform architecture"
          title="Where Jirow is going"
        >
          <ol className="grid gap-2">
            {roadmapStages.map((stage) => (
              <li
                className="flex items-baseline gap-3 text-sm text-steel-300"
                key={stage.number}
              >
                <span className="font-mono text-xs text-gold-200">
                  {stage.number}
                </span>
                {stage.short}
              </li>
            ))}
          </ol>
          {/*
            TODO (corporate profile 2026 — internal): attach target timeframes to
            stages two through five. An undated roadmap reads as a wish list.
            docs/internal/corporate-profile-open-items.md
          */}
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24" id="stages">
          <Container>
            <RoadmapTimeline />
          </Container>
        </section>

        <section className={enterprise.sectionBand}>
          <Container className="py-16 sm:py-20">
            <SectionReveal className={enterprisePanel("p-6 sm:p-8")}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                What we are not promising
              </p>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-steel-200">
                {roadmapBoundary}
              </p>
            </SectionReveal>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
