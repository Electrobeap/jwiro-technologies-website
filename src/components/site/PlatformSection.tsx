import {
  awsServices,
  platformArchitecture,
  platformBenefits,
  platformInputs,
  platformPipeline,
  platformUseCases
} from "@/lib/data";

import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function PlatformSection() {
  return (
    <SectionShell
      description="Jirow's platform roadmap uses AWS cloud architecture, modern data pipelines and AI models to deliver real-time intelligence, scalability, security and reliability for energy infrastructure."
      eyebrow="AWS + AI Platform"
      id="platform"
      title="Cloud power, AI intelligence and real-world infrastructure impact."
    >
      <div className="grid gap-6 lg:grid-cols-[7fr_5fr]">
        <SectionReveal>
          <div className={enterprisePanel("p-6 sm:p-7")}>
            <p className="text-sm font-semibold uppercase text-gold-200">
              Jirow Energy Intelligence Architecture
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {platformInputs.map((input) => (
                <div
                  className="rounded-sm border border-white/10 bg-ink-950/45 p-4 text-center text-sm font-medium text-steel-200"
                  key={input}
                >
                  {input}
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-px bg-white/10 md:grid-cols-5">
              {platformPipeline.map((stage) => (
                <div
                  className="bg-[#091F43] p-4 text-center text-sm font-semibold uppercase text-gold-200"
                  key={stage}
                >
                  {stage}
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-5">
              {platformArchitecture.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    className="rounded-sm border border-white/10 bg-ink-950/45 p-4"
                    key={item.title}
                  >
                    <div className={enterprise.iconCyan}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-cream-50">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-steel-300">
                      {item.description}
                    </p>
                    {index < platformArchitecture.length - 1 ? (
                      <div className="mt-4 h-px bg-gold-300/45" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        <div className="grid gap-4">
          {platformBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <SectionReveal
                className={enterpriseModule("p-5")}
                delay={index * 0.04}
                key={benefit.title}
              >
                <div className="flex gap-4">
                  <div className={enterprise.iconAmber}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream-50">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-steel-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-5 text-sm font-semibold uppercase text-gold-200">
          AI + Cloud Use Cases
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {platformUseCases.map((useCase, index) => {
            const Icon = useCase.icon;

            return (
              <SectionReveal
                className={enterpriseModule("p-5")}
                delay={index * 0.04}
                key={useCase.title}
              >
                <div className={enterprise.iconCyan}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-sm font-semibold uppercase text-cream-50">
                  {useCase.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-steel-300">
                  {useCase.description}
                </p>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-md border border-gold-300/25 bg-gold-300/10 p-5">
        <p className="text-sm font-semibold uppercase text-gold-200">
          Built on Key AWS Services
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {awsServices.map((service) => (
            <span
              className="rounded-sm border border-white/10 bg-ink-950/50 px-3 py-2 text-sm text-steel-200"
              key={service}
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
