import { hybridSystems } from "@/lib/data";

import { InfrastructureVisual } from "@/components/site/InfrastructureVisual";
import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function HybridSystems() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="Jirow designs hybrid power systems that can evolve from conventional embedded generation into cleaner and more intelligent source combinations over time."
      eyebrow="Hybrid Power Systems"
      id="hybrid"
      title="Reliable power today, renewable integration and cleaner economics tomorrow."
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-[7fr_5fr]">
        <div className="grid gap-5">
          {hybridSystems.map((item, index) => {
            const Icon = item.icon;

            return (
              <SectionReveal
                className={enterpriseModule("p-6")}
                delay={index * 0.06}
                key={item.title}
              >
                <div className="flex gap-5">
                  <div className={enterprise.iconCyan}>
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
