import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";

import { DownloadBrochureButton } from "@/components/site/DownloadBrochureButton";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20" id="cta">
      <Container>
        <SectionReveal>
          <div className={enterprisePanel("relative overflow-hidden p-7 sm:p-9 lg:p-10")}>
            <div className={cn("absolute inset-0 opacity-70", enterprise.blueprint)} />
            <div className="relative grid gap-8 lg:grid-cols-[8fr_4fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                  Explore the platform
                </p>
                <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                  NigeriaPowerData is live and open.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-steel-200">
                  Open the national dashboard to see generation, allocation and
                  entity performance updating continuously — every figure
                  attributed to its source and labelled measured or modeled.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink
                  href={siteConfig.platformHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open {siteConfig.platformName}
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
                <DownloadBrochureButton
                  label="Corporate profile"
                  variant="ghost"
                />
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
