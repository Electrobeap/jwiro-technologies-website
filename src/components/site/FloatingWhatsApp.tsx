"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

import { intentForPath, whatsappHrefFor, whatsappIntents } from "@/lib/whatsapp";

/**
 * Persistent WhatsApp entry point. The label and pre-filled message follow the
 * division of the page it is shown on: "Talk to Jirow Energy" across the
 * technology and energy site, "Talk to Global Trade" on the export pages.
 */
export function FloatingWhatsApp() {
  const pathname = usePathname();
  const intent = intentForPath(pathname);
  const copy = whatsappIntents[intent];

  return (
    <a
      aria-label={`${copy.label} on WhatsApp`}
      className="fixed bottom-5 right-4 z-[45] inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-gold-300 bg-gold-300 px-4 py-3 text-sm font-semibold text-[#101828] shadow-[0_18px_42px_rgba(2,12,30,0.35)] transition hover:bg-gold-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-200 sm:bottom-6 sm:right-6"
      href={whatsappHrefFor(intent)}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">{copy.label}</span>
    </a>
  );
}
