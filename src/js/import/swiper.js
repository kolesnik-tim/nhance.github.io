import Swiper from 'swiper';

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 0,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  },
  autoplay: {
    delay: 5000,
  },
});




//mobile-tour
var swiper = new Swiper('.swiper-mobile_tour', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 700,
  pagination: {
    el: '.swiper-pagination-mobile_tour',
    type: 'fraction',
  },
});
$('.swiper-pagination-fraction').append('<span class="text">of</span>')