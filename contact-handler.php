<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Обработка CORS preflight запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Проверяем метод запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Метод не разрешен']);
    exit();
}

// Получаем данные из запроса
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Некорректные данные']);
    exit();
}

// Настройки базы данных MySQL (замените на ваши данные от Джино)
$host = 'localhost'; // или IP сервера БД от Джино
$username = 'ваш_пользователь_mysql'; // от Джино
$password = 'ваш_пароль_mysql'; // от Джино  
$database = 'ваша_база_данных'; // от Джино

// Настройки Telegram (замените на ваши)
$telegram_bot_token = 'ваш_токен_бота';
$telegram_chat_ids = ['ваш_chat_id']; // можно несколько

// Настройки Resend (замените на ваш API ключ)
$resend_api_key = 'ваш_resend_api_key';
$notify_email = 'ваш_email@example.com';
$from_email = 'noreply@ваш-домен.ru';

try {
    // Подключение к MySQL
    $pdo = new PDO("mysql:host=$host;dbname=$database;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Создаем таблицу если не существует
    $createTable = "
    CREATE TABLE IF NOT EXISTS contact_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        phone VARCHAR(20),
        email VARCHAR(255),
        name VARCHAR(255),
        company VARCHAR(255),
        question TEXT,
        telegram_sent BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($createTable);
    
    // Подготавливаем данные
    $phone = $data['phone'] ?? '';
    $email = $data['email'] ?? '';
    $name = $data['name'] ?? '';
    $company = $data['company'] ?? '';
    $question = $data['question'] ?? '';
    
    // Вставляем данные в базу
    $stmt = $pdo->prepare("
        INSERT INTO contact_requests (phone, email, name, company, question) 
        VALUES (?, ?, ?, ?, ?)
    ");
    $stmt->execute([$phone, $email, $name, $company, $question]);
    $request_id = $pdo->lastInsertId();
    
    // Отправляем уведомление в Telegram
    $telegram_success = false;
    if (!empty($telegram_bot_token) && !empty($telegram_chat_ids)) {
        $message = "📨 Новая заявка с сайта!\n\n";
        if ($name) $message .= "👤 Имя: $name\n";
        if ($company) $message .= "🏢 Компания: $company\n";
        $message .= "📞 Телефон: $phone\n";
        if ($email) $message .= "📧 Email: $email\n";
        $message .= "💬 Сообщение: $question\n";
        $message .= "\n🕐 " . date('d.m.Y H:i:s');
        
        foreach ($telegram_chat_ids as $chat_id) {
            $telegram_url = "https://api.telegram.org/bot$telegram_bot_token/sendMessage";
            $telegram_data = [
                'chat_id' => $chat_id,
                'text' => $message,
                'parse_mode' => 'HTML'
            ];
            
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $telegram_url);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($telegram_data));
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($httpCode === 200) {
                $telegram_success = true;
            }
        }
        
        // Обновляем статус отправки в Telegram
        if ($telegram_success) {
            $stmt = $pdo->prepare("UPDATE contact_requests SET telegram_sent = TRUE WHERE id = ?");
            $stmt->execute([$request_id]);
        }
    }
    
    // Отправляем email через Resend
    $email_success = false;
    if (!empty($resend_api_key) && !empty($notify_email)) {
        $email_subject = "Новая заявка с сайта";
        $email_html = "<h2>Новая заявка с сайта</h2>";
        if ($name) $email_html .= "<p><strong>Имя:</strong> $name</p>";
        if ($company) $email_html .= "<p><strong>Компания:</strong> $company</p>";
        $email_html .= "<p><strong>Телефон:</strong> $phone</p>";
        if ($email) $email_html .= "<p><strong>Email:</strong> $email</p>";
        $email_html .= "<p><strong>Сообщение:</strong></p><p>" . nl2br(htmlspecialchars($question)) . "</p>";
        $email_html .= "<p><strong>Дата:</strong> " . date('d.m.Y H:i:s') . "</p>";
        
        $email_data = [
            'from' => $from_email,
            'to' => [$notify_email],
            'subject' => $email_subject,
            'html' => $email_html
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.resend.com/emails');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($email_data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $resend_api_key
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 200) {
            $email_success = true;
        }
    }
    
    // Возвращаем успешный ответ
    echo json_encode([
        'success' => true,
        'message' => 'Заявка успешно отправлена',
        'request_id' => $request_id,
        'telegram_sent' => $telegram_success,
        'email_sent' => $email_success
    ]);
    
} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Ошибка базы данных']);
} catch (Exception $e) {
    error_log("General error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Внутренняя ошибка сервера']);
}
?>