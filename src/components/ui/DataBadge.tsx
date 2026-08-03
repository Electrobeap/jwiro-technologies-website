import { cn } from "@/lib/utils";

export type DataBasis = "measured" | "estimate" | "derived" | "delivered";

type DataBadgeProps = {
  basis: DataBasis;
  className?: string;
  children?: string;
};

const basisStyles: Record<DataBasis, string> = {
  measured: "border-gold-300/45 bg-gold-300/10 text-gold-100",
  delivered: "border-technical-300/40 bg-technical-300/10 text-technical-300",
  derived: "border-technical-300/40 bg-technical-300/10 text-technical-300",
  estimate: "border-technical-300/40 bg-technical-300/10 text-technical-300"
};

/**
 * Renders the measured/modeled distinction that the platform enforces in
 * product. Never render an estimate without this label beside it.
 */
export function DataBadge({ basis, className, children }: DataBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em]",
        basisStyles[basis],
        className
      )}
    >
      {children ?? basis}
    </span>
  );
}
