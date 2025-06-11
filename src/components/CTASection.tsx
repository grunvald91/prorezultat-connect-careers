
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 warm-gradient text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы найти ваше идеальное соответствие?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Давайте обсудим ваши потребности в талантах и создадим индивидуальное решение, которое приносит результаты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-cream px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Заполнить бриф
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Запланировать звонок
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
