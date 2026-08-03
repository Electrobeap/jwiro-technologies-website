import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { enterprise } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { architectureLayers } from "@/lib/data";
import { cn } from "@/lib/utils";

type ArchitectureStackProps = {
  className?: string;
};

/**
 * The three-altitude product stack: decision, facility, national.
 * Rendered top-down so the national layer reads as the foundation.
 */
export function ArchitectureStack({ className }: ArchitectureStackProps) {
  return (
    <div className={cn("grid gap-3", className)}>
      {architectureLayers.map((layer, index) => {
        const isFoundation = layer.status === "live";

        return (
          <SectionReveal delay={index * 0.06} key={layer.layer}>
            <Link
              className={cn(
                "group relative block rounded-md border p-5 transition duration-300 sm:p-6",
                isFoundation
                  ? "border-gold-300/40 bg-[#0E2A5A] hover:border-gold-300/70"
                  : "border-white/10 bg-[#0E2A5A]/85 hover:border-technical-300/45"
              )}
              href={layer.href}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-400">
                  {layer.layer} — {layer.name}
                </p>
                <StatusBadge status={layer.status} />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-cream-50 sm:text-2xl">
                  {layer.product}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-200">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-steel-300">
                {layer.description}
              </p>
              {isFoundation ? (
                <div className={cn("mt-5 w-24", enterprise.hairline)} />
              ) : null}
            </Link>
          </SectionReveal>
        );
      })}
    </div>
  );
}
