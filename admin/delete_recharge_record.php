<?php

include('connection.php');

$sql = "delete from recharge_details WHERE id='" . $_GET['id'] . "'  and user_id='" . $_GET['user_id'] . "' and status=2";
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