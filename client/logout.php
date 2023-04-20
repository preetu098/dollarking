<?php
session_start();
unset($_COOKIE["PHPSESSID"]);
unset($_SESSION['ID']);
session_destroy();
header("Location:login.php");
?>