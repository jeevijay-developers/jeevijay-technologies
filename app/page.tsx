import { HeroSection } from "@/components/HeroSection";
import { LogoSection } from "@/components/LogoSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQsSection } from "@/components/FAQsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQsSection />
      <ContactSection />
    </main>
  );
}
