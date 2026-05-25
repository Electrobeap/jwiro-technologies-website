import { ExternalLink, Mail, MessageCircle } from "lucide-react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { DownloadBrochureButton } from "@/components/site/DownloadBrochureButton";
import { enterprise } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-gold-300/25 bg-[#071B3B] py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[5fr_3fr_4fr]">
          <div>
            <BrandLogo
              className="h-40 object-left sm:h-44"
              sizes="(min-width: 640px) 168px, 152px"
            />
            <p className="mt-6 max-w-xl leading-8 text-steel-300">
              Embedded energy infrastructure, managed estate power systems,
              smart metering and operational reliability for modern communities.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsappHref}
                rel="noreferrer"
                target="_blank"
                variant="ghost"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-7">
            <h3 className="text-sm font-semibold uppercase text-gold-100">
              Sections
            </h3>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <a
                  className="text-sm text-steel-300 transition hover:text-cream-50"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-7">
            <h3 className="text-sm font-semibold uppercase text-gold-100">
              Company Profile
            </h3>
            <p className="mt-5 text-sm leading-7 text-steel-300">
              Explore the embedded energy infrastructure model, monitoring
              capabilities and managed operations approach.
            </p>
            <DownloadBrochureButton className="mt-6" label="Download Company Profile" variant="secondary" />
            <a
              className="mt-5 inline-flex items-center gap-2 text-sm text-steel-200 transition hover:text-gold-200"
              href={siteConfig.websiteHref}
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink className="h-4 w-4" />
              {siteConfig.website}
            </a>
          </div>
        </div>

        <div className={cn("mt-10", enterprise.hairline)} />
        <div className="mt-6 flex flex-col gap-3 text-sm text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Jirow Technologies Limited. All
            rights reserved.
          </p>
          <p>Innovate. Integrate. Elevate.</p>
        </div>
      </Container>
    </footer>
  );
}
