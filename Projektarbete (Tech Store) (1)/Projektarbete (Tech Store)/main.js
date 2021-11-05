var listOfProducts;

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
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
        let productContainer = document.createElement("div");
        productContainer.className = "productCard";
        for (let i = 0; i < listOfProducts.length; i++) {
            let productCard = createProductCard(listOfProducts[i]);
            productContainer.appendChild(productCard)
        }

        document.querySelector("main").appendChild(productContainer);

}

function createProductCard(product) {
    let productCardContainer = document.createElement("div");
    productCardContainer.className = "ProductCard"

    let getProductTitle = document.createElement("h1");
    getProductTitle.innerText = product.title;
    productCardContainer.appendChild(getProductTitle);
    getProductTitle.className = "productTitle";

    let getProductDescription = document.createElement("p");
    getProductDescription.innerText = product.description;
    productCardContainer.appendChild(getProductDescription);
    getProductDescription.className = "productDescription";

    let getProductImage = document.createElement("img");
    getProductImage.scr = "./assets/" + product.image;
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
        addProduct(product)
    });

    let cartIcon = document.createElement("i");
    cartIcon.className = "fas fa-cart-plus";
    addButton.appendChild(cartIcon);
    let buttonText =document.createTextNode("Lägg till i kundvagnen");
    addButton.appendChild(buttonText);
    productCardContainer.appendChild(addButton);

    return productCardContainer;

}