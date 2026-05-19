import { ArrowRight, Download, MessageCircle } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { siteConfig } from "@/lib/data";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" id="cta">
      <Container>
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-300/25 bg-[linear-gradient(135deg,rgba(231,196,121,0.16),rgba(7,43,37,0.82)_42%,rgba(2,11,15,0.96))] p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-gold-100">
                  Start with a practical infrastructure conversation
                </p>
                <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold text-cream-50 sm:text-5xl">
                  Ready to make estate power more reliable, measurable and
                  future-ready?
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-steel-200">
                  Share your estate or facility profile, current power
                  challenges and desired operating model. Jirow can help map the
                  infrastructure path.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink
                  href={siteConfig.whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Jirow
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${siteConfig.email}?subject=Embedded%20Power%20Infrastructure%20Inquiry`}
                  variant="secondary"
                >
                  Send an inquiry
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </ButtonLink>
                <ButtonLink href={siteConfig.brochureHref} variant="ghost" download>
                  <Download className="h-4 w-4" />
                  Download brochure
                </ButtonLink>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
