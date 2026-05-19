import { processSteps } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function HowItWorks() {
  return (
    <SectionShell
      align="center"
      description="A disciplined infrastructure workflow keeps the conversation practical, measurable and ready for long-term operations."
      eyebrow="How It Works"
      id="how-it-works"
      title="A clear path from power problem to managed infrastructure."
    >
      <div className="relative">
        <div className="absolute left-6 top-10 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-gold-300/60 via-emerald-300/35 to-transparent lg:block" />
        <div className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <SectionReveal delay={index * 0.07} key={item.step}>
              <article className="relative h-full rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-300/40">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-gold-300/40 bg-ink-950 text-sm font-semibold text-gold-100">
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
