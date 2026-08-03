import Link from "next/link";

import { enterprise } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { buyerGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

type BuyerGroupsProps = {
  className?: string;
  compact?: boolean;
};

export function BuyerGroups({ className, compact = false }: BuyerGroupsProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        compact ? "sm:grid-cols-2 xl:grid-cols-4" : "lg:grid-cols-2",
        className
      )}
    >
      {buyerGroups.map((group, index) => {
        const Icon = group.icon;

        return (
          <SectionReveal
            as="article"
            className={cn(
              "flex h-full flex-col rounded-md border bg-[#0E2A5A] p-6 transition duration-300 hover:border-gold-300/45",
              group.highlight ? "border-gold-300/35" : "border-white/10"
            )}
            delay={index * 0.05}
            key={group.title}
          >
            <div className="flex items-start justify-between gap-4">
              <span className={enterprise.iconAmber}>
                <Icon className="h-5 w-5" />
              </span>
              {group.highlight ? (
                <span className="rounded-sm border border-gold-300/45 bg-gold-300/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-gold-100">
                  {group.highlight}
                </span>
              ) : null}
            </div>

            <h3 className="mt-6 text-xl font-semibold leading-snug text-cream-50">
              {group.title}
            </h3>
            <p
              className={cn(
                "mt-4 flex-1 leading-7 text-steel-300",
                compact ? "text-sm" : "text-base leading-8"
              )}
            >
              {compact
                ? group.description.split(".")[0].concat(".")
                : group.description}
            </p>

            <div className="mt-6 border-t border-white/10 pt-4">
              <p className={enterprise.label}>
                Entry product
              </p>
              <Link
                className="mt-1 inline-block py-1 text-sm font-semibold text-gold-200 transition hover:text-gold-100"
                href={group.entryHref}
              >
                {group.entry}
              </Link>
            </div>
          </SectionReveal>
        );
      })}
    </div>
  );
}
