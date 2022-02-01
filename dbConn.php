<?php

$db = new mysqli('localhost', 'phpmyadmin', 'step31', 'RhumaSug');

if (!$db) {
    die("Conection failed:" . mysqli_connect_error());
}
