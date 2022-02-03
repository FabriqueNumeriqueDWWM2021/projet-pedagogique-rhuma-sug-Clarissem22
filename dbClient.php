<?php

$conn = new PDO("mysql:host=localhost;dbname=RhumaSug", "phpmyadmin", "step31");


$stmt = $conn->prepare("SELECT * FROM client");

$stmt->execute();

$clients = $stmt->fetchAll(PDO::FETCH_ASSOC);

$clientsJson = json_encode($clients); // Permet d'encoder le tableau associatif $clients sous la forme d'une chaine de caratère la structure Json
echo $clientsJson;
