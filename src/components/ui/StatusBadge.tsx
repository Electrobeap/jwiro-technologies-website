import type { ProductStatus } from "@/lib/data";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: ProductStatus;
  className?: string;
  label?: string;
};

const statusStyles: Record<ProductStatus, string> = {
  live: "border-gold-300/55 bg-gold-300/12 text-gold-100",
  "in-development": "border-technical-300/35 bg-technical-300/10 text-steel-200"
};

const statusDot: Record<ProductStatus, string> = {
  live: "bg-gold-200",
  "in-development": "bg-technical-300"
};

const statusText: Record<ProductStatus, string> = {
  live: "Live",
  "in-development": "In development"
};

export function StatusBadge({ status, className, label }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em]",
        statusStyles[status],
        className
      )}
    >
      <span
        aria-hidden
        className={cn("h-1.5 w-1.5 rounded-full", statusDot[status])}
      />
      {label ?? statusText[status]}
    </span>
  );
}
