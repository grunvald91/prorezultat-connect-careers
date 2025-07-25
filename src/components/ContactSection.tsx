import { Phone, Mail, Send } from "lucide-react";

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
                <Phone className="w-6 h-6 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Телефон</div>
                  <a 
                    href="tel:+79998198253" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +7 999 819-82-53 (WA, TG)
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <Mail className="w-6 h-6 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Эл. почта</div>
                  <a 
                    href="mailto:prorezultat.info@yandex.ru" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    prorezultat.info@yandex.ru
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="font-semibold text-foreground mb-3">HR-полезности:</div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <a 
                      href="https://t.me/prorezultat_hr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-warm-salmon transition-colors"
                    >
                      <Send className="w-8 h-8" style={{ color: '#D4AF37' }} />
                    </a>
                    <a 
                      href="https://t.me/prorezultat_hr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:opacity-80 transition-colors" style={{ color: '#D4AF37' }}
                    >
                      prorezultat_hr
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <a 
                      href="https://vk.com/pro.rezultat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-colors" style={{ color: '#D4AF37' }}
                    >
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.033-1.49-.933-1.744-.933-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.169-.407.441-.407h2.744c.373 0 .508.203.508.644v3.473c0 .373.169.508.271.508.22 0 .407-.135.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .763.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.169.525-.085.78-.576.78z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://vk.com/pro.rezultat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:opacity-80 transition-colors" style={{ color: '#D4AF37' }}
                    >
                      pro.rezultat
                    </a>
                  </div>
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