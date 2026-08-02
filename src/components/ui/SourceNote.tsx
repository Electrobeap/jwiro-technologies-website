import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

type SourceNoteProps = {
  children: string;
  className?: string;
};

export function SourceNote({ children, className }: SourceNoteProps) {
  return (
    <p
      className={cn(
        "flex gap-3 rounded-sm border border-white/10 bg-ink-950/55 px-4 py-3 text-xs leading-6 text-steel-400",
        className
      )}
    >
      <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-steel-400" />
      <span>{children}</span>
    </p>
  );
}
