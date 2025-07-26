
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactForm from "./ContactForm";

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20 bg-muted/80 text-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Хотите получить бесплатную консультацию?
          </h2>
          <p className="text-xl mb-8 text-foreground/90">
            Давайте обсудим ваш запрос и подберём оптимальное решение, которое принесет хороший результат
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsFormOpen(true)}
              style={{ background: 'linear-gradient(135deg, #E6C989, #D4AF37, #B8860B)' }}
              className="text-white hover:opacity-90 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg border-0"
            >
              Бесплатная консультация
            </Button>
          </div>
        </div>
      </div>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default CTASection;
