<?php
session_start();
if ($_SESSION["ID"] > 0) {
include('header.php');
include('connection.php');

?>
<body class="" style="margin-top:-450px;background-color: rgb(205, 27, 27);">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <img src="https://aviator.thixpro.in/images/logo.png" class="img-fluid" alt="">
            </div>
            <div class="col-lg-4">
                <div class="text-center mt-5">
                    <h2 class="text-white">Refferal</h2>
                </div>

            </div>
            <div class="col-lg-4">

            </div>
        </div>
    </div>
    <div class="container dark">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">

                </div>
            </div>
        </div>

        <?php
        // Report all errors except E_NOTICE
        error_reporting(E_ALL & ~E_NOTICE);
        
        $sql = "select * from users where phone_number='" . $_SESSION['phone_number'] . "'";
        $result = mysqli_query($connection, $sql);
        $user_info = mysqli_fetch_assoc($result);

        ?>
        <div class="row">
            <h4 class="text-white text-center">My Code:
                <?php echo $user_info['id'] ?>

            </h4>
            <p class="text-white text-center">My Url:<a
                    href="<?php echo "../signup.php?refer" . $user_info['id']; ?>">https://localhost/aviatorgame/signup.php?refer<?php echo $user_info['id']; ?></a></p>
        </div>
    </div>
</body>
</html>
<?php
} else {

    header("Location:login.php");
  }
?>