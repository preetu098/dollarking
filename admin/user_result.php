<?php 
session_start();
error_reporting(E_ALL & ~E_NOTICE);

if ($_SESSION['ID'] > 0) {
include('header.php');?>
<div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>User Result History</h1>
            <ol class="breadcrumb">
                <li><a href="desktop.php"><i class="fa fa-dashboard"></i> Home</a></li>
                <li class="active">Result</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">


                    <div class="box">
                       
                        <!-- /.box-header -->
                        <div class="box-body">
                            <form id="formID" name="formID" method="post" action="#" enctype="multipart/form-data">
                                <!--<div class="table-responsive"> -->
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>

                                        <th>ID</th>
                                        <th>User ID</th>
                                           <th>Period ID</th>
                                              <th>Select</th>
                                       
                                        <th>Amount</th>
                                       <th>Tab</th>
                                         <th>Fees</th>
                                          <th>Status</th>
                                        <th>Date</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    

                                    </tbody>

                                </table>
                                <!--</div>-->
                                <div class="box-header box-header2" style="margin-bottom: 10px;">&nbsp; </div>
                                <div class="row">
                                    <div class="col-sm-10"></div>
                                    <div class="col-sm-2">
                                        &nbsp;
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <div class="clearfix"></div>


    <?php include('footer.php');
    } else {
        echo "<script>window.location='adminLogin.php' </script>";
      }
    ?>