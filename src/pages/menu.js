/*
  Author: przewnic
  Project: Restaurant-Page
*/
import createCard from '../card';
import fried_d from '../../static/img/menu/pexels-anna-tarazevich-7287719.jpg';
import spinach_d from '../../static/img/menu/pexels-cats-coming-750941.jpg';
import soup_d from '../../static/img/menu/pexels-cats-coming-955137.jpg';
import soucey_d from '../../static/img/menu/pexels-cats-coming-1385185.jpg';
import parsley_d from '../../static/img/menu/pexels-cottonbro-3296903.jpg';
import pierogis_d from '../../static/img/menu/pexels-jamie-saw-13055484.jpg';
import round_d from '../../static/img/menu/pexels-momo-king-5409015.jpg';

export default function createMenu() {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.classList.add('menu-tab');

  tab.appendChild(createCard(fried_d, 'Fried Dumplings', 'Fried Dumplings', 'menu-card'));
  tab.appendChild(createCard(spinach_d, 'Spinach Dumplings', 'Spinach Dumplings', 'menu-card'));
  tab.appendChild(createCard(soup_d, 'Soup Dumplings', 'Soup Dumplings', 'menu-card'));
  tab.appendChild(createCard(soucey_d, 'Soucey Dumplings', 'Soucey Dumplings', 'menu-card'));
  tab.appendChild(createCard(parsley_d, 'Parsley Dumplings', 'Parsley Dumplings', 'menu-card'));
  tab.appendChild(createCard(pierogis_d, 'Pierogis Dumplings', 'Pierogis Dumplings', 'menu-card'));
  tab.appendChild(createCard(round_d, 'Round Dumplings', 'Round Dumplings', 'menu-card'));

  return tab;
}
