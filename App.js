
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


// let regbtn= document.querySelector("#registerbtn");
// regbtn.addEventListener("click", function(event){
//     signupForm.style.display="flex";


// });

// function showSignUp(){
//     let signupForm = document.getElementById("signupForm");
//     let loginForm = document.getElementById("loginForm");
//     signupForm.style.display="flex";
//     loginForm.style.display="none";

// }

// let name = document.getElementById("name").value;
// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;   

