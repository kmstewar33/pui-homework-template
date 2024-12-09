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

const musicDefinition = document.querySelector('#activity-description');
musicDefinition.innerText = perception[perceptionType].music;

const bookIcon = document.querySelector('#poem-img');
bookIcon.src = './Images/' + perceptionType + '_book.jpg';

const bookDefinition = document.querySelector('#poem-text');
bookDefinition.innerText = perception[perceptionType].book;

document.getElementById("poem-img").addEventListener("click", function() {
    const textContent = document.getElementById("poem-text");
    
    // Toggle classes to show/hide the text
    if (textContent.classList.contains("hidden")) {
      textContent.classList.remove("hidden");
      textContent.classList.add("visible");
    } else {
      textContent.classList.remove("visible");
      textContent.classList.add("hidden");
    }
  });

  document.getElementById("activity-img").addEventListener("click", function() {
    const textContent = document.getElementById("activity-description");
    
    // Toggle classes to show/hide the text
    if (textContent.classList.contains("hidden")) {
      textContent.classList.remove("hidden");
      textContent.classList.add("visible");
    } else {
      textContent.classList.remove("visible");
      textContent.classList.add("hidden");
    }
  });