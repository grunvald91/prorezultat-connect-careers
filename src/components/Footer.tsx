
import { MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PROREZULTAT</h3>
            <p className="text-primary-foreground/80">
              Ваш надежный HR-партнер
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Рекрутинг</li>
              <li>Оценка и аудит персонала</li>
              <li>Поддержка HR-процессов</li>
              <li>Стратегические сессии и семинары</li>
              <li>Обучение</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:pro.rezultat@yandex.ru" className="hover:text-accent transition-colors">
                  pro.rezultat@yandex.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+79998198253" className="hover:text-accent transition-colors">
                  +7 999 819-82-53
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="space-y-2">
              <a 
                href="https://t.me/prorezultat_hr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Telegram
              </a>
              <a 
                href="https://vk.com/pro.rezultat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors block"
              >
                VKontakte
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 PROREZULTAT. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
