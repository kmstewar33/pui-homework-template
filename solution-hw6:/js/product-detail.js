/* generating drop-down menus for glazing and pack size */
// const glazingOptions = [
//     {name: `Keep original`, glazingPrice: 0.00},
//     {name: `Sugar Milk`, glazingPrice: 0.00},
//     {name: `Vanilla Milk`, glazingPrice: 0.50},
//     {name: `Double-Chocolate`, glazingPrice: 1.50}
// ]

// const packSize = [
//     {amount: `1`, packPrice: 1},
//     {amount: `3`, packPrice: 3},
//     {amount: `6`, packPrice: 5},
//     {amount: `12`, packPrice: 10},
// ] 

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

/* setting up params & outline for each roll */
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

/* calculating indivdual roll price based on chosen glaze & pack size */

function calculateIndivPrice(){
    let basePrice = rolls[rollType].basePrice;
    let glazingPrice = parseFloat(selectElement1.value);
    let packPrice = parseFloat(selectElement2.value);
    let newPrice = (basePrice + glazingPrice) * packPrice;
 
    document.getElementById("indiv-price").textContent = `$${Math.round(newPrice*100)/100}`;
 
    return newPrice;
}

function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    calculateIndivPrice();
 }
 
 function packChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    calculateIndivPrice();
 }

displayGlazingOptions();
displayPackOptions();

selectElement1.addEventListener("change", calculateIndivPrice);
selectElement2.addEventListener("change", calculateIndivPrice);

/* adding selected options to cart */

// let cartLocalStorage = []; /* creating a variable to hold parsed cart string so it can be pulled from storage (cannot pull string as is) */

// function addToCart(){

//     const rollTypeElement = rollType;
 
//     const rollGlazingElement = document.querySelector('#glaze-select').options[document.querySelector('#glaze-select').selectedIndex].text; /* code to grab inner options text from w3schools*/
 
//     const packSizeElement = document.querySelector('#pack-select').options[document.querySelector('#pack-select').selectedIndex].text; /* code to grab inner options text from w3schools*/
 
//     const basePriceElement = rolls[rollType].basePrice;

//     let cartID = Date.now().toString(); /* code modeled from w3 schools */
   
//     let newRoll = new Roll(rollTypeElement, rollGlazingElement, packSizeElement, basePriceElement, cartID);

//     rollSet.add(newRoll); /* saving to my set since I need it for my shopping cart page html outline */
 
//     cartLocalStorage.push(newRoll); /* saving to local storage now vs just the cart area that gets lost in the browser */
    
//     saveToLocalStorage();
//     console.log(cartLocalStorage); 
//  }
 
//  const selectElement3 = document.querySelector("#cart-button");
 
//  selectElement3.addEventListener("click", addToCart);

//  /* local storage for product detail cart selection */

//  function saveToLocalStorage() {
//     // const cartItemsArray = Array.from(rollSet);
//     // console.log(rollSet);

//     const cartItemsArrayString = JSON.stringify(cartLocalStorage);
//     console.log(cartItemsArrayString);

//     localStorage.setItem('storedItems', cartItemsArrayString); /* we are creating a key & attaching the value of cartItemsString aka JSON version of cart/cart.push */
    
//   }