import { SectionShell } from "@/components/site/SectionShell";
import { enterprise } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { differentiators, trustTest } from "@/lib/data";

export function DifferentiationSection() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="Five reasons institutions choose Jirow over a generic analytics vendor or a consultancy engagement."
      eyebrow="Differentiation"
      id="why-jirow"
      title="Why Jirow"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {differentiators.map((item, index) => {
          const Icon = item.icon;

          return (
            <SectionReveal
              as="article"
              className="h-full rounded-md border border-white/10 bg-[#0E2A5A] p-6 transition duration-300 hover:border-gold-300/45 hover:bg-[#133263]"
              delay={index * 0.05}
              key={item.title}
            >
              <span className={enterprise.iconAmber}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-snug text-cream-50">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-steel-300">
                {item.description}
              </p>
            </SectionReveal>
          );
        })}

        <SectionReveal
          className="rounded-md border border-gold-300/30 bg-gold-300/[0.06] p-6 sm:p-7"
          delay={0.25}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            The test
          </p>
          <p className="display-serif mt-4 text-xl leading-snug text-cream-50">
            {trustTest}
          </p>
        </SectionReveal>
      </div>
    </SectionShell>
  );
}
