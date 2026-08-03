import { ArrowRight } from "lucide-react";

import { BuyerGroups } from "@/components/site/BuyerGroups";
import { SectionShell } from "@/components/site/SectionShell";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function MarketsSection() {
  return (
    <SectionShell
      description="Jirow serves four groups, each entering through a different product at a different stage."
      eyebrow="Markets & customers"
      id="markets"
      title="Four buyer groups, four entry points"
    >
      <BuyerGroups compact />

      <div className="mt-8">
        <ButtonLink href="/markets" variant="secondary">
          Markets, customers and business model
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
