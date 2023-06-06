function validate(){
    var username = document.getElementById("uname");
    var pass = document.getElementById("pwd");
    var error = document.getElementById("error");
    if(username.value == ""){
        alert("Username can't be empty.");
        return false;
    }
    else if (pass.value == ""){
        //alert("Invalid Password");
        alert("Password can't be empty.");
        return false;
    }
}