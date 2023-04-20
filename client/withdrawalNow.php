<?php

include('connection.php');

if (isset($_POST['submit'])) {
    $withdraw_amount = $_POST['user_amount_1'];
    $user_amount = $_POST['user_amount'];
    $user_id = $_POST['user_id'];
    $acid = $_POST['acid'];
    $date = date("Y-m-d H:i:s");
    $withdraw_fees = $user_amount - $withdraw_amount;
    $password = $_POST['password'];
    
    $sql = "select * from users where  password='$password'";
    $result = mysqli_query($connection, $sql);
    $row = mysqli_fetch_assoc($result);

    if (is_array($row)) {

        $sql = "insert into withdraw_details(user_id,acid,user_amount,withdraw_fees,withdraw_amount,status,updated_on) values('$user_id','$acid','$user_amount','$withdraw_fees','$withdraw_amount','1','$date')";
        if (mysqli_query($connection, $sql)) {
            echo "<script>{
                 alert('successfully !!');
                 
                }
                 </script>";

            echo "<script>window.location='dashboard.php' </script>";
        }
    } else {

        echo "<script>{
            alert('Invalid Password!!');
           }</script>";
        echo "<script>window.location='dashboard.php' </script>";
    }

}
?>