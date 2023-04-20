<?php
include('connection.php');
session_start();
if (isset($_POST['submit'])) {

    $phone_number = $_POST['phone_number'];
    $password = $_POST['password'];

    $sql = "select * from users where phone_number='$phone_number' and password='$password'";
    $result = mysqli_query($connection, $sql);
    $row = mysqli_fetch_assoc($result);

    if (is_array($row)) {
        
        $_SESSION["ID"] = $row['id'];
        $_SESSION["phone_number"] = $row['phone_number'];
        
        header("Location:dashboard.php");
    } else {

        echo "<script>{
            alert('Invalid Email ID/Password!!');
           }</script>";
        echo "<script>window.location='login.php' </script>";
    }
    
}
?>