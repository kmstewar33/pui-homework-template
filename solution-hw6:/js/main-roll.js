class Roll {

    /* template to set up for each instance of Roll */
    constructor(rollImage, rollType, rollGlazing, packSize) {
        this.image = rollImage;
        this.type = rollType; /* storing the role name into a property called type */
        this.glazing = rollGlazing; /* storing the glazing input into a property called glazing */
        this.size = packSize; /* storing the pack size input into a property called size */
        this.totalPrice = this.calculatePrice(); /* storing the total roll price per role name into a property called base price */

        this.element = null; 
    }

    /* method for grabbing the correct glaze upcharge per user input on detail page 
    confused: why is this communicating from the detail page - cart atm? 
        I guess I needed it and made it sloppy by just pasting what I needed locally here
    also: what will happen with the glaze & pack options when I combine all of this? will it pull from the product-detail.js file?
        Since this is local to this method, I could probably keep it as it, but JS might have a problem with this*/
    getGlaze(){
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
        }
        return lemon;
    }
    
    getPack(){
        const packSize = [
            {amount: `1`, packPrice: 1},
            {amount: `3`, packPrice: 3},
            {amount: `6`, packPrice: 5},
            {amount: `12`, packPrice: 10},
        ]
        let grass = 0;
        for(let i = 0; i < packSize.length; i++){
            if (packSize[i].amount === this.size){
                grass = packSize[i].packPrice;
            }
        }

        return grass;
    }
    
    getOriginalPrice(){
        const rolls = {
            "Original": 2.49,
            "Apple": 3.49,
            "Raisin": 2.99,
            "Walnut": 3.49,
            "Double-Chocolate": 3.99,
            "Strawberry": 3.99
        };

        return rolls[this.type];
    }

    /* this calculatePrice is for... hmmm... declaring the total price for that specific roll
        this was actually also calculated on the product detail page JS file... 
        we just have this here so that the indiv total price of that selection can display on the shopping cart page as well */
    
    calculatePrice(){
        let lemon = this.getGlaze();
        let grass = this.getPack();
        let cinnamon = this.getOriginalPrice();
    
        const specificTotal = (lemon + cinnamon) * grass;
    
        return specificTotal;
        
    }
}