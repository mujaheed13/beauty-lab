let userDetails1 = JSON.parse(localStorage.getItem("user-details")) || [];

let loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e)=>{
     e.preventDefault();
  let Email = document.querySelector("#log-email").value;
  let pass = document.querySelector("#log-pass").value;
  userDetails1.forEach((elem) => {
    elem.email==Email && elem.password==pass ? 
  alert("Hey "+elem.name+ "\n" + "Log in Successful! Happy Shppping"):alert("Wrong Credentials");
  });
  });

  let shopBtn = document.querySelector("#shopBtn-1");
  shopBtn.addEventListener("click", function(){
    window.location.href = "products.html"
  });
