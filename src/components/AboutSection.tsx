
const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-soft-blue to-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            15 лет работаем с персоналом
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Наша команда нацелена на измеримый рост вашего бизнеса
          </p>
          <div className="text-left max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              В PROREZULTAT мы:
            </p>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>выстраиваем HR-процессы с нуля,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>подбираем эффективных сотрудников,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>обучаем персонал,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>помогаем вывести компанию из кризиса,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>формируем корпоративную культуру,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>подсказываем как сэкономить на HR-процессах.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
