<?php
include('connection.php');

$sql = "delete from users  WHERE id='" . $_GET['user_id'] . "' and status=1";
if (mysqli_query($connection, $sql)) {

    echo "<script>{
        alert('User delete successfully !!');
        
       }
        </script>";
    echo "<script>window.location='usermanagement.php' </script>";
} else {

    echo "<script>{
        alert('Not !!');
       
    } 
        </script>";
    echo "<script>window.location='usermanagement.php' </script>";

}
?>