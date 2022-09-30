/*
  Author: przewnic
  Project: Restaurant-Page
*/
import createCard from '../card';
import dish_1 from '../../static/img/contact/pexels-anna-tarazevich-7287725.jpg';
import dish_2 from '../../static/img/contact/pexels-anna-tarazevich-7287728.jpg';

export default function createContact() {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.classList.add('contact-tab');

  const cardText_1 = 'Call us today and order your favorite Dumplings!<br>Call us right now<br>+00 000 111 2222';
  const card_1 = createCard(dish_1, 'Dumplings', cardText_1, 'contact-card');
  tab.appendChild(card_1);

  const cardText_2 = 'Come to our Restaurant!<br>Open everyday<br>Monday-Saturday: 1pm - 11pm<br>Sunday: 12am - 10pm';
  const card_2 = createCard(dish_2, 'Dumplings', cardText_2, 'contact-card');
  tab.appendChild(card_2);

  const cardMap = document.createElement('div');
  cardMap.classList.add('contact-card');
  const map = document.createElement('div');
  map.innerHTML = googleMap;
  map.classList.add('gmap-div');
  cardMap.appendChild(map);
  const cardDescription = document.createElement('div');
  const cardText = document.createElement('p');
  cardText.innerHTML = '<<< Find us here';
  cardDescription.appendChild(cardText);
  cardMap.appendChild(cardDescription);
  tab.appendChild(cardMap);

  return tab;
}

const googleMap = `<iframe id="gmap-canvas" src="https://maps.google.com/maps?q=Warsaw,%20Poland&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
     </iframe>`;
