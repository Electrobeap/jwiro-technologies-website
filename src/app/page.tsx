import { About } from "@/components/site/About";
import { BrochureSection } from "@/components/site/BrochureSection";
import { ContactSection } from "@/components/site/ContactSection";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { HybridSystems } from "@/components/site/HybridSystems";
import { MaintenanceStrategy } from "@/components/site/MaintenanceStrategy";
import { Monitoring } from "@/components/site/Monitoring";
import { Navbar } from "@/components/site/Navbar";
import { Solutions } from "@/components/site/Solutions";
import { WhyChoose } from "@/components/site/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Solutions />
        <Monitoring />
        <HybridSystems />
        <HowItWorks />
        <WhyChoose />
        <MaintenanceStrategy />
        <BrochureSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
