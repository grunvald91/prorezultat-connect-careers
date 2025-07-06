
import { useState, useEffect } from "react";
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
import PrivacyPolicy from "@/components/PrivacyPolicy";
import ConsentAgreement from "@/components/ConsentAgreement";

const Index = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isConsentOpen, setIsConsentOpen] = useState(false);

  useEffect(() => {
    const handleOpenPrivacy = () => setIsPrivacyOpen(true);
    const handleOpenConsent = () => setIsConsentOpen(true);

    window.addEventListener('openPrivacyPolicy', handleOpenPrivacy);
    window.addEventListener('openConsentAgreement', handleOpenConsent);

    return () => {
      window.removeEventListener('openPrivacyPolicy', handleOpenPrivacy);
      window.removeEventListener('openConsentAgreement', handleOpenConsent);
    };
  }, []);

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
      
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <ConsentAgreement isOpen={isConsentOpen} onClose={() => setIsConsentOpen(false)} />
    </>
  );
};

export default Index;
