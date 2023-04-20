<?php
include('connection.php');
if (isset($_POST['submit'])) {
    
    $recharge_amount = $_POST['recharge_amount'];
    $upi = $_POST['upi'];
    $user_id = $_POST['user_id'];
    $transaction_number = $_POST['transaction_number'];
  
    $date = date("Y-m-d H:i:s");
    $sql = "insert into recharge_details(user_id,recharge_amount,upi,transaction_number,status,updated_at) values('$user_id','$recharge_amount','$upi','$transaction_number','1','$date')";

    if (mysqli_query($connection, $sql)) {
        echo "<script>{
                 alert('successfully !!');
                 
                }
                 </script>";
        echo "<script>window.location='dashboard.php' </script>";

    } else {

        echo "<script>{
            alert('Not !!');
           
        } 
            </script>";
        echo "<script>window.location='dashboard.php' </script>";

    }
}
?>