import { HeroSection } from "@/components/HeroSection";
import { LogoSection } from "@/components/LogoSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { BenefitsSection } from "@/components/BenefitsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  );
}
