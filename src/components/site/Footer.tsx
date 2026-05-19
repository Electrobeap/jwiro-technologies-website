import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/data";

const platformLinks = [
  "Smart dashboards",
  "Solar integration",
  "Energy analytics",
  "Customer portal"
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border border-gold-300/30 bg-black">
                <Image
                  alt="Jirow Technologies Limited logo"
                  className="object-cover"
                  fill
                  sizes="64px"
                  src={siteConfig.logo}
                />
              </span>
              <div>
                <p className="font-semibold uppercase text-cream-50">
                  Jirow
                </p>
                <p className="text-xs uppercase text-steel-400">
                  Technologies Limited
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xl leading-8 text-steel-300">
              Embedded power infrastructure, hybrid energy systems, smart
              monitoring and managed operations for modern communities.
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

          <div>
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

          <div>
            <h3 className="text-sm font-semibold uppercase text-gold-100">
              Expansion Path
            </h3>
            <div className="mt-5 grid gap-3">
              {platformLinks.map((item) => (
                <span className="text-sm text-steel-300" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-steel-500 sm:flex-row sm:items-center sm:justify-between">
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
