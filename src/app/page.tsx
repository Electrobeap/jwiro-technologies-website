import { AudienceRouter } from "@/components/site/AudienceRouter";
import { BrochureSection } from "@/components/site/BrochureSection";
import { ContactSection } from "@/components/site/ContactSection";
import { CTASection } from "@/components/site/CTASection";
import { DifferentiationSection } from "@/components/site/DifferentiationSection";
import { ExecutiveSummary } from "@/components/site/ExecutiveSummary";
import { FlagshipSection } from "@/components/site/FlagshipSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { MarketsSection } from "@/components/site/MarketsSection";
import { Navbar } from "@/components/site/Navbar";
import { ProblemSection } from "@/components/site/ProblemSection";
import { ProductPortfolioSection } from "@/components/site/ProductPortfolioSection";
import { TradeDivisionBand } from "@/components/site/TradeDivisionBand";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden" id="main">
        <Hero />
        <ExecutiveSummary />
        <AudienceRouter />
        <ProblemSection />
        <ProductPortfolioSection />
        <FlagshipSection />
        <MarketsSection />
        <DifferentiationSection />
        <TradeDivisionBand />
        <BrochureSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
