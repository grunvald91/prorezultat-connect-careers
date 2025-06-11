
import { CheckCircle } from "lucide-react";

const advantages = [
  {
    title: "Доказанная эффективность",
    description: "Наш послужной список говорит сам за себя: 95% удовлетворенности клиентов и успешные размещения в различных отраслях."
  },
  {
    title: "Глубокое понимание бизнеса",
    description: "Мы инвестируем время в понимание культуры вашей компании, целей и вызовов, чтобы обеспечить идеальное соответствие кандидата и компании."
  },
  {
    title: "Партнерский подход",
    description: "Мы не просто поставщик услуг — мы ваш стратегический партнер, приверженный вашему долгосрочному успеху и росту."
  }
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cream via-background to-soft-green">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что отличает нас в мире привлечения талантов
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
