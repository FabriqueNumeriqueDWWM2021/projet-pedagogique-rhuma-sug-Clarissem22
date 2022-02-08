<?php

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$adresse = $_POST['adresse'];
$ville = $_POST['ville'];
$codepostal = $_POST['codepostal'];
$pseudo = $_POST['pseudo'];
$motdepasse = $_POST['motdepasse'];
var_dump($_POST);



$inscription = new PDO("mysql:host=localhost;dbname=RhumaSug", "phpmyadmin", "step31");


$data = $inscription->prepare("INSERT INTO client(nomClient, prenomClient, emailClient, telephoneClient, adresseClient, villeClient, cpClient, pseudoClient, mdpClient) values('$nom', '$prenom', '$email', '$telephone' '$adresse', '$ville', '$codepostal', '$pseudo', '$motdepasse)");
$data->execute();
echo "yes";
