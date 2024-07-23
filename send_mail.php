<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $to = 'urlacherartee@gmail.com'; // Cambia esto por tu dirección de correo electrónico
    $subject = 'Nuevo mensaje de contacto';
    $body = "Nombre: $nombre\nApellido: $apellido\nCorreo Electrónico: $email\nTeléfono: $telefono\nMensaje:\n$mensaje";
    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
