import type { ReactNode } from "react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { enterprise } from "@/components/site/visual-system";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  children
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 pt-24 lg:pt-[6.5rem]">
      <div className={cn("absolute inset-0 -z-10 opacity-55", enterprise.blueprint)} />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_22%,rgba(130,173,191,0.16),transparent_30%),linear-gradient(135deg,#071B3B_0%,#081F42_50%,#06142B_100%)]" />
      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[7fr_5fr] lg:items-end lg:py-20">
        <div>
          <Tag>{eyebrow}</Tag>
          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-steel-200">
            {description}
          </p>
          {primaryHref || secondaryHref ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryHref && primaryLabel ? (
                <ButtonLink className="text-center" href={primaryHref}>
                  {primaryLabel}
                </ButtonLink>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  className="text-center"
                  href={secondaryHref}
                  variant="secondary"
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="rounded-md border border-white/10 bg-[#0E2A5A]/80 p-6 shadow-premium">
          <div className="border-b border-white/10 pb-5">
            <BrandLogo
              className="h-28 object-left sm:h-32"
              sizes="(min-width: 640px) 130px, 112px"
            />
          </div>
          <div className="pt-5">
            {children ?? (
              <p className="text-sm leading-7 text-steel-300">
                Energy Intelligence. Smarter Infrastructure.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
