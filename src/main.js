import createHome from './pages/home';
import createMenu from './pages/menu';
import createContact from './pages/contact';

export default function renderMain(event, tabContainer, navButtons) {
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
    default:
      break;
  }
}
