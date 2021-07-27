<?php
require_once('PHPMailer.php');
require_once('SMTP.php');
require_once('Exception.php');
require('../vendor/autoload.php');


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
 


$email = $_POST['email'];
$nome = $_POST['nome'];
$text = $_POST['text'];

$mail = new PHPMailer(true);

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


try {
	$mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = $_ENV['EMAIL'];
	$mail->Password = $_ENV['SENHA'];
	$mail->Port = 587;
 
	$mail->setFrom('ctt.yascarvalho@gmail.com');
    $mail->addAddress('carvalho.y@escolar.ifrn.edu.br');

	$mail->isHTML(true);
	$mail->Subject = "Entrando em contato:".$nome."(".$email.")";
	$mail->Body = $text." <br/> Por:".$nome."(".$email.")";
	$mail->AltBody = $text."----//// Por:".$nome."(".$email.")";
 
	if($mail->send()) {
       // header("Location: ../index.html");
		echo 'Email enviado com sucesso';
	} else {
		echo 'Email nao enviado';
		
	}
} catch (Exception $e) {
	echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";

}
?>