/**
 * WhatsApp routing for Jirow's two divisions.
 *
 * One number, several entry points. Which pre-filled message a CTA opens is
 * decided by the division the page belongs to, so an export enquiry does not
 * arrive looking like an energy enquiry. Add new routes to `TRADE_ROUTES`
 * rather than hard-coding hrefs at call sites.
 */

export const whatsappNumber = "2348137832844";

export const whatsappBase = `https://wa.me/${whatsappNumber}`;

export type WhatsAppIntent = "energy" | "trade-buyer" | "trade-supplier";

export const whatsappIntents = {
  energy: {
    label: "Talk to Jirow Energy",
    shortLabel: "WhatsApp",
    message:
      "ENERGY & TECHNOLOGY ENQUIRY — Hello Jirow, I'm interested in Jirow's Energy & Technology Services."
  },
  "trade-buyer": {
    label: "Talk to Global Trade",
    shortLabel: "WhatsApp",
    message:
      "EXPORT ENQUIRY — Hello Jirow Global Trade & Export, I'm interested in sourcing/exporting Nigerian products."
  },
  "trade-supplier": {
    label: "Talk to Global Trade",
    shortLabel: "WhatsApp",
    message:
      "SUPPLIER ENQUIRY — Hello Jirow Global Trade & Export, I'd like to discuss supplying products through Jirow."
  }
} as const satisfies Record<
  WhatsAppIntent,
  { label: string; shortLabel: string; message: string }
>;

/** Route prefixes owned by the Global Trade & Export division. */
const TRADE_ROUTES = ["/global-trade"];

/**
 * Which division a path belongs to. Everything outside the trade routes is
 * energy and technology, which keeps that the default for the whole site.
 */
export function intentForPath(pathname: string | null): WhatsAppIntent {
  if (pathname && TRADE_ROUTES.some((route) => pathname.startsWith(route))) {
    return "trade-buyer";
  }
  return "energy";
}

export function whatsappHref(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function whatsappHrefFor(intent: WhatsAppIntent) {
  return whatsappHref(whatsappIntents[intent].message);
}
