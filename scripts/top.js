

// skincare
let skincare = document.querySelector("#skincare");


let skincareBtn = document.querySelector("#skincareBtn");
skincareBtn.addEventListener("mouseover", ()=>{
   skincare.style.visibility = "visible";
   skincare.style.height = "auto";
   haircare.style.visibility = "hidden";
});
skincareBtn.addEventListener("mouseout", ()=>{
    skincare.style.visibility = "hidden";
 });

 skincare.addEventListener("mouseover", ()=>{
    skincare.style.visibility = "visible";
 });

 skincare.addEventListener("mouseout", ()=>{
    skincare.style.visibility = "hidden";
 });

//  haircare
 let haircare = document.querySelector("#haircare");

let haircareBtn = document.querySelector("#haircareBtn");
haircareBtn.addEventListener("mouseover", ()=>{
    haircare.style.visibility = "visible";
    skincare.style.visibility = "hidden";
    haircare.style.height = "auto";
  
});
haircareBtn.addEventListener("mouseout", ()=>{
    haircare.style.visibility = "hidden";
    
 });

 haircare.addEventListener("mouseover", ()=>{
    haircare.style.visibility = "visible";
 });

 haircare.addEventListener("mouseout", ()=>{
    haircare.style.visibility = "hidden";
 });


//  login Pop-up
let login_popup = document.querySelector("#login-popup");
let sign = document.querySelector("#signin");
sign.addEventListener("click", ()=>{
   login_popup.style.visibility = "visible";
});

let logo = document.querySelector("#logo");
logo.addEventListener("click", ()=>{
   window.location.href = "index.html";
});
