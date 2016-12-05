// prob: the hints are shown even when the form is valid
// sol: hide and show hints when appropriate

var $password = $("#password")
$("form span").hide();

// when fields are in focus, show hints
$( "#password" ).focus(function() {
    if(password.val().length > 8){
        $password.next().hide();
    } else {
        $password.next().show();
    }
}).keyup(function() {
    if(password.val().length > 8){
        $password.next().hide();
    } else {
        $password.next().show();
    }
});
// when password > 8 chars, hide password hint
// when passwords match, hide confirm

