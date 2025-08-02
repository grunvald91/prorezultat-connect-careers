
import { CheckCircle } from "lucide-react";

const advantages = [
  {
    title: "Фокус на эффективность",
    description: "Мы помогаем бизнесу сэкономить с помощью оптимальных HR-решений"
  },
  {
    title: "Глубокое понимание бизнеса",
    description: "Мы инвестируем время в понимание культуры вашей компании, целей и вызовов, чтобы обеспечить идеальное соответствие кандидата и компании"
  },
  {
    title: "Партнерский подход",
    description: "Мы не просто поставщик услуг — мы ваш стратегический партнер, нацеленный на увеличение прибыли и развитие вашего бизнеса"
  }
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cream via-background to-soft-green">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Что отличает нас в мире HR
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наши ключевые преимущества
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8" style={{ background: 'linear-gradient(135deg, #E6C989, #D4AF37, #B8860B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(135deg, #E6C989, #D4AF37, #B8860B)' }} />
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
