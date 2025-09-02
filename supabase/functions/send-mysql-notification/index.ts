import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  phone: string;
  email?: string;
  question: string;
  company?: string;
  name?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ContactRequest = await req.json();
    console.log("Received contact request:", requestData);

    // Подключение к MySQL базе данных Jino
    const client = await new Client().connect({
      hostname: Deno.env.get("MYSQL_HOST") || "",
      username: Deno.env.get("MYSQL_USER") || "",
      password: Deno.env.get("MYSQL_PASSWORD") || "",
      db: Deno.env.get("MYSQL_DATABASE") || "",
      port: parseInt(Deno.env.get("MYSQL_PORT") || "3306"),
    });

    console.log("Connected to MySQL database");

    // Создаем таблицу если её нет
    await client.execute(`
      CREATE TABLE IF NOT EXISTS contact_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255),
        question TEXT NOT NULL,
        company VARCHAR(255),
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        telegram_sent BOOLEAN DEFAULT FALSE
      )
    `);

    // Сохраняем заявку в MySQL
    const result = await client.execute(`
      INSERT INTO contact_requests (phone, email, question, company, name) 
      VALUES (?, ?, ?, ?, ?)
    `, [
      requestData.phone,
      requestData.email || null,
      requestData.question,
      requestData.company || null,
      requestData.name || null
    ]);

    console.log("Saved to MySQL:", result);

    // Отправляем уведомление в Telegram
    const telegramToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const chatIds = ["@vkorsunova", "@igortest123"];

    let telegramSent = false;

    if (telegramToken) {
      const message = `🔔 Новая заявка с сайта!

📞 Телефон: ${requestData.phone}
📧 Email: ${requestData.email || "Не указан"}
${requestData.company ? `🏢 Компания: ${requestData.company}` : ""}
${requestData.name ? `👤 Имя: ${requestData.name}` : ""}
💬 Вопрос: ${requestData.question}

⏰ Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`;

      for (const chatId of chatIds) {
        try {
          const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: "HTML"
            }),
          });

          if (telegramResponse.ok) {
            console.log(`Telegram notification sent to ${chatId}`);
            telegramSent = true;
          } else {
            console.error(`Failed to send Telegram notification to ${chatId}:`, await telegramResponse.text());
          }
        } catch (error) {
          console.error(`Error sending Telegram notification to ${chatId}:`, error);
        }
      }

      // Обновляем статус отправки в базе
      if (telegramSent && result.lastInsertId) {
        await client.execute(`
          UPDATE contact_requests 
          SET telegram_sent = TRUE 
          WHERE id = ?
        `, [result.lastInsertId]);
      }
    }

    // Отправляем Email уведомление
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const notifyEmail = Deno.env.get("NOTIFY_EMAIL");
    const resendFrom = Deno.env.get("RESEND_FROM");

    if (resendApiKey && notifyEmail && resendFrom) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: resendFrom,
          to: [notifyEmail],
          subject: "Новая заявка с сайта HR",
          html: `
            <h2>Новая заявка с сайта</h2>
            <p><strong>Телефон:</strong> ${requestData.phone}</p>
            <p><strong>Email:</strong> ${requestData.email || "Не указан"}</p>
            ${requestData.company ? `<p><strong>Компания:</strong> ${requestData.company}</p>` : ""}
            ${requestData.name ? `<p><strong>Имя:</strong> ${requestData.name}</p>` : ""}
            <p><strong>Вопрос:</strong> ${requestData.question}</p>
            <p><strong>Время:</strong> ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}</p>
          `,
        });
        console.log("Email notification sent");
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
    }

    await client.close();

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: result.lastInsertId,
        telegramSent 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error("Error in send-mysql-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);