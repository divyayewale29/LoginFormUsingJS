

let signupdata = document.querySelector("#signupForm");
let logindata = document.querySelector("#loginForm");

regbtn.addEventListener("click", function(event){
    event.preventDefault();
    signupdata.style.display="flex";
    logindata.style.display="none";
});

logbtn.addEventListener("click", function(event){   
    event.preventDefault();
    logindata.style.display="flex";
    signupdata.style.display="none";
});


let loginbtn=document.querySelector(".loginbtn");
loginbtn.addEventListener("click", function(event){
    event.preventDefault();
    // alert("Login Successful");
   
    window.location.href = "./home.html"; 
});


// Initially show the login form and hide the signup form




