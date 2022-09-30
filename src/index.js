/*
  Author: przewnic
  Project: Restaurant-Page
*/
import createHeader from './header';
import createFooter from './footer';
import createHome from './pages/home';
import createMenu from './pages/menu';
import createContact from './pages/contact';

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

function renderMain(event, tabContainer, navButtons) {
  if (tabContainer.firstChild) {
    tabContainer.removeChild(tabContainer.firstChild);
  }
  for (const button of navButtons) {
    button.classList.remove('active');
  }
  event.target.classList.add('active');

  switch (event.target.id) {
    case 'Home':
      tabContainer.appendChild(createHome());
      break;
    case 'Menu':
      tabContainer.appendChild(createMenu());
      break;
    case 'Contact':
      tabContainer.appendChild(createContact());
      break;
  }
}
