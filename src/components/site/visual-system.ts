import { cn } from "@/lib/utils";

export const enterprise = {
  sectionBand:
    "border-y border-white/10 bg-[#081F42]",
  panel:
    "rounded-md border border-white/10 bg-[#0E2A5A] shadow-[0_18px_42px_rgba(2,12,30,0.2)]",
  module:
    "h-full rounded-md border border-white/10 bg-[#0E2A5A] transition duration-300 hover:border-gold-300/45 hover:bg-[#133263]",
  inner:
    "rounded-sm border border-white/10 bg-[#091F43]",
  iconAmber:
    "grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-gold-300/35 bg-gold-300/10 text-gold-200",
  iconCyan:
    "grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-[#82ADBF]/35 bg-[#82ADBF]/10 text-[#D9DDE5]",
  /**
   * Section eyebrow — the small gold label above a heading. Centralised so
   * letter-spacing and weight stay identical everywhere they appear.
   */
  eyebrow: "text-xs font-semibold uppercase tracking-[0.16em] text-gold-200",
  /** Quiet label for data cells, table headers and metadata rows. */
  label:
    "text-xs font-semibold uppercase tracking-[0.12em] text-steel-400",
  blueprint:
    "bg-[linear-gradient(rgba(130,173,191,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(130,173,191,0.04)_1px,transparent_1px)] bg-[size:48px_48px]",
  hairline:
    "h-px bg-gradient-to-r from-gold-300/75 via-gold-200/30 to-transparent"
};

export function enterprisePanel(className?: string) {
  return cn(enterprise.panel, className);
}

export function enterpriseModule(className?: string) {
  return cn(enterprise.module, className);
}
