<?php
session_start();
error_reporting(E_ALL & ~E_NOTICE);

if ($_SESSION['ID'] > 0) {
  include('header.php'); ?>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Manage Withdrawal Request</h1>
      <ol class="breadcrumb">
        <li><a href="dashboard.php"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Manage Withdrawal Request</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

      <div class="row">
        <div class="col-xs-12">


          <div class="box">
            <div class="box-header box-header2">
              <div class="col-xs-6 text-right">
                <h3 class="box-title"></h3>
              </div>
              <div class="col-sm-6">
                <div class="pull-right">&nbsp;</div>
              </div>

            </div>
            <!-- /.box-header -->
            <div class="box-body" style="overflow-x:auto;">
              <form id="formID" name="formID" method="post" action="#" enctype="multipart/form-data">
                <!--<div class="table-responsive"> -->
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Transcation ID</th>
                      <th>Action</th>
                      <th>Detail</th>
                      <!-- <th>User Mobile</th> -->
                      <th>Amount</th>
                      <th>Transfer</th>
                      <th>5% Fees</th>
                      <!-- <th>Payout Type</th> -->
                      <th>Req. Date</th>

                    </tr>
                  </thead>
                  <tbody>

                    <?php
                    $count = 1;
                    include('connection.php');
                    $sql = "select * from withdraw_details where status=1";
                    $result = mysqli_query($connection, $sql);
                    if (mysqli_num_rows($result) > 0) {
                      while ($row = mysqli_fetch_assoc($result)) {
                        // print_r($row);
                        ?>
                        <tr>
                          <td>
                            <?php echo $count++; ?>
                          </td>
                          <td></td>
                          <td>
                            <a class="btn btn-success"
                              href="approve_withdraw_request.php?id=<?php echo $row['id'] ?>&user_id=<?php echo $row['user_id']; ?>&withdraw_amount=<?php echo $row['withdraw_amount']; ?>">Approve</a>
                            <a class="btn btn-danger"
                              href="reject_withdraw_request.php?id=<?php echo $row['id'] ?>&user_id=<?php echo $row['user_id']; ?>">Reject</a>

                          </td>
                          <td><a href="withdrawal-accept-reject.php?id=ZWgzRnNFcEplVzFaajR4Q090VHpvUT09" data-toggle="tooltip"
                              title="Accept/Reject"><i class="fa fa-eye" style="font-size:20px;"></i></a></td>


                          <td>
                            <?php echo $row['user_amount']; ?>
                          </td>
                          <td>
                            <?php echo $row['withdraw_amount'] ?>
                          </td>
                          <td>
                            <?php echo $row['withdraw_fees']; ?>
                          </td>
                          <!-- <td></td> -->
                          <td>
                            <?php echo $row['updated_on']; ?>
                          </td>


                        </tr>
                        <?php
                        $total_withdraw_amount += $row['withdraw_amount'];
                      }
                    }
                    ?>

                  </tbody>
                </table>
                <!--</div>-->
                <div class="box-header box-header2" style="margin-bottom: 10px;">&nbsp; </div>
                <div class="row">
                  <div class="col-sm-6"></div>
                  <div class="col-sm-6 text-right">
                    <strong>Total Request Amount: <i class="red_txt">
                        <?php
                        if ($total_withdraw_amount > 0) {
                          echo $total_withdraw_amount;
                        }else{
                          echo 0.00;
                        }
                        ?>
                      </i></strong>
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