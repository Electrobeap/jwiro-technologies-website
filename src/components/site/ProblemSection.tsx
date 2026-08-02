import { AlertTriangle } from "lucide-react";

import { RegulatoryTimeline } from "@/components/site/RegulatoryTimeline";
import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { problemConsequences, problemStats } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProblemSection() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="Nigeria operates one of the largest electricity markets in sub-Saharan Africa, and one of the least legible. Generation, transmission and distribution are run by separate commercial entities with separate reporting obligations, on separate timescales."
      eyebrow="The problem"
      id="problem"
      title="Africa's infrastructure intelligence gap"
    >
      <div className="grid gap-5 lg:grid-cols-[6fr_6fr] lg:items-start">
        <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
          <p className="leading-8 text-steel-300">
            Operational data exists — but it is fragmented, delayed,
            inconsistently published and rarely comparable across entities or
            over time.
          </p>
          <div className={cn("my-6", enterprise.hairline)} />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            Consequence
          </p>
          <ul className="mt-5 grid gap-3">
            {problemConsequences.map((item) => (
              <li
                className="flex gap-4 rounded-sm border border-white/10 bg-ink-950/45 px-4 py-3 text-sm leading-7 text-steel-200"
                key={item}
              >
                <AlertTriangle
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-gold-300/80"
                />
                {item}
              </li>
            ))}
          </ul>
        </SectionReveal>

        <div className="grid gap-4">
          <SectionReveal className={enterprisePanel("p-6 sm:p-7")} delay={0.05}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
              Why now
            </p>
            <p className="mt-5 leading-8 text-steel-300">
              Nigeria&apos;s Electricity Act 2023 removed electricity from the
              exclusive legislative list and empowered states to regulate their
              own intrastate markets. As of mid-2026, the Nigerian Electricity
              Regulatory Commission had transferred regulatory oversight to
              sixteen states — each of which must now license operators, set
              tariffs, monitor service quality and resolve consumer complaints
              within its own jurisdiction.
            </p>
            <p className="mt-5 leading-8 text-steel-300">
              This is the most significant restructuring of the sector since the
              2013 privatisation, and it creates structural demand that did not
              previously exist. State-level electricity data has moved from
              analytical convenience to regulatory necessity.
            </p>
            <RegulatoryTimeline className="mt-8 border-t border-white/10 pt-7" />
          </SectionReveal>
        </div>
      </div>

      <SectionReveal className="mt-5 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {problemStats.map((stat) => (
          <div className="bg-[#0E2A5A] px-5 py-6" key={stat.label}>
            <p className="font-mono text-3xl font-semibold text-gold-200">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-steel-300">
              {stat.label}
            </p>
          </div>
        ))}
      </SectionReveal>

      <SectionReveal className="mt-5 grid gap-5 lg:grid-cols-[7fr_5fr]">
        <div className={enterprisePanel("p-6 sm:p-7")}>
          <h3 className="text-xl font-semibold text-cream-50">
            The same gap, one level down
          </h3>
          <p className="mt-4 leading-8 text-steel-300">
            The problem repeats inside individual facilities. Estates,
            factories, hospitals and commercial buildings run a mix of grid
            supply, generators, and increasingly solar and storage — usually
            with no consolidated view of what each source costs, how reliably it
            performs, or where consumption is wasted.
          </p>
        </div>
        <div className="rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            Why this matters to Jirow
          </p>
          <p className="mt-4 leading-8 text-steel-200">
            The measurement discipline required at national scale is the same
            discipline required at site level. That is why our second product
            extends directly from our first.
          </p>
        </div>
      </SectionReveal>
    </SectionShell>
  );
}
