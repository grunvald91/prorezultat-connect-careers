import { MessageCircle, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-soft-blue to-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Наши контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Телефон</div>
                  <a 
                    href="tel:+79998198253" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +7 999 819-82-53
                  </a>
                  <div className="text-sm text-muted-foreground">(WA, TG)</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Эл. почта</div>
                  <a 
                    href="mailto:pro.rezultat@yandex.ru" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pro.rezultat@yandex.ru
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Канал с HR-полезностями</div>
                  <a 
                    href="https://t.me/prorezultat_hr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Telegram
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="w-6 h-6 flex items-center justify-center bg-primary rounded text-white text-sm font-bold flex-shrink-0">
                  VK
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Социальная сеть</div>
                  <a 
                    href="https://vk.com/pro.rezultat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    VKontakte
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;