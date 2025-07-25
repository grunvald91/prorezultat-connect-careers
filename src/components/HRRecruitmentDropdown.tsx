import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, User, Calculator, Wrench, Scale, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface RecruitmentPosition {
  id: string;
  title: string;
  description: string;
  icon: any;
  requirements: string[];
}

const positions: RecruitmentPosition[] = [
  {
    id: "business-assistant",
    title: "Бизнес-ассистент",
    description: "Помощник руководителя для ведения дел и организации рабочих процессов",
    icon: User,
    requirements: ["Опыт административной работы", "Знание MS Office", "Коммуникативные навыки"]
  },
  {
    id: "accountant",
    title: "Бухгалтер",
    description: "Ведение бухгалтерского учета и отчетности компании",
    icon: Calculator,
    requirements: ["Высшее экономическое образование", "Знание 1С", "Опыт от 2 лет"]
  },
  {
    id: "engineer",
    title: "Инженер",
    description: "Технический специалист для решения инженерных задач",
    icon: Wrench,
    requirements: ["Техническое образование", "Опыт проектирования", "Знание CAD систем"]
  },
  {
    id: "lawyer",
    title: "Юрист",
    description: "Правовое сопровождение деятельности компании",
    icon: Scale,
    requirements: ["Юридическое образование", "Опыт корпоративного права", "Знание трудового права"]
  },
  {
    id: "administrator",
    title: "Администратор",
    description: "Организация работы офиса и административных процессов",
    icon: Shield,
    requirements: ["Опыт административной работы", "Организаторские способности", "Внимательность"]
  }
];

const HRRecruitmentDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<RecruitmentPosition | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    requirements: "",
    privacyConsent: false,
    dataConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handlePositionSelect = (position: RecruitmentPosition) => {
    setSelectedPosition(position);
    setIsOpen(false);
    setIsDialogOpen(true);
    setFormData(prev => ({
      ...prev,
      requirements: position.requirements.join(", ")
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPosition || !formData.privacyConsent || !formData.dataConsent) return;

    setIsSubmitting(true);
    
    try {
      const { data: contactRequest, error } = await supabase
        .from('contact_requests')
        .insert({
          phone: formData.phone,
          email: formData.email,
          question: `Запрос на подбор: ${selectedPosition.title}
Компания: ${formData.company}
Имя: ${formData.name}
Дополнительные требования: ${formData.requirements}`
        })
        .select()
        .single();

      if (error) throw error;

      // Отправка уведомления в Telegram
      await supabase.functions.invoke('send-telegram-notification', {
        body: {
          requestId: contactRequest.id,
          phone: formData.phone,
          email: formData.email,
          question: `🔍 Новый запрос на подбор персонала!
          
📋 Позиция: ${selectedPosition.title}
🏢 Компания: ${formData.company}
👤 Контактное лицо: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email}
📝 Требования: ${formData.requirements}`
        }
      });

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время для обсуждения стоимости подбора",
      });

      setIsDialogOpen(false);
      setFormData({ company: "", name: "", phone: "", email: "", requirements: "", privacyConsent: false, dataConsent: false });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        className={`backdrop-blur flex flex-col items-center gap-1 text-xs sm:text-sm whitespace-normal leading-tight h-auto py-2 px-3 hover:bg-muted ${
          isOpen ? 'bg-muted text-muted-foreground' : 'bg-white text-foreground'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Подбор</span>
        <span>сотрудников</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 max-h-96 overflow-y-auto sm:left-0 sm:right-auto">
          <div className="p-2">
            {positions.map((position) => (
              <button
                key={position.id}
                onClick={() => handlePositionSelect(position)}
                className="w-full text-left p-3 hover:bg-gray-50 rounded-md transition-colors flex items-start gap-3"
              >
                <position.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{position.title}</div>
                  <div className="text-xs text-muted-foreground">{position.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedPosition && <selectedPosition.icon className="w-5 h-5" />}
              Подбор: {selectedPosition?.title}
            </DialogTitle>
            <DialogDescription>
              Заполните форму, и мы рассчитаем стоимость подбора для вашей компании
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="company">Название компании</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="requirements">Дополнительные требования</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                rows={3}
                placeholder="Укажите специфические требования к кандидату..."
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="privacy-consent-hr" 
                  checked={formData.privacyConsent}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, privacyConsent: checked as boolean }))
                  }
                />
                <label htmlFor="privacy-consent-hr" className="text-sm text-muted-foreground cursor-pointer">
                  Ознакомлен с политикой конфиденциальности
                </label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="data-consent-hr" 
                  checked={formData.dataConsent}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, dataConsent: checked as boolean }))
                  }
                />
                <label htmlFor="data-consent-hr" className="text-sm text-muted-foreground cursor-pointer">
                  Согласен на обработку персональных данных
                </label>
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting || !formData.privacyConsent || !formData.dataConsent}>
              {isSubmitting ? "Отправка..." : "Узнать стоимость подбора"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HRRecruitmentDropdown;