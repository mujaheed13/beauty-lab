let cartData = JSON.parse(localStorage.getItem("cart-products")) || [];
let mtCart = document.createElement("h1");


if(cartData.length===0){
   
    mtCart.setAttribute("id", "mtcart")
    mtCart.innerHTML = "Your Bag is Empty";
    document.body.append(mtCart);
    document.querySelector("#re").style.visibility = "hidden";
    document.querySelector("#order-summary").style.visibility = "hidden";
} else {
    mtCart.style.visibility = "hidden";
    document.querySelector("#re").style.visibility = "visible";
    document.querySelector("#order-summary").style.visibility = "visible";

let div = document.querySelector("#cart1");
let subtotal = document.querySelector("#subtotal");
let total = document.querySelector("#total");

function displayProducts(data){


    let ship = document.querySelector("#ship")
ship.innerText = "$5"

    let a = data.reduce((a, b)=>{
        return a + Number(b.price) * Number(b.quantity);
    }, 0);
    
    subtotal.innerText = "$" + a

    total.innerText = "$" + (a + 5);

    div.innerHTML = null;

    data.forEach((elem, i)=>{
        
    let div1 = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.imageurl)

    let name = document.createElement("h2");
    name.innerText = elem.name;

    let details = document.createElement("p");
    details.innerText = elem.details;

    let price = document.createElement("h3");
    price.innerText = "$"+elem.price;

    let spa = document.createElement("span");

    let minu = document.createElement("button");
    minu.innerText = "-";
    minu.addEventListener("click", ()=>{
        
        if(elem.quantity<=1){
            return;
        }else {
            elem.quantity--;
            qua.innerText = elem.quantity;
            localStorage.setItem("cart-products", JSON.stringify(cartData)); 
            displayProducts(cartData);
   
        }
    
    });
    
    let plus = document.createElement("button");
    plus.innerText = "+";
    plus.addEventListener("click", ()=>{
        elem.quantity++;
        qua.innerText = elem.quantity;
        localStorage.setItem("cart-products", JSON.stringify(cartData)); 
        displayProducts(cartData);
    });
    

    let qua = document.createElement("p");
    qua.innerText = elem.quantity;
    

    let bagbtn = document.createElement("button");
    bagbtn.innerText = "Remove from Bag";
    bagbtn.addEventListener("click", ()=>{
        removeEl(cartData, i);
    });

 
    spa.append(minu, qua, plus);
    div1.append(image, name, details, price, spa, bagbtn);
    div.append(div1);

    });
};



displayProducts(cartData);

function removeEl(data, i){
    data.splice(i, 1);
    cartData=data;
    console.log(data);
    localStorage.setItem("cart-products", JSON.stringify(cartData));
    displayProducts(cartData);
};
}
