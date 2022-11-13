let productsData1 = [
   {
       id : 1,
       name : "Hydration Best Sellers",
       details : "Show your skin some love with these hydration best sellers + get a free Active Hydration Body Replenish ($66 retail value) and an R+F Luxe Hair Wrap.",
       price : 184,
       value :  150,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/HENAH22P-ENHEFG1-ENHEY15-ENBR001-BPM2204.png?context=bWFzdGVyfGltYWdlc3wxMzM2NTV8aW1hZ2UvcG5nfGltYWdlcy9oMTIvaDA4LzE1ODg5MDg4MDg2MDQ2LnBuZ3w4MmIxNmEwYzcxNDI4ZDYxOWY2NDE3ZGYyMmYyNzdmN2YxYzgxYmIyMGM3MzdjZGU0YmZmYzNmMWRmMGM0M2Zi",
       rating : 4.1
   },
   {
       id : 2,
       name : "Eye Best Sellers",
       details : "Show your eyes some love with these best sellers + get a free Bright Eye Complex ($72 retail value) and R+F Luxe Hair Wrap..",
       price : 225,
       value :  297,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/HEYES22P-ENHLSH01-AAEY015-ENHEY15-BPM2204.png?context=bWFzdGVyfGltYWdlc3wxMzEzMzl8aW1hZ2UvcG5nfGltYWdlcy9oNDAvaDI0LzE1ODg5MDkxNzU2MDYyLnBuZ3xmMTdiNjUyZTg0NjI0OWVmZWE4YmI4MGVjYzQ3Yzc4MDUyMTRmYjgzNTFhZTA4Y2QzZGQ2ZjI5MzFhMmYzNDU2",
       rating : 4.5
   },
   {
       id : 3,
       name : "REDEFINE Multi-Function Eye Cream",
       details : "Younger-looking eyes in a wink! Our intensive anti-aging eye cream visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet.",
       price : 70,
       value : 63,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/AAEY015-1168X1168-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wyNDEyNTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDczL2g5ZC8xMzUzMzExNzU0NjUyNi5qcGd8NmFhZTU1MjBiMmI2Yjc1YTBjN2JjNjFhZDUwOGQ5OWQ1Zjk0YWI2ZDhlZjViZmQ5ZmMxNzY5MTU0MTFiZDY4ZQ",
       rating : 4.8
   },
   {
       id : 4,
       name : "REDEFINE AMP MD System Refill",
       details : "Keep younger-looking skin in your future. This refill package contains a two-month supply of Intensive Renewing Serum + Purification Tablets to clean your AMP MD Derma-Roller and ensure even firmer + smoother-looking results.",
       price : 120,
       value : 135,
       imageurl : "https://www.rodanandfields.com/en-us/medias/AAAPR01-detail-desktop-v2.jpg?context=bWFzdGVyfGltYWdlc3w5MjM3MXxpbWFnZS9qcGVnfGltYWdlcy9oNzgvaDkyLzEwNDU5MjY1Njk1Nzc0LmpwZ3xhYzUwODUxMzdmMTI3NjY0NzA5ZjRjN2IyMDc2N2I5ZTA1MmE1YWNjNjE3OWRiNDkwMGRlNjBlNjU1YjFhNWU4",
       rating : 4.6
   },
   {
       id : 5,
       name : "REDEFINE AMP MD System",
       details : "AMP up results by 3X! Our award-winning AMP-MD System uses a micro-exfoliating Derma-Roller to accelerate results of our nighttime Intensive Renewing Serum for firmer, smoother, younger-looking skin.",
       price : 227,
       value : 230,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/AAAPS01-detail.jpg?context=bWFzdGVyfGltYWdlc3w1NTE4N3xpbWFnZS9qcGVnfGltYWdlcy9oNDAvaDZiLzEzNTMzMTE0MjA0MTkwLmpwZ3xkOGFkYTY5NTc3N2VhNmE1MDBkMTA5MDVhMGVjOGNmZDU2MTA4YWQ1NTBlZTEyMjhmYjhhNGVkMmZkODk4YWM5",
       rating : 5
   },

   {
       id : 6,
       name : "REDEFINE Lip Renewing Serum",
       details : "Love your lips. Each gel-filled capsule visibly smooths lips, reduces the appearance of wrinkles + helps retain natural moisture.",
       price : 58,
       value : 60,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/AALS060-detail.jpg?context=bWFzdGVyfGltYWdlc3w0ODYxNnxpbWFnZS9qcGVnfGltYWdlcy9oMGIvaDQzLzEzNTMzMTIxNDEzMTUwLmpwZ3w0ZmI3MGNhYmFkMjVhYmNjNGEyYzc3MjZmYWI1MmY1MDczMDcyNWY2NjU1ODc5MDJlYzkzZTgyOWVmMDQ3Y2Ix",
       rating : 4.7
   },

   {
       id : 7,
       name : "REDEFINE Overnight Restorative Cream",
       details : "The ultimate beauty sleep. Our anti-aging night cream revitalizes skin's surface with vital nutrients as it visibly lifts, firms + sculpts.",
       price : 90,
       value : 99,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/AAPM030-1168x1168-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wyMzc2MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM4L2g2Ni8xMTg1NDA1MTE0NzgwNi5qcGd8Mzk5NjliNzU0MDJiZDI3ZjQ4OGM4M2I5ZTQ0YTEwNjNjYmNkMzZhNmQyOTc0N2YzY2UwMWE1NTIxZmY3MDdkNw",
       rating : 3.90
   },

   {
       id : 8,
       name : "ESSENTIALS Daily Body Moisturizer",
       details : "Be comfortable in your skin. Lightweight lotion with calming RF-Dcell Technology plus hydrating Sunflower + Jojoba Seed Oils tackles dry, flaky skin as it helps retain moisture.",
       price : 27,
       value : 30,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/ESBL200-900x900-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzMzY3M3xpbWFnZS9qcGVnfGltYWdlcy9oYjYvaDY2LzE1MTU4ODg1MTg3NjE0LmpwZ3xmM2VhZTcyMjBlZTQ4NTE4ZGFmNjVmZGUwZTYyMzU4OTNhZjQ4YmM5ZTY0MTk5NjhjNWQ4NjU4ZDllMjIyNzc1",
       rating : 3.8
   },

   {
       id : 9,
       name : "ESSENTIALS Gauze Pads",
       details : "Apply your toner with ease. Soft, lint-free pads are ideal for applying R+F toners and wiping away dirt, oil + makeup without leaving any cotton ball residue.",
       price : 11,
       value : 15,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/ESGA001-900x900-Desktop-1-.jpg?context=bWFzdGVyfGltYWdlc3w5MDUzNHxpbWFnZS9qcGVnfGltYWdlcy9oMjcvaDQ4LzEzNjcwOTE5OTYyNjU0LmpwZ3wxMWQxNDY4YTBhNGI3OGM1MTg5ODA2YzI1ZDY4ODJkMDgwMzcyYjkxNzhhMzkwNTU1Y2UwOTBjYWYwZDZjN2U1",
       rating : 4.2
   },

   {
       id : 10,
       name : "ESSENTIALS Maximum D3 Vitamin D Supplement",
       details : "Optimize your health. Weekly Vitamin D pills assist with bone health + overall wellness.",
       price : 27,
       value : 33,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/ESMD010-900x900-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1Mjc2OHxpbWFnZS9qcGVnfGltYWdlcy9oYjYvaDYyLzEyODg5MTg2MzY5NTY2LmpwZ3wxYmVhZDdkYTEyYjA3MzdjMDJmYmU1OGMxNjhjMmJmMGMzMWM5NTZlMTExNTdmYjBjMzBiYjhhODA0MGQ2YWY5",
       rating : 3.8
   },

   {
       id : 11,
       name : "RECHARGE + Lash Boost Special",
       details : "Luminous skin + longer-looking lashes. Get a glowing, luminous look plus the appearance of lush, fuller-looking lashes with this set.",
       price : 256,
       value : 260,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/RCLBES1-1168x1168-desktop.jpg?context=bWFzdGVyfHJvb3R8NDUzNTZ8aW1hZ2UvanBlZ3xoNTMvaDFhLzkxNzEyMzg2MTcxMTguanBnfDA1OWQyYjdmZGVjYTZjODliMTVhMGZjODkxNmU5MGQxMzhjNTIzZWVhZjgwYjBiOWMwZmUwMWUwM2IxMTBiYmQ",
       rating : 3.3
   },

   {
       id : 12,
       name : "SOOTHE Moisturizing Rescue Cream",
       details : "Major moisture. A blend of Colloidal Oatmeal + Ceramides seals in hydration and strengthens skin’s natural moisture barrier for soft, supple, moisturized-looking skin.",
       price : 60,
       value : 65,
       category : "skin",
       imageurl : "https://www.rodanandfields.com/en-us/medias/SOMO050-900x900-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wyOTQ5NXxpbWFnZS9qcGVnfGltYWdlcy9oYWIvaDA1LzEyNjkyNjM4NTMxNjE0LmpwZ3xjZDkzMGEzNTJkMWQ0YzI0ZjI4MmYyZjc5MTQxNjA2YmEyOTUyOTA4YTFjNzk3ZmFjYTAzNjNkMWIyZTkxYmRj",
       rating : 4.3
   },

   {
       id : 13 ,
       name  : "REFRESH+ Dry Shampoo",
       details : "Lightweight dry shampoo balances the scalp and absorbs excess oil, sweat + odor for revived, refreshed hair between washes.",
       price : 39,
       value : 45,
       category : "hair",
       imageurl : "https://www.rodanandfields.com/en-us/medias/STSHD04-458x458-mobile-1.png?context=bWFzdGVyfGltYWdlc3wxNDgxMXxpbWFnZS9wbmd8aW1hZ2VzL2g0NS9oYTYvMTU4ODA4MTMyMTU3NzQucG5nfDZhYWVjMThlNjY5Yzc5NzFmMjRmZTI2ZTAxOTU3MmVlYTI3ODI5ZjgxYmI4MDc5ZjBjYzdhMjZjZjM5MzFkZTY",
       rating : 5.0
   },

   {
       id : 14,
       name : "Volume+ Regimen + Total RF Serum Special",
       details: "Receive a FREE Refresh+ Dry Shampoo (Retail Value $39) plus a FREE Therapeutic Scalp Massager and Luxe Hair Wrap, when you bundle Volume+ Regimen and Total RF Serum.",
       price : 297,
       value : 300,
       category : "hair",
       imageurl : "https://www.rodanandfields.com/en-us/medias/HVLRGLP2-VLSH236-VLCN236-VLTT060-ENFM030-STSHD04-BPM2203-BPM2204.png?context=bWFzdGVyfGltYWdlc3wxNDgxMjN8aW1hZ2UvcG5nfGltYWdlcy9oNjcvaDU4LzE1ODgwODEyOTIwODYyLnBuZ3xhNWY4YTg5YTAxYmM2ZjUyZDdlMDUxZTMzZjMwZTliYmRkOTg3ZWUxNjVkZWVmNmVhOGE5MTFhNTNiZWQzMTMz",
       rating : 4.3
   },

   {
       id :15 ,
       name : "Smooth+ Regimen + Total RF Serum Special",
       details: "Receive a FREE Refresh+ Dry Shampoo (Retail Value $39) plus a FREE Therapeutic Scalp Massager and Luxe Hair Wrap, when you bundle Smooth+ Regimen and Total RF Serum.",
       price : 277,
       value : 280,
       category : "hair",
       imageurl : "https://www.rodanandfields.com/en-us/medias/HSMRGLP2-SMSH236-SMCN236-SMTT060-ENFM030-STSHD04-BPM2203-BPM2204.png?context=bWFzdGVyfGltYWdlc3wxMjU5OTF8aW1hZ2UvcG5nfGltYWdlcy9oMjMvaDI0LzE1ODgwODA4MjY3ODA2LnBuZ3w4Mjc3MmMyODViMmNkNjQ0ZmYzOTQzNWE5NzJmZjQ4NDFlYzRkZDA5YmI5MDk0MzRlZTRlOTk0MzA0NTgzZTMw",
       rating : 4.3
   },

{
   id : 16,
   name : "DEFINE+ Curl Cream",
   details: "All-in-one cream styling treatment hydrates, defrizzes and adds shine without weighing down waves and curls, for soft, healthy-looking definition.",
   price : 39,
   value : 49,
   category : "hair",
   imageurl : "https://www.rodanandfields.com/en-us/medias/STCC150-1140x1140-desktop-1.png?context=bWFzdGVyfGltYWdlc3wxMzcxOTF8aW1hZ2UvcG5nfGltYWdlcy9oMGMvaGY0LzE1ODExOTk3NTk3NzI2LnBuZ3wyZjcyOTliMzQ5MDVjNGFkYThhZDhlNTQzYzNjNjM0MmU2YTBlODRhOTRlMzE5Y2U2ZDgyMDk1NmFlYWNhZDQ0",
   rating : 4.3
},

{
   id : 17,
   name : "SMOOTH+ Conditioner",
   details: "Ultra-rich conditioner moisturizes + nourishes to repair + prevent damage and reduce frizz for softer, smoother, more manageable hair with less fall due to breakage.",
   price : 47,
   value : 50,
   category : "hair",
   imageurl : "https://www.rodanandfields.com/en-us/medias/SMCN236-1140x1140-desktop-1.png?context=bWFzdGVyfGltYWdlc3w2NzM1MHxpbWFnZS9wbmd8aW1hZ2VzL2g0Yy9oMDAvMTU4MTE5OTA4NDc1MTgucG5nfDlmNzc0MGQzYjQxZDQ5Yzc3YjI2NjVlZjU0ZDc4YTlkMGM5NDlkNzEyYjU4ZjgzYjk0MmE4ZWIyNWY2YmU4NWI",
   rating : 4.0
},

];



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

let bag = document.querySelector("#bag");
bag.addEventListener("click", ()=>{
   window.location.href = "bag.html";
});


let openPP = document.querySelectorAll(".pp");
openPP.forEach((el)=>{
   el.addEventListener("click", ()=>{
      window.location.href = "products.html";
   });
});


let searchBox = document.querySelector("#search-box");
let searchPopBtn = document.querySelector("#searchpop-btn");
let searchVal = document.querySelector("#search-input");
searchPopBtn.addEventListener("click", ()=>{
   
      searchBox.style.visibility = "visible";
   
});


