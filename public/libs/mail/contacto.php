<?php
/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["email"]) || !isset($_POST["mensaje"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$localidad = $_POST["localidad"];
$escuela = $_POST["escuela"];
$tema = $_POST["tema"];
$mensaje = $_POST["mensaje"];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "c2730028.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "info@curriculumcordoba.ar";  // Mi cuenta de correo
$smtpClave = "vNo/bSL0bR";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "info@curriculumcordoba.ar";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Subject = "Contacto web - Currículum Córdoba"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<b>Nombre y Apellido:</b><br />
{$nombre}<br /><br />
<b>Email de contacto:</b><br />
{$email}<br /><br />
<b>Número de teléfono:</b><br />
{$telefono}<br /><br />
<b>Localidad:</b><br />
{$localidad}<br /><br />
<b>Escuela:</b><br />
{$escuela}<br /><br />
<b>Tema:</b><br />
{$tema}<br /><br />
<b>Mensaje:</b><br />
{$mensajeHtml}<br /><br />
"; // Texto del email en formato HTML
$mail->AltBody = "
Nombre y Apellido:\n
{$nombre}\n\n
Email de contacto:\n
{$email}\n\n
Número de teléfono:\n
{$tel}\n\n
Localidad:\n
{$localidad}\n\n
Escuela:\n
{$escuela}\n\n
Tema:\n
{$tema}\n\n
Mensaje:\n
{$mensajeHtml}\n\n
"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    header("Location: https://curriculumcordoba.ar/contacto.html?consultaEnviada");
    die();
} else {
    header("Location: https://curriculumcordoba.ar/contacto.html?consultaNoEnviada");
    die();
}
