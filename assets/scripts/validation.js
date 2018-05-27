/*
Valdiation:
- The Event Listener At The End Is Commented Out Because The On Submit Function Doesnt Work As Intended So Its Left Out For The Moment
- The Form Fields Do Go Red If Valid And Red If Invalid.
- The Problem With The Button Event Listener Is: When The Form Errors Are Corrected And The Fields Go Green The Form Prevents Submission Even Though The Inputs Are Valid
- Recaptcha Validation Doesnt Work, But Its Checked On The Backend So Its Ok For The Moment
*/

$(document).ready(function(){

  //Default Values For Variables
  var error_fname = false; //Used In nameRegexCheck()
  var error_email = false; //Used In emailRegexCheck()
  var error_message = false; //Used In emailRegexCheck()

  //On Focus Out Of The Field Then Run The Function Assigned To The Element
  $("#name").focusout(function(){
    nameRegexCheck();
  });

  $("#email").focusout(function(){
    emailRegexCheck();
  });

  $("#message").focusout(function(){
   messageCheck();
  });

//Checks If All Fields Are Required
// function requiredValue() {
//   var fullName = $("#name").val(); //Value Of Input
//   var  email = $("#email").val(); //Value Of Input
//   var phone = $("#phone").val(); //Value Of Input
//   var message = $("#message").val(); //Value Of Input
//
//   if(fullName || email || phone || message == "") {
//
//     //Sets Values To True
//     error_fname = true;
//     error_email = true;
//     error_phone = true;
//     error_message = true;
//     event.preventDefault();
//     return false;
//   }
// }

function nameRegexCheck(event) {
  var pattern = /^[a-zA-Z ]+/; //Valid Pattern - Accepts A To Z Both Lower And Upper, And  Accepts Spaces, But No Numbers
  var fullName = $("#name").val(); //Value Of Input

  //Testing Pattern
  if(pattern.test(fullName)) {
    $("#name").addClass("valid"); //Adds Class Of Valid
    $("#name").removeClass("invalid"); //Removes Class - Used When After Reentering The Value For The Input
    return true;
    } else {
    $("#name").addClass("invalid"); //Adds Class Of Invalid
    $("#name").removeClass("valid");//Removes Class - Used When After Reentering The Value For The Input
    error_fname = true; // Set Vaiable To True
    event.preventDefault();
    return false;
  }
}

function emailRegexCheck(event){
  var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //Found On https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
  var email = $("#email").val();

  if(pattern.test(email)){
    $("#email").addClass("valid"); //Adds Class Of Valid
    $("#email").removeClass("invalid");  //Removes Class - Used When After Reentering The Value For The Input
    return true;
  } else {
    $("#email").addClass("invalid"); //Adds Class Of Invalid
    $("#email").removeClass("valid"); //Removes Class - Used When After Reentering The Value For The Input
    error_email = true; // Set Vaiable To True
    event.preventDefault();
    return false;
  }
}

function messageCheck(event) {
  var message = $("#message").val();

    //Tests Regex Expression Aganist Data && Ensures Field Is Not Empty
    if (message !== '') {
      $("#message").addClass("valid");
      $("#message").removeClass("invalid");
      return true;
    } else {
      $("#message").addClass("invalid");
      $("#message").removeClass("valid");
      error_message = true;
      event.preventDefault();
      return false;
    }
}

// function recaptchaCheck() {
//
//     //Tests Regex Expression Aganist Data && Ensures Field Is Not Empty
//     if (elementClicked != false) {
//       $("#recaptcha").addClass("valid");
//       $("#recaptcha").removeClass("invalid");
//       return true;
//     } else {
//       $("#recaptcha").addClass("invalid");
//       $("#recaptcha").removeClass("valid");
//       error_message = true;
//       event.preventDefault();
//       return false;
//     }
// }

//
//   $("#submit").click(function(event){
//
//    requiredValue();
//
//    nameRegexCheck();
//
//    emailRegexCheck();
//
//    phoneRegexCheck();
//
//
//    if (error_fname == false && error_email == false && error_message== false) {
//      swal({
//        title: "Good job!",
//        text: "You clicked the button!",
//        icon: "success",
//        button: "Aww yiss!",
//      });
//      return true;
//    } else {
//      return false;
//    }
//   });
});
