import { DataBadge } from "@/components/ui/DataBadge";
import { enterprise } from "@/components/site/visual-system";
import { methodologyComparison } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Measured signals against analytical estimates. Rendered as a real table on
 * large screens and as stacked cards on small ones, so neither layout hides
 * the distinction.
 */
export function MethodologyTable({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            How NigeriaPowerData separates measured signals from analytical
            estimates
          </caption>
          <thead>
            <tr>
              <th
                className="w-[18%] border-b border-white/10 px-5 py-4 align-bottom text-xs font-semibold uppercase tracking-[0.14em] text-steel-400"
                scope="col"
              >
                Dimension
              </th>
              <th
                className="w-[41%] border-b border-gold-300/40 px-5 py-4 align-bottom"
                scope="col"
              >
                <DataBadge basis="measured">Measured signals</DataBadge>
              </th>
              <th
                className="w-[41%] border-b border-technical-300/35 px-5 py-4 align-bottom"
                scope="col"
              >
                <DataBadge basis="estimate">Analytical estimates</DataBadge>
              </th>
            </tr>
          </thead>
          <tbody>
            {methodologyComparison.map((row) => (
              <tr key={row.dimension}>
                <th
                  className="border-b border-white/10 px-5 py-5 align-top text-sm font-semibold text-steel-200"
                  scope="row"
                >
                  {row.dimension}
                </th>
                <td className="border-b border-white/10 bg-gold-300/[0.04] px-5 py-5 align-top text-sm leading-7 text-steel-200">
                  {row.measured}
                </td>
                <td className="border-b border-white/10 bg-technical-300/[0.04] px-5 py-5 align-top text-sm leading-7 text-steel-200">
                  {row.estimate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 lg:hidden">
        {methodologyComparison.map((row) => (
          <div
            className="rounded-md border border-white/10 bg-[#0E2A5A]/70 p-5"
            key={row.dimension}
          >
            <p className={enterprise.label}>
              {row.dimension}
            </p>
            <div className="mt-4 border-l-2 border-gold-300/60 pl-4">
              <DataBadge basis="measured">Measured signals</DataBadge>
              <p className="mt-2 text-sm leading-7 text-steel-200">
                {row.measured}
              </p>
            </div>
            <div className="mt-5 border-l-2 border-technical-300/45 pl-4">
              <DataBadge basis="estimate">Analytical estimates</DataBadge>
              <p className="mt-2 text-sm leading-7 text-steel-200">
                {row.estimate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
