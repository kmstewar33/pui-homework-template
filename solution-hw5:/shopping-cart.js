
let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType; /* storing the role name into a property called type */
        this.glazing = rollGlazing; /* storing the glazing input into a property called glazing */
        this.size = packSize; /* storing the pack size input into a property called size */
        this.totalPrice = rollPrice; /* storing the total roll price per role name into a property called base price */

        this.element = null; 
    }

    /* missing a method here to calculate rollPrice... not sure how to nest this, what other pieces of code from OG JS need to be added */
}

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

function createElement(bunBun){
    console.log("creating an element!");
}




