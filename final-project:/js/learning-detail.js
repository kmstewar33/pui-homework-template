/* setting up params & outline for each roll */
const queryString = window.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const rollType = params.get('learningType');
console.log(learningType);

const headerElement = document.querySelector('#content-title');
headerElement.innerText = learningType + " perception";

const rollImage = document.querySelector('#detail-image');
rollImage.src = './assets/products/' + rollType.toLowerCase() + '-cinnamon-roll.jpg';

const rollPrice = document.querySelector('#indiv-price');
rollPrice.innerText = '$ ' + rolls[rollType].basePrice;