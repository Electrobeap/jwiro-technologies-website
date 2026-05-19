"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type InfrastructureVisualProps = {
  variant?: "estate" | "monitoring" | "hybrid";
  className?: string;
};

const variantCopy = {
  estate: {
    heading: "Estate power spine",
    label: "Embedded distribution",
    metric: "Managed uptime",
    nodes: ["Gatehouse", "Residential", "Retail", "Water", "Security"]
  },
  monitoring: {
    heading: "Live energy command",
    label: "Smart monitoring",
    metric: "Runtime intelligence",
    nodes: ["Load", "Meters", "Alarms", "Fuel", "Reports"]
  },
  hybrid: {
    heading: "Hybrid source layer",
    label: "Grid + generation + solar",
    metric: "Source orchestration",
    nodes: ["Grid", "Gas", "Solar", "Battery", "Priority"]
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
  const reduceMotion = useReducedMotion();
  const copy = variantCopy[variant];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-2xl shadow-emerald-950/40",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(231,196,121,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(231,196,121,0.05)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="relative rounded-[1.5rem] border border-white/10 bg-ink-950/80 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-gold-200">
              {copy.label}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-cream-50">
              {copy.heading}
            </h3>
          </div>
          <div className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            Online
          </div>
        </div>

        <div className="relative mt-8 min-h-[260px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(231,196,121,0.1),transparent_44%),linear-gradient(160deg,rgba(11,50,42,0.88),rgba(2,12,15,0.92))] p-5">
          <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 -translate-y-1/2 bg-gold-300/40" />
          <div className="absolute left-1/2 top-[18%] h-[64%] w-px -translate-x-1/2 bg-emerald-300/35" />
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.25, 0.9, 0.25],
                    scale: [0.88, 1.08, 0.88]
                  }
            }
            className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-300/40 bg-gold-300/10"
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold-200/70 bg-ink-950 text-center shadow-[0_0_40px_rgba(231,196,121,0.18)]">
              <span className="text-[10px] font-semibold uppercase text-gold-100">
              Jirow
            </span>
          </div>

          {copy.nodes.map((node, index) => {
            const positions = [
              "left-[8%] top-[14%]",
              "right-[9%] top-[18%]",
              "left-[10%] bottom-[15%]",
              "right-[11%] bottom-[14%]",
              "left-1/2 bottom-[5%] -translate-x-1/2"
            ];

            return (
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: index % 2 === 0 ? [0, -5, 0] : [0, 5, 0] }
                }
                className={cn(
                  "absolute rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-steel-100 shadow-xl backdrop-blur",
                  positions[index]
                )}
                key={node}
                transition={{
                  duration: 3.4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {node}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["Load balance", copy.metric, "Service logs"].map((label, index) => (
            <div
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              key={label}
            >
              <p className="text-xs text-steel-400">{label}</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { width: [`${54 + index * 8}%`, `${78 + index * 5}%`] }
                  }
                  className="h-full rounded-full bg-gradient-to-r from-gold-300 to-emerald-300"
                  transition={{
                    duration: 3 + index * 0.35,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
