
let cart = [];

class Roll {
    constructor(rollImage, rollType, rollGlazing, packSize) {
        this.image = rollImage;
        this.type = rollType; /* storing the role name into a property called type */
        this.glazing = rollGlazing; /* storing the glazing input into a property called glazing */
        this.size = packSize; /* storing the pack size input into a property called size */
        this.totalPrice = this.calculatePrice(); /* storing the total roll price per role name into a property called base price */
        
        /* Missing where to put the remove button here and in parameter */

        this.element = null; 
    }

    /* missing a method here to calculate rollPrice... not sure how to nest this, what other pieces of code from OG JS need to be added */

    function getGlaze(){
        const glazingOptions = [
            {name: `Keep original`, glazingPrice: 0.00},
            {name: `Sugar Milk`, glazingPrice: 0.00},
            {name: `Vanilla Milk`, glazingPrice: 0.50},
            {name: `Double-Chocolate`, glazingPrice: 1.50}
        ]
        let lemon = 0;
        for (let i = 0; i < glazingOptions.length; i++){
            if (glazingOptions[i].name === this.glazing) {
                lemon = glazingOptions[i].glazingPrice;
            }
            else {
                console.log("Not listed");
            }
        }
        return lemon;
    }
    
    function getPack(){
        const packSize = [
            {amount: `1`, packPrice: 1},
            {amount: `3`, packPrice: 3},
            {amount: `6`, packPrice: 5},
            {amount: `12`, packPrice: 10},
        ]
        let grass = 0;
        for(let i = 0; i < packSize.length; i++){
            if (getPrice[i].amount === this.size){
                grass = packSize[i].packPrice;
            }
        }
        else {
            console.log("Not listed");
        }
        return grass;
    }
    
    function getOriginalPrice(rollType){
        const rolls = {
            "Original": 2.49,
            "Apple": 3.49,
            "Raisin": 2.99,
            "Walnut": 3.49,
            "Double-Chocolate": 3.99,
            "Strawberry": 3.99
        };
        let cinnamon = 0;
        for (i = 0; i < rolls.length; i++){
            if (rolls[i] === rollType){
                cinnamon = rolls[i];
            }
            else {
                console.log("Not listed");
            }
        }
        return cinnamon;
    }
    
    function calculatePrice(){
        let lemon = getGlaze(this.glazing);
        let grass = getPack(this.size);
        let cinnamon = getOriginalPrice(this.type);
    
        const specificTotal = (lemon + cinnamon) * grass;
    
        return specificTotal;
        
    }
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
    const rollSelectPrice = bunBun.element.querySelector(".shopping-price");

    rollImageElement.src = bunBun.image;
    rollTitleElement.innerText = bunBun.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + bunBun.glazing;
    rollPackElement.innerText = "Pack Size: " + bunBun.size;
    rollSelectPrice.value = bunBun.totalPrice;
}




