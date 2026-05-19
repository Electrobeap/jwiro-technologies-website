import { monitoringFeatures } from "@/lib/data";

import { InfrastructureVisual } from "@/components/site/InfrastructureVisual";
import { SectionShell } from "@/components/site/SectionShell";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Monitoring() {
  return (
    <SectionShell
      description="Jirow's monitoring roadmap turns energy systems into measurable infrastructure, giving operators and estate boards practical visibility into uptime, runtime and cost."
      eyebrow="Smart Energy Monitoring"
      id="monitoring"
      title="Operational clarity across every critical energy asset."
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal>
          <InfrastructureVisual variant="monitoring" />
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {monitoringFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <SectionReveal
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-emerald-300/35 hover:bg-white/[0.055]"
                delay={index * 0.05}
                key={feature.title}
              >
                <Icon className="h-5 w-5 text-emerald-200" />
                <h3 className="mt-5 text-lg font-semibold text-cream-50">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-steel-300">
                  {feature.description}
                </p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
