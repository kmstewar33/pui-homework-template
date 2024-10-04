const glazingOptions = [
    {name: `Keep original`, glazingPrice: 0.00},
    {name: `Sugar Milk`, glazingPrice: 0.00},
    {name: `Vanilla Milk`, glazingPrice: 0.50},
    {name: `Double-Chocolate`, glazingPrice: 1.50}
]

const packSize = [
    {amount: `1`, packPrice: 1},
    {amount: `3`, packPrice: 3},
    {amount: `6`, packPrice: 5},
    {amount: `12`, packPrice: 10},
]

let cart = [];

rollPrice = document.querySelector("#indiv-price");

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType; /* storing the role name into a property called type */
        this.glazing = rollGlazing; /* storing the glazing input into a property called glazing */
        this.size = packSize; /* storing the pack size input into a property called size */
        this.totalPrice = rollPrice; /* storing the total roll price per role name into a property called base price */

        calculatePrice();

        this.element = null; 
    }

    function glazingPrice(){
        let glazePrice = 0;
        for(i = 0; i < glazingOptions.length; i++){
            if glazingOptions[i] === "Keep original" || "Sugar Milk" {
                glazePrice = 0.00;
            }
            else if glazingOptions[i] === "Vanilla Milk" {
                glazePrice = 0.50;
            }
            else if glazingOptions[i] === "Double-Chocolate" {
                glazePrice = 1.50;
            }
        }
    }

    function packingPrice(){
        let packPrice = 0;
        for(i = 0; i < packSize.length; i++){
            if packSize[i] === "1" {
                packPrice
            }
        }
    }

}

const rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice, calcPrice) {
    const bunBun = new Roll(rollType, rollGlazing, packSize, rollPrice, calcPrice);
    rollSet.add(bunBun);
    return bunBun;
}

const rollOne = addNewRoll(
    "Original", "Sugar Milk", "1", 
);

const rollTwo = addNewRoll (
    "Walnut", "Vanilla Milk", "12",
);

const rollThree = addNewRoll (
    "Raisin", "Sugar Milk", "3",
);

const rollFour = addNewRoll (
    "Apple", "Original", "3",
);




