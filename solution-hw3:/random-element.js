const glazingOptions = [
    {name: `Keep original`, glazingPrice: 0.00},
    {name: `Sugar Milk`, glazingPrice: 0.00},
    {name: `Vanilla Milk`, glazingPrice: 0.50},
    {name: `Double-Chocolate`, glazingPrice: 1.50}
]

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

const packSize = [
    {amount: `1`, packPrice: 1},
    {amount: `3`, packPrice: 3},
    {amount: `6`, packPrice: 5},
    {amount: `12`, packPrice: 10},
]

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

function calculatePrice(){
    const basePrice = 2.49;
    let glazingPrice = parseFloat(selectElement1.value);
    let packPrice = parseFloat(selectElement2.value);
    let newPrice = (basePrice + glazingPrice) * packPrice;

    document.getElementById("indiv-price").textContent = `$${Math.round(newPrice*100)/100}`;

    return newPrice;
}

function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    calculatePrice();

}

function packChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    calculatePrice();
    
  // add your code to do update the price ...
}
  
displayGlazingOptions();
displayPackOptions();

selectElement1.addEventListener("change", calculatePrice);
selectElement2.addEventListener("change", calculatePrice);