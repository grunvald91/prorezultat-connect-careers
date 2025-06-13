
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        {/* Добавляем навигацию к вакансиям */}
        <div className="fixed top-4 right-4 z-50">
          <Link to="/jobs">
            <Button variant="outline" className="bg-white/90 backdrop-blur">
              Вакансии
            </Button>
          </Link>
        </div>
        
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
