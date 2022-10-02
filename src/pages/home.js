/*
  Author: przewnic
  Project: Restaurant-Page
*/
import createCard from '../card';
import Slider from '../imageSlider';
import dumplings_1 from '../../static/img/home/pexels-anna-tarazevich-7251845.jpg';
import dumplings_2 from '../../static/img/home/pexels-anna-tarazevich-7287687.jpg';
import dumplings_3 from '../../static/img/home/pexels-anna-tarazevich-7287697.jpg';

export default function createHome() {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.classList.add('home-tab');

  const slider = new Slider();
  slider.add(dumplings_1, 'Dumplings');
  slider.add(dumplings_2, 'Dumplings');
  slider.add(dumplings_3, 'Dumplings');
  setInterval(() => { slider.nextSlide(); }, 4000);
  tab.appendChild(slider.container);

  const cardText_1 = 'The best Dumplings in your town!';
  const card_1 = createCard(dumplings_1, 'Dumplings', cardText_1, 'home-card');
  tab.appendChild(card_1);

  const cardText_2 = 'Visit us today';
  const card_2 = createCard(dumplings_2, 'Dumplings', cardText_2, 'home-card');
  tab.appendChild(card_2);

  const cardText_3 = 'Your favorite dumplings are waiting!';
  const card_3 = createCard(dumplings_3, 'Dumplings', cardText_3, 'home-card');
  tab.appendChild(card_3);

  return tab;
}
