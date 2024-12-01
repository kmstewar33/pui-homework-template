/* setting up params & outline for each roll */
const queryString = window.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const perceptionType = params.get('perceptions');
console.log(perceptionType);

const styleName = document.querySelector('.learning-style');
headerElement.innerText = perceptionType + " perception";

const styleIcon = document.querySelector('.style-img');
styleIcon.src = './Images/' + perceptionType.toLowerCase() + '.jpg';

const styleText = document.querySelector('.style-definition');
styleText.innerText = '$ ' + rolls[rollType].basePrice;