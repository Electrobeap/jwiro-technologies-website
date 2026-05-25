import type { ReactNode } from "react";

import { enterprise } from "@/components/site/visual-system";
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
      className={cn("relative scroll-mt-28 py-16 sm:py-20 lg:py-24", className)}
      id={id}
    >
      <Container>
        <SectionReveal
          className={cn(
            "mb-10 max-w-4xl",
            isCenter && "mx-auto text-center"
          )}
        >
          <Tag>{eyebrow}</Tag>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-steel-300 sm:text-lg">
              {description}
            </p>
          ) : null}
          <div
            className={cn(
              "mt-6 w-full max-w-2xl",
              enterprise.hairline,
              isCenter && "mx-auto"
            )}
          />
        </SectionReveal>
        {children}
      </Container>
    </section>
  );
}
