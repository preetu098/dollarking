<?php
include('connection.php');
if (isset($_POST['submit'])) {
   
    $user_id = $_POST['user_id'];
    $name = $_POST['name'];
    $bank = $_POST['bank'];
    $ifsc = $_POST['ifsc'];
    $account = $_POST['account'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $address = $_POST['address'];
    $upi = $_POST['upi'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $date = date("Y-m-d H:i:s");
    $sql = "insert into user_bank_details(user_id,name,bank,ifsc,account,upi,state,city,address,mobile,email,updated_at) values('$user_id','$name','$bank','$ifsc','$account','$upi','$state','$city','$address','$mobile','$email','$date')";

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