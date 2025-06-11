
const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-soft-blue to-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            О нас
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            В PROREZULTAT мы верим, что исключительные таланты приводят к исключительным результатам. 
            Наш подход выходит за рамки традиционного рекрутинга — мы фокусируемся на персонализированных 
            процессах отбора, которые действительно понимают как уникальные потребности наших клиентов, 
            так и стремления кандидатов.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Мы не просто заполняем вакансии; мы строим долгосрочные партнерские отношения, которые приносят 
            реальные, измеримые результаты для роста вашего бизнеса.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
