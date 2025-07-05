
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactForm from "./ContactForm";

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20 warm-gradient text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы ускорить бизнес?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Давайте обсудим ваш запрос и подберём оптимальное решение, которое принесет хороший результат
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-primary hover:bg-cream px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Заполнить бриф
            </Button>
          </div>
        </div>
      </div>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default CTASection;
