let userDetails1 = JSON.parse(localStorage.getItem("user-details")) || [];

let loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e)=>{
     e.preventDefault();
  let Email = document.querySelector("#log-email").value;
  let pass = document.querySelector("#log-pass").value;
  userDetails1.forEach((elem) => {
    elem.email==Email && elem.password==pass ? 
  alert("Log in Successful"):alert("Wrong Credentials");
  });
  });