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

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
    cart.push(Roll);
    console.log(cart);

}

// function addToCart(){
    
//     }

 
 
const selectElement3 = document.querySelector("#cart-button");

selectElement3.addEventListener("click", addToCart);
