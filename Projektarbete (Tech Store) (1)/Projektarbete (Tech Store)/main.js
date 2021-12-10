var listOfProducts;
let cart = [];

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
    cartCounter ();
 }

//loads products from JSON to HTML
function addProductsToWebpage() {
        let productContainer = document.createElement("div");
        productContainer.className = "productCard";
        for (let i = 0; i < listOfProducts.length; i++) {
            let productCard = createProductCard(listOfProducts[i]);
            productContainer.appendChild(productCard)
        }

        document.querySelector("main").appendChild(productContainer);

}
// counter function
function cartCounter () {
    document.getElementById("counter").innerHTML = cart.length;
}

//creating the products
function createProductCard(product) {
    let productCardContainer = document.createElement("div");
    productCardContainer.className = "ProductCardContainer"

    let getProductTitle = document.createElement("h1");
    getProductTitle.innerText = product.title;
    productCardContainer.appendChild(getProductTitle);
    getProductTitle.className = "productTitle";

    let getProductDescription = document.createElement("p");
    getProductDescription.innerText = product.description;
    productCardContainer.appendChild(getProductDescription);
    getProductDescription.className = "productDescription";

    let getProductImage = document.createElement("img");
    getProductImage.src = "./assets/" + product.image;
    productCardContainer.appendChild(getProductImage);
    getProductImage.className = "productImg";

    let getProductPrice = document.createElement("p");
    getProductPrice.innerText = product.price + "kr";
    productCardContainer.appendChild(getProductPrice)
    getProductPrice.className = "price";

    let addButton = document.createElement("button");
    addButton.className = "addBtn";
    addButton.setAttribute("id", "addProduct");
    addButton.addEventListener("click", function() {
        addToCart(product)
    });

    let cartIcon = document.createElement("i");
    cartIcon.className = "fas fa-cart-plus";
    addButton.appendChild(cartIcon);
    let buttonText = document.createTextNode("Lägg till i kundvagnen");
    addButton.appendChild(buttonText);
    productCardContainer.appendChild(addButton);

    return productCardContainer;

}

// adds items to local storage and displays items in counter



if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart)
}


function addToCart(product) {
    let productCounter = 1;
    document.getElementById("counter").innerHTML = productCounter + cart.length;
    cart.push(product);
    let cartString = JSON.stringify(cart);
    localStorage.cart = cartString;

}





