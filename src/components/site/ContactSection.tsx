import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { LeadForm } from "@/components/site/LeadForm";
import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone,
    external: false
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false
  },
  {
    label: "Office",
    value: siteConfig.addressLines.join(", "),
    href: "https://maps.google.com/?q=The+Octagon+32A+Commercial+Avenue+Sabo+Yaba+Lagos",
    icon: MapPin,
    external: true
  },
  {
    label: "Flagship platform",
    value: siteConfig.platformDomain,
    href: siteConfig.platformHref,
    icon: ExternalLink,
    external: true
  }
];

export function ContactSection() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="Jirow works with regulators, utilities, enterprises, investors and development finance institutions bringing intelligence to the infrastructure they depend on."
      eyebrow="Contact"
      id="contact"
      title="Start a conversation"
    >
      <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
        <div className={enterprisePanel("p-6 sm:p-7")}>
          <p className="text-lg font-semibold leading-8 text-cream-50">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm leading-7 text-steel-300">
            {siteConfig.addressLines[0]}
            <br />
            {siteConfig.addressLines[1]}
          </p>

          <div className="mt-7 grid gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className="flex items-center gap-4 rounded-sm border border-white/10 bg-ink-950/55 p-4 text-sm text-steel-200 transition hover:border-gold-300/45 hover:text-cream-50"
                  href={item.href}
                  key={item.label}
                  rel={item.external ? "noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  <span className={enterprise.iconAmber}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gold-200">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <ButtonLink
            className="mt-6 w-full"
            href={siteConfig.whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="h-4 w-4" />
            Talk on WhatsApp
          </ButtonLink>
        </div>

        <div className={enterprisePanel("p-6 sm:p-7")}>
          <p className={cn("mb-5", enterprise.eyebrow)}>
            Enquiry
          </p>
          <LeadForm />
        </div>
      </div>
    </SectionShell>
  );
}
