import { SectionShell } from "@/components/site/SectionShell";
import { SectionReveal } from "@/components/ui/SectionReveal";

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
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <SectionReveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
          <p className="text-xl font-medium leading-9 text-cream-100">
            Jirow is positioned for estate associations, developers, facility
            managers and operators who need dependable power infrastructure with
            transparent operations behind it.
          </p>
          <p className="mt-6 leading-8 text-steel-300">
            The company connects the physical layer of energy delivery with
            monitoring, reporting and service governance, creating a stronger
            foundation for solar integration, analytics platforms and customer
            portals.
          </p>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {operatingModel.map((item, index) => (
            <SectionReveal
              className="group rounded-[1.75rem] border border-white/10 bg-ink-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-300/40 hover:bg-white/[0.05]"
              delay={index * 0.05}
              key={item}
            >
              <span className="text-sm font-semibold text-gold-200">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-cream-50">
                {item}
              </h3>
            </SectionReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
