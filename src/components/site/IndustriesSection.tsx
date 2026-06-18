import { CheckCircle2 } from "lucide-react";

import {
  clientSegments,
  industryChallenges,
  industryOutcomes
} from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function IndustriesSection() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="Jirow helps organizations convert raw infrastructure data into operational insight that improves energy performance, reliability and decision-making."
      eyebrow="Industries We Serve"
      id="industries"
      title="Helping critical infrastructure operate smarter."
    >
      <div className="grid gap-6 lg:grid-cols-[8fr_4fr]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {clientSegments.map((segment, index) => {
            const Icon = segment.icon;

            return (
              <SectionReveal
                className={enterpriseModule("p-5")}
                delay={index * 0.04}
                key={segment.title}
              >
                <div className={enterprise.iconAmber}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-cream-50">
                  {segment.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-steel-300">
                  {segment.description}
                </p>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.08}>
          <div className={enterprisePanel("p-6 sm:p-7")}>
            <p className="text-sm font-semibold uppercase text-gold-200">
              Challenges We Help Solve
            </p>
            <div className="mt-5 grid gap-3">
              {industryChallenges.map((challenge) => (
                <div
                  className="flex items-center gap-3 rounded-sm border border-white/10 bg-ink-950/45 px-4 py-3 text-sm text-steel-200"
                  key={challenge}
                >
                  <CheckCircle2 className="h-4 w-4 text-gold-200" />
                  {challenge}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {industryOutcomes.map((outcome, index) => (
          <SectionReveal
            className={enterpriseModule("p-5 text-center")}
            delay={index * 0.04}
            key={outcome}
          >
            <p className="text-xl font-semibold text-gold-200">{outcome}</p>
          </SectionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
