let op = document.querySelector("#op");
let orderedP = JSON.parse(localStorage.getItem("ordered-products")) || [];

function displayProducts(data){


    data.forEach((elem, i)=>{
        
    let div1 = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.imageurl)

    let name = document.createElement("h2");
    name.innerText = elem.name;

    let details = document.createElement("p");
    details.innerText = elem.details;

    let div = document.createElement("div");


    let price = document.createElement("h3");
    price.innerText = "$"+elem.price;

    let quanti = document.createElement("p");
    quanti.innerText = "Quantity: " + elem.quantity;

    div.append(price, quanti);
    
    div1.append(image, name, details, div);
    op.append(div1);

    });
};

displayProducts(orderedP);