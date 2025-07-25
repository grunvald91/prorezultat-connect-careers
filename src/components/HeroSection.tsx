
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-slate-600 text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Профессиональная команда" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-slate-600/95"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* User's Photo at the beginning */}
          <div className="mb-12 flex justify-center">
            <img 
              src="/lovable-uploads/86617c4c-bc79-467f-92f4-da07c0dacf6c.png"
              alt="Руководитель PROREZULTAT"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center border-4 border-white/30 shadow-lg"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            HR ДЛЯ БИЗНЕСА
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white drop-shadow-lg">
            Работа с персоналом под ключ
          </h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-xl md:text-2xl text-white font-light">
              Увеличиваем прибыль компаний, благодаря эффективной работе с персоналом по всей России
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="mb-8 flex justify-center">
            <a 
              href="tel:+79998198253" 
              className="flex items-center gap-2 text-primary bg-white/90 hover:bg-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              <Phone className="w-5 h-5" />
              +7 999 819-82-53
            </a>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsFormOpen(true)}
              style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF8C00)' }}
              className="text-white hover:opacity-90 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg border-0"
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
