/*
  Author: przewnic
  Project: Restaurant-Page
*/
import createHeader from './header';
import createFooter from './footer';
import createHome from './pages/home';
import renderMain from './main';

// import "../static/styles/styles.css"  // Styles with loader
const content = document.getElementById('content');

content.appendChild(createHeader());
// main - dynamically rendered pages
const main = document.createElement('main');
main.appendChild(createHome());
content.appendChild(main);
content.appendChild(createFooter());

const navButtons = document.querySelectorAll('.nav-button');

for (const button of navButtons) {
  button.addEventListener('click', (event) => { renderMain(event, main, navButtons); });
}

function moveMain(e, element) {
  element.classList.toggle('drop-down');
}

const dropDownButton = document.querySelector('.drop-down-button');
dropDownButton.addEventListener('click', (e) => { moveMain(e, main); });
