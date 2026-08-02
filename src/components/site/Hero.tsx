"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { DownloadBrochureButton } from "@/components/site/DownloadBrochureButton";
import { enterprise } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { heroStats, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[min(880px,100svh)] overflow-hidden border-b border-white/10 pt-24 lg:pt-[6.5rem]"
      id="top"
    >
      <Image
        alt="Electricity transmission and distribution infrastructure at dusk"
        className="absolute inset-0 -z-20 object-cover object-[72%_center]"
        fill
        priority
        sizes="100vw"
        src="/imagery/estate-energy-infrastructure.webp"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,59,0.99)_0%,rgba(7,27,59,0.96)_37%,rgba(7,27,59,0.72)_56%,rgba(7,27,59,0.22)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,27,59,0.28),transparent_52%,rgba(7,27,59,0.92))]" />
      <div className={cn("absolute inset-0 -z-10 opacity-45", enterprise.blueprint)} />

      <Container className="flex min-h-[calc(min(880px,100svh)-6rem)] flex-col justify-between py-10 sm:py-12 lg:min-h-[calc(min(880px,100svh)-6.5rem)] lg:py-14">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-l-2 border-gold-300 pl-5">
            <BrandLogo
              className="h-24 object-left sm:h-28"
              priority
              sizes="(min-width: 640px) 110px, 96px"
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
              Energy technology · Software · Data infrastructure · AI
            </p>
          </div>

          <h1 className="mt-8 max-w-4xl text-balance text-[2.4rem] font-semibold leading-[1.06] text-cream-50 sm:text-5xl lg:text-[3.4rem]">
            The Intelligence Layer for Africa&apos;s Power Systems
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-steel-100 sm:text-xl">
            Jirow Technologies builds the software, data infrastructure and AI
            systems that make the performance of power infrastructure
            measurable, comparable and continuously visible.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center gap-x-4 gap-y-3 rounded-md border border-white/10 bg-ink-950/70 px-5 py-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-400">
              Flagship platform
            </span>
            <span className="text-base font-semibold text-cream-50">
              {siteConfig.platformName}
            </span>
            <StatusBadge label="Live" status="live" />
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={siteConfig.platformHref}
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink className="h-4 w-4" />
              Open the live platform
            </ButtonLink>
            <ButtonLink href="/products" variant="secondary">
              Explore the portfolio
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </ButtonLink>
            <DownloadBrochureButton
              label="Corporate profile"
              variant="ghost"
            />
          </div>
        </motion.div>

        <div className="mt-14 grid max-w-4xl gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div className="bg-ink-950/88 px-5 py-4" key={stat.value}>
              <p className="text-xl font-semibold text-gold-200">
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
