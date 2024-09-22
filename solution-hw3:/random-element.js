const glazingOptions = [
    {name: `Keep original`, glazingPrice: 0.00},
    {name: `Sugar Milk`, glazingPrice: 0.00},
    {name: `Vanilla Milk`, glazingPrice: 0.50},
    {name: `Double-Chocolate`, glazingPrice: 1.50}
]

const selectElement1 = document.querySelector(#glaze-select);

function displayGlazingOptions(){
    for (let i = 0; i < glazingOptions.length; i++){
        let option = document.createElement(`option`);
        option.text = glazingOptions[i].name;
        option.value = glazingOptions[i].glazingPrice;
        selectElement1.add(option);
        console.log(option);
    }
}

selectElement1.addEventListener("change", displayGlazingOptions);

const packSize = [
    {amount: `1`, packPrice: 1},
    {amount: `3`, packPrice: 3},
    {amount: `6`, packPrice: 5},
    {amount: `12`, packPrice: 10},
]

const selectElement2 = document.querySelector(#pack-select);

function displayPackOptions(){
    for (let i = 0; i < displayPackOptions.length; i++){
        let option2 = document.createElement(`option`);
        option.text = packSize[i].amount;
        option.value = packSize[i].glazingPrice;
        selectElement2.add(option2);
        console.log(option2);
    }
}

selectElement2.addEventListener("change", displayPackOptions)