import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { enterprise } from "@/components/site/visual-system";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-3", className)}>
      {products.map((product, index) => {
        const Icon = product.icon;
        const isFlagship = product.status === "live";

        return (
          <SectionReveal as="article" delay={index * 0.06} key={product.slug}>
            <Link
              className={cn(
                "group flex h-full flex-col rounded-md border p-6 transition duration-300 sm:p-7",
                isFlagship
                  ? "border-gold-300/40 bg-[#0E2A5A] hover:border-gold-300/70 hover:bg-[#133263]"
                  : "border-white/10 bg-[#0E2A5A]/85 hover:border-technical-300/45 hover:bg-[#133263]"
              )}
              href={product.href}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={
                    isFlagship ? enterprise.iconAmber : enterprise.iconCyan
                  }
                >
                  <Icon className="h-5 w-5" />
                </span>
                <StatusBadge label={product.statusLabel} status={product.status} />
              </div>

              <p className={cn("mt-6", enterprise.label)}>
                {product.altitude} layer
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-cream-50">
                {product.name}
              </h3>
              <p className="mt-4 flex-1 leading-8 text-steel-300">
                {product.description}
              </p>

              <dl className="mt-6 grid gap-px border border-white/10 bg-white/10 text-sm">
                <div className="bg-ink-950/70 px-4 py-3">
                  <dt className={enterprise.label}>
                    Primary buyer
                  </dt>
                  <dd className="mt-1 text-steel-200">{product.buyer}</dd>
                </div>
                <div className="bg-ink-950/70 px-4 py-3">
                  <dt className={enterprise.label}>
                    Availability
                  </dt>
                  <dd className="mt-1 text-steel-200">{product.availability}</dd>
                </div>
              </dl>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-200">
                {isFlagship ? "See the flagship platform" : "Read the product brief"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </SectionReveal>
        );
      })}
    </div>
  );
}
