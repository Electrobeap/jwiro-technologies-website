import { maintenanceStrategy } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function MaintenanceStrategy() {
  return (
    <SectionShell
      description="Jirow's maintenance strategy is designed around how assets actually work in the field: runtime, load patterns, source behavior, fault evidence and service history."
      eyebrow="Runtime-Based Maintenance Strategy"
      id="maintenance"
      title="Maintenance driven by operating truth, not blind calendars."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionReveal className="rounded-[2rem] border border-gold-300/20 bg-gold-300/[0.07] p-7 sm:p-8">
          <p className="text-3xl font-semibold text-gold-100 sm:text-4xl">
            Runtime changes the economics of reliability.
          </p>
          <p className="mt-6 leading-8 text-steel-200">
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
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-gold-300/35 hover:bg-white/[0.055]"
                delay={index * 0.06}
                key={item.title}
              >
                <Icon className="h-5 w-5 text-gold-200" />
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
