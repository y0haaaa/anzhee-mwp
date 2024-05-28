<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

# проверка, что ошибки нет
if (!error_get_last()) {

    // Переменные, которые отправляет пользователь
    $name = $_POST['name'] ;
    $email = $_POST['email'];
    $number = $_POST['number'];
    $country = $_POST['country'];
    $text = $_POST['text'];
    // $file = $_FILES['myfile'];
    
    
    // Формирование самого письма
    $title = "Новая заявка с сайта MVP";
    $body = "
    <h2>Обратная связь с сайта MVP:</h2>
    <b>Full Name:</b> $name<br>
    <b>Email:</b> $email<br>
    <b>Phone number:</b> $number<br>
    <b>Country:</b> $country<br><br>
    <b>Text:</b><br>$text
    ";
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'mvpanzhee@gmail.com'; // Логин на почте
    $mail->Password   = 'mich ovlp zhfx rxpz'; // Пароль на почте
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->setFrom('mvpanzhee@gmail.com', 'Anzhee MVP'); // Адрес самой почты и имя отправителя
    
    // Получатель письма
    $mail->addAddress('khromoff.maxim@gmail.com');
    $mail->addAddress('sale@anzhee.ru');
    
    // Прикрипление файлов к письму
    if (!empty($file['name'][0])) {
        for ($i = 0; $i < count($file['tmp_name']); $i++) {
            if ($file['error'][$i] === 0) 
                $mail->addAttachment($file['tmp_name'][$i], $file['name'][$i]);
        }
    }
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    
    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Сообщение успешно отправлено!";
    } else {
        $data['result'] = "error";
        $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
        $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
    }
    
} else {
    $data['result'] = "error";
    $data['info'] = "В коде присутствует ошибка";
    $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
echo json_encode($data);

?>