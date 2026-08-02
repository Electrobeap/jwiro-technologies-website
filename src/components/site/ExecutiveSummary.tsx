import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionShell } from "@/components/site/SectionShell";
import { enterprise, enterprisePanel } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { products, thesis } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExecutiveSummary() {
  return (
    <SectionShell
      description="Jirow Technologies Limited is a Lagos-headquartered energy technology company. We build software platforms, data infrastructure and AI systems that make the performance of power infrastructure measurable, comparable and continuously visible."
      eyebrow="Executive summary"
      id="overview"
      title="What Jirow builds"
    >
      <div className="grid gap-5 lg:grid-cols-[5fr_7fr]">
        <SectionReveal className={enterprisePanel("flex flex-col p-6 sm:p-7")}>
          <p className={enterprise.eyebrow}>
            The thesis
          </p>
          <p className="display-serif mt-5 text-2xl leading-snug text-cream-50 sm:text-[1.7rem]">
            {thesis}
          </p>
          <div className={cn("my-6", enterprise.hairline)} />
          <p className="leading-8 text-steel-300">
            Jirow builds that layer — and NigeriaPowerData is the proof we can
            operate it at national scale.
          </p>
          <p className="mt-5 leading-8 text-steel-300">
            Jirow is a product company. Advisory and deployment services exist
            to support adoption of our platforms; they are not the business.
          </p>
        </SectionReveal>

        <div className="grid gap-4">
          <SectionReveal className={enterprisePanel("overflow-hidden")}>
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
              <p className={enterprise.eyebrow}>
                The portfolio at a glance
              </p>
              <Link
                className="group inline-flex items-center gap-2 py-1 text-sm font-semibold text-steel-200 transition hover:text-gold-200"
                href="/products"
              >
                All products
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="divide-y divide-white/10">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    className="group grid gap-3 px-6 py-5 transition hover:bg-white/[0.03] lg:grid-cols-[minmax(0,13rem)_1fr_minmax(0,11rem)] lg:items-center lg:gap-6"
                    href={product.href}
                  >
                    <div>
                      <p className="text-base font-semibold text-cream-50 transition group-hover:text-gold-100">
                        {product.name}
                      </p>
                      <StatusBadge
                        className="mt-2"
                        label={product.statusLabel}
                        status={product.status}
                      />
                    </div>
                    <p className="text-sm leading-7 text-steel-300">
                      {product.function}
                    </p>
                    <p className="text-xs leading-6 text-steel-400 lg:text-right">
                      <span className="block font-semibold uppercase tracking-[0.12em] text-steel-500">
                        Primary buyer
                      </span>
                      {product.buyer}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal
            className={cn(
              "rounded-md border border-gold-300/25 bg-gold-300/[0.05] p-6",
              "sm:p-7"
            )}
            delay={0.06}
          >
            <p className={enterprise.eyebrow}>
              Why the national layer came first
            </p>
            <p className="mt-4 leading-8 text-steel-200">
              Solving heterogeneous public sources, entity reconciliation and
              defensible treatment of uncertainty at country scale produces
              infrastructure that every subsequent product inherits.
            </p>
          </SectionReveal>
        </div>
      </div>
    </SectionShell>
  );
}
