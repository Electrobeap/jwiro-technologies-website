import { SectionReveal } from "@/components/ui/SectionReveal";
import { roadmapStages } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Delivered: "border-gold-300/55 bg-gold-300/12 text-gold-100",
  "In progress": "border-gold-300/35 bg-gold-300/[0.06] text-gold-200",
  Next: "border-technical-300/35 bg-technical-300/10 text-technical-300",
  Planned: "border-white/15 bg-white/[0.04] text-steel-300",
  Horizon: "border-white/12 bg-white/[0.03] text-steel-400"
};

/**
 * Roadmap sequenced by capability, each stage anchored to a product outcome.
 */
export function RoadmapTimeline({ className }: { className?: string }) {
  return (
    <ol className={cn("relative grid gap-4", className)}>
      {roadmapStages.map((stage, index) => (
        <SectionReveal as="li" delay={index * 0.05} key={stage.number}>
          <div className="relative rounded-md border border-white/10 bg-[#0E2A5A]/80 p-6 transition duration-300 hover:border-gold-300/40 sm:p-7">
            <div className="grid gap-5 lg:grid-cols-[9rem_1fr] lg:gap-8">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                <span className="font-mono text-3xl font-semibold text-gold-300/70 sm:text-4xl">
                  {stage.number}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center rounded-sm border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em]",
                    statusStyles[stage.status] ?? statusStyles.Planned
                  )}
                >
                  {stage.status}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold leading-snug text-cream-50 sm:text-2xl">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-gold-200">
                  {stage.anchor}
                </p>
                <p className="mt-4 max-w-3xl leading-8 text-steel-300">
                  {stage.description}
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      ))}
    </ol>
  );
}
