<?php
session_start();
if ($_SESSION["ID"] > 0) {
?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Aviator</title>
  <link rel="stylesheet" href="assets/css/style.css">

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <meta name="description" content="Bitter Mobile Template">
  <meta name="keywords" content="bootstrap, mobile template, bootstrap 4, mobile, html, responsive" />
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <link href="assets/css/dataTables.bootstrap.min.css" rel="stylesheet" />
  <style>
    .btn {
      width: 264px;
      font-size: 16px;
      height: 44px;
      color: white;

    }

    .form-control {
      box-shadow: none;
      border-bottom: #ccc solid 1px;
      height: 26px;
      margin-bottom: 3px;
    }

    .form-group {
      margin-bottom: 0px;
    }

    .form-group.>label {
      bottom: 34px;
      left: 8px;
      position: relative;
      background-color: white;
      padding: 0px 5px 0px 5px;
      font-size: 1.1em;
      transition: 0.1s;
      pointer-events: none;
      font-weight: 500 !important;
      transform-origin: bottom left;
    }

    .form-control.:focus~label {
      transform: translate(1px, -85%) scale(0.80);
      opacity: .8;
      color: #005ebf;
    }

    .form-control.:valid~label {
      transform-origin: bottom left;
      transform: translate(1px, -110%) scale(0.80);
      opacity: .8;
    }

    .appContent1 {
      width: 100%;
      padding: 15px 15px 64px 15px;
      box-sizing: border-box;
    }

    .textarea {
      background: transparent;
      font-size: 16px;
      border: 0;
      border-bottom: 1px solid #919191;

    }

    label {
      padding-top: 10px;
    }

    .btnn {
      width: 65%;
      padding: 12px 0;
      text-align: center;
      border: 0;
      border-radius: 2px;
      color: #fff;
      font-size: 14px;
      background: #009688;
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);

    }

    label {
      color: #7d7d7d;
      font-weight: 400;
      font-size: 14px;
    }
  </style>
</head>

<body>
  <!-- Page loading -->

  <!-- * Page loading -->

  <!-- App Header -->
  <div class="appHeader1">
    <div class="left"> <a href="/manage_bankcard.php" onClick="goBack();" class="icon goBack"> <i
          class="icon ion-md-arrow-back"></i> </a>
      <div class="pageTitle">Add Bank Account</div>
    </div>
  </div>
  <!-- searchBox -->

  <!-- * searchBox -->
  <!-- * App Header -->

  <!-- App Capsule -->
  <div id="appCapsule">
    <div class="appContent1" style="margin-top:-25px;">
      <form action="save_bank_details.php" method="post">
      <input type="hidden" name="user_id" value="<?php echo $_GET['user_id']; ?>">
        <div class="form-group  mt-3">
          <label for="name">Actual Name</label>
          <input type="text" class="form-control textarea " id="name" name="name" required value="">
        </div>
        <div class="form-group ">
          <label for="bank">Bank Name</label>
          <input type="text" class="form-control textarea " id="bank" name="bank" required value="">
        </div>
        <div class="form-group ">
          <label for="ifsc">IFSC Code</label>
          <input type="text" class="form-control textarea " id="ifsc" name="ifsc" required value="">
        </div>
        <div class="form-group ">
          <label for="account">Bank Account</label>
          <input type="number" class="form-control textarea " id="account" name="account" required value="">
        </div>
        <div class="form-group ">
          <label for="upi">UPI ID</label>
          <input type="email" class="form-control textarea " id="upi" name="upi" required value="">
        </div>
        <div class="form-group ">
          <label for="state">State/Territory</label>
          <input type="text" class="form-control textarea " id="state" name="state" required value="">
        </div>

        <div class="form-group ">
          <label for="city">City</label>
          <input type="text" class="form-control textarea " id="city" name="city" required value="">
        </div>

        <div class="form-group ">
          <label for="address">Address</label>
          <input type="text" class="form-control textarea " id="address" name="address" required value="">
        </div>

        <div class="form-group ">
          <label for="mobile">Mobile Number</label>
          <input type="number" class="form-control textarea " id="mobile" name="mobile" maxlength="10" required
            value="">
        </div>

        <div class="form-group ">
          <label for="email">Email</label>
          <input type="email" class="form-control textarea " id="email" name="email" required value="">
        </div>

        
        <div class="text-center mt-3">
          <button type="submit" name="submit" class="btnn">Save</button>
        </div>
      </form>
    </div>
  </div>
  <!-- appCapsule -->

  <div class="appBottomMenu">
    <div class="item "> <a href="index">
        <p> <i class="icon ion-md-home"></i> <span>Home</span> </p>
      </a> </div>
    <div class="item "> <a href="search.php">
        <p> <i class="icon ion-ios-search"></i> <span>Search</span> </p>
      </a> </div>
    <div class="item "> <a href="win.php">
        <p> <i class="icon ion-md-trophy"></i> <span>Win</span> </p>
      </a> </div>

    <div class="item "> <a href="mine.php" class="icon toggleSidebar">
        <p> <i class="icon ion-md-person"></i> <span>My </span> </p>
      </a> </div>

  </div>
  <div id="alert" class="modal fade" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-body" id="alertmessage"> </div>
        <div class="text-center pb-1">
          <a type="button" class="text-info" data-dismiss="modal"><a href="manage_bankcard.php"
              style="colour: black;">OK</a></a>
        </div>
      </div>
    </div>
  </div>
  <!-- Jquery -->
  <script src="assets/js/jquery-3.4.1.min.js"></script>
  <!-- Bootstrap-->
  <script src="assets/js/popper.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <!-- Owl Carousel -->
  <script src="assets/js/owl.carousel.min.js"></script>
  <!-- Main Js File -->
  <script src="assets/js/app.js"></script>
  <script src="assets/js/addbankcard.js"></script>
</body>

</html>
<?php
}else{
  header("Location:login.php");
}
?>