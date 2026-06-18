import { whyChoose } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

export function WhyChoose() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="Jirow combines deep domain expertise, advanced technology and a client-first approach to deliver measurable impact."
      eyebrow="Why Choose Jirow"
      id="why-jirow"
      title="Expertise, intelligence and impact for smarter infrastructure."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {whyChoose.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <SectionReveal delay={index * 0.05} key={reason.title}>
              <article className={enterpriseModule("p-6")}>
                <div className="flex items-center justify-between gap-4">
                  <div className={enterprise.iconAmber}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={cn("flex-1", enterprise.hairline)} />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-cream-50">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-steel-300">
                  {reason.description}
                </p>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
