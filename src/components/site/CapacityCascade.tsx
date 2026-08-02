import { enterprise } from "@/components/site/visual-system";
import { capacityCascade } from "@/lib/data";
import { cn } from "@/lib/utils";

const formatter = new Intl.NumberFormat("en-NG", {
  maximumFractionDigits: 2
});

const max = Math.max(...capacityCascade.map((row) => row.value));

/**
 * The capacity cascade: measured capacity against delivered performance.
 * The gap between the first bar and the last is the sector's core problem.
 */
export function CapacityCascade({ className }: { className?: string }) {
  return (
    <figure className={cn("m-0", className)}>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <p className={enterprise.eyebrow}>
          The capacity cascade — MW
        </p>
        <p className="flex flex-wrap items-center gap-4 text-xs text-steel-400">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="h-2 w-4 rounded-[1px] bg-gold-300" />
            Measured capacity
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="h-2 w-4 rounded-[1px] bg-technical-400"
            />
            Delivered performance
          </span>
        </p>
      </figcaption>

      <ul className="mt-6 grid gap-4">
        {capacityCascade.map((row) => (
          <li key={row.label}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-sm text-steel-200">{row.label}</span>
              <span className="font-mono text-sm font-semibold text-cream-50">
                {formatter.format(row.value)}
              </span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-[2px] bg-white/[0.07]">
              <div
                className={cn(
                  "h-full rounded-[2px]",
                  row.kind === "measured" ? "bg-gold-300" : "bg-technical-400"
                )}
                style={{ width: `${(row.value / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className={cn("mt-6 w-full max-w-xs", enterprise.hairline)} />
      <p className="mt-4 text-sm leading-7 text-steel-300">
        The gap between the first bar and the last is the sector&apos;s core
        problem.
      </p>
    </figure>
  );
}
