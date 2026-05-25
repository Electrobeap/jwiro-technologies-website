import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { cn } from "@/lib/utils";

type InfrastructureVisualProps = {
  variant?: "estate" | "monitoring" | "hybrid";
  className?: string;
};

const variantCopy = {
  estate: {
    heading: "Estate energy architecture",
    label: "Embedded distribution",
    metric: "Managed uptime",
    nodes: ["Estate Loads", "Metering", "Distribution", "Monitoring", "Operations"]
  },
  monitoring: {
    heading: "Remote monitoring layer",
    label: "Operational intelligence",
    metric: "Runtime visibility",
    nodes: ["Meters", "Source Status", "Alerts", "Reports", "Service"]
  },
  hybrid: {
    heading: "Hybrid energy pathway",
    label: "Source integration",
    metric: "Source orchestration",
    nodes: ["Grid", "Generation", "Solar", "Priority Loads", "Analytics"]
  }
} satisfies Record<
  NonNullable<InfrastructureVisualProps["variant"]>,
  {
    heading: string;
    label: string;
    metric: string;
    nodes: string[];
  }
>;

export function InfrastructureVisual({
  variant = "estate",
  className
}: InfrastructureVisualProps) {
  const copy = variantCopy[variant];

  return (
    <div className={cn(enterprisePanel("relative overflow-hidden p-4"), className)}>
      <div className={cn("absolute inset-0 opacity-50", enterprise.blueprint)} />
      <div className={cn("relative p-5 sm:p-6", enterprise.inner)}>
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase text-gold-200">
              {copy.label}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-cream-50">
              {copy.heading}
            </h3>
          </div>
          <div className="rounded-sm border border-technical-300/25 bg-technical-300/10 px-3 py-1 text-xs font-semibold text-steel-100">
            Active
          </div>
        </div>

        <div className={cn("relative mt-6 min-h-[248px] overflow-hidden p-5", enterprise.inner)}>
          <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gold-300/45" />
          <div className="absolute bottom-[17%] left-1/2 top-[17%] w-px -translate-x-1/2 bg-technical-300/35" />
          <div className="absolute left-1/2 top-1/2 grid h-20 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center border border-gold-300/55 bg-ink-950 text-center">
            <span className="text-[11px] font-semibold uppercase text-gold-200">
              Jirow Core
            </span>
          </div>

          {copy.nodes.map((node, index) => {
            const positions = [
              "left-[7%] top-[15%]",
              "right-[7%] top-[15%]",
              "left-[7%] bottom-[15%]",
              "right-[7%] bottom-[15%]",
              "left-1/2 bottom-[5%] -translate-x-1/2"
            ];

            return (
              <div
                className={cn(
                  "absolute min-w-24 border border-white/10 bg-ink-900 px-3 py-2 text-center text-xs font-medium text-steel-100",
                  positions[index]
                )}
                key={node}
              >
                {node}
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-px bg-white/10 sm:grid-cols-3">
          {["Load balance", copy.metric, "Service evidence"].map((label, index) => (
            <div className="bg-ink-950 p-4" key={label}>
              <p className="text-xs text-steel-300">{label}</p>
              <div className="mt-3 h-1.5 bg-white/10">
                <div
                  className={cn(
                    "h-full",
                    index === 1 ? "bg-technical-300" : "bg-gold-300"
                  )}
                  style={{ width: `${62 + index * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
