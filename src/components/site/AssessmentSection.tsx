import { assessmentOutputs, assessmentWorkflow } from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function AssessmentSection() {
  return (
    <SectionShell
      description="Organizations cannot optimize what they cannot measure. The Jirow Energy Intelligence Assessment provides a structured view of infrastructure performance, energy efficiency, operational risk and improvement opportunities."
      eyebrow="Energy Intelligence Assessment"
      id="assessment"
      title="Transform infrastructure data into actionable energy intelligence."
    >
      <div className="grid gap-6 lg:grid-cols-[7fr_5fr]">
        <div className="grid gap-4">
          {assessmentWorkflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <SectionReveal
                className={enterpriseModule("p-5")}
                delay={index * 0.05}
                key={step.title}
              >
                <div className="flex gap-5">
                  <div className={enterprise.iconAmber}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold text-gold-200">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-cream-50">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 leading-7 text-steel-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.08}>
          <div className={enterprisePanel("p-6 sm:p-7")}>
            <p className="text-sm font-semibold uppercase text-gold-200">
              Assessment Outputs
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-cream-50">
              From measurement to decisions.
            </h3>
            <div className="mt-7 grid gap-3">
              {assessmentOutputs.map((output) => {
                const Icon = output.icon;

                return (
                  <div
                    className="rounded-sm border border-white/10 bg-ink-950/45 p-4"
                    key={output.title}
                  >
                    <div className="flex gap-4">
                      <div className={enterprise.iconCyan}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cream-50">
                          {output.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-steel-300">
                          {output.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <ButtonLink
              className="mt-7 w-full"
              href="/energy-intelligence-assessment"
            >
              View Assessment Service
            </ButtonLink>
          </div>
        </SectionReveal>
      </div>
    </SectionShell>
  );
}
