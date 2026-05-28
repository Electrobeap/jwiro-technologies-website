import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/data";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Talk to Jirow Technologies on WhatsApp"
      className="fixed right-4 top-28 z-[45] inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-gold-300 bg-gold-300 px-4 py-3 text-sm font-semibold text-[#101828] shadow-[0_18px_42px_rgba(2,12,30,0.35)] transition hover:bg-gold-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-200 sm:bottom-6 sm:right-6 sm:top-auto"
      href={siteConfig.whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Talk on WhatsApp</span>
    </a>
  );
}
