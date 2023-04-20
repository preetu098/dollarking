<?php
session_start();
if ($_SESSION["ID"] > 0) {
?>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Aviator</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <meta name="description" content="Bitter Mobile Template">
  <meta name="keywords" content="bootstrap, mobile template, bootstrap 4, mobile, html, responsive">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <style>
    .float {
      position: fixed;
      width: 40px;
      height: 40px;
      bottom: 40px;
      right: 0px;
      background-color: white;
      color: #FFFFFF;
      border-radius: 50px;
      text-align: center;
      font-size: 30px;
      box-shadow: 2px 2px 3px #999;
      z-index: 100;

      top: 70%;
    }

    .my-float {
      color: #FFFFFF;
      margin-top: 3px;
    }

    .btn1 {
      border: 1px solid white;
      color: white;
      height: 45px;
      width: 264px;
      background-color: #DB0477
    }

    h3 {
      font-weight: normal;
      font-size: 20px;
    }

    .btn .error {
      margin-top: 55px;
    }

    .btn-group {
      box-shadow: none;
    }

    #alert h4 {
      font-size: 1rem;
    }

    #alert p {
      font-size: 13px;
      margin-top: 20px;
    }

    #alert .modal-content {
      border-radius: 3px
    }

    #alert .modal-dialog {
      padding: 20px;
      margin-top: 130px;
    }

    #confirm .modal-dialog {
      padding: 20px;
      margin-top: 130px;
    }

    .inner-addon select.error {
      font-size: 16px;
      position: unset;
    }

    .textbox {
      box-shadow: 0px 0px;
      height: auto;
      width: 300;
      color: #fff;
      outline: none;
      border: none;
      border-radius: 8px;
      font-size: 17px;
      font-weight: 400;
      margin: 0px 0;
      cursor: pointer;
      transition: all 0.4s ease;
    }

    img {
      width: 25px;
      height: 25px;
    }

    .appContent1 {
      position: fixed;
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      background: #fff;
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
      transition: .3s cubic-bezier(.25, .8, .5, 1);
    }

    .boxinput {
      width: 100%;

      display: flex;
      justify-content: center;
    }

    .underinput {
      width: 95%;
      height: 48px;
      border-radius: 4px;
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);

      padding: 0 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .underinputpassword {
      width: 95%;
      height: 48px;
      border-bottom: 1px solid black;
      transition: background .3s cubic-bezier(.25, .8, .5, 1);
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .underinputbank {
      width: 95%;
      height: 48px;

      transition: background .3s cubic-bezier(.25, .8, .5, 1);
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .fee {
      padding: 30px 15px 15px;
      box-sizing: border-box;
      font-size: 14px;
      color: #212121;
    }

    .payment_box {
      width: 100%;
      padding-left: 4%;
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    .payment_text {
      height: 38px;
      line-height: 38px;
      font-size: 14px;
      color: #757575;
    }

    .van-radio {
      height: 48px;
      line-height: 48px;
      font-size: 16px;
    }

    .van-radio__icon {
      -webkit-box-flex: 0;
      -webkit-flex: none;
      flex: none;
      height: 1em;
      font-size: 20px;
      line-height: 1em;
      cursor: pointer;
    }

    .van-radio__label {
      margin-left: 8px;
      color: #323233;
      line-height: 20px;
    }

    .van-cell__title {
      display: flex;
      flex-direction: row;
    }

    .recharge_btn {
      width: 100%;
      padding: 15px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 12px 0 24px;
    }

    .rechabtn {
      background: #009688;
      color: #fff;
      font-size: 14px;
      border-radius: 2px;
      border: 0;
      padding: 14px 0;
      text-align: center;
      width: 52%;
    }
  </style>
  <script src="chrome-extension://mooikfkahbdckldjjndioackbalphokd/assets/prompt.js"></script>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
</head>

<body>


  <!-- App Header -->
  <div class="appHeader1">
    <div class="left">
      <a href="/mine.php" onclick="goBack();" class="icon goBack">
        <i class="icon ion-md-arrow-back"></i>
      </a>
      <div class="pageTitle">Withdrawal</div>
    </div>
    <div class="right">
      <a href="withdrawalrecord.php" role="button" style="font-size:20px;">
        <img src="images/sidebar.png"></a>
    </div>
  </div>
  <!-- * App Header -->
  <!-- App Capsule -->
  <div id="appCapsule">
    <div class="appContent1">
      <h5 style="font-size: 24px;
    font-weight: 400;" class="text-center m-2">Balance: <span>₹ 50.00</span></h5>


      <form action="withdrawalNow.php"  method="post" class="" autocomplete="off" novalidate="novalidate">
        <div class="boxinput">
          <div class="underinput" style="background-color:white!important">

            <input style="padding-left: 20px;" type="number" id="user_amount" name="user_amount" class="form-control"
              placeholder="Enter withdrawal amount" onkeypress="return isNumber(event)" maxlength="6">
          </div>
        </div>


        <div class="fee">
          Fee : <span id="fee">0.00</span>, to Account : <span id="toAccount">0.00</span><input type="hidden"
            id="toAccountInput" name="user_amount_1">
        </div>


        <div class="payment_box">
          <p class="payment_text">Payout</p>

          <div role="radiogroup" class="van-radio-group">
            <div role="radio" tabindex="0" aria-checked="true" class="van-radio">
              <input type="radio" hidden="" name="optionsname" value="bank" checked="">
              <i style="padding-right: 45px;padding-left: 10px;" class="fa fa-check" aria-hidden="true"> </i>
              <span class="van-radio__label"><span class="text">Bankcard</span></span>
            </div>
          </div>

        </div>



        <div class="boxinput">
          <div style="" class="underinputbank">


            <img src="images/walletb.png">
            <select class="form-control select2 textbox" name="acid" id="acid" style="padding-left:45px;">
              <option value="">Select Bank Detail</option>
              <?php
              include('connection.php');
              $sql = "select * from user_bank_details where user_id='".$_GET['user_id']."' order by id desc";
              $result = mysqli_query($connection, $sql);
              if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
                  ?>
                  <option value="<?php echo $row['id'] ?>"><?php echo $row['bank'] . '-' . $row['account']; ?></option>
                  <?php
                }
              } else {
                ?>
                <option value="" style="color:#f00;">Not found</option>
              <?php }
              ?>

            </select>
          </div>
        </div> <br>
        <div class="boxinput">
          <div class="underinputpassword">
            <img src="images/icons/key-img.png">
            <input type="password" id="password" name="password" class="form-control textbox"
              placeholder="Enter Login Password" required="" aria-required="true">
          </div>
        </div>



        <input type="hidden" name="user_id" value="<?php echo $_GET['user_id'];?>">
        <input type="hidden" name="action" value="withdrawal">
        <div class="text-center recharge_btn">
          <button type="submit" class="rechabtn" name="submit"> Withdrawal </button>

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
          <a type="button" class="text-info" data-dismiss="modal">OK</a>
        </div>
      </div>
    </div>
  </div>


  <script src="assets/js/jquery-3.4.1.min.js"></script>
  <!-- Bootstrap-->
  <script src="assets/js/popper.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <!-- Owl Carousel -->
  <script src="assets/js/owl.carousel.min.js"></script>
  <!-- Main Js File -->
  <script src="assets/js/app.js"></script>
  <script src="assets/js/jquery.validate.min.js"></script>
  <script>
    $.validator.setDefaults({
      submitHandler: function () {
      }
    });

    //===============================================login validation=======================================================
    $().ready(function () {
      $("#paymentForm").validate({

        rules: {
          user_amount: {
            required: true,
            number: true,
            min: 500,
            max: 100000
          },
          optionsname: { required: true },
          acid: {
            required: true

          },
          password: {
            required: true,

          },
        },
        messages: {
          email: "Please enter a valid email address",
          password: "Please enter Withdrawal Password",
          remember: "Please accept our policy",
        }

      });

      $("#paymentdetailForm").validate({

        rules: {

          name: {
            required: true,
          },

          mobile: {
            required: true,
            number: true,
            minlength: 10
          },
          email: {
            required: true,
          },
        },
        messages: {

          password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
          },

          email: "Please enter a valid email address",
          remember: "Please accept our policy",
        }

      });
    });

    $(document).ready(function () {

      $("#paymentForm").on('submit', (function (e) {
        e.preventDefault();

        var user_amount = $('input#user_amount').val();
        var acid = $('select#acid').val();
        //alert(user_amount);	
        if ((user_amount) == "") {
          $("input#user_amount").focus();
          $('#user_amount').addClass('borderline');
          return false;
        }
        if (user_amount < 500) {
          $("input#user_amount").focus();
          $('#user_amount').addClass('borderline');
          return false;
        }
        if (user_amount > 100000) {
          $("input#user_amount").focus();
          $('#user_amount').addClass('borderline');
          return false;
        }
        if ($('input[name="optionsname"]:checked').length == 0) {
          return false;
        }
        if (acid == "") {
          $("select#acid").focus();
          $('#acid').addClass('borderline');
          return false;
        }
        if (password == "") {
          $("select#password").focus();
          $('#password').addClass('borderline');
          return false;
        }

        $.ajax({
          type: "POST",
          url: "withdrawalNow.php",
          data: new FormData(this),
          contentType: false,
          cache: false,
          processData: false,

          success: function (html) { //alert(html);
            var arr = html.split('~');

            if (arr[0] == 1) {
              $('input#user_amount').val('');
              $('#alert').modal({ backdrop: 'static', keyboard: false })
              $('#alert').modal('show');
              document.getElementById('alertmessage').innerHTML = "<h4>Success !</h4><p>Withdrawal request send succesfully ! <p></>";
              return false;
            }
            else if (arr[0] == 2) {
              $('#alert').modal({ backdrop: 'static', keyboard: false })
              $('#alert').modal('show');
              document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Please Enter Correct Withdrawal Password<p>";
              return false;

            }
            else if (arr[0] == 3) {
              $('#alert').modal({ backdrop: 'static', keyboard: false })
              $('#alert').modal('show');
              document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Invalid amount, please try again !</p>";
              return false;

            }
            else if (arr[0] == 4) {
              $('#alert').modal({ backdrop: 'static', keyboard: false })
              $('#alert').modal('show');
              document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Please try after some time !</p>";
              return false;

            }

            else if (arr[0] == 5) {
              $('#alert').modal({ backdrop: 'static', keyboard: false })
              $('#alert').modal('show');
              document.getElementById('alertmessage').innerHTML = "<p>You Need to Recharge Your Account First, After You Will Eligible For Withdrawal</p>";
              return false;
            }


            else if (arr[0] == 6) {
              $('#alert').modal({ backdrop: 'static', keyboard: false })
              $('#alert').modal('show');
              document.getElementById('alertmessage').innerHTML = "<p>Maximum Withdrawal Limit Reached. Try again Tomorrow!</p>";
              return false;
            }

            else if (arr[0] == 7) {
              $('#alert').modal({ backdrop: 'static', keyboard: false })
              $('#alert').modal('show');
              document.getElementById('alertmessage').innerHTML = "<p>You Need To Complete Betting of Amount ₹0 For Withdrawal!</p>";
              return false;
            }
          }
        });
      }));



    });

  </script>
  <script>
    var userid = 11753;
    // alert(userid);
    $(document).ready(function () {
      var dataString = 'userid=' + userid + "& type=" + "bank";
      $.ajax({
        type: "POST",
        url: "ajax_bankdetail.php",
        data: dataString,
        cache: false,
        success: function (html) { //alert(html);
          $("#acid").html(html);
        }
      })
    })
  </script>
  <script>
    $(document).ready(function () {
      $('#user_amount').on('keyup', function () {
        var percentage = 0.05;
        var balance = account = toAccount = 0;
        balance = $('#user_amount').val();
        account = balance * percentage;

        toAccount = balance - account;
        toAccount = toAccount.toFixed(2);
        console.log('balance : ' + balance + 'account : ' + account)
        $('#toAccount').html(toAccount);
        $('#toAccountInput').val(toAccount);
        $('#fee').html(account);
        $('#withdraw_fee').val(account);
      });
    });


    /*window.oncontextmenu = function () {
          return false;
        }*/
    $(document).keydown(function (event) {
      if (event.keyCode == 123) {
        return false;
      }
      else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
      }
    });

  </script>
  <script>
    document.addEventListener("keydown", function (event) {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    });	
  </script>

  <scribe-shadow id="crxjs-ext"
    style="position: fixed; width: 0px; height: 0px; top: 0px; left: 0px; z-index: 2147483647; overflow: visible;"></scribe-shadow>
</body>

</html>
<?php
}else{
  header("Location:login.php");
}
?>