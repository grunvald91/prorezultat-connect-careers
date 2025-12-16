
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = "Работа в ProRezultat – вакансии, карьерный рост",
  description = "Открытые вакансии в компании ProRezultat. Карьера, развитие и сильная команда. Присоединяйтесь!",
  canonical = "https://prorezultat-connect-careers.lovable.app/",
  ogTitle = "Работа в ProRezultat",
  ogDescription = "Подбираем сотрудников для Вашего бизнеса.",
  structuredData
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonical} />
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
