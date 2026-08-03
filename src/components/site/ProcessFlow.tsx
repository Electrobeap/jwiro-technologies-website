import { cn } from "@/lib/utils";

type ProcessFlowProps = {
  steps: ReadonlyArray<{ step: string; note: string }>;
  className?: string;
};

/**
 * Horizontal process flow that stacks vertically on small screens.
 */
export function ProcessFlow({ steps, className }: ProcessFlowProps) {
  return (
    <ol
      className={cn(
        "grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0",
        className
      )}
    >
      {steps.map((item, index) => (
        <li
          className={cn(
            "relative rounded-md border border-white/10 bg-[#0E2A5A]/70 p-5",
            "lg:rounded-none lg:border-l-0 lg:first:rounded-l-md lg:first:border-l lg:last:rounded-r-md"
          )}
          key={item.step}
        >
          <span className="font-mono text-xs text-steel-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-sm font-semibold text-cream-50">
            {item.step}
          </p>
          <p className="mt-2 text-xs leading-6 text-steel-400">{item.note}</p>
          {index < steps.length - 1 ? (
            <span
              aria-hidden
              className="absolute right-[-1px] top-1/2 hidden h-2 w-2 -translate-y-1/2 translate-x-1/2 rotate-45 border-r border-t border-gold-300/60 bg-[#081F42] lg:block"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
