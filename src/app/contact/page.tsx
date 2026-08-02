import type { Metadata } from "next";

import { BrochureSection } from "@/components/site/BrochureSection";
import { ContactSection } from "@/components/site/ContactSection";
import { DifferentiationSection } from "@/components/site/DifferentiationSection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Jirow Technologies | Lagos, Nigeria",
  description:
    "Jirow works with regulators, utilities, enterprises, investors and development finance institutions bringing intelligence to the infrastructure they depend on. Contact the team in Lagos.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="Jirow works with regulators, utilities, enterprises, investors and development finance institutions bringing intelligence to the infrastructure they depend on."
          eyebrow="Contact"
          primaryHref="#contact"
          primaryLabel="Send an enquiry"
          secondaryHref={siteConfig.platformHref}
          secondaryLabel="Open NigeriaPowerData"
          title="Start a conversation"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
            Head office
          </p>
          <address className="mt-3 not-italic text-sm leading-7 text-steel-300">
            {siteConfig.addressLines[0]}
            <br />
            {siteConfig.addressLines[1]}
          </address>
          <p className="mt-4 text-sm leading-7 text-steel-300">
            {siteConfig.phone}
            <br />
            {siteConfig.email}
          </p>
        </PageHero>

        <ContactSection />
        <BrochureSection />
        <DifferentiationSection />
      </main>
      <Footer />
    </>
  );
}
