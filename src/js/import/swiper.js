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
  spaceBetween: 49,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 18,
    depth: 20,
    modifier: 1,
    slideShadows : false,
  },
  pagination: {
    el: '.swiper-pagination-mobile_tour',
    clickable : true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    500: {
      coverflowEffect: {
        stretch: 18,
        depth: -90,
      },
    }
  }
});
  //all
    let slideNumber = $('.swiper-mobile_tour .swiper-slide').length
    $('.swiper-progress .all').text(slideNumber)
  //active
    swiper.on('transitionEnd', function () {
      let indexItem = $('.swiper-mobile_tour .swiper-slide-active').index();
      $('.swiper-progress .active').text(++indexItem)
    });