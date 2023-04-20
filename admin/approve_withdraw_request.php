<?php

include('connection.php');


$sql = "select count(id) as record from recharge_details where user_id='" . $_GET['user_id'] . "' and status=2";
$result = mysqli_query($connection, $sql);
$user_info = mysqli_fetch_assoc($result);

if ($user_info['record'] > 0) {
    $sql = "select * from recharge_details where user_id='" . $_GET['user_id'] . "' and status=3";
    $result = mysqli_query($connection, $sql);
    $user_info = mysqli_fetch_assoc($result);
    
    $withdraw_amount = $user_info['recharge_amount'] - $_GET['withdraw_amount'];
   
    $sql = "UPDATE recharge_details SET  recharge_amount='" . $withdraw_amount . "' WHERE id='" . $user_info['id'] . "' and user_id='" . $_GET['user_id'] . "' and status=3";
    if (mysqli_query($connection, $sql)) {


    } else {



    }
}
$sql = "UPDATE withdraw_details SET status=2 WHERE id='" . $_GET['id'] . "'  and user_id='" . $_GET['user_id'] . "' and status=1";
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

?>