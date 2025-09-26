<?php
include('config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Haal de gegevens uit het formulier
$first_name = mysqli_real_escape_string($conn, $_POST['name']);
$last_name = mysqli_real_escape_string($conn, $_POST['lastname']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$phone = mysqli_real_escape_string($conn, $_POST['phone']);
$message = mysqli_real_escape_string($conn, $_POST['message']);



$query = "INSERT INTO messages (name, lastname, email, phone, message) 
VALUES ('name', '$lastname', '$email', '$phone', '$message')";

if (mysqli_query($conn, $query)) {
echo "Bericht succesvol verzonden!";
} else {
echo "Fout: " . mysqli_error($conn);
}
}
?>