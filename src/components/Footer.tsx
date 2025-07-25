
import { Send, Phone, Mail } from "lucide-react";

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
              <li>Подбор сотрудников</li>
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
                <a href="mailto:prorezultat.info@yandex.ru" className="hover:opacity-80 transition-colors" style={{ color: '#D4AF37' }}>
                  prorezultat.info@yandex.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+79998198253" className="hover:opacity-80 transition-colors" style={{ color: '#D4AF37' }}>
                  +7 999 819-82-53
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a 
                href="https://t.me/prorezultat_hr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:opacity-80 transition-colors" style={{ color: '#D4AF37' }}
              >
                <Send className="w-5 h-5" />
              </a>
              <a 
                href="https://vk.com/pro.rezultat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:opacity-80 transition-colors" style={{ color: '#D4AF37' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.033-1.49-.933-1.744-.933-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.169-.407.441-.407h2.744c.373 0 .508.203.508.644v3.473c0 .373.169.508.271.508.22 0 .407-.135.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .763.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.169.525-.085.78-.576.78z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60">&copy; 2024 PROREZULTAT. Все права защищены.</p>
            <div className="flex gap-6 text-primary-foreground/60">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openPrivacyPolicy'))}
                className="hover:opacity-80 transition-colors cursor-pointer" style={{ color: '#D4AF37' }}
              >
                Политика конфиденциальности
              </button>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openConsentAgreement'))}
                className="hover:opacity-80 transition-colors cursor-pointer" style={{ color: '#D4AF37' }}
              >
                Согласие на обработку данных
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
