import { ArchitectureStack } from "@/components/site/ArchitectureStack";
import { ProductCards } from "@/components/site/ProductCards";
import { SectionShell } from "@/components/site/SectionShell";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { sequenceRationale } from "@/lib/data";

export function ProductPortfolioSection() {
  return (
    <SectionShell
      description="Jirow's products share a single technical foundation: a governed data pipeline, an analytics layer and an AI layer. What differs is the altitude at which each operates."
      eyebrow="Product portfolio"
      id="products"
      title="One architecture, three products"
    >
      <ProductCards />

      <div className="mt-14 grid gap-6 lg:grid-cols-[7fr_5fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            The three-layer architecture
          </p>
          <ArchitectureStack className="mt-6" />
        </div>

        <SectionReveal className="rounded-md border border-white/10 bg-[#0E2A5A]/80 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            Why this sequence
          </p>
          <p className="mt-4 leading-8 text-steel-300">{sequenceRationale}</p>
          <div className="mt-6 rounded-sm border border-white/10 bg-ink-950/55 p-5">
            <p className="text-sm font-semibold text-cream-50">
              Development status
            </p>
            <p className="mt-3 text-sm leading-7 text-steel-300">
              Jirow Energy Analytics and the Jirow AI Energy Assistant are under
              active development. Neither is generally available, and neither is
              presented here as a product that can be purchased today.
            </p>
          </div>
        </SectionReveal>
      </div>
    </SectionShell>
  );
}
