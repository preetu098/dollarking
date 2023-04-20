<?php 
session_start();
error_reporting(E_ALL & ~E_NOTICE);

if ($_SESSION['ID'] > 0) {
include('header.php');?>

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
  

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          

          <div class="box">

            <div class="box-body" style="overflow-x:auto;"> 
  <form id="formID" name="formID" method="post" action="#" enctype="multipart/form-data">
          <!--<div class="table-responsive"> -->
              <table id="example1" class="table table-striped text-center">

  
     
     
                 <h4 class="table_bg ">Current Game Report <span class="pull-right">Count Down: <spam id="demo" class="red_txt "></spam> || Game ID: 
20230224396</span></h4><br>

                <thead>
                <tr>
                                  
                                   <th>Values</th>
                    <th>Total Users</th>
                    <th>Total Amount</th>
                   
                    
                </tr>
                </thead>
              <tbody>

 
                  
                     <tr>
   
  
                    <td>0</td>
                     <td>70</td>
 <td>₹ 1,760</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>1</td>
                     <td>136</td>
 <td>₹ 1,850</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>2</td>
                     <td>82</td>
 <td>₹ 1,550</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>3</td>
                     <td>108</td>
 <td>₹ 2,000</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>4</td>
                     <td>73</td>
 <td>₹ 1,620</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>5</td>
                     <td>66</td>
 <td>₹ 1,490</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>6</td>
                     <td>90</td>
 <td>₹ 1,570</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>7</td>
                     <td>130</td>
 <td>₹ 2,130</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>8</td>
                     <td>65</td>
 <td>₹ 1,140</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>9</td>
                     <td>100</td>
 <td>₹ 1,920</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>Green</td>
                     <td>1565</td>
 <td>₹ 49,300</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>Red</td>
                     <td>1162</td>
 <td>₹ 41,230</td>

</tr>
    
                  
                     <tr>
   
  
                    <td>Violet</td>
                     <td>164</td>
 <td>₹ 2,510</td>

</tr>
    


                  
                 
                 
                  
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
      <section class="content">
            <div class="row">
                <div class="col-xs-12">


                    <div class="box">
                       
                        <!-- /.box-header -->
                        <div class="box-body" style="overflow-x:auto;">
                            <form id="formID" name="formID" method="post" action="#" enctype="multipart/form-data">
                                <!--<div class="table-responsive"> -->
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>

                                      
                                        <th>User ID</th>
                                        <th>User Number</th>
                                           <th>Period ID</th>
                                              <th>Select</th>
                                       
                                        <th>Amount</th>
                                       <th>Tab</th>
                                        <th>Date</th>
                                       <th>Wallet</th> 
                                       <th>Action</th> 


                                    </tr>
                                    </thead>
                                    <tbody>
                                    

                                     <tr>

                                         <td>   4443 </td>
                                             
                                             <td>		    9085225338</td>
                                            
                                            
                                            <td>20230224396</td>
                                            <td style="color:#1DCC70">Green</td>
                                            
                                            
                                                    <td>1,000.00</td>
                                                    
                                       parity </td>
                                    
                                        
                                      
                                            <td>2023-03-16 01:29:31</td>
                                            
                                            
                                              <td>		    ₹47.62</td>
                                                             <td>
                                                                <a href="user-details.php?user=4443"  target="_blank" class="update-person" style="background-color: darkorange; color:white; font-size:12px; padding: 5px;" title="User Detail">User Detail</a>
                                                                </td>
                                                            
                                            
                                        </tr>
                                    

                                     <tr>

                                         <td>   11741 </td>
                                             
                                             <td>		    9680856597</td>
                                            
                                            
                                            <td>20230224396</td>
                                            <td style="color:#ff2d55">Red</td>
                                            
                                            
                                                    <td>50.00</td>
                                                    
                                       parity </td>
                                    
                                        
                                      
                                            <td>2023-03-15 18:01:21</td>
                                            
                                            
                                              <td>		    ₹0</td>
                                                             <td>
                                                                <a href="user-details.php?user=11741"  target="_blank" class="update-person" style="background-color: darkorange; color:white; font-size:12px; padding: 5px;" title="User Detail">User Detail</a>
                                                                </td>
                                                            
                                            
                                        </tr>
                                    

                                     <tr>

                                         <td>   5346 </td>
                                             
                                             <td>		    6001634720</td>
                                            
                                            
                                            <td>20230224396</td>
                                            <td style="color:#ff2d55">Red</td>
                                            
                                            
                                                    <td>60.00</td>
                                                    
                                       sapre </td>
                                    
                                        
                                      
                                            <td>2023-03-15 17:07:07</td>
                                            
                                            
                                              <td>		    ₹308.16</td>
                                                             <td>
                                                                <a href="user-details.php?user=5346"  target="_blank" class="update-person" style="background-color: darkorange; color:white; font-size:12px; padding: 5px;" title="User Detail">User Detail</a>
                                                                </td>
                                                            
                                            
                                        </tr>
                                    

                                     <tr>

                                         <td>   5346 </td>
                                             
                                             <td>		    6001634720</td>
                                            
                                            
                                            <td>20230224396</td>
                                            <td style="color:#1DCC70">Green</td>
                                            
                                            
                                                    <td>30.00</td>
                                                    
                                       sapre </td>
                                    
                                        
                                      
                                            <td>2023-03-15 17:03:29</td>
                                            
                                            
                                              <td>		    ₹308.16</td>
                                                             <td>
                                                                <a href="user-details.php?user=5346"  target="_blank" class="update-person" style="background-color: darkorange; color:white; font-size:12px; padding: 5px;" title="User Detail">User Detail</a>
                                                                </td>
                                                            
                                            
                                        </tr>
                                    

                                     <tr>

                                         <td>   5346 </td>
                                             
                                             <td>		    6001634720</td>
                                            
                                            
                                            <td>20230224396</td>
                                            <td style="color:#1DCC70">Green</td>
                                            
                                            
                                                    <td>10.00</td>
                                                    
                                       parity </td>
                                    
                                        
                                      
                                            <td>2023-03-15 17:02:08</td>
                                            
                                            
                                              <td>		    ₹308.16</td>
                                                             <td>
                                                                <a href="user-details.php?user=5346"  target="_blank" class="update-person" style="background-color: darkorange; color:white; font-size:12px; padding: 5px;" title="User Detail">User Detail</a>
                                                                </td>
                                                            
                                            
                                        </tr>
                                    

                                     <tr>

                                         <td>   11739 </td>
                                             
                                             <td>		    8075326860</td>
                                            
                                            
                                            <td>20230224396</td>
                                            <td style="color:#ff2d55">Red</td>
                                            
                                            
                                                    <td>10.00</td>
                                                    
                                       parity </td>
                                    
                                        
                                      
                                            <td>2023-03-15 16:15:32</td>
                                            
                                            
                                              <td>		    ₹0</td>
                                                             <td>
                                                                <a href="user-details.php?user=11739"  target="_blank" class="update-person" style="background-color: darkorange; color:white; font-size:12px; padding: 5px;" title="User Detail">User Detail</a>
                                                                </td>
                                                            
                                            
                                        </tr>
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