import { monitoringFeatures } from "@/lib/data";

import { InfrastructureVisual } from "@/components/site/InfrastructureVisual";
import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Monitoring() {
  return (
    <SectionShell
      description="Jirow converts energy data into performance scores, maturity indicators, reliability intelligence and optimization opportunities for facility and executive teams."
      eyebrow="Monitoring & Analytics"
      id="monitoring"
      title="Smart infrastructure visibility across performance, risk and efficiency."
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-[5fr_7fr]">
        <SectionReveal>
          <InfrastructureVisual variant="monitoring" />
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {monitoringFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <SectionReveal
                className={enterpriseModule("p-5")}
                delay={index * 0.05}
                key={feature.title}
              >
                <div className={enterprise.iconCyan}>
                  <Icon className="h-5 w-5" />
                </div>
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
