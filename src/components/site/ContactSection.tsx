import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { LeadForm } from "@/components/site/LeadForm";
import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/data";

const contactItems = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: siteConfig.websiteHref,
    icon: MapPin
  }
];

export function ContactSection() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="Start with a focused consultation around current power reliability, estate growth plans, monitoring requirements and commercial operating structure."
      eyebrow="Contact"
      id="contact"
      title="Book a consultation for estate or commercial energy infrastructure."
    >
      <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
        <div className={enterprisePanel("p-6 sm:p-7")}>
          <p className="text-xl font-semibold leading-8 text-cream-50">
            Jirow Technologies Limited supports estate developers, facility
            managers and infrastructure partners from Lagos with embedded power
            systems, smart monitoring infrastructure and hybrid energy
            consulting.
          </p>
          <div className="mt-7 grid gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className="flex items-center gap-4 rounded-sm border border-white/10 bg-ink-950/55 p-4 text-sm text-steel-200 transition hover:border-gold-300/45 hover:text-cream-50"
                  href={item.href}
                  key={item.label}
                  rel={item.label === "Location" ? "noreferrer" : undefined}
                  target={item.label === "Location" ? "_blank" : undefined}
                >
                  <span className={enterprise.iconAmber}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase text-gold-200">
                      {item.label}
                    </span>
                    <span className="mt-1 block">{item.value}</span>
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
          <p className="mb-5 text-sm font-semibold uppercase text-gold-200">
            Consultation request
          </p>
          <LeadForm />
        </div>
      </div>
    </SectionShell>
  );
}
