import { products, sharedFoundation } from "@/lib/data";
import { cn } from "@/lib/utils";

const surfaces = [
  { name: products[0].name, note: "Public + institutional access" },
  { name: products[1].name, note: "Per-site / per-portfolio" },
  { name: products[2].name, note: "Conversational layer" }
];

/**
 * Shared foundation, differentiated surface — one technical foundation under
 * three product surfaces.
 */
export function SharedFoundation({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
        Shared foundation, differentiated surface
      </p>

      <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
        {surfaces.map((surface) => (
          <div className="bg-[#123163] px-3 py-4" key={surface.name}>
            <p className="break-words text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.02em] text-cream-50">
              {surface.name}
            </p>
            <p className="mt-1 text-[0.7rem] leading-5 text-steel-300">
              {surface.note}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3">
        {sharedFoundation.map((layer) => {
          const Icon = layer.icon;

          return (
            <div
              className="flex items-start gap-4 rounded-sm border border-white/10 bg-ink-950/60 px-5 py-4"
              key={layer.title}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-white/10 bg-white/[0.04] text-gold-200">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-cream-50">
                  {layer.title}
                </p>
                <p className="mt-1 text-xs leading-6 text-steel-400">
                  {layer.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
