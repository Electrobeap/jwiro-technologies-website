import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export const buttonBaseClassName =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border-gold-300 bg-gold-300 text-[#101828] shadow-[0_12px_30px_rgba(200,155,60,0.16)] hover:bg-gold-200",
  secondary:
    "border-gold-300/45 bg-transparent text-cream-50 hover:border-gold-300 hover:bg-gold-300/10",
  ghost:
    "border-white/15 bg-transparent text-cream-50 hover:border-gold-300/45 hover:bg-white/[0.04]",
  dark:
    "border-white/10 bg-ink-950 text-cream-50 hover:border-gold-300/50 hover:bg-ink-900"
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
        buttonBaseClassName,
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
