let userDetails = JSON.parse(localStorage.getItem("user-details")) || [];

let regForm = document.querySelector("#register-form");


regForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  let nam = document.querySelector("#name").value;
let Email = document.querySelector("#email").value;
let numb = document.querySelector("#phone").value;
let pass = document.querySelector("#pass").value;
  let data = {
    name : nam,
    email : Email,
    password : pass,
    num : numb
  };
  if(data.name=="" || data.email=="" || data.password == "" || data.num=="")
  {
  alert("Please fill all details") ;
  } else {
    userDetails.push(data);
  localStorage.setItem("user-details", JSON.stringify(userDetails));
  alert("Signup Successful");
  }
});
