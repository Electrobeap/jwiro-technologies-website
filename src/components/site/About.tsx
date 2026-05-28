import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const operatingModel = [
  "Embedded energy infrastructure",
  "Estate embedded power governance",
  "Smart monitoring and analytics",
  "Hybrid-ready operations roadmap"
];

export function About() {
  return (
    <SectionShell
      description="Jirow Technologies Limited is an embedded energy infrastructure company in Lagos, Nigeria, focused on reliable estate power, hybrid power systems and operational visibility for modern communities."
      eyebrow="Company Overview"
      id="about"
      title="Infrastructure-grade power delivery for estates, developers and commercial clusters."
    >
      <div className="grid gap-5 lg:grid-cols-[5fr_7fr]">
        <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
          <p className="text-2xl font-semibold leading-tight text-cream-50 sm:text-3xl">
            Jirow is built for estate developers, facility managers,
            infrastructure partners and commercial operators who need dependable
            energy infrastructure with transparent operations behind it.
          </p>
          <div className={cn("my-6", enterprise.hairline)} />
          <p className="leading-8 text-steel-300">
            The company connects physical power systems with monitoring,
            reporting and service governance, creating a stronger foundation for
            renewable energy integration, analytics platforms and customer
            portals.
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
