"use client";

import Image from "next/image";
import {
  ArrowRight,
  Download,
  MessageCircle,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";

import { InfrastructureVisual } from "@/components/site/InfrastructureVisual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { heroStats, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/10 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
      id="top"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#020b0f_0%,#06231f_46%,#0b171b_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-ink-950 to-transparent" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase text-steel-200">
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-black">
                <Image
                  alt="Jirow Technologies Limited logo"
                  className="object-cover"
                  fill
                  priority
                  sizes="36px"
                  src={siteConfig.logo}
                />
              </span>
              Embedded power infrastructure
            </div>

            <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] text-cream-50 sm:text-6xl lg:text-7xl">
              Reliable Estate Power. Smarter Infrastructure.
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-steel-200 sm:text-xl">
              Jirow Technologies Limited designs, deploys and manages embedded
              power infrastructure and smart energy systems for modern
              communities.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#cta">
                Start an infrastructure review
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsappHref}
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                <MessageCircle className="h-4 w-4" />
                Talk on WhatsApp
              </ButtonLink>
              <ButtonLink href={siteConfig.brochureHref} variant="ghost" download>
                <Download className="h-4 w-4" />
                Brochure
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  className="border-l border-gold-300/35 pl-4"
                  key={stat.label}
                >
                  <p className="text-2xl font-semibold text-gold-100">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-steel-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <InfrastructureVisual className="lg:ml-auto" variant="estate" />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <Sparkles className="h-5 w-5 text-gold-200" />
                <p className="mt-4 text-sm leading-6 text-steel-200">
                  Built for estates, commercial communities and industrial
                  clusters that need reliable power without operational opacity.
                </p>
              </div>
              <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.06] p-5">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="mt-4 text-sm leading-6 text-steel-200">
                  A managed model for infrastructure, monitoring, uptime and
                  maintenance accountability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
