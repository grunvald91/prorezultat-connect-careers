
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";

const jobsData = [
  {
    id: "sales-manager",
    title: "Менеджер по продажам",
    department: "Продажи",
    location: "Москва",
    type: "Полная занятость",
    salary: "от 80 000 ₽",
    description: "Активные продажи HR-услуг, работа с корпоративными клиентами"
  },
  {
    id: "hr-specialist",
    title: "HR-специалист",
    department: "Персонал",
    location: "Москва",
    type: "Полная занятость",
    salary: "от 60 000 ₽",
    description: "Подбор персонала, проведение интервью, HR-сопровождение"
  },
  {
    id: "recruiter",
    title: "Рекрутер",
    department: "Рекрутинг",
    location: "Удаленно",
    type: "Полная занятость",
    salary: "от 70 000 ₽",
    description: "Поиск и привлечение талантов для наших клиентов"
  }
];

const Jobs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ProRezultat",
    "url": "https://prorezultat-connect-careers.lovable.app",
    "jobPosting": jobsData.map(job => ({
      "@type": "JobPosting",
      "title": job.title,
      "description": job.description,
      "hiringOrganization": {
        "@type": "Organization",
        "name": "ProRezultat"
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
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Открытые вакансии в ProRezultat | Карьера в HR"
        description="Актуальные вакансии в компании ProRezultat: менеджер по продажам, HR-специалист, рекрутер. Присоединяйтесь к нашей команде!"
        canonical="https://prorezultat-connect-careers.lovable.app/jobs"
        ogTitle="Вакансии в ProRezultat"
        ogDescription="Найдите свою идеальную работу в сфере HR и рекрутинга"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Открытые вакансии в ProRezultat
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Присоединяйтесь к команде профессионалов в сфере HR и рекрутинга. 
              Мы предлагаем интересные проекты, профессиональный рост и дружескую атмосферу.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobsData.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      {job.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                  </div>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {job.department}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
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
                
                <Link to={`/jobs/${job.id}`}>
                  <Button className="w-full md:w-auto">
                    Подробнее о вакансии
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="outline">
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
