"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

import { intentForPath, whatsappHrefFor } from "@/lib/whatsapp";

/**
 * Footer WhatsApp link. Styled as a quiet text link rather than a button, but
 * routed by division like every other WhatsApp entry point.
 */
export function WhatsAppFooterLink() {
  const intent = intentForPath(usePathname());

  return (
    <a
      className="inline-flex min-w-0 items-center gap-2 break-words py-1 text-xs leading-6 text-steel-300 transition hover:text-gold-200"
      href={whatsappHrefFor(intent)}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      WhatsApp
    </a>
  );
}
