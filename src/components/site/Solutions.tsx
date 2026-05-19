import { embeddedSolutions } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Solutions() {
  return (
    <SectionShell
      className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))]"
      description="Purpose-designed infrastructure for estates and clustered facilities, combining power delivery assets with governance, service cadence and scalable monitoring."
      eyebrow="Embedded Power Solutions"
      id="embedded-power"
      title="From distribution backbone to daily operating rhythm."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {embeddedSolutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <SectionReveal delay={index * 0.07} key={solution.title}>
              <article className="group h-full rounded-[1.75rem] border border-white/10 bg-ink-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-300/45 hover:bg-ink-800">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-300/30 bg-gold-300/10 text-gold-100 transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-cream-50">
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
