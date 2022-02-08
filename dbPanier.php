<?php

$produit = new PDO("mysql:host=localhost;dbname=RhumaSug", "phpmyadmin", "step31");


$stmt = $produit->prepare("SELECT * FROM produit");

$stmt->execute();

$achat = $stmt->fetchAll(PDO::FETCH_ASSOC);

$achatJson = json_encode($achat); // Permet d'encoder le tableau associatif $clients sous la forme d'une chaine de caratère la structure Json
echo $achatJson;
