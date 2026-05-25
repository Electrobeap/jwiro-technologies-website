"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { DownloadBrochureButton } from "@/components/site/DownloadBrochureButton";
import { enterprisePanel } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071B3B]/94 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a
          aria-label="Jirow Technologies Limited home"
          className="flex h-full shrink-0 items-center gap-3 px-1 py-3 sm:px-2"
          href="#top"
          onClick={() => setOpen(false)}
        >
          <BrandLogo
            className="h-11 shrink-0 sm:h-12"
            priority
            sizes="(min-width: 640px) 48px, 44px"
            variant="mark"
          />
          <span className="hidden border-l border-gold-300/35 pl-3 sm:block">
            <span className="block text-sm font-semibold uppercase text-gold-100">
              Jirow
            </span>
            <span className="mt-0.5 block text-[11px] font-medium uppercase text-steel-200">
              Technologies Limited
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              className="rounded-sm px-4 py-2 text-sm font-medium text-steel-200 transition hover:bg-white/[0.05] hover:text-gold-200"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <DownloadBrochureButton label="Company Profile" variant="ghost" />
          <ButtonLink
            href={siteConfig.whatsappHref}
            rel="noreferrer"
            target="_blank"
            variant="secondary"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </ButtonLink>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="grid h-11 w-11 place-items-center rounded-sm border border-white/10 bg-white/[0.04] text-cream-50 transition hover:border-gold-300/40 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden"
            exit={{ opacity: 0, y: -12 }}
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <Container className="pb-5">
              <div className={enterprisePanel("p-3")}>
                {navLinks.map((link) => (
                  <a
                    className={cn(
                      "block rounded-sm px-4 py-3 text-sm font-medium text-steel-200",
                      "transition hover:bg-white/[0.06] hover:text-cream-50"
                    )}
                    href={link.href}
                    key={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <ButtonLink
                    className="w-full"
                    href={siteConfig.whatsappHref}
                    onClick={() => setOpen(false)}
                    rel="noreferrer"
                    target="_blank"
                    variant="secondary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </ButtonLink>
                  <DownloadBrochureButton
                    className="w-full"
                    label="Company Profile"
                    onDownloaded={() => setOpen(false)}
                    variant="primary"
                  />
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
