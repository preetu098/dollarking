<?php
include('connection.php');
if (isset($_POST['submit'])) {

    $mra = $_POST['mra'];
    $mwa = $_POST['mwa'];
    $ib = $_POST['ib'];
    $rb = $_POST['rb'];
    $level1 = $_POST['level1'];
    $level2 = $_POST['level2'];
    $level3 = $_POST['level3'];
    $wagar = $_POST['wagar'];
    $regbonus = $_POST['regbonus'];
    $withdrawal_status = $_POST['withdrawal_status'];
    $date = date("Y-m-d H:i:s");
    $sql = "insert into amount_setup(mra,mwa,ib,rb,level1,level2,level3,wagar,regbonus,withdrawal_status,updated_at) values('$mra','$mwa','$ib','$rb','$level1','$level2','$level3','$wagar','$regbonus','$withdrawal_status','$date')";

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