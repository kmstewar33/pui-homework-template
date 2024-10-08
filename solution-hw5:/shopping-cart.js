
let cart = [];

class Roll {
    constructor(rollImage, rollType, rollGlazing, packSize, rollPrice) {
        this.image = rollImage;
        this.type = rollType; /* storing the role name into a property called type */
        this.glazing = rollGlazing; /* storing the glazing input into a property called glazing */
        this.size = packSize; /* storing the pack size input into a property called size */
        this.totalPrice = rollPrice; /* storing the total roll price per role name into a property called base price */
        
        /* Missing where to put the remove button here and in parameter */

        this.element = null; 
    }

    /* missing a method here to calculate rollPrice... not sure how to nest this, what other pieces of code from OG JS need to be added */
}

function getGlaze(rollGlazing){
    let lemon = 0;
    for (let i = 0; i < glazingOptions.length; i++){
        if (glazingOptions[i].name === rollGlazing) {
            lemon = glazingOptions[i].glazingPrice;
        }
    }
    return lemon;
}

function getPrice(packSize){
    let grass = 0;
    for(let i = 0; i < packSize.length; i++){
        if (getPrice[i].amount === packSize)
            grass = packSize[i].packPrice;
    }
    return grass;
}

function calculatePrice(){
    let lemon = getGlaze();
    let grass = getPrice();

    let specificTotal = (lemon + originalPrice) * grass;

    return specificTotal;
    
}

const rollSet = new Set();

function addNewRoll(rollImage, rollType, rollGlazing, packSize, rollPrice) {
    const bunBun = new Roll(rollImage, rollType, rollGlazing, packSize, rollPrice);
    rollSet.add(bunBun);
    return bunBun;
}

const rollOne = addNewRoll ("./assets/products/original-cinnamon-roll.jpg", "Original", "Sugar Milk", "1");

const rollTwo = addNewRoll ("./assets/products/walnut-cinnamon-roll.jpg", "Walnut", "Vanilla Milk", "12");

const rollThree = addNewRoll ("./assets/products/raisin-cinnamon-roll.jpg", "Raisin", "Sugar Milk", "3");

const rollFour = addNewRoll ("./assets/products/apple-cinnamon-roll.jpg", "Apple", "Original", "3");

for (const bunBun of rollSet) {
    console.log(bunBun);
    createElement(bunBun);
} /* this piece looped over and created all of these right away because we nested
createElement within the loop and then defined the function outside of the loop--right now
the function only says to cl creating an element :) */

function createElement(bunBun){
    console.log("creating an element!");
    const template = document.querySelector('#check-out-template');
    const clone = template.content.cloneNode(true);
    bunBun.element = clone.querySelector(".check-out-product");

    const bunBunListElement = document.querySelector(".all-products");
    bunBunListElement.appendChild(bunBun.element);

    console.log(bunBun.element);

    updateElement(bunBun);
}

function updateElement(bunBun){
    const rollImageElement = bunBun.element.querySelector(".cart-image");
    const rollTitleElement = bunBun.element.querySelector("#roll-title");
    const rollGlazeElement = bunBun.element.querySelector("#roll-glaze");
    const rollPackElement = bunBun.element.querySelector("#roll-size");

    rollImageElement.src = bunBun.image;
    rollTitleElement.innerText = bunBun.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + bunBun.glazing;
    rollPackElement.innerText = "Pack Size: " + bunBun.size;
}




