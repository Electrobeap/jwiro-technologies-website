import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left"
}: SectionShellProps) {
  const isCenter = align === "center";

  return (
    <section
      className={cn("relative scroll-mt-28 py-20 sm:py-24 lg:py-28", className)}
      id={id}
    >
      <Container>
        <SectionReveal
          className={cn(
            "mb-12 max-w-3xl",
            isCenter && "mx-auto text-center"
          )}
        >
          <Tag>{eyebrow}</Tag>
          <h2 className="mt-5 text-balance text-3xl font-semibold text-cream-50 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-pretty text-base leading-8 text-steel-300 sm:text-lg">
              {description}
            </p>
          ) : null}
        </SectionReveal>
        {children}
      </Container>
    </section>
  );
}
