import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { enterprise } from "@/components/site/visual-system";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { audiences } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * The corporate profile opens with a "read first if you are" router. The same
 * device works harder on the web, where each entry can be a real link.
 */
export function AudienceRouter() {
  return (
    <section className={cn("py-14 sm:py-16", enterprise.sectionBand)} id="start-here">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[4fr_8fr] lg:items-start">
          <SectionReveal>
            <p className={enterprise.eyebrow}>
              Start here
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-snug text-cream-50 sm:text-3xl">
              Three routes through the same argument.
            </h2>
            <p className="mt-4 leading-8 text-steel-300">
              The gap exists and is now regulatory. Jirow exists to close it.
              NigeriaPowerData proves the capability at national scale.
            </p>
          </SectionReveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {audiences.map((audience, index) => (
              <SectionReveal
                as="article"
                className="flex h-full flex-col rounded-md border border-white/10 bg-[#0E2A5A] p-6 transition duration-300 hover:border-gold-300/45"
                delay={index * 0.06}
                key={audience.label}
              >
                <p className={enterprise.label}>
                  If you are
                </p>
                <h3 className="mt-2 text-lg font-semibold text-cream-50">
                  {audience.label}
                </h3>
                <div className={cn("mt-4 w-12", enterprise.hairline)} />
                <ul className="mt-4 grid gap-2">
                  {audience.stops.map((stop) => (
                    <li key={stop.href}>
                      <Link
                        className="group inline-flex items-center gap-2 text-sm leading-7 text-steel-200 transition hover:text-gold-200"
                        href={stop.href}
                      >
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gold-300 transition group-hover:translate-x-0.5" />
                        {stop.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
