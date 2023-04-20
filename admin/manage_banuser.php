<?php
session_start();
error_reporting(E_ALL & ~E_NOTICE);

if ($_SESSION['ID'] > 0) {
  include('header.php'); ?>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Manage Banuser</h1>
      <ol class="breadcrumb">
        <li><a href="dashboard.php"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Manage Ban Users</li>
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
            <div class="box-body">
              <form id="formID" name="formID" method="post" action="#" enctype="multipart/form-data">
                <div class="table-responsive">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <th>#</th>
                      <th>User ID</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Own Code</th>
                      <th>Ref. By</th>
                      <th>Wallet</th>
                      <th>Recharge</th>
                      <th>Withdrawal</th>
                      <th>Reward</th>

                      <th>Comission</th>
                      <th>Bonus Wallet</th>

                      <th>Reg. Date</th>
                      <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php
                      include('connection.php');
                      // echo "<pre>";
                      // print_r($_SERVER);
                      // echo "</pre>";
                      $count = 1;
                      $sql = "SELECT * from users   group by id order by id desc";
                      $result = mysqli_query($connection, $sql);
                      while ($all_user_info = mysqli_fetch_assoc($result)) {

                        $withdraw_info = mysqli_fetch_assoc(mysqli_query($connection, "SELECT * from withdraw_details where user_id='" . $all_user_info['id'] . "' order by id desc"));
                        // print_r($withdraw_info);
                        $recharge_info = mysqli_fetch_assoc(mysqli_query($connection, "SELECT * from recharge_details where user_id='" . $all_user_info['id'] . "' order by id desc"));
                        // print_r($recharge_info);
                        $user_bank_details = mysqli_fetch_assoc(mysqli_query($connection, "SELECT * from user_bank_details where user_id='" . $all_user_info['id'] . "' order by id desc"));
                        // print_r($recharge_info);
                        ?>
                        <tr>
                          <td>
                            <?php echo $count++; ?>
                          </td>
                          <td>
                            <?php echo $all_user_info['id'] ?>
                          </td>

                          <td>
                            <?php echo $all_user_info['phone_number']; ?>
                          </td>
                          <td>
                            <?php echo $user_bank_details['email']; ?>
                          </td>
                          <td>
                            <?php echo $all_user_info['id']; ?>
                          </td>
                          <td>
                            <?php ?>
                          </td>
                          <td>
                            <?php ?>
                          </td>


                          <td>
                            <?php echo $recharge_info['recharge_amount']; ?>
                          </td>
                          <td>
                            <?php echo $withdraw_info['withdraw_amount']; ?>
                          </td>

                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <?php echo date("d-m-Y", strtotime($all_user_info['updated_on'])); ?>
                          </td>
                          <td>

                            <a href="delete_user.php?user_id=<?php echo $all_user_info['id'] ?>" onClick="delete_row(4983)" class="update-person"
                              style="color:#f56954; font-size:16px;" title="Delete"><i class="fa fa-trash"></i></a>
                            &nbsp;
                            <a href="javascript:void(0);" onClick="UnRespond(4983)" class="update-person"
                              style="color:#f00; font-size:16px;" data-toggle="tooltip" title="Unpublish"><i
                                class="fa fa-square-o"></i></a>
                            &nbsp;
                            <a href="edit_user_info.php?user=4983" class="update-person"
                              style="color:#0E0E44; font-size:16px;" data-toggle="tooltip" title="Edit"><i
                                class="fa fa-edit"></i></a>
                            <a href="user-details.php?user=4983" class="update-person"
                              style="color:#0E0E44; font-size:16px;" data-toggle="tooltip" title="Edit"><i
                                class="fa fa-info"></i></a>


                          </td>
                          
                          <!-- <td><a href="delete_user.php?user_id=<?php echo $all_user_info['id'] ?>"><i class="fa fa-trash"
                                style="font-size:22px;color:red"></i></a></td> -->
                        </tr>
                        <?php
                      }
                      ?>


                    </tbody>

                  </table>
                </div>
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
  <div id="excel" class="modal fade" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="chn">Change Amount<br>
            <small id="mob"></small>
          </h4>
        </div>
        <form name="type" id="type" enctype="multipart/form-data" action="#" method="post">
          <div class="modal-body">

            <div class="form-group ">
              <label for="add_item">Amount</label>
              <input class="form-control" id="amount" name="amount" type="text" value=""
                onkeypress="return isNumber(event)" required>
              <input class="form-control" id="editid" name="editid" type="hidden">
              <i id="error"></i>
            </div>

          </div>
          <div class="modal-footer">

            <button type="submit" class="btn btn-danger" id="add_role">Save</button>
          </div>
        </form>
      </div>
      <!-- /.modal-content -->
    </div>

  </div>
  <div class="clearfix"></div>

  <?php include('footer.php');
} else {
  echo "<script>window.location='adminLogin.php' </script>";
}
?>