$(document).ready(function () { 

$("#bankcardform").on('submit',(function(e) {
e.preventDefault();

var name = $('input#name').val();
var ifsc = $('input#ifsc').val();
var bank = $('input#bank').val();
var account = $('input#account').val();
var state = $('input#state').val();
var upi = $('input#upi').val();
var city = $('input#city').val();
var adddress = $('input#adddress').val();
var mobile = $('input#mobile').val();
var email = $('input#email').val();
	//alert(userammount);	
if((name)== "") {
   $("input#name").focus();
   $('#name').addClass('borderline');
            return false;
			}
if(ifsc=="") {
   $("input#ifsc").focus();
   $('#ifsc').addClass('borderline');
            return false;
			}
if(bank=="") {
   $("input#bank").focus();
   $('#bank').addClass('borderline');
            return false;
			}
if(account=="") {
   $("input#account").focus();
   $('#account').addClass('borderline');
            return false;
			}
if(state=="") {
   $("input#state").focus();
   $('#state').addClass('borderline');
            return false;
			}
			if(upi=="") {
   $("input#upi").focus();
   $('#upi').addClass('borderline');
            return false;
			}
if(city=="") {
   $("input#city").focus();
   $('#city').addClass('borderline');
            return false;
			}
if(account=="") {
   $("input#account").focus();
   $('#account').addClass('borderline');
            return false;
			}
if(address=="") {
   $("input#address").focus();
   $('#address').addClass('borderline');
            return false;
			}
if(email=="") {
   $("input#email").focus();
   $('#email').addClass('borderline');
            return false;
			}


$.ajax({
			type: "POST", 
			url: "addbankcardNow.php",              
			data: new FormData(this), 
			contentType: false,       
			cache: false,             
			processData:false,       

			success: function(html)   
			{ //alert(html);
			var arr = html.split('~');
			
			if (arr[0]== 1) {
			$('input#name').val('');
			$('input#ifsc').val('');
			$('input#bank').val('');
			$('input#account').val('');
			$('input#state').val('');
				$('input#upi').val('');
			$('input#city').val('');
			$('input#address').val('');
			$('input#mobile').val('');
			$('input#email').val('');
			$('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Updated !</h4>";
            return false;
			}
			else if(arr[0]==2)
			{ 
  $('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Bank detail exist ! <p></>";
            return false;

				}	
			else if(arr[0]==0)
			{ 
  $('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Error found !</p>";
            return false;

				}
			
			}
		});
}));



});