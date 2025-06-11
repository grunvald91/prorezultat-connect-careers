
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "PROREZULTAT трансформировал наш процесс найма. Они нашли нам исключительные таланты, которые идеально соответствуют культуре нашей компании.",
    author: "Сара Джонсон",
    position: "Генеральный директор, TechVision Inc."
  },
  {
    quote: "Их глубокое понимание наших бизнес-потребностей имело решающее значение. Мы создали потрясающую команду благодаря их экспертизе.",
    author: "Михаил Чен",
    position: "HR-директор, InnovateCorp"
  },
  {
    quote: "Профессионально, эффективно и ориентированно на результат. PROREZULTAT превзошел наши ожидания во всех аспектах процесса рекрутинга.",
    author: "Елена Родригес",
    position: "Основатель, GrowthLab"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-light-lavender via-soft-blue to-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят наши партнеры о работе с нами
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:bg-white/80"
            >
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
