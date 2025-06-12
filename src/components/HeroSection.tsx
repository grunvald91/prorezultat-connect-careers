
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary via-soft-blue to-light-lavender text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Профессиональная команда" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-soft-blue/90 to-light-lavender/85"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* User's Photo at the beginning */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/957736ba-ac5f-4125-964e-b919827e18ab.png"
              alt="Руководитель PROREZULTAT"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/30 shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            PROREZULTAT
          </h1>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-xl md:text-2xl text-white font-light">
              Люди — это то, что имеет значение. Мы поможем вам найти правильных.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
            <a 
              href="tel:+79533120433" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              +7 953 312-04-33
            </a>
            <div className="flex gap-4">
              <a 
                href="https://t.me/prorezultat_hr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Telegram
              </a>
              <a 
                href="https://vk.com/pro.rezultat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                VK
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsFormOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-warm-salmon px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default HeroSection;
