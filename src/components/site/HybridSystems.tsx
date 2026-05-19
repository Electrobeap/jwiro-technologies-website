import { hybridSystems } from "@/lib/data";

import { InfrastructureVisual } from "@/components/site/InfrastructureVisual";
import { SectionShell } from "@/components/site/SectionShell";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function HybridSystems() {
  return (
    <SectionShell
      className="border-y border-white/10 bg-emerald-950/30"
      description="Jirow designs systems that can evolve from conventional embedded generation into cleaner and more intelligent source combinations over time."
      eyebrow="Hybrid Energy Systems"
      id="hybrid"
      title="Reliable power today, cleaner economics tomorrow."
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-5">
          {hybridSystems.map((item, index) => {
            const Icon = item.icon;

            return (
              <SectionReveal
                className="group rounded-[1.75rem] border border-white/10 bg-ink-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-300/40"
                delay={index * 0.06}
                key={item.title}
              >
                <div className="flex gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cream-50">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-steel-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.1}>
          <InfrastructureVisual variant="hybrid" />
        </SectionReveal>
      </div>
    </SectionShell>
  );
}
