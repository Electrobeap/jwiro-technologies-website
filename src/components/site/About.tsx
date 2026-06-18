import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const operatingModel = [
  "Energy intelligence assessments",
  "Infrastructure analytics",
  "Energy monitoring & reporting",
  "Smart infrastructure visibility",
  "AI-powered energy optimization"
];

export function About() {
  return (
    <SectionShell
      description="Jirow Technologies Limited is an Energy Intelligence and Infrastructure Analytics company helping estates, commercial facilities and industrial operations improve energy performance, infrastructure reliability and operational efficiency."
      eyebrow="Company Overview"
      id="about"
      title="Turning infrastructure data into actionable insight for smarter energy decisions."
    >
      <div className="grid gap-5 lg:grid-cols-[5fr_7fr]">
        <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
          <p className="text-2xl font-semibold leading-tight text-cream-50 sm:text-3xl">
            Through monitoring, analytics and intelligent digital solutions,
            Jirow transforms infrastructure data into actionable insights that
            support better operational and investment decisions.
          </p>
          <div className={cn("my-6", enterprise.hairline)} />
          <p className="leading-8 text-steel-300">
            Our long-term vision is to build Africa&apos;s leading Energy
            Intelligence platform for smart infrastructure: combining
            engineering expertise, cloud technologies, infrastructure analytics
            and AI-powered optimization.
          </p>
          <p className="mt-5 text-sm font-semibold uppercase text-gold-200">
            {`Leadership: ${siteConfig.founderTitle}`}
          </p>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {operatingModel.map((item, index) => (
            <SectionReveal
              className={enterpriseModule("p-6")}
              delay={index * 0.05}
              key={item}
            >
              <span className="text-sm font-semibold text-gold-200">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold leading-snug text-cream-50">
                {item}
              </h3>
            </SectionReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
