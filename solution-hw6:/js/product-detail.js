
/* need to load glazing & pack size options menu FIRST */
const glazingOptions = [
    {name: `Keep original`, glazingPrice: 0.00},
    {name: `Sugar Milk`, glazingPrice: 0.00},
    {name: `Vanilla Milk`, glazingPrice: 0.50},
    {name: `Double-Chocolate`, glazingPrice: 1.50}
]

const selectElement1 = document.querySelector("#glaze-select");

function displayGlazingOptions(){
    for (let i = 0; i < glazingOptions.length; i++){
        let option = document.createElement(`option`);
        option.text = glazingOptions[i].name;
        option.value = glazingOptions[i].glazingPrice;
        
        selectElement1.add(option);
        console.log(option);
    }
}

const packSize = [
    {amount: `1`, packPrice: 1},
    {amount: `3`, packPrice: 3},
    {amount: `6`, packPrice: 5},
    {amount: `12`, packPrice: 10},
]

const selectElement2 = document.querySelector("#pack-select");

function displayPackOptions(){
    for (let i = 0; i < packSize.length; i++){
        let option2 = document.createElement(`option`);
        option2.text = packSize[i].amount;
        option2.value = packSize[i].packPrice;
        
        selectElement2.add(option2);
        console.log(option2);
    }
}

/* we accidentally have 2x calculatePrice. this one = loads price per product detail page */

function calculateProductPrice(){
    let basePrice = rolls[rollType].basePrice;
    let glazingPrice = parseFloat(selectElement1.value);
    let packPrice = parseFloat(selectElement2.value);
    let newPrice = (basePrice + glazingPrice) * packPrice;

    document.getElementById("indiv-price").textContent = `$${Math.round(newPrice*100)/100}`;

    return newPrice;
}

/* start to handle an event where user input changes #indiv-price */

function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    calculateProductPrice();
}

function packChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    calculateProductPrice();
}
  
displayGlazingOptions();
displayPackOptions();

selectElement1.addEventListener("change", calculateProductPrice);
selectElement2.addEventListener("change", calculateProductPrice);

/* below is everything from the 2nd JS file that relates to the product-detail page */

/* we need rolls to create the options on the product detail pages - DO NOT DELETE */

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

let cart = [];

const queryString = window.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const rollType = params.get('rolls');

console.log(rollType);

const headerElement = document.querySelector('#content-title');
headerElement.innerText = rollType + " cinnamon roll";

const rollImage = document.querySelector('#detail-image');
rollImage.src = './assets/products/' + rollType.toLowerCase() + '-cinnamon-roll.jpg';

const rollPrice = document.querySelector('#indiv-price');
rollPrice.innerText = '$ ' + rolls[rollType].basePrice;

function addToCart(){

    const rollTypeElement = rollType;
    const rollGlazingElement = document.querySelector('#glaze-select').options[document.querySelector('#glaze-select').selectedIndex].text; /* code to grab inner options text from w3schools*/
    const packSizeElement = document.querySelector('#pack-select').options[document.querySelector('#pack-select').selectedIndex].text; /* code to grab inner options text from w3schools*/
    const basePriceElement = rolls[rollType].basePrice;
    
    const newRoll = new Roll(rollTypeElement, rollGlazingElement, packSizeElement, basePriceElement);

    cart.push(newRoll);
    console.log(cart);
}

const selectElement3 = document.querySelector("#cart-button");

selectElement3.addEventListener("click", addToCart);

/* convert the updated cart to JSON */

function saveToLocalStorage(){
    const rollArray = Array.from(rollSet); /* now that shopping-cart.js is linked to detail, should pull*/
    /* or is Array.from(rollSet) just from cart that's ref on this page? */
    console.log(rollArray); /* printing selection to be saved to the console */

    const rollArrayString = JSON.stringify(rollArray);
    console.log(rollArrayString);
}
