import { processSteps } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function HowItWorks() {
  return (
    <SectionShell
      align="center"
      description="A disciplined infrastructure approach keeps estate energy projects practical, measurable and ready for long-term operations."
      eyebrow="Infrastructure Approach"
      id="approach"
      title="From estate power challenge to managed embedded infrastructure."
    >
      <div className="relative">
        <div className="absolute left-6 right-6 top-10 hidden h-px bg-gold-300/40 lg:block" />
        <div className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <SectionReveal delay={index * 0.07} key={item.step}>
              <article className={enterpriseModule("relative p-6")}>
                <div className={enterprise.iconAmber}>
                  {item.step}
                </div>
                <h3 className="mt-8 text-xl font-semibold text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-steel-300">
                  {item.description}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
