"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

import { ButtonLink, type ButtonVariant } from "@/components/ui/ButtonLink";
import {
  intentForPath,
  whatsappHrefFor,
  whatsappIntents,
  type WhatsAppIntent
} from "@/lib/whatsapp";

type WhatsAppCTAProps = {
  /**
   * Which pre-filled message to open. Defaults to "auto", which resolves the
   * division from the current route so shared components (footer, contact,
   * closing CTA) carry the right message on every page.
   */
  intent?: WhatsAppIntent | "auto";
  /** Overrides the intent's own label. */
  label?: string;
  /** Use the intent's full division label instead of the short one. */
  useIntentLabel?: boolean;
  variant?: ButtonVariant;
  className?: string;
};

export function WhatsAppCTA({
  intent = "auto",
  label,
  useIntentLabel = false,
  variant = "primary",
  className
}: WhatsAppCTAProps) {
  const pathname = usePathname();
  const resolved = intent === "auto" ? intentForPath(pathname) : intent;
  const copy = whatsappIntents[resolved];

  return (
    <ButtonLink
      className={className}
      href={whatsappHrefFor(resolved)}
      rel="noreferrer"
      target="_blank"
      variant={variant}
    >
      <MessageCircle className="h-4 w-4" />
      {label ?? (useIntentLabel ? copy.label : copy.shortLabel)}
    </ButtonLink>
  );
}
