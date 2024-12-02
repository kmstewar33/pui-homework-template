/* testing */

console.log("started application");

function updateElement() {
    console.log("running the element update function!");
}


/* setting up params & outline for each roll */
const queryString = window.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const perceptionType = params.get('perceptions');
console.log(perceptionType);

const headerElement = document.querySelector('#learning-style');
headerElement.innerText = perceptionType + " perception";

const styleIcon = document.querySelector('.style-img');
styleIcon.src = './Images/' + perceptionType + '.jpg';