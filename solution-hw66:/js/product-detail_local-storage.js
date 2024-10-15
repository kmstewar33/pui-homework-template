let cartLocalStorage = []; /* creating a variable to hold parsed cart string so it can be pulled from storage (cannot pull string as is) */

function loadFromLocalStorage() { /* keeping the item selected in between browser refreshes */
    const itemStoredEachTime = localStorage.getItem('storedItems'); /* modeled from w3schools html web storage api */
    if (itemStoredEachTime) {
        cartLocalStorage = JSON.parse(itemStoredEachTime);
    }
}

/* local storage for product detail cart selection */

function saveToLocalStorage() {
    // const cartItemsArray = Array.from(rollSet);
    // console.log(rollSet);

    const cartItemsArrayString = JSON.stringify(cartLocalStorage);
    console.log(cartItemsArrayString);

    localStorage.setItem('storedItems', cartItemsArrayString); /* we are creating a key & attaching the value of cartItemsString aka JSON version of cart/cart.push */
    
  }

function addToCart(){

    const rollTypeElement = rollType;
 
    const rollGlazingElement = document.querySelector('#glaze-select').options[document.querySelector('#glaze-select').selectedIndex].text; /* code to grab inner options text from w3schools*/
 
    const packSizeElement = document.querySelector('#pack-select').options[document.querySelector('#pack-select').selectedIndex].text; /* code to grab inner options text from w3schools*/
 
    const basePriceElement = rolls[rollType].basePrice;

    let cartID = Date.now().toString(); /* code modeled from w3 schools */
   
    let newRoll = new Roll(rollTypeElement, rollGlazingElement, packSizeElement, basePriceElement, cartID);

    rollSet.add(newRoll); /* saving to my set since I need it for my shopping cart page html outline */
 
    cartLocalStorage.push(newRoll); /* saving to local storage now vs just the cart area that gets lost in the browser */
    
    saveToLocalStorage();
    console.log(cartLocalStorage); 
 }

 loadFromLocalStorage();
 
 const selectElement3 = document.querySelector("#cart-button");
 
 selectElement3.addEventListener("click", addToCart);

 