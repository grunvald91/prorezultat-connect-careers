
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
// import { supabase } from "@/integrations/supabase/client";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    question: "",
    privacyConsent: false,
    dataConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone || !formData.question || !formData.privacyConsent || !formData.dataConsent) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля и дайте согласие на обработку данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);

      // Отправляем заявку на PHP скрипт на Джино (замените на ваш домен)
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: formData.phone,
          email: formData.email,
          question: formData.question,
        })
      });

      const result = await response.json();

      console.log('PHP script response:', result);

      if (!response.ok || !result.success) {
        console.error('Error submitting form:', result);
        throw new Error(result.error || 'Ошибка при отправке заявки');
      }

      console.log('Contact request submitted:', result);

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      setFormData({ phone: "", email: "", question: "", privacyConsent: false, dataConsent: false });
      onClose();

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами напрямую",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Оставить заявку
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email (необязательно)</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="question">Ваш вопрос *</Label>
            <Textarea
              id="question"
              placeholder="Опишите ваш вопрос или потребность..."
              value={formData.question}
              onChange={(e) => handleInputChange("question", e.target.value)}
              rows={4}
              required
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="privacy-consent" 
                checked={formData.privacyConsent}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, privacyConsent: checked as boolean }))
                }
              />
              <label htmlFor="privacy-consent" className="text-sm text-muted-foreground cursor-pointer">
                Согласен с{" "}
                <button 
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('openPrivacyPolicy'))}
                  className="text-accent hover:underline"
                >
                  политикой конфиденциальности
                </button>
              </label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="data-consent" 
                checked={formData.dataConsent}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, dataConsent: checked as boolean }))
                }
              />
              <label htmlFor="data-consent" className="text-sm text-muted-foreground cursor-pointer">
                Согласен на{" "}
                <button 
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('openConsentAgreement'))}
                  className="text-accent hover:underline"
                >
                  обработку персональных данных
                </button>
              </label>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-accent hover:bg-warm-salmon"
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
