//getting products from local storage
let cartProducts = JSON.parse(localStorage.cart);

function initCart() {
    document.getElementById("counter").innerHTML = cartProducts.lenght;

    // onload funktioner
    showCart();
    titleCard();
}

let cartContainer = document.createElement("div");
cartContainer.className = "cartContainer";

function showCart () {
    for (let i = 0; i < cartProducts.length; i++) {
        let productCardContainer = createCartItems(cartProducts[i], i);
        cartContainer.appendChild(productCardContainer);        
    }/* 
    document.querySelector("main").appendChild(cartContainer); */
}


//separate div for headline
function titleCard() {
    
    let titleContainer = document.createElement("div")
    titleContainer.className = "titleContainer"
    main.appendChild(titleContainer)
    let cartIcon = document.createElement("div")
    cartIcon.className = "cartIcon"
    titleContainer.appendChild(cartIcon)
    cartIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>'
    let title = document.createElement("h1")
    title.className = "cartTitle"
    title.innerText = "Kundvagn"
    titleContainer.appendChild(title)
    
    document.main.appendChild(titleContainer);
}
    
/* function titleDiv() {
    let titleContainer = document.createElement("div");
    titleContainer.className = "titleContainerClass";

    let trollieIcon = document.createElement("div");
    trollieIcon.className = "fas fa-shopping-cart trollie";
    titleContainer.appendChild(trollieIcon);

    let titleText = document.createElement("div");
    let cartText = document.createElement("h1")
    cartText.className = "cartText";
    cartText.innerText = "Kundvagn";

    document.body.appendChild(titleContainer);
} */

function createCartItems(product) {
    let productCardContainer = document.createElement("div");
    productCardContainer.className = "ProductCardContainer"

    let getProductTitle = document.createElement("h1");
    getProductTitle.innerText = product.title;
    productCardContainer.appendChild(getProductTitle);
    getProductTitle.className = "productTitle";

    let getProductImage = document.createElement("img");
    getProductImage.src = "./assets/" + product.image;
    productCardContainer.appendChild(getProductImage);
    getProductImage.className = "productImg";

    let getProductPrice = document.createElement("p");
    getProductPrice.innerText = product.price + "kr";
    productCardContainer.appendChild(getProductPrice)
    getProductPrice.className = "price";

    let cardContainer = document.createElement("div")
    cardContainer.className = "cartContainer"
    main.appendChild(cardContainer)
    /* let addButton = document.createElement("button");
    addButton.className = "addBtn";
    addButton.setAttribute("id", "addProduct");
    addButton.addEventListener("click", function() {
        addToCart(product)
    }); */

    /* let cartIcon = document.createElement("i");
    cartIcon.className = "fas fa-cart-plus";
    addButton.appendChild(cartIcon);
    let buttonText = document.createTextNode("Lägg till i kundvagnen");
    addButton.appendChild(buttonText);
    productCardContainer.appendChild(addButton); */

    return productCardContainer;

}