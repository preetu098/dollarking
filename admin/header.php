<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Adminsuit | Dashboard</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="assets/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="assets/css/_all-skins.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="assets/css/blue.css">
    <!-- Morris chart -->
    <link rel="stylesheet" href="assets/css/morris.css">
    <!-- jvectormap -->
    <link rel="stylesheet" href="assets/css//jquery-jvectormap-1.2.2.css">
    <!-- Date Picker -->
    <link rel="stylesheet" href="assets/css//datepicker3.css">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="assets/css/daterangepicker-bs3.css">
    <!-- bootstrap wysihtml5 - text editor -->
    <link rel="stylesheet" href="assets/css/bootstrap3-wysihtml5.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>

<body class="hold-transition skin-red sidebar-mini">
    <div class="wrapper" style="background-color:black!important">
        <header class="main-header" >
            <!-- Logo -->
            <a href="dashboard.php" class="logo">
                <span class="logo-mini"><b>Admin<!--<img src="images/smalllogo.png">--></b></span>
                <span class="logo-lg"><b>Admin <!--<img src="images/logo.jpg">--></b></span>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top" >
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>

                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">

                        <!-- Tasks: style can be found in dropdown.less -->

                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <span class="hidden-xs"><i class="fa fa-user"></i></span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                  
                                </li>
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="#" data-toggle="modal" data-target="#changepasword"
                                            class="btn btn-default btn-flat">Change Password</a>
                                    </div>
                                    <div class="pull-right">
                                        <a href="logout.php" class="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <!-- Control Sidebar Toggle Button -->

                    </ul>
                </div>
            </nav>
        </header>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->

                <!--<div class="user-panel">
      <div class="pull-left image"> <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"> </div>
      <div class="pull-left info">
        <p>Welcome</p>
        <a href="javascript:void('0');"> <i class="fa fa-circle text-success"></i> Online</a> </div>
    </div>-->
                <!-- search form -->

                <!-- /.search form -->
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">

                    <li class="active treeview"> <a href="dashboard.php"> <i class="fa fa-dashboard"></i>
                            <span>Dashboard</span> </a></li>
                    <!-- <li class="treeview"> <a href="#"> <i class="fa fa-list-alt"></i><span>Manage Admins</span><i
                                class="fa fa-angle-left pull-right"></i></a>
                        <ul class="treeview-menu">
                            <li> <a href="manage_adminuser.php"><i class="fa fa-circle-o"></i>Manage User</a></li>
                            <li> <a href="manage_role.php"><i class="fa fa-circle-o"></i>Manage Role</a></li>
                            <li> <a href="manage_task.php"><i class="fa fa-circle-o"></i>Manage Task</a></li>
                        </ul>
                    </li> -->
                    <li class="treeview"> <a href="#"> <i class="fa fa-list-alt"></i><span>Website Setting</span><i
                                class="fa fa-angle-left pull-right"></i></a>
                        <ul class="treeview-menu">
                            <li> <a href="manage_amount.php"><i class="fa fa-circle-o"></i>Amount Setup</a></li>
                            
                            <li> <a href="setup_upi.php"><i class="fa fa-circle-o"></i>Setup Upi</a>
                            </li>
                        </ul>
                    </li>
                   
                    <li class="treeview"> <a href="#"> <i class="fa fa-list-alt"></i><span>User Management</span><i
                                class="fa fa-angle-left pull-right"></i></a>
                        <ul class="treeview-menu">
                            <li> <a href="manage_user.php"><i class="fa fa-circle-o"></i>Manage User</a></li>
                            <li> <a href="manage_banuser.php"><i class="fa fa-circle-o"></i>Manage Ban Users</a></li>
                        </ul>
                    </li>
                    <li class="treeview"> <a href="#"> <i class="fa fa-list-alt"></i><span>Order History</span><i
                                class="fa fa-angle-left pull-right"></i></a>
                        <ul class="treeview-menu">
                            <li> <a href="current_game_report.php"><i class="fa fa-circle-o"></i>Current Game Report</a>
                            </li>
                            <li> <a href="user_result.php"><i class="fa fa-circle-o"></i>Users Result</a></li>
                        </ul>
                    </li>
                   
                    <!-- <li class="treeview"> <a href="manage_tradehistory.php"> <i class="fa fa-list-alt"></i> <span>Trade
                                History</span> </a></li> -->
                    <li class="treeview"> <a href="#"> <i class="fa fa-list-alt"></i><span>Withdrawal
                                Management</span><i class="fa fa-angle-left pull-right"></i></a>
                        <ul class="treeview-menu">
                            <li> <a href="manage_withdraw.php"><i class="fa fa-circle-o"></i>Withdrawal Request</a></li>
                            <li> <a href="manage_withdrawAccept.php"><i class="fa fa-circle-o"></i>Withdrawal Accept</a>
                            </li>
                            <li> <a href="reject_withdraw.php"><i class="fa fa-circle-o"></i>Withdrawal Reject</a>
                            </li>
                        </ul>
                    </li>
                    <li class="treeview"> <a href="#"> <i class="fa fa-list-alt"></i><span>Recharge History</span><i
                                class="fa fa-angle-left pull-right"></i></a>
                        <ul class="treeview-menu">
                            <li> <a href="approve_recharge.php"><i class="fa fa-circle-o"></i>History</a></li>
                            <li> <a href="manage_recharge.php"><i class="fa fa-circle-o"></i>Request</a></li>
                            <li> <a href="reject_recharge.php"><i class="fa fa-circle-o"></i>Rejected</a></li>
                        </ul>
                    </li>
                   
                    <!-- <li class="treeview"> <a href="envelope_history.php"> <i class="fa fa-list-alt"></i> <span>Envelope
                                History</span> </a></li> -->

                </ul>


            </section><br />
            <!-- /.sidebar -->
        </aside>
