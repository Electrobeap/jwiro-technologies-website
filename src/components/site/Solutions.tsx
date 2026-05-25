import { embeddedSolutions } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Solutions() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="Five integrated capabilities align physical power assets with visible performance, operating accountability and hybrid-energy readiness."
      eyebrow="Infrastructure Capabilities"
      id="embedded-power"
      title="The embedded energy platform for modern communities."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {embeddedSolutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <SectionReveal delay={index * 0.07} key={solution.title}>
              <article className={enterpriseModule("p-5")}>
                <div className={enterprise.iconAmber}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-cream-50">
                  {solution.title}
                </h3>
                <p className="mt-4 leading-7 text-steel-300">
                  {solution.description}
                </p>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
