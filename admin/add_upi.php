<?php
include('connection.php');
if (isset($_POST['submit'])) {

    // print_r($_POST);
    // exit();
    $upi = $_POST['upi'];
   
    $date = date("Y-m-d H:i:s");
    $sql = "insert into upi_details(upi,updated_at) values('$upi','$date')";

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
    exit();
}
?>