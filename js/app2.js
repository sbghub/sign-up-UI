// prob: the hints are shown even when the form is valid
// sol: hide and show hints when appropriate

// var $password = $("#password");
// var $confirmPassword = $("#confirm_password");
// $("form span").hide();

// function passwordEvent() {
//     if(password.val().length > 8){
//         // when password > 8 chars, hide password hint
//         $password.next().hide();
//     } else {
//         $password.next().show();
//     }
// }

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsValid() {
    return $password.val()===$confirmPassword.val();
}

function passwordEvent() {
    if(isPasswordValid()) {
        $password.next().hide();
    } else {
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    if(arePasswordsValid()) {
        $confirmPassword.next().hide();
    } else {
        $confirmPassword.next().show();
    }
}

function canSubmit() {
    return isPasswordValid() && arePasswordsValid();
}

function enableSubmitEvent() {
    // disable submit on load
    // enable if both satisfy
    // prop helps modify property value
    $("#submit").prop("disabled", !canSubmit());
}

// when fields are in focus, show hints
$("#password").focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
// when passwords match, hide confirm
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
enableSubmitEvent();
