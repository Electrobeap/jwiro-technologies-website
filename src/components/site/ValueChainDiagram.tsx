import { enterprise } from "@/components/site/visual-system";
import { valueChain } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Where Jirow sits: the software layer — not hardware supply, not
 * installation, not integration.
 */
export function ValueChainDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <p className={enterprise.eyebrow}>
        Position in the value chain
      </p>
      <ol className="mt-6 grid gap-3 lg:grid-cols-5">
        {valueChain.map((node) => (
          <li
            className={cn(
              "relative flex flex-col justify-between gap-3 rounded-md border p-5",
              node.isJirow
                ? "border-gold-300/55 bg-gold-300/[0.07] lg:scale-[1.03]"
                : "border-white/10 bg-[#0E2A5A]/70"
            )}
            key={node.title}
          >
            <p
              className={cn(
                "text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
                node.isJirow ? "text-gold-200" : "text-steel-400"
              )}
            >
              {node.role}
            </p>
            <p
              className={cn(
                "leading-6",
                node.isJirow
                  ? "text-xl font-semibold text-cream-50"
                  : "text-sm text-steel-200"
              )}
            >
              {node.title}
            </p>
            {node.isJirow ? (
              <div className={cn("w-16", enterprise.hairline)} />
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm leading-7 text-steel-400">
        Jirow occupies the software layer — not hardware supply, not
        installation, not integration.
      </p>
    </div>
  );
}
