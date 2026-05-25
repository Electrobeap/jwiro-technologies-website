import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-gold-300/35 bg-gold-300/10 px-3 py-1 text-xs font-semibold uppercase text-gold-200",
        className
      )}
    >
      {children}
    </span>
  );
}
