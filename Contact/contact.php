<?php
if($_POST){
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $messaggio = htmlspecialchars($_POST['messaggio']);

    $to = "elviotrentini@gmail.com";
    $subject = "Nuovo messaggio dal sito";
    $body = "Nome: $nome\nEmail: $email\nMessaggio:\n$messaggio";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "Messaggio inviato con successo!";
    } else {
        echo "Errore nell'invio del messaggio.";
    }
}
?>

