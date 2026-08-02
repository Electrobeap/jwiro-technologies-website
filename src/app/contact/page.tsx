import type { Metadata } from "next";

import { BrochureSection } from "@/components/site/BrochureSection";
import { ContactSection } from "@/components/site/ContactSection";
import { DifferentiationSection } from "@/components/site/DifferentiationSection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { enterprise } from "@/components/site/visual-system";
import { siteConfig } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Jirow Technologies | Lagos, Nigeria",
  description:
    "Jirow works with regulators, utilities, enterprises, investors and development finance institutions bringing intelligence to the infrastructure they depend on. Contact the team in Lagos.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <PageHero
          description="Whether you need independent visibility into a jurisdiction, structured data for your own models, or site-level intelligence when it ships — start here. Enquiries reach the founding team directly."
          eyebrow="Contact"
          primaryHref="#contact"
          primaryLabel="Send an enquiry"
          secondaryHref={siteConfig.platformHref}
          secondaryLabel="Open NigeriaPowerData"
          title="Start a conversation"
        >
          <p className={enterprise.eyebrow}>
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
