
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { requestId, phone, email, question } = await req.json();
    
    console.log('Processing request:', { requestId, phone, email, question });

    // Telegram bot configuration
    const BOT_TOKEN = '7618492207:AAFUsOIBDpSAp3a0lVtJPPAOD8R5Sfxm6ZQ';
    const CHAT_IDS = ['437862772', '1749755545'];

    const message = `🔔 Новая заявка с сайта PROREZULTAT

📱 Телефон: ${phone}
${email ? `📧 Email: ${email}` : ''}
❓ Вопрос: ${question}

⏰ Время: ${new Date().toLocaleString('ru-RU')}
🆔 ID заявки: ${requestId}`;

    console.log('Sending message to Telegram:', message);

    // Send to all chat IDs
    const telegramPromises = CHAT_IDS.map(chatId =>
      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        }),
      })
    );

    const telegramResponses = await Promise.all(telegramPromises);
    const telegramResults = await Promise.all(
      telegramResponses.map(response => response.json())
    );
    
    console.log('Telegram API responses:', telegramResults);

    const allSuccessful = telegramResponses.every(response => response.ok);

    if (allSuccessful) {
      // Update the database to mark telegram as sent
      const supabase = createClient(
        'https://fcxfwtkrwvfbnugcwkcc.supabase.co',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
      );

      const { error: updateError } = await supabase
        .from('contact_requests')
        .update({ telegram_sent: true })
        .eq('id', requestId);

      if (updateError) {
        console.error('Error updating telegram_sent status:', updateError);
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Уведомление отправлено' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      throw new Error(`Telegram API error: ${JSON.stringify(telegramResults)}`);
    }

  } catch (error) {
    console.error('Error in send-telegram-notification:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
