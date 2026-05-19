import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-gold-300/70 bg-gold-300 text-ink-950 shadow-[0_18px_45px_rgba(210,172,87,0.18)] hover:bg-gold-200 hover:shadow-[0_24px_60px_rgba(210,172,87,0.26)]",
  secondary:
    "border-gold-300/30 bg-white/[0.03] text-cream-100 hover:border-gold-300/70 hover:bg-gold-300/10",
  ghost:
    "border-transparent bg-transparent text-cream-100 hover:border-white/15 hover:bg-white/[0.04]",
  dark:
    "border-white/10 bg-ink-950 text-cream-100 hover:border-gold-300/50 hover:bg-emerald-950"
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
