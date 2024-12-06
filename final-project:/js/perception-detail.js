/* setting up params & outline for each roll */
const queryString = window.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const perceptionType = params.get('perception');
console.log(perceptionType);

const headerElement = document.querySelector('#learning-style');
headerElement.innerText = perceptionType + " perception";

const styleIcon = document.querySelector('#style-img');
styleIcon.src = './Images/' + perceptionType + '.jpg';

const styleDefinition = document.querySelector('#style-definition');
styleDefinition.innerText = perception[perceptionType].definition;

const musicIcon = document.querySelector('#activity-img');
musicIcon.src = './Images/' + perceptionType + '_music.jpg';

const bookIcon = document.querySelector('#poem-img');
bookIcon.src = './Images/' + perceptionType + '_book.jpg';
