function pass() {
    var pass1=document.getElementById("password1").Value;
    var pass2=document.getElementById("password2").Value;
    if(pass1 != pass2) {
        alert("Incorrect Password");
    }
    else if(pass1==pass2) {
        alert("Password Matched");

    }
}