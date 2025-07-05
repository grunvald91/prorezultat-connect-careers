
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import HRRecruitmentDropdown from "@/components/HRRecruitmentDropdown";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        {/* Добавляем навигацию к подбору сотрудников */}
        <div className="fixed top-4 right-4 z-50">
          <HRRecruitmentDropdown />
        </div>
        
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
