<?php 
session_start();
error_reporting(E_ALL & ~E_NOTICE);

if ($_SESSION['ID'] > 0) {
include('header.php');
 ?>

<div class="content-wrapper">
  <!-- Content Header (Page header) -->

  <!-- Main content -->

  <section class="content">

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12 text-center">

        </div>
        <div class="col-xs-12">
          <div class="box">

            <form method="post" action="add_upi.php" enctype="multipart/form-data">
              <div class="box-body">
                <div class="clearfix"></div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label>ADD UPI</label>
                    <input type="text" class="form-control" name="upi" id="upi" autofocus required>
                  </div>
                </div>
                <!-- <div class="col-sm-6">
              <div class="form-group">
              <label>ADD UPI 2 DETAIL</label>
              <input type="text" class="form-control"  name="upi2" id="upi2" required value="">
              </div>
              </div>          
 <div class="col-sm-6">
              <div class="form-group">
              <label>ADD UPI 3 DETAIL</label>
              <input type="text" class="form-control"  name="upi3" id="upi3" required value="">
              </div>
              </div> -->
                <div class="clearfix"></div>
                <div class="form-group">
                  <div class="text-center">

                    <input type="submit" class="btn btn-primary" value="Submit" name="submit">
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>



            </form>
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