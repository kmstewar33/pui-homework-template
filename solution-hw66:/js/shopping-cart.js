let cart = []; /* not sure why we would need this if cart is being dynamically stored in cartLocalStorage */

function addNewRoll(rollImage, rollType, rollGlazing, packSize, cartID) {
    const bunBun = new Roll(rollImage, rollType, rollGlazing, packSize, cartID);
    rollSet.add(bunBun);
    return bunBun;
 }
 

