import { whyChoose } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function WhyChoose() {
  return (
    <SectionShell
      className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(8,32,28,0.72),rgba(2,11,15,0.88))]"
      description="Jirow is built for decision makers who need infrastructure confidence, operating transparency and a platform path beyond basic power supply."
      eyebrow="Why Choose Jirow"
      id="why-jirow"
      title="Premium delivery for serious energy infrastructure decisions."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {whyChoose.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <SectionReveal delay={index * 0.05} key={reason.title}>
              <article className="group h-full rounded-[1.75rem] border border-white/10 bg-ink-950/65 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35">
                <div className="flex items-center justify-between gap-4">
                  <Icon className="h-6 w-6 text-gold-200" />
                  <span className="h-px flex-1 bg-gradient-to-r from-gold-300/40 to-transparent" />
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
