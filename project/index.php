<?php include 'header.php'; ?>
<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>

<link rel="stylesheet" type="text/css" href="assets/css/wheel.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<style>
    body 
    {
        background: #FDC830;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
</style>
<link href="assets/css/custom.css" rel="stylesheet"/>
<body >
    <div class="container">
    <div class="row">
        <div class="col-lg-4">
        <div class="score"></div>
        </div>
        <div class="col-lg-4">
            <div class="text-center">
                <h3>Dollar King</h3>
            </div>
             <!--Extreme Level-->
        <section class="spin" style="padding-top:50px;background: #FDC830;background: -webkit-linear-gradient(to right, #F37335, #FDC830);background: linear-gradient(to right, #F37335, #FDC830); ">
            <div class="spin-round">
                <div id="wrapper">
                
                    <div id="wheel" >
                        
                        <div id="inner-wheel">
                            <div class="sec"><span class="fa-solid fa-square-9"></span></div>
                            <div class="sec"><span class="fa fa-comment-o"></span></div>
                            <div class="sec"><span class="fa fa-smile-o"></span></div>
                            <div class="sec"><span class="fa fa-heart-o"></span></div>
                            <div class="sec"><span class="fa fa-star-o"></span></div>
                            <div class="sec"><span class="fa fa-lightbulb-o"></span></div>
                        </div>
                        
                        <div id="spin">
                           
                        </div>
                        <div id="shine">
                          
                        </div>
                    </div>
                   
                    <!-- <img src="assets/images/spin/wheels.png"> -->
                </div>
                <!-- <section class="center-tooltip">
                    <div class="con-tooltip top bod-orange">
                        <p> 0.00x </p>
                        <div class="tooltip">
                            <div class="grid grid-cols-2">
                                <div>
                                    <p class="text-left">Win Amount &nbsp;₹0</p>
                                    <div class="input-control">
                                        <input type="text" disabled="" value="0.0000" class="input-field">
                                        <img class="coin-input" src="https://bc.game/coin/INR.black.png"
                                            style="height:10px; width:10px">

                                    </div>
                                </div>
                                <div>
                                    <p class="text-center">Chance</p>
                                    <div class="input-control"><input type="text" disabled="" value="2/10"
                                            class="input-field">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="con-tooltip top bod-white">
                        <p> 1.20x </p>
                        <div class="tooltip ">
                        <div class="grid grid-cols-2">
                                <div>
                                    <p class="text-left">Win Amount &nbsp;₹0</p>
                                    <div class="input-control">
                                        <input type="text" disabled="" value="0.0000" class="input-field">
                                        <img class="coin-input" src="https://bc.game/coin/INR.black.png"
                                            style="height:10px; width:10px">

                                    </div>
                                </div>
                                <div>
                                    <p class="text-center">Chance</p>
                                    <div class="input-control"><input type="text" disabled="" value="2/10"
                                            class="input-field">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="con-tooltip top bod-green">
                        <p> 1.50x </p>
                        <div class="tooltip ">
                        <div class="grid grid-cols-2">
                                <div>
                                    <p class="text-left">Win Amount &nbsp;₹0</p>
                                    <div class="input-control">
                                        <input type="text" disabled="" value="0.0000" class="input-field">
                                        <img class="coin-input" src="https://bc.game/coin/INR.black.png"
                                            style="height:10px; width:10px">

                                    </div>
                                </div>
                                <div>
                                    <p class="text-center">Chance</p>
                                    <div class="input-control"><input type="text" disabled="" value="2/10"
                                            class="input-field">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> -->
            </div>

        </section>
        </div>
        <div class="col-lg-4">
        <div class="score"></div>
        </div>
    </div>
    </div>
    </div>
</body>


<script>
//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function() {

    /*WHEEL SPIN FUNCTION*/
    $('#spin').click(function() {
        alert("process")
        //add 1 every click
        clicks++;

        /*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
        totalDegree = newDegree + extraDegree;

        /*let's make the spin btn to tilt every
        time the edge of the section hits 
        the indicator*/
        $('#wheel .sec').each(function() {
            var t = $(this);
            var noY = 0;

            var c = 0;
            var n = 700;
            var interval = setInterval(function() {
                c++;
                if (c === n) {
                    clearInterval(interval);
                }

                var aoY = t.offset().top;
                $("#txt").html(aoY);
                console.log(aoY);

                /*23.7 is the minumum offset number that 
                each section can get, in a 30 angle degree.
                So, if the offset reaches 23.7, then we know
                that it has a 30 degree angle and therefore, 
                exactly aligned with the spin btn*/
                if (aoY < 23.89) {
                    console.log('<<<<<<<<');
                    $('#spin').addClass('spin');
                    setTimeout(function() {
                        $('#spin').removeClass('spin');
                    }, 100);
                }
            }, 10);

            $('#inner-wheel').css({
                'transform': 'rotate(' + totalDegree + 'deg)'
            });

            noY = t.offset().top;

        });
    });



}); //DOCUMENT READY
</script>