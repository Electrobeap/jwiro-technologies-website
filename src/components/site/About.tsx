import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterpriseModule, enterprisePanel } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

const operatingModel = [
  "Embedded infrastructure design",
  "Hybrid power source planning",
  "Smart monitoring and reporting",
  "Managed operations and runtime maintenance"
];

export function About() {
  return (
    <SectionShell
      description="Jirow Technologies Limited brings power engineering, operational discipline and smart infrastructure thinking into one managed delivery model for modern communities."
      eyebrow="About Jirow"
      id="about"
      title="Infrastructure built for communities that cannot afford guesswork."
    >
      <div className="grid gap-5 lg:grid-cols-[5fr_7fr]">
        <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
          <p className="text-2xl font-semibold leading-tight text-cream-50 sm:text-3xl">
            Jirow is positioned for estate associations, developers, facility
            managers and operators who need dependable power infrastructure with
            transparent operations behind it.
          </p>
          <div className={cn("my-6", enterprise.hairline)} />
          <p className="leading-8 text-steel-300">
            The company connects the physical layer of energy delivery with
            monitoring, reporting and service governance, creating a stronger
            foundation for solar integration, analytics platforms and customer
            portals.
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
