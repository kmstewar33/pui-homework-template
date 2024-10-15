const rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const bunBun = new Roll(rollType, rollGlazing, packSize, rollPrice);
    rollSet.add(bunBun);
    return bunBun;
}

const rollOne = addNewRoll ("Original", "Sugar Milk", "1");

const rollTwo = addNewRoll ("Walnut", "Vanilla Milk", "12");

const rollThree = addNewRoll ("Raisin", "Sugar Milk", "3");

const rollFour = addNewRoll ("Apple", "Original", "3");

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

function updateElement(bunBun){
    const rollImageElement = bunBun.element.querySelector(".cart-image");
    const rollTitleElement = bunBun.element.querySelector("#roll-title");
    const rollGlazeElement = bunBun.element.querySelector("#roll-glaze");
    const rollPackElement = bunBun.element.querySelector("#roll-size");
    const rollSelectPrice = bunBun.element.querySelector(".shopping-price");

    rollImageElement.src = bunBun.image;
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

/* this function calculated the total of all of the indiv selections & displays on cart page @ bottom */

function calculateTotalPrice(){
    let rain = 0;
    for (const bunBun of rollSet){
        rain = bunBun.totalPrice + rain;
    }
    
    const displayTotalElement = document.querySelector(".cost");
    displayTotalElement.innerText = "$" + rain.toFixed(2);

    return rain;
}


