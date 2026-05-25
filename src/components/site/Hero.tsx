"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/site/BrandLogo";
import { DownloadBrochureButton } from "@/components/site/DownloadBrochureButton";
import { enterprise } from "@/components/site/visual-system";
import { heroStats, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[min(850px,100svh)] overflow-hidden border-b border-white/10 pt-20"
      id="top"
    >
      <Image
        alt="Modern estate with embedded power infrastructure and solar integration"
        className="absolute inset-0 -z-20 object-cover object-[72%_center]"
        fill
        priority
        sizes="100vw"
        src="/imagery/estate-energy-infrastructure.webp"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,59,0.99)_0%,rgba(7,27,59,0.96)_37%,rgba(7,27,59,0.72)_56%,rgba(7,27,59,0.22)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,27,59,0.28),transparent_52%,rgba(7,27,59,0.92))]" />
      <div className={cn("absolute inset-0 -z-10 opacity-45", enterprise.blueprint)} />

      <Container className="flex min-h-[calc(min(850px,100svh)-5rem)] flex-col justify-between py-12 sm:py-16 lg:py-20">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-l-2 border-gold-300 pl-5">
            <BrandLogo
              className="h-32 object-left sm:h-36"
              priority
              sizes="(min-width: 640px) 140px, 124px"
            />
            <p className="mt-4 text-xs font-semibold uppercase text-gold-200">
              Embedded energy infrastructure
            </p>
          </div>

          <h1 className="mt-9 max-w-3xl text-balance text-[2.85rem] font-semibold leading-[1.08] text-cream-50 sm:text-6xl lg:text-7xl lg:leading-[1.04]">
            Reliable Estate Power. Smarter Infrastructure.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-steel-100 sm:text-xl">
            Embedded energy infrastructure for modern estates and commercial
            clusters.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#cta">
              Discuss your infrastructure
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <DownloadBrochureButton
              label="Download Company Profile"
              variant="secondary"
            />
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
        </motion.div>

        <div className="mt-14 grid max-w-3xl gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div className="bg-ink-950/88 px-5 py-4" key={stat.label}>
              <p className="text-2xl font-semibold text-gold-200">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-steel-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
