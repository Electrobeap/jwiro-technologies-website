import { cn } from "@/lib/utils";

export const enterprise = {
  sectionBand:
    "border-y border-white/10 bg-[#081F42]",
  panel:
    "rounded-md border border-white/10 bg-[#0E2A5A] shadow-[0_18px_42px_rgba(2,12,30,0.2)]",
  module:
    "h-full rounded-md border border-white/10 bg-[#0E2A5A] transition duration-300 hover:border-[#C89B3C]/45 hover:bg-[#133263]",
  moduleAmber:
    "h-full rounded-md border border-[#C89B3C]/25 bg-[#0E2A5A] transition duration-300 hover:border-[#C89B3C]/45 hover:bg-[#133263]",
  moduleCyan:
    "h-full rounded-md border border-[#82ADBF]/22 bg-[#0E2A5A] transition duration-300 hover:border-[#82ADBF]/45 hover:bg-[#133263]",
  inner:
    "rounded-sm border border-white/10 bg-[#091F43]",
  iconAmber:
    "grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-[#C89B3C]/35 bg-[#C89B3C]/10 text-[#D9B76A]",
  iconCyan:
    "grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-[#82ADBF]/35 bg-[#82ADBF]/10 text-[#D9DDE5]",
  blueprint:
    "bg-[linear-gradient(rgba(130,173,191,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(130,173,191,0.04)_1px,transparent_1px)] bg-[size:48px_48px]",
  hairline:
    "h-px bg-gradient-to-r from-[#C89B3C]/75 via-[#D9B76A]/30 to-transparent"
};

export function enterprisePanel(className?: string) {
  return cn(enterprise.panel, className);
}

export function enterpriseModule(className?: string) {
  return cn(enterprise.module, className);
}
