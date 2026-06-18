import { About } from "@/components/site/About";
import { AssessmentSection } from "@/components/site/AssessmentSection";
import { BrochureSection } from "@/components/site/BrochureSection";
import { ContactSection } from "@/components/site/ContactSection";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { Monitoring } from "@/components/site/Monitoring";
import { Navbar } from "@/components/site/Navbar";
import { PlatformSection } from "@/components/site/PlatformSection";
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
        <AssessmentSection />
        <Monitoring />
        <IndustriesSection />
        <PlatformSection />
        <WhyChoose />
        <BrochureSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
