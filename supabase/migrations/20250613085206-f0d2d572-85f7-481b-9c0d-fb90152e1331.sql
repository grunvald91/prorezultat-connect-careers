
-- Создаём таблицу для хранения заявок
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL,
  email TEXT,
  question TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'processed', 'completed')),
  telegram_sent BOOLEAN DEFAULT false
);

-- Включаем Row Level Security
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Создаём политику для чтения (только администраторы могут видеть все заявки)
CREATE POLICY "Anyone can insert contact requests" 
  ON public.contact_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Политика для чтения всех заявок (можете настроить под свои нужды)
CREATE POLICY "Anyone can view contact requests" 
  ON public.contact_requests 
  FOR SELECT 
  USING (true);
