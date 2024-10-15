/* rolls dictionary for params on product detail page */

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

 /* generating drop-down menus for glazing and pack size */
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

 /* roll class - updated from past duplicates :/ */

 class Roll {
    constructor (rollType, rollGlazing, packSize, rollPrice, cartID){
        this.type = rollType;
        this.glaze = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.cartID = cartID;

        this.totalPrice = this.calculatePrice();
    }

    getGlaze(){
        let lemon = "";
        for (let i = 0; i < glazingOptions.length; i++){
            if (glazingOptions[i].name === this.glaze) {
                lemon = glazingOptions[i].glazingPrice;
            }
        }
        return lemon;
    }

    getPack(){
        let grass = 0;
        for(let i = 0; i < packSize.length; i++){
            if (packSize[i].amount === this.size){
                grass = packSize[i].packPrice;
            }
        }
        return grass;
    }

    getBase(){
        return rolls[this.type].basePrice;
    }
 
    calculatePrice(){
        let lemon = this.getGlaze();
        let grass = this.getPack();
        let cinnamon = this.getBase();
   
        const specificTotal = (lemon + cinnamon) * grass;
   
        return specificTotal;
    }
 }

 let cart = [];

 const rollSet = new Set();
 