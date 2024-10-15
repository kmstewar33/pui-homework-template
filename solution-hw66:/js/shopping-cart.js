// let cart = []; /* not sure why we would need this if cart is being dynamically stored in cartLocalStorage */

// const rollSet = new Set();

function addNewRoll(rollImage, rollType, rollGlazing, packSize, cartID) {
    const bunBun = new Roll(rollImage, rollType, rollGlazing, packSize, cartID);
    rollSet.add(bunBun);
    return bunBun;
}

for (const bunBun of rollSet) {
    console.log(bunBun);
    createElement(bunBun);
}

/* this piece looped over and created all of these right away because we nested
createElement within the loop and then defined the function outside of the loop--right now
the function only says to cl creating an element :) */

function createElement(bunBun){
    console.log("creating an element!");

    const template = document.querySelector('#check-out-template');
    const clone = template.content.cloneNode(true);

    bunBun.element = clone.querySelector(".check-out-product");

    const btnDelete = bunBun.element.querySelector(".cart-remove");
    btnDelete.addEventListener("click", () => {
        deleteRoll(bunBun);
    });

    const bunBunListElement = document.querySelector(".all-products");
    bunBunListElement.appendChild(bunBun.element);

    console.log(bunBun.element);

    updateElement(bunBun);

    calculateTotalPrice();
    
}

/* start to retrieve from local storage */

function retrieveFromLocalStorage(){
    const cartItemsArrayString = localStorage.getItem("storedItems"); /* starting to pull what was saved from detail page to shopping cart page */
    const cartItemsArray = JSON.parse(cartItemsArrayString);
    console.log(cartItemsArray);
}

/* creating/deleting elements based on user input */

function updateElement(bunBun){
    const rollImageElement = bunBun.element.querySelector(".cart-image");
    const rollTitleElement = bunBun.element.querySelector("#roll-title");
    const rollGlazeElement = bunBun.element.querySelector("#roll-glaze");
    const rollPackElement = bunBun.element.querySelector("#roll-size");
    const rollSelectPrice = bunBun.element.querySelector(".shopping-price");

    rollImageElement.src = "assets/products/" + bunBun.type.toLowerCase() + "-cinnamon-roll.jpg";
    rollTitleElement.innerText = bunBun.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + bunBun.glazing;
    rollPackElement.innerText = "Pack Size: " + bunBun.size;
    rollSelectPrice.innerText = "$" + bunBun.totalPrice.toFixed(2);
    
}

function deleteRoll(bunBun){
    bunBun.element.remove();
    rollSet.delete(bunBun);
    calculateTotalPrice();
}

function calculateTotalPrice(){
    let rain = 0;
    for (const bunBun of rollSet){
        rain = bunBun.totalPrice + rain;
    }
    
    const displayTotalElement = document.querySelector(".cost");
    displayTotalElement.innerText = "$" + rain.toFixed(2);

    return rain;
}
