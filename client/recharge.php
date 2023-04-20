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
    <meta name="description" content="WINGOPLUS">
    <meta name="keywords" content="WINGOPLUS" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="assets/css/dataTables.bootstrap.min.css" rel="stylesheet" />
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
        h3 {
            font-weight: normal;
            font-size: 14px;
        }
        .btn {
            height: 45px;
            width: 264px;
            font-size: 16px;
            color: white;
        }
        .amount_list {
            width: 100%;
            margin-top: -10px;
            padding: 25px 10% 15px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .button {
            display: inline-block;
            margin: 5px;
            width: auto;
            height: auto;
            font-size: 20px;
            font-weight: bold;
            border-radius: 5px;
            box-sizing: border-box;
            font-family: Orbitron;
        }
        .digits {
            color: #181818;
            text-shadow: 1px 1px 0px #FFF;
            background-color: #EBEBEB;
            border-top: 2px solid #FFF;
            border-right: 2px solid #FFF;
            border-bottom: 2px solid #C1C1C1;
            border-left: 2px solid #C1C1C1;
            border-radius: 4px;
            box-shadow: 0px 0px 2px #030303;
        }
        .digits:hover,
        .mathButtons:hover,
        #clearButton:hover {
            background-color: #FFBA75;
            box-shadow: 0px 0px 2px #FFBA75, inset 0px -20px 1px #FF8000;
            border-top: 2px solid #FFF;
            border-right: 2px solid #FFF;
            border-bottom: 2px solid #AE5700;
            border-left: 2px solid #AE5700;
        }
        .btn1 {
            color: black;
            height: 35px;
            width: 70vw;
            border-radius: 1px;
            margin-top: 5px;
            margin-bottom: 5px;
            margin-left: 5px;
            margin-right: 5px;
            background-color: #F5F5F5;
        }
        .btn2 {
            color: black;
            height: 45px;
            width: 75px;
            border-radius: 15px;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 15px;
            padding-right: 15px;
            background-color: #F8F3D4;
        }
        .vcard {
            box-shadow: true;
        }
        label {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 10px;
            color: #291F53;
            margin-bottom: 0px;
            font-size: 20px;
        }
        img {
            width: 25px;
            height: 25px;
        }
        .recharge_btn {
            width: 100%;
            padding-bottom: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 12px 0 24px;
        }
        .amount_list .currency {
            width: 28%;
            margin: 5px 5px;
            padding: 10px 0;
            box-sizing: border-box;
            text-align: center;
            font-size: 14px;
            box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
            transition: .3s cubic-bezier(.25, .8, .5, 1), color 1ms;
            background: #f5f5f5;
            border: 0;
        }
        .currency:active {
            background: #2196f3 !important;
            color: #fff !important;
            border-radius: 2px;
        }
    </style>
</head>
<body>
    <!-- App Header -->
    <div class="appHeader1">
        <div class="left">
            <a href="/mine.php" onClick="goBack();" class="icon goBack">
                <i class="icon ion-md-arrow-back"></i>
            </a>
            <div class="pageTitle">Recharge</div>
        </div>
        <div class="right">
            <a href="rechargehistory.php" role="button" style="font-size:20px;">
                <img src="images/sidebar.png"></a>
        </div>
    </div>
    <!-- * App Header -->
    <!-- App Capsule -->
    <div id="appCapsule" class="vcard" style="background:white;">
        <div class="appContent1" style="  margin-bottom:-30px;">
            <h5 style="margin-top: 15px; margin-bottom: -15px; font-size:24px; font-weight:400;" class="text-center">
                Balance: <span>₹ 0</span></h5>
            <div>
                <br><br>
                <form name="calculator" action="checkouts.php" method="post" id="paymentdetailForm">
                <input type="hidden" name="user_id" value="<?php echo $_GET['user_id']; ?>">
                <div class="inner-addon left-addon">
                        <i style="font-size: 25px; margin-top: 1px;color: #757575;" class="icon ion-md-wallet"></i>
                        <input style="padding-left: 50px;" type="number" id="user_amount" name="user_amount"
                            class="form-control textbox" placeholder=" Enter or Select Recharge Amount"
                            onKeyPress="return isNumber(event)">
                    </div>
                    <div class="amount_list">
                        <div class="layout " style="">
                            <input class="currency" type="button" value="₹ 500"
                                onclick="calculator.user_amount.value = '500'">
                            <input class="currency" type="button" value="₹ 1000"
                                onclick="calculator.user_amount.value = '1000'">
                            <input class="currency" type="button" value="₹ 2000"
                                onclick="calculator.user_amount.value = '2000'">
                        </div>
                        <div class="layout ">
                            <input class="currency" type="button" value="₹ 5000"
                                onclick="calculator.user_amount.value = '5000'">
                            <input class="currency" type="button" value="₹ 10000"
                                onclick="calculator.user_amount.value = '10000'">
                            <input class="currency" type="button" value="₹ 49999"
                                onclick="calculator.user_amount.value = '49999'">
                        </div>
                    </div>
            </div><br><span style="font-size: 15px; color: #757575">Payment</span><br><br><span
                style="font-size: 15px;"><i style="padding-right: 25px;" class="fa fa-check-square-o"
                    aria-hidden="true"> </i>UPI Pay</span><br><br>
        </div>
        <br>
        <input type="hidden" name="finalamount" id="finalamount" value="">
        <input type="hidden" name="action" id="action" value="paydetail">
        <div class="text-center recharge_btn">
            <button type="submit" class="btn btn-primary" name="submit"> Recharge </button>
        </div>
        </form>
    </div>
    </div>
    <script src="assets/js/jquery-3.4.1.min.js"></script>
    <!-- Bootstrap-->
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- Owl Carousel -->
    <script src="assets/js/plugins/owl.carousel.min.js"></script>
    <!-- Main Js File -->
    <script src="assets/js/app.js"></script>
    <script src="assets/js/jquery.validate.min.js"></script>
    <script>
        // $.validator.setDefaults({
        //     submitHandler: function () {
        //     }
        // });
        //===============================================login validation=======================================================
        $(document).ready(function () {
           
                e.preventDefault();
                var user_amount = $('input#user_amount').val();
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
                document.getElementById('finalamount').value = user_amount;
                
           
        });</script>
    <script>
        // window.oncontextmenu = function () {
        //     return false;
        // }
        // $(document).keydown(function (event) {
        //     if (event.keyCode == 123) {
        //         return false;
        //     }
        //     else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        //         return false;
        //     }
        // });
    </script>
</body>
</html>
<?php
}else{
  header("Location:login.php");
}
?>