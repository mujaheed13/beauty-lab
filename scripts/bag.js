let cartData = JSON.parse(localStorage.getItem("cart-products")) || [];


let div = document.querySelector("#cart1");

function displayProducts(data){

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

    

  

    let bagbtn = document.createElement("button");
    bagbtn.innerText = "Remove from Bag";
    bagbtn.addEventListener("click", ()=>{
        removeEl(cartData, i);
    });

 
    div1.append(image, name, details, price, bagbtn);
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