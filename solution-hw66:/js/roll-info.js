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

 /* roll class - updated from past duplicates :/ */

 class Roll {
    constructor (rollType, rollGlazing, packSize, rollPrice, cartID){
        this.type = rollType;
        this.glaze = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.cartID = cartID;
    }

    getGlaze(){
        let lemon = 0;
        for (let i = 0; i < glazingOptions.length; i++){
            if (glazingOptions[i].name === this.glazing) {
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
        return rolls[this.type.basePrice];
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
 