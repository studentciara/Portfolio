
<?php

$host = 'localhost';
$dbname = 'contactform_db';
$username = 'root';
$password = '';


// Maak verbinding met de MySQL-database
$conn = new mysqli($host, $username, $password, $dbname);

// Controleer of de verbinding is geslaagd
if ($conn->connect_error) {
    die("Verbinding mislukt: " . $conn->connect_error);
}
?>