
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, LayoutDashboard, Users, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Рекрутинг",
    description: "Услуги по подбору сотрудников, адаптированные под ваши потребности: от массового найма до поиска руководителей",
    bgColor: "bg-soft-green/20"
  },
  {
    icon: FileText,
    title: "Оценка и аудит персонала",
    description: "Глубокая оценка возможностей вашей текущей команды и организационной структуры для оптимизации производительности.",
    bgColor: "bg-light-lavender/30"
  },
  {
    icon: LayoutDashboard,
    title: "Поддержка HR-процессов",
    description: "HR-консультирование для оптимизации ваших кадровых процессов и создания устойчивых систем управления талантами.",
    bgColor: "bg-warm-salmon/20"
  },
  {
    icon: Users,
    title: "Стратегические сессии и семинары",
    description: "Стратегические и оптимизационные мероприятия для построения системы краткосрочного и долгосрочного планирования процессов, выхода компании из кризисной ситуации и запуска новых продуктов",
    bgColor: "bg-soft-blue/30"
  },
  {
    icon: GraduationCap,
    title: "Обучение",
    description: "Индивидуальные и групповые обучения по направлению HR и коммуникаций",
    bgColor: "bg-cream/40"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-soft-blue via-background to-light-lavender">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексные HR-решения, направленные на ускорение успеха вашего бизнеса
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 ${service.bgColor} backdrop-blur-sm`}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
