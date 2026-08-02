import { regulatoryTimeline } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Decentralisation of regulatory oversight, 2005 → 2026.
 */
export function RegulatoryTimeline({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
        Decentralisation of regulatory oversight
      </p>
      <ol className="relative mt-7 grid gap-6 sm:grid-cols-4 sm:gap-4">
        <span
          aria-hidden
          className="absolute left-[5px] top-2 hidden h-px w-full bg-gradient-to-r from-gold-300/60 via-gold-300/30 to-transparent sm:block"
        />
        {regulatoryTimeline.map((item, index) => (
          <li className="relative pl-6 sm:pl-0 sm:pt-8" key={item.year}>
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full sm:top-[-0.3rem]",
                index === regulatoryTimeline.length - 1
                  ? "bg-gold-300 ring-4 ring-gold-300/20"
                  : "bg-gold-300/55"
              )}
            />
            <span
              aria-hidden
              className="absolute left-[5px] top-4 h-full w-px bg-white/10 sm:hidden"
            />
            <p className="font-mono text-sm font-semibold text-gold-200">
              {item.year}
            </p>
            <p className="mt-2 text-base font-semibold text-cream-50">
              {item.title}
            </p>
            <p className="mt-1 text-xs leading-6 text-steel-400">{item.note}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
