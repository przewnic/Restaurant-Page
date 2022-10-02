/*
  Author: przewnic
  Project: Restaurant-Page
*/
import menuIcon from '../static/img/menu_FILL0_wght400_GRAD0_opsz48.png';

function toggleDrop(event, element) {
  element.classList.toggle('drop-down-element');
}

function removeDrop(event, element) {
  element.classList.remove('drop-down-element');
}

function createDropdown(dropElement) {
  const dropController = document.createElement('button');
  dropController.classList.add('drop-down-button');
  const icon = document.createElement('img');
  icon.src = menuIcon;
  icon.alt = 'menu icon';
  dropController.appendChild(icon);

  dropController.addEventListener('click', (e) => { toggleDrop(e, dropElement); });

  return dropController;
}

export { removeDrop, createDropdown };
