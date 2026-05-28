"use client";

import { useState } from "react";
import { ExternalLink, FileText, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { DownloadBrochureButton } from "@/components/site/DownloadBrochureButton";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Tag } from "@/components/ui/Tag";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const profileSignals = [
  "Embedded energy infrastructure",
  "Estate power systems and hybrid power systems",
  "Smart monitoring infrastructure and project delivery"
];

function ProfileCover() {
  return (
    <div className={enterprisePanel("relative aspect-[1.414/1] overflow-hidden p-6 sm:p-8")}>
      <div className={cn("absolute inset-0 opacity-55", enterprise.blueprint)} />
      <div className="absolute inset-x-0 top-0 h-1 bg-gold-300" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-xs font-semibold uppercase text-gold-200">
            Company Profile
          </span>
          <span className="text-xs text-steel-300">PDF</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <BrandLogo
            className="h-36 sm:h-44"
            sizes="(min-width: 640px) 170px, 138px"
          />
          <p className="display-serif mt-6 max-w-md text-2xl font-semibold leading-tight text-cream-50 sm:text-3xl">
            Reliable Estate Power.
            <br />
            Smarter Infrastructure.
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gold-300/35 pt-4 text-xs text-steel-300">
          <span>Jirow Technologies Limited</span>
          <span className="text-gold-200">Innovate | Integrate | Elevate</span>
        </div>
      </div>
    </div>
  );
}

export function BrochureSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section
      className={cn("relative scroll-mt-28 py-16 sm:py-20 lg:py-24", enterprise.sectionBand)}
      id="brochure"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-center">
          <SectionReveal>
            <Tag>Company Profile</Tag>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
              Infrastructure capability, presented with clarity.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-steel-200 sm:text-lg">
              Download the latest Jirow Technologies brochure for service
              positioning, embedded energy infrastructure capabilities and the
              operating model for estate and commercial energy reliability.
            </p>

            <div className="mt-8 grid gap-px border border-white/10 bg-white/10">
              {profileSignals.map((signal) => (
                <div
                  className="flex items-center gap-4 bg-ink-900/70 px-5 py-4 text-sm text-steel-100"
                  key={signal}
                >
                  <span className="h-px w-7 bg-gold-300" />
                  {signal}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <DownloadBrochureButton label="Download Company Profile" />
              <button
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-gold-300/45 px-5 py-3 text-sm font-semibold text-cream-50 transition hover:border-gold-300 hover:bg-gold-300/10"
                onClick={() => setPreviewOpen(true)}
                type="button"
              >
                <FileText className="h-4 w-4" />
                Preview brochure
              </button>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.06}>
            <button
              aria-label="Preview Jirow Technologies company profile brochure"
              className="block w-full text-left transition duration-300 hover:-translate-y-1"
              onClick={() => setPreviewOpen(true)}
              type="button"
            >
              <ProfileCover />
            </button>
          </SectionReveal>
        </div>
      </Container>

      <AnimatePresence>
        {previewOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[80] bg-[#071B3B]/96 p-4 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="mx-auto flex h-full max-w-6xl flex-col">
              <div className="mb-3 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <div>
                  <p className="text-sm font-semibold text-gold-200">
                    Jirow Technologies Limited
                  </p>
                  <p className="mt-1 text-sm text-steel-300">Company Profile</p>
                </div>
                <div className="flex gap-2">
                  <ButtonLink
                    className="min-h-11 px-4"
                    href={siteConfig.brochureHref}
                    rel="noreferrer"
                    target="_blank"
                    variant="secondary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open PDF
                  </ButtonLink>
                  <button
                    aria-label="Close brochure preview"
                    className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 text-cream-50 transition hover:border-gold-300/55"
                    onClick={() => setPreviewOpen(false)}
                    type="button"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <object
                className="min-h-0 flex-1 border border-white/10 bg-white"
                data={siteConfig.brochureHref}
                type="application/pdf"
              >
                <div className="grid h-full place-items-center bg-ink-900 p-8 text-center">
                  <div>
                    <p className="text-lg text-cream-50">
                      PDF preview is unavailable in this browser.
                    </p>
                    <DownloadBrochureButton className="mt-6" />
                  </div>
                </div>
              </object>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
