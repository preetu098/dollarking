

<footer class="main-footer">

<strong>Copyright &copy;
    <script type="text/javascript">
        document.write(+new Date().getFullYear());
    </script>
</strong> All rights reserved.
</footer>


<!-- jQuery 2.2.0 -->
<script src="assets/js/jQuery-2.2.0.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="assets/js/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
$.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.6 -->
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/2/select2.full.min.js"></script>
<!-- Morris.js charts -->
<script src="assets/js/raphael-min.js"></script>
<script src="assets/js/morris.min.js"></script>
<!-- Sparkline -->
<script src="assets/js/jquery.sparkline.min.js"></script>
<!-- jvectormap -->
<script src="assets/js/jquery-jvectormap-1.2.2.min.js"></script>
<script src="assets/js/jquery-jvectormap-world-mill-en.js"></script>
<!-- jQuery Knob Chart -->
<script src="assets/js/jquery.knob.js"></script>
<script src="assets/js/jquery.dataTables.min.js"></script>
<script src="assets/js/dataTables.bootstrap.min.js"></script>

<!-- daterangepicker -->
<script src="assets/js/moment.min.js"></script>
<script src="assets/js/daterangepicker.js"></script>
<!-- datepicker -->
<script src="assets/js/bootstrap-datepicker.js"></script>
<!-- Bootstrap WYSIHTML5 -->
<!-- Slimscroll -->
<script src="assets/js/jquery.slimscroll.min.js"></script>
<script src="assets/js/icheck.min.js"></script>
<script src="assets/js/bootstrap-colorpicker.min.js"></script>

<script src="assets/js/bootstrap-timepicker.min.js"></script>

<!-- FastClick -->
<script src="assets/js/fastclick.js"></script>

<!-- AdminLTE App -->
<script src="assets/js/app.min.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<!-- AdminLTE for demo purposes -->
<script src="assets/js/demo.js"></script>

<script>
$(function () {
    //Initialize Select2 Elements
    $(".select2").select2();


});
</script>
<script>
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


</script>
<!--change password js in screen idle-->

<div id="changepasword" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
class="modal fade">
<div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" data-dismiss="modal" aria-label="Close" class="close"
                onclick="window.location='';"> <span aria-hidden="true">&times;</span> </button>
            <h4 id="myModalLabel" class="modal-title">Change Password </h4>
            <ul class="parsley-errors-list filled" id="changeresponse"></ul>
        </div>
        <div class="modal-body">
            <form class="form-horizontal clearfix changepasswordd" action="#" data-parsley-validate=""
                novalidate="" id="changepassword" method="post">
                <div class="col-lg-12">
                    <ul class="parsley-errors-list filled" id="response">
                    </ul>
                    <label class="control-label">Old Password</label>
                    <input class="form-control" type="password" id="oldpassword" name="oldpassword"
                        required>
                    <label class="control-label">New Password</label>
                    <input class="form-control" type="password" id="newpassword" name="newpassword"
                        required>
                    <label class="control-label">Confirm New Password</label>
                    <input class="form-control" type="password" id="cpassword" name="cpassword" required>

                    <input class="form-control" type="hidden" id="userid" name="userid" value="10">
                    <br />

                    <div class="form-group">
                        <div class="col-lg-offset-2 col-lg-8 text-center">
                            <button type="button" class="btn btn-default"
                                onclick="window.location='';">Cancel</button>
                            <button type="submit" class="mb-sm btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!--<div class="modal-footer">
<button type="button" data-dismiss="modal" class="btn btn-default">Close</button>
</div>-->
    </div>
</div>
</div>


<div style="display:none;">
<button type="button" data-notify="" data-message="Password Change Successfully..."
    data-options="{&quot;status&quot;:&quot;info&quot;}" class="btn btn-info" id="psuccess"></button>

</div>
<script src="assets/js/dashboard.js"></script>

</div>
<!-- ./wrapper -->


</body>

</html>