import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { CapacityCascade } from "@/components/site/CapacityCascade";
import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DataBadge } from "@/components/ui/DataBadge";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SourceNote } from "@/components/ui/SourceNote";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  npdHeadlineMetrics,
  npdMarketStats,
  npdSourceNote,
  siteConfig
} from "@/lib/data";
import { cn } from "@/lib/utils";

export function FlagshipSection() {
  return (
    <SectionShell
      className={enterprise.sectionBand}
      description="A live energy intelligence platform for the Nigerian electricity market, developed and owned by Jirow Technologies Limited. It consolidates Nigeria's publicly reported electricity data into a single continuously updated system of record."
      eyebrow="Flagship platform"
      id="flagship"
      title="NigeriaPowerData"
    >
      <SectionReveal className="mb-8 flex flex-wrap items-center gap-4">
        <StatusBadge label="Live · in operation" status="live" />
        <a
          className="inline-flex items-center gap-2 py-1 text-sm font-semibold text-steel-200 transition hover:text-gold-200"
          href={siteConfig.platformHref}
          rel="noreferrer"
          target="_blank"
        >
          <ExternalLink className="h-4 w-4" />
          {siteConfig.platformDomain}
        </a>
      </SectionReveal>

      <div className="grid gap-5 lg:grid-cols-[7fr_5fr] lg:items-start">
        <SectionReveal className={enterprisePanel("p-6 sm:p-7")}>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {npdHeadlineMetrics.map((metric) => (
              <div className="bg-[#091F43] px-5 py-5" key={metric.label}>
                <p className={enterprise.label}>
                  {metric.label}
                </p>
                <p className="mt-3 font-mono text-2xl font-semibold text-cream-50">
                  {metric.value}
                  <span className="ml-1 text-sm font-normal text-steel-400">
                    {metric.unit}
                  </span>
                </p>
                <DataBadge
                  basis={metric.basis === "measured" ? "measured" : "derived"}
                  className="mt-3"
                >
                  {metric.basis}
                </DataBadge>
              </div>
            ))}
          </div>

          <CapacityCascade className="mt-8" />
          <SourceNote className="mt-7">{npdSourceNote}</SourceNote>
        </SectionReveal>

        <div className="grid gap-4">
          <SectionReveal className={enterprisePanel("p-6 sm:p-7")} delay={0.05}>
            <p className={enterprise.eyebrow}>
              The market it tracks
            </p>
            <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {npdMarketStats.map((stat) => (
                <div className="bg-[#091F43] px-5 py-5" key={stat.label}>
                  <p className="font-mono text-2xl font-semibold text-gold-200">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-steel-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className={cn("my-6", enterprise.hairline)} />
            <p className="leading-8 text-steel-300">
              The platform tracks national grid generation and frequency
              alongside distribution-company allocation, and preserves the
              history required to distinguish a genuine trend from ordinary
              daily variation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={siteConfig.platformHref}
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink className="h-4 w-4" />
                Open the platform
              </ButtonLink>
              <ButtonLink href="/products/nigeriapowerdata" variant="secondary">
                Platform detail
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </ButtonLink>
            </div>
          </SectionReveal>

          <SectionReveal
            className="rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6 sm:p-7"
            delay={0.1}
          >
            <p className={enterprise.eyebrow}>
              Measured, modeled, and the line between them
            </p>
            <p className="mt-4 leading-8 text-steel-200">
              Every claim the platform makes falls into one of two categories,
              and the platform states which.
            </p>
            <Link
              className="group mt-5 inline-flex items-center gap-2 py-1 text-sm font-semibold text-gold-200"
              href="/methodology"
            >
              Read the data methodology
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </SectionShell>
  );
}
