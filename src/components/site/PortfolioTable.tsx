import Link from "next/link";

import { StatusBadge } from "@/components/ui/StatusBadge";
import { enterprise } from "@/components/site/visual-system";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

const columns = ["Product", "Status", "Altitude", "What it observes", "Availability"];

/**
 * The portfolio at a glance. A real table on large screens; stacked
 * definition lists on small ones, so the column meanings survive the reflow.
 */
export function PortfolioTable({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Jirow product portfolio by status, altitude, what each product
            observes and current availability
          </caption>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  className={cn("border-b border-white/15 px-5 py-4", enterprise.label)}
                  key={column}
                  scope="col"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="align-top" key={product.slug}>
                <th
                  className="border-b border-white/10 px-5 py-5 text-left"
                  scope="row"
                >
                  <Link
                    className="inline-block py-1 text-base font-semibold text-cream-50 transition hover:text-gold-200"
                    href={product.href}
                  >
                    {product.name}
                  </Link>
                </th>
                <td className="border-b border-white/10 px-5 py-5">
                  <StatusBadge label={product.statusLabel} status={product.status} />
                </td>
                <td className="border-b border-white/10 px-5 py-5 text-sm text-steel-200">
                  {product.altitude}
                </td>
                <td className="border-b border-white/10 px-5 py-5 text-sm leading-7 text-steel-300">
                  {product.observes}
                </td>
                <td className="border-b border-white/10 px-5 py-5 text-sm text-steel-300">
                  {product.availability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 lg:hidden">
        {products.map((product) => (
          <div
            className="rounded-md border border-white/10 bg-[#0E2A5A]/70 p-5"
            key={product.slug}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                className="inline-block py-1 text-base font-semibold text-cream-50"
                href={product.href}
              >
                {product.name}
              </Link>
              <StatusBadge label={product.statusLabel} status={product.status} />
            </div>
            <dl className="mt-4 grid gap-3 text-sm">
              <div>
                <dt className={enterprise.label}>
                  Altitude
                </dt>
                <dd className="mt-1 text-steel-200">{product.altitude}</dd>
              </div>
              <div>
                <dt className={enterprise.label}>
                  What it observes
                </dt>
                <dd className="mt-1 leading-7 text-steel-300">
                  {product.observes}
                </dd>
              </div>
              <div>
                <dt className={enterprise.label}>
                  Availability
                </dt>
                <dd className="mt-1 text-steel-300">{product.availability}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
