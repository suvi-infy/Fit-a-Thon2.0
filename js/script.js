function validateLogin(){
    var username = document.getElementById("uname");
    var pass = document.getElementById("pwd");
    if(username.value == ""){
        alert("Username can't be empty.");
        return false;
    }
    else if (pass.value == ""){
        alert("Password can't be empty.");
        return false;
    }
}

function validateRegister(){
    var teamname = document.getElementById("teamName")
    var username = document.getElementById("userName");
    var pass1= document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");

    if(teamname.value == ""){
        alert("Teamname can't be empty.");
        return false;
    }
    else if(username.value == ""){
        alert("Username can't be empty.");
        return false;
    }
    else if (pass1.value == ""){
        //alert("Invalid Password");
        alert("Password can't be empty.");
        return false;
    }
    else if (pass2.value == ""){
        //alert("Invalid Password");
        alert("Varify Password can't be empty.");
        return false;
    }
    
}

function validateSubmit(){
    var pass1= document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var username = document.getElementById("uname");
    if(username.value == ""){
        alert("Username can't be empty.");
        return false;
    }
    if (pass1.value == ""){
        //alert("Invalid Password");
        alert("Password can't be empty.");
        return false;
    }
    else if (pass2.value == ""){
        //alert("Invalid Password");
        alert("Confirm Password can't be empty.");
        return false;
    }
    else if(pass1.value == pass2.value){
        alert("Password has successfully changed. Please login to continue.");
        return true;
    }
}

function validateRegister(){    
    alert("Registered successfully. Please login to continue.");
        
}

function redirect(){
    window.location= "challengesHome.html";
}

function validSubmit(){
    var submitBtn= document.getElementById("btn1");
    submitBtn.addEventListener('click',()=>{
        alert('saved succesfully');
    });
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const welcome = document.querySelector('.welcome');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
});


const save=document.getElementById('btn1');
save.addEventListener('click',function(){
        alert('Value submitted succesfully.');
});
