
import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

const jobsData = {
  "sales-manager": {
    title: "Менеджер по продажам",
    department: "Продажи",
    location: "Москва",
    type: "Полная занятость",
    salary: "от 80 000 ₽",
    description: "Мы ищем энергичного и результативного менеджера по продажам для развития клиентской базы в сфере HR-услуг.",
    responsibilities: [
      "Активные продажи HR-услуг корпоративным клиентам",
      "Поиск и привлечение новых клиентов",
      "Ведение переговоров и заключение договоров",
      "Поддержание долгосрочных отношений с клиентами",
      "Достижение и превышение плановых показателей продаж"
    ],
    requirements: [
      "Опыт работы в продажах от 2 лет",
      "Опыт работы с корпоративными клиентами",
      "Знание техник продаж и переговоров",
      "Высокая мотивация к достижению результатов",
      "Коммуникабельность и стрессоустойчивость"
    ],
    benefits: [
      "Конкурентная заработная плата + бонусы",
      "Обучение и профессиональное развитие",
      "Дружный коллектив и комфортный офис",
      "Карьерный рост внутри компании"
    ]
  },
  "hr-specialist": {
    title: "HR-специалист",
    department: "Персонал",
    location: "Москва",
    type: "Полная занятость",
    salary: "от 60 000 ₽",
    description: "Приглашаем опытного HR-специалиста для работы с подбором персонала и HR-сопровождением.",
    responsibilities: [
      "Подбор персонала различных уровней",
      "Проведение интервью и оценка кандидатов",
      "Ведение кадрового документооборота",
      "Адаптация новых сотрудников",
      "Участие в HR-проектах компании"
    ],
    requirements: [
      "Опыт работы в HR от 1 года",
      "Знание методов подбора и оценки персонала",
      "Опыт проведения интервью",
      "Знание трудового законодательства",
      "Внимательность к деталям"
    ],
    benefits: [
      "Стабильная заработная плата",
      "Возможность профессионального роста",
      "Интересные HR-проекты",
      "Дружная команда профессионалов"
    ]
  },
  "recruiter": {
    title: "Рекрутер",
    department: "Рекрутинг",
    location: "Удаленно",
    type: "Полная занятость",
    salary: "от 70 000 ₽",
    description: "Ищем талантливого рекрутера для поиска и привлечения лучших кандидатов для наших клиентов.",
    responsibilities: [
      "Поиск кандидатов через различные каналы",
      "Скрининг и предварительная оценка",
      "Ведение базы кандидатов",
      "Консультирование клиентов по вопросам подбора",
      "Сопровождение процесса трудоустройства"
    ],
    requirements: [
      "Опыт работы рекрутером от 1 года",
      "Знание sourcing техник",
      "Умение работать с CRM и ATS системами",
      "Коммуникативные навыки",
      "Результативность и целеориентированность"
    ],
    benefits: [
      "Возможность удаленной работы",
      "Гибкий график",
      "Премии за результат",
      "Профессиональное развитие в рекрутинге"
    ]
  }
};

const JobDetail = () => {
  const { jobId } = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const job = jobId ? jobsData[jobId as keyof typeof jobsData] : null;

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Вакансия не найдена</h1>
          <Link to="/jobs">
            <Button>Все вакансии</Button>
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "ProRezultat",
      "url": "https://prorezultat-connect-careers.lovable.app"
    },
    "jobLocation": {
      "@type": "Place",
      "address": job.location
    },
    "employmentType": job.type === "Полная занятость" ? "FULL_TIME" : "PART_TIME",
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "RUB",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salary
      }
    },
    "responsibilities": job.responsibilities,
    "qualifications": job.requirements
  };

  return (
    <>
      <SEOHead
        title={`${job.title} - Вакансия в ProRezultat`}
        description={`${job.description} Зарплата: ${job.salary}. Локация: ${job.location}. Присоединяйтесь к команде ProRezultat!`}
        canonical={`https://prorezultat-connect-careers.lovable.app/jobs/${jobId}`}
        ogTitle={`Вакансия: ${job.title}`}
        ogDescription={job.description}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          <Link to="/jobs" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Все вакансии
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-4">
                    {job.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                  {job.department}
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {job.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">
                    Обязанности
                  </h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">
                    Требования
                  </h2>
                  <ul className="space-y-2">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Что мы предлагаем
                </h2>
                <ul className="grid md:grid-cols-2 gap-2">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsFormOpen(true)}
                  className="px-8 py-3"
                >
                  Откликнуться на вакансию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default JobDetail;
