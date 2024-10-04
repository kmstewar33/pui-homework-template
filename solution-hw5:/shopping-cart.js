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

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType; /* storing the role name into a property called type */
        this.glazing = rollGlazing; /* storing the glazing input into a property called glazing */
        this.size = packSize; /* storing the pack size input into a property called size */
        this.totalPrice = this.calculatePrice(); /* storing the total roll price per role name into a property called base price */

        this.element = null; 
    }

    glazingPrice(){
        let glazePrice = 0;
        for(i = 0; i < Roll.glazing.length; i++){
            if (Roll.glazing === "Keep original" || Roll.glazing === "Sugar Milk") {
                glazePrice = 0.00;
            }
            else if (Roll.glazing === "Vanilla Milk") {
                glazePrice = 0.50;
            }
            else if (Roll.glazing === "Double-Chocolate") {
                glazePrice = 1.50;
            }
        }
        return glazePrice;
    }

    packingPrice(){
        let packPrice = 0;
        for(i = 0; i < Roll.size.length; i++){
            if (Roll.size === "1") {
                packPrice = 1;
            }
            if (Roll.size === "3") {
                packPrice = 3;
            }
            if (Roll.size === "6") {
                packPrice = 5;
            }
            if (Roll.size === "12") {
                packPrice = 10;
            }
        }
        return packPrice;
    }

    calculatePrice(){
        let glze = glazingPrice();
        let pck = packingPrice();

        let totalPrice = (Roll[rollType].basePrice + glze) * pck;

        return totalPrice;
        
    }

}

const rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const bunBun = new Roll(rollType, rollGlazing, packSize, rollPrice);
    rollSet.add(bunBun);
    return bunBun;
}

const rollOne = addNewRoll (
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




