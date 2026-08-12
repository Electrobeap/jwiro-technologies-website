import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";

import { enterprise } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { tradeCategories, tradePositioning } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * A deliberately compact pointer to the trade division. The homepage argument
 * is the energy-intelligence one; this signals the second arm of the business
 * and sends interested readers to /global-trade rather than competing with it.
 */
export function TradeDivisionBand() {
  return (
    <section className="py-14 sm:py-16" id="global-trade">
      <Container>
        <SectionReveal
          className={cn(
            "rounded-md border border-white/10 bg-[#0E2A5A]/70 p-6 sm:p-8",
            "transition duration-300 hover:border-gold-300/35"
          )}
        >
          <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-center">
            <div>
              <div className="flex items-center gap-4">
                <span className={enterprise.iconAmber}>
                  <Globe2 className="h-5 w-5" />
                </span>
                <p className={enterprise.eyebrow}>
                  Also from Jirow · Global Trade &amp; Export
                </p>
              </div>
              <h2 className="mt-5 max-w-2xl text-balance text-2xl font-semibold leading-snug text-cream-50 sm:text-3xl">
                {tradePositioning}
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-steel-300">
                Alongside our energy platforms, Jirow operates a B2B sourcing
                and export division — sourcing qualified Nigerian products
                against a buyer&apos;s specification, verifying quality before
                shipment, and supporting the export documentation.
              </p>
              <Link
                className="group mt-6 inline-flex items-center gap-2 py-1 text-sm font-semibold text-gold-200"
                href="/global-trade"
              >
                Explore Global Trade &amp; Export
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>

            <ul className="grid gap-2">
              {tradeCategories.map((category) => (
                <li
                  className="rounded-sm border border-white/10 bg-ink-950/45 px-4 py-3 text-sm leading-6 text-steel-200"
                  key={category.title}
                >
                  {category.title}
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
