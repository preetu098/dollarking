<?php
session_start();
error_reporting(E_ALL & ~E_NOTICE);

if ($_SESSION['ID'] > 0) {
    include('header.php');
    ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->

        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <div class="clearfix"></div>
    <?php include('footer.php');
} else {
    echo "<script>window.location='adminLogin.php' </script>";
}
?>