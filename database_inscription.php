<?php

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$adresse = $_POST['adresse'];
$ville = $_POST['ville'];
$codepostal = $_POST['codepostal'];
$pseudo = $_POST['pseudo'];
$password = $_POST['password'];



$inscription = new PDO("mysql:host=localhost;dbname=RhumaSug", "phpmyadmin", "step31");


if ($inscription->connect_error) {

    die('Connection Failed :' . $inscription->connect_error);
} else {
    $tampon = $inscription->prepare("insert into client(nomClient, prenomClient, emailClient, telephoneClient, adresseClient, villeClient, cpClient, pseudoClient, mdpClient) values('$nom', '$prenom', '$email', '$telephone' '$adresse', '$ville', '$codepostal', '$pseudo', '$password)");
    $tampon->execute();
    // $tampon->close();
    header('location: inscription.php');
}
