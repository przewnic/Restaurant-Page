/*
  Author: przewnic
  Project: Restaurant-Page
*/

export default class Slider {
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('slider');

    this.slideContainer = document.createElement('div');
    this.container.appendChild(this.slideContainer);

    this.controls = this.createControls();
    this.container.appendChild(this.controls);
  }

  createControls() {
    const controls = document.createElement('div');
    controls.classList.add('slide-controls');
    const left = document.createElement('div');
    left.classList.add('navigator');
    left.textContent = '<';
    left.addEventListener('click', () => { this.previousSlide(); });
    const slideIndicators = document.createElement('div');
    slideIndicators.classList.add('slide-indicators');
    const right = document.createElement('div');
    right.classList.add('navigator');
    right.textContent = '>';
    right.addEventListener('click', () => { this.nextSlide(); });

    controls.appendChild(left);
    controls.appendChild(slideIndicators);
    controls.appendChild(right);

    return controls;
  }

  add(imgSrc, alt) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    const slideImg = document.createElement('img');
    slideImg.src = imgSrc;
    slideImg.alt = alt;
    slide.appendChild(slideImg);
    this.slideContainer.appendChild(slide);

    const indicator = document.createElement('div');
    indicator.classList.add('slide-indicator');
    this.controls.children[1].appendChild(indicator);
    const index = this.slideContainer.children.length;
    indicator.addEventListener('click', () => { this.jumpToSlide(index - 1); });

    if (this.slideContainer.children.length === 1) {
      slide.classList.add('visible');
      indicator.classList.add('visible');
    }
  }

  jumpToSlide(index) {
    const slides = this.slideContainer.children;
    const indicators = this.controls.children[1].children;
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i].classList.contains('visible')) {
        slides[i].classList.remove('visible');
        indicators[i].classList.remove('visible');
      }
    }
    slides[index].classList.add('visible');
    indicators[index].classList.add('visible');
  }

  nextSlide() {
    let index = 0;
    const slides = this.slideContainer.children;
    const indicators = this.controls.children[1].children;
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i].classList.contains('visible')) {
        index = (i + 1) % slides.length;
        slides[i].classList.remove('visible');
        indicators[i].classList.remove('visible');
      }
    }
    slides[index].classList.add('visible');
    indicators[index].classList.add('visible');
  }

  previousSlide() {
    let index = 0;
    const slides = this.slideContainer.children;
    const indicators = this.controls.children[1].children;
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i].classList.contains('visible')) {
        index = (i - 1) < 0 ? slides.length - 1 : (i - 1);
        slides[i].classList.remove('visible');
        indicators[i].classList.remove('visible');
      }
    }
    slides[index].classList.add('visible');
    indicators[index].classList.add('visible');
  }
}
