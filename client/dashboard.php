<?php
session_start();
if ($_SESSION["ID"] > 0) {
include 'connection.php';

?>
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dollar King</title>
    <link rel="stylesheet" href="../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/bootstrap-5.0.2-dist/css/bootstrap.css">
    <link rel="stylesheet" href="../assets/css/preloader.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <script src="../assets/bootstrap-5.0.2-dist/js/bootstrap.bundle.js"></script>
    <script src="../assets/bootstrap-5.0.2-dist/js/bootstrap.js"></script>
    <script src="../assets/bootstrap-5.0.2-dist/js/bootstrap.min.js"></script>

    <style>
        tr td 
        {
            color: white!important;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-size: 20px;
        }
    </style>
</head>
<body>
    
  <div class="loader-wrapper">
    <div class="loader">
    </div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
  <!--  Page Content goes here  -->
  <div class="container-fluid" id="one">
    <nav class="nav" >
      
      <a class="nav-link" href="#">
        <button class="btn btn-warning" style="border-radius: 20px;color:white"><i class="fa fa-usd" aria-hidden="true"></i> Free Money&nbsp&nbsp<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
      </a>
      <a class="nav-link" href="#">
        <button class="btn btn-warning" style="border-radius: 20px;color:white"><i class="fa fa-television" aria-hidden="true"></i>&nbsp&nbspPromotions and bonuses</button>
      </a>
    
    </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="border-radius: 20px;" >
            <div class="container-fluid">
              <a class="navbar-brand" href="#" style="color:rgb(41, 41, 155);font-size: 20px!important;font-family: cursive;">$ King</a>
              <button class="navbar-toggler" style="color: white;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon bg-light" style="color: white;"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Live</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Casino</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      More
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Game1</a></li>
                      <li><a class="dropdown-item" href="#">Game2</a></li>
                      <li><a class="dropdown-item" href="#">Game3</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Casino</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Casino</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Casino</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Casino</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                  </li>
                  <li class="nav-item">
                   <a href="client/logout.php">
                      <button class="btn btn-dark" style="border-radius: 20px;">Logout</button>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
    
  </div>

<div class="container-fluid" id="two">
    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-6"></div>
        <div class="col-lg-2">
           
                <div class="text-center">
                    <button class="btn btn-success" disabled>Winner:&nbsp&nbsp0.0</button>
                </div>
            
        </div>
    </div>
</div>


  <div class="container-fluid mt-3">
    <div class="row">
        <div class="col-lg-3" id="three">
            <table class="table">
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                
            </table>
        </div>
        <div class="col-lg-6">
            <div class="text-center">
                <h5 class="text-white">Dollar King</h5>
            </div>
            <div class="card bg-dark">
                <img onclick="fullScreen()" src="https://cdn.onlinewebfonts.com/svg/img_254851.png"  style="margin-left: 10px;margin-top:10px;width: 30px;height: 30px;" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore nesciunt fugiat consectetur dolor! Reiciendis aperiam totam officia asperiores ullam accusantium sint enim assumenda, nulla beatae, hic voluptas ea recusandae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur ducimus dolorem. Ratione voluptates quibusdam molestias perspiciatis voluptatem a, debitis veniam iusto hic voluptate aut quidem error impedit maxime. Neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur ducimus dolorem. Ratione voluptates quibusdam molestias perspiciatis voluptatem a, debitis veniam iusto hic voluptate aut quidem error impedit maxime. Neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur ducimus dolorem. Ratione voluptates quibusdam molestias perspiciatis voluptatem a, debitis veniam iusto hic voluptate aut quidem error impedit maxime. Neque.</p>
            </div>
        </div>
        <div class="col-lg-3">
            <table class="table">
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>

                </tr>
                
            </table>
        </div>
    </div>
    
  </div>
  <div class="container-fluid mt-3">
    <div class="text-center">
        <h3 class="text-white">Single Open</h3>
    </div>
    <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-1" >
            <div style="border: 2 px solid white!important;">
            <h2 class="text-white">0</h2>
        </div>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">1</h2>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">2</h2>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">3</h2>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">4</h2>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">5</h2>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">6</h2>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">7</h2>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">8</h2>
        </div>
        <div class="col-lg-1">
            <h2 class="text-white">9</h2>
        </div>
       
        <div class="col-lg-1"></div>
    </div>
    </div>


<!-- fullscreen js -->
<script>
  var data=document.getElementsByTagName("td");
  for(i=0;i<data.length;i++)
  {
    if(i%2==0)
    {
      data[i].style.backgroundColor="black";
      data[i].style.textAlign="center";
    }
    else 
    {
      data[i].style.textAlign="center";
    }
  }


  function fullScreen()
  {
    alert("krfkern")
  }
</script>


<!-- end fullScreen -->
      <script src="../assets/js/preloader.js"></script>
  </body>
<?php
}
?>