<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = 'oceanebondon30@gmail.com';

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $fullMessage = "Message de : $name\n\n$message";

    if(mail($to, "Nouveau message de votre portfolio", $fullMessage, $headers)) {
        echo '{"message": "Votre message a bien été envoyé !"}';
    } else {
        echo '{"message": "Une erreur s\'est produite. Veuillez réessayer."}';
    }
}
?>
