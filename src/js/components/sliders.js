import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

Swiper.use([Navigation, Pagination]);


const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));


const portSlider = document.querySelector('.portfolio-section__items');

const portfolioSlider = new Swiper('.portfolio-section__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
  on: {
    init: function () {
      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    },
  },
});


document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
  const activeSlide = portSlider.querySelector('.swiper-slide-next');

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  });

  if (activeSlide.previousElementSibling) {
    const nextActiveSlide = activeSlide.previousElementSibling;
    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    activeSlide.nextElementSibling.classList.add('slider-visible');
  }
});


document.querySelector('.portfolio-section__next').addEventListener('click', () => {
  const activeSlide = portSlider.querySelector('.swiper-slide-active');

  const nextActiveSlide = activeSlide.nextElementSibling;

  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  });

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  nextNextActiveSlide.classList.add('slider-visible');
});