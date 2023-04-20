<?php
include('connection.php');
if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $phone_number = $_POST['phone_number'];
    $password = $_POST['password'];
    $otp = $_POST['otp'];
    $date = date("Y-m-d H:i:s");
    $sql = "insert into users(name,phone_number,password,otp,status,updated_on) values('$name','$phone_number','$password','$otp','1','$date')";

    if (mysqli_query($connection, $sql)) {
        echo "<script>{
                 alert('Register successfully !!');
                 
                }
                 </script>";
        echo "<script>window.location='login.php' </script>";

    } else {

        echo "<script>{
            alert('Not register !!');
           
        } 
            </script>";
        echo "<script>window.location='signup.php' </script>";

    }
    exit();
}
?>