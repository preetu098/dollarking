<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Aviator Game</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->


  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="asset/vendor/aos/aos.css" rel="stylesheet">
  <link href="asset/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="asset/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="asset/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="asset/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="asset/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="asset/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="asset/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Arsha - v4.11.0
  * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top " style="background-color:white">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">Aviator</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="asset/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="recharge.php?user_id=<?php echo $_SESSION['ID'] ; ?>" style="color: rgb(205, 27, 27);">Recharge</a></li>
          <li><a class="nav-link scrollto" href="withdrawl.php?user_id=<?php echo $_SESSION['ID'] ; ?>" style="color: rgb(205, 27, 27);">Withdraw</a></li>
          <li><a class="nav-link scrollto" href="addaccount.php?user_id=<?php echo $_SESSION['ID'] ; ?>" style="color: rgb(205, 27, 27);">Add Bank Details</a></li>
          <li><a class="nav-link scrollto" href="referal.php" style="color: rgb(205, 27, 27);">Referal</a></li>
          <li><a class="nav-link   scrollto" href="profile.php" style="color: rgb(205, 27, 27);">Profile</a></li>
          <li><a class="nav-link scrollto" href="logout.php" style="color: rgb(205, 27, 27);">Logout</a></li>
          <li><a class="nav-link scrollto" href="#team" style="color: rgb(205, 27, 27);">Welcome
              <?php
              include('connection.php');
              // Report all errors except E_NOTICE
              error_reporting(E_ALL & ~E_NOTICE);
              
              $sql = "select * from users where id='" . $_SESSION['ID'] . "'";
              $result = mysqli_query($connection, $sql);
              $user_info = mysqli_fetch_assoc($result);
              echo $user_info['name'];
              ?>
            </a></li>


          <li><a class="getstarted scrollto" href="deposit.php" style="color: rgb(205, 27, 27);">RS
              <?php
              $sql = "select * from recharge_details where user_id='" . $_SESSION['ID'] . "'";
              $result = mysqli_query($connection, $sql);
              $user_deposit_info = mysqli_fetch_assoc($result);
              echo $user_deposit_info['recharge_amount'];
              ?> Balance
            </a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center" style="background-color:white">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up" data-aos-delay="200">
          <h1 style="color: rgb(205, 27, 27);">Welcome Play Aviator Game</h1>

          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="../play/gamePlay.php?user_id=<?php echo $user_deposit_info['user_id'];?>" class="btn-get-started scrollto">Play Game</a>

          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="https://i2.wp.com/winprincess.net/pages/game_page/plane.png?strip=all" class="img-fluid animated"
            alt="">
        </div>
      </div>
    </div>

  </section><!-- End Hero -->