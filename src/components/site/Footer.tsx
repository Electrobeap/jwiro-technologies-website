import Link from "next/link";
import { ExternalLink, Mail, Phone } from "lucide-react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { DownloadBrochureButton } from "@/components/site/DownloadBrochureButton";
import { WhatsAppFooterLink } from "@/components/site/WhatsAppFooterLink";
import { enterprise } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { footerNav, shortPositioning, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-gold-300/25 bg-[#071B3B] py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <div>
            <BrandLogo
              className="h-36 object-left sm:h-40"
              sizes="(min-width: 640px) 160px, 140px"
            />
            <p className="mt-6 max-w-md leading-8 text-steel-300">
              {shortPositioning}
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-gold-200">
              {siteConfig.positioning}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={siteConfig.platformHref}
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                <ExternalLink className="h-4 w-4" />
                {siteConfig.platformDomain}
              </ButtonLink>
              <DownloadBrochureButton
                label="Corporate profile"
                variant="ghost"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 lg:border-l lg:border-white/10 lg:pl-8">
            {footerNav.map((group) => (
              <nav aria-label={group.title} key={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-100">
                  {group.title}
                </h2>
                <ul className="mt-5 grid gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="inline-block py-1 text-sm text-steel-300 transition hover:text-cream-50"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-100">
                Contact
              </h2>
              <address className="mt-5 not-italic text-xs leading-6 text-steel-300">
                {siteConfig.location}
              </address>
              <div className="mt-4 grid gap-2">
                <a
                  className="inline-flex min-w-0 items-center gap-2 break-words py-1 text-xs leading-6 text-steel-300 transition hover:text-gold-200"
                  href={siteConfig.phoneHref}
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
                <a
                  className="inline-flex min-w-0 items-start gap-2 break-words py-1 text-xs leading-6 text-steel-300 transition hover:text-gold-200"
                  href={`mailto:${siteConfig.email}`}
                >
                  <Mail className="mt-1 h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
                <WhatsAppFooterLink />
              </div>
            </div>
          </div>
        </div>

        <div className={cn("mt-12", enterprise.hairline)} />
        <div className="mt-6 flex flex-col gap-3 text-sm text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="uppercase tracking-[0.16em]">{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
