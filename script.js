$(document).ready(function(){
$('#usernamevalidation').hide();
$('#passwordvalidation').hide();
$('#confirmpasswordvalidation').hide();


var Error=true;
var password_error=true;
var confirm_password1=true;
$('#username').keyup(function(){
username_validation();
});
function username_validation(){
    var username_val=$('#username').val();
    if(username_val.length==""){
        $('#usernamevalidation').show();
        $('#usernamevalidation').html('Username Cannot be empty');
        $('#usernamevalidation').css('color','red'); 
        Error=false;
     return false;   }
    else{$('#usernamevalidation').hide();

    }
    if(username_val.length||username_val.length>10){
        $('#usernamevalidation').show();
        $('#usernamevalidation').html('Username Cannot be less than 3 or more than 10');
        $('#usernamevalidation').css('color','red'); 
        Error=false;
        return false;

    }
    else{$('#usernamevalidation').hide();}
}
$('#email').keyup(function(){
    email_validation();
    });


    function email_validation()
{
var email=$('#email').val();
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.length==""){
$('#emailvalidation').show();
$('#emailvalidation').html('Email Cannot be empty');
$('#emailvalidation').css('color','red'); 
email_error=false;
return false;   
}
else{$('#emailvalidation').hide();

}
if(!email.match(mailformat))
{    $('#emailvalidation').show();
$('#emailvalidation').html('Invalid');
$('#emailvalidation').css('color','red'); 
email_error=false;
return false;   


}
else
{  $('#emailvalidation').hide();

}
}
$('#password').keyup(function(){
    password_validation();
});
function password_validation(){
    var password_val=$('#password').val();
    if(password_val.length=="")
    {$('#passwordvalidation').show();
    $('#passwordvalidation').html('Password cannot be empty');
 $('#passwordvalidation').css('color','red');
 password_error=false;
 return false;
    }
    else {$('#passwordvalidation').show();}
    if(password_val.length<=8){
        $('#passwordvalidation').show();
    $('passwordvalidation').html('Password cannot be less than 8');
 $('passwordvalidation').css('color','red');
 password_error=false;
 return false;
    }else{$('#passwordvalidation').hide();}
}
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });
    function confirm_password()
    {
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(password_val!=confirm_password_val){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html("password didn't match");
            $('#confirmpasswordvalidation').css('color','red');
            confirm_password1=false;
            return false;


        }
        else{
            $('#confirmpasswordvalidation').hide();
        }
    }
 
   

});

