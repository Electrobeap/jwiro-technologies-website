import { maintenanceStrategy } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

export function MaintenanceStrategy() {
  return (
    <SectionShell
      description="Jirow's maintenance strategy is designed around how assets actually work in the field: runtime, load patterns, source behavior, fault evidence and service history."
      eyebrow="Runtime-Based Maintenance Strategy"
      id="maintenance"
      title="Maintenance driven by operating truth, not blind calendars."
    >
      <div className="grid gap-5 lg:grid-cols-[5fr_7fr]">
        <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
          <p className="display-serif text-3xl font-semibold leading-tight text-gold-200 sm:text-4xl">
            Runtime changes the economics of reliability.
          </p>
          <div className={cn("my-6", enterprise.hairline)} />
          <p className="leading-8 text-steel-200">
            When service decisions are tied to measured equipment behavior,
            communities can reduce surprise failures, improve fuel planning and
            make cleaner decisions about solar, battery and generation
            investment.
          </p>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {maintenanceStrategy.map((item, index) => {
            const Icon = item.icon;

            return (
              <SectionReveal
                className={enterpriseModule("p-5")}
                delay={index * 0.06}
                key={item.title}
              >
                <div className={enterprise.iconAmber}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-steel-300">
                  {item.description}
                </p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
