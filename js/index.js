navMon =  true;
$(document).ready(function() {

    $('.navbar-toggler').click(function(){
        if(navMon) {
            $('#nav').css('height', '400px');
            navMon = false;
        }
        else {
            $('#nav').css('height', '70px');
            navMon = true;
        }
    });

    $("#submit_btn").click(function(e) {
        e.preventDefault();
        $("#submit_btn").html("<i class='fas fa-circle-notch' style='font-size:30px'></i>");
       
        let email = $("#email").val();
        let password = $("#password").val();
        let flag = true;

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var phoneno = /^[6789]\d{9}$/;
     
        if(!re.test(email) && !phoneno.test(email)) {
            flag = false;
            //show error in email

            //change back btn
            $("#submit_btn").html("Log In");
            $("#error_email").css("display", "block");
            $("#status_email").html("<i class='fas fa-exclamation-triangle'></i>");
            $("#status_email").css("color","red");
        }
        else if(password != "abc") {
            flag = false;
            //show error in password

            //change back btn
            $("#submit_btn").html("Log In");
            $("#error_password").css("display", "block");
            $("#status_pass").html("<i class='fas fa-exclamation-triangle'></i>");
            $("#status_pass").css("color","red");

            $("#error_email").css("display", "none");
            $("#status_email").html("");

            alert("password: abc");
        }
        
        if(flag) {
            $("#error_password").css("display", "none");
            $("#error_email").css("display", "none");
            $("#status_pass").html("");
            $("#submit_btn").html("<i class='fas fa-check-circle' style='font-size:30px'></i>");

            $("#status_pass").html("<i class='fas fa-check-circle'></i>");
            $("#status_email").html("<i class='fas fa-check-circle'></i>");
            $("#status_pass").css("color","#a3a3a3");
            $("#status_email").css("color","#a3a3a3");   
        }
    

    });
});