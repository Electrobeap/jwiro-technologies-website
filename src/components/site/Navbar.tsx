"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/78 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a
          aria-label="Jirow Technologies Limited home"
          className="flex items-center gap-3"
          href="#top"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-gold-300/30 bg-black">
            <Image
              alt="Jirow Technologies Limited logo"
              className="object-cover"
              fill
              priority
              sizes="48px"
              src={siteConfig.logo}
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold uppercase text-cream-50">
              Jirow
            </span>
            <span className="block text-[11px] uppercase text-steel-400">
              Technologies Limited
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-medium text-steel-300 transition hover:bg-white/[0.05] hover:text-cream-50"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={siteConfig.brochureHref} variant="ghost" download>
            <Download className="h-4 w-4" />
            Brochure
          </ButtonLink>
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
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-cream-50 transition hover:border-gold-300/40 lg:hidden"
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
              <div className="rounded-3xl border border-white/10 bg-ink-900/95 p-3 shadow-2xl shadow-black/30">
                {navLinks.map((link) => (
                  <a
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-medium text-steel-200",
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
                  <ButtonLink
                    className="w-full"
                    download
                    href={siteConfig.brochureHref}
                    onClick={() => setOpen(false)}
                    variant="primary"
                  >
                    <Download className="h-4 w-4" />
                    Brochure
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
