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
  slidesPerView: 'auto',
  spaceBetween: 50,
  effect: 'coverflow',
  loopFillGroupWithBlank: true,
  loop: true,
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
    disableOnInteraction: false
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
    let slideNumber = $('.swiper-pagination-mobile_tour span').length;
    $('.swiper-progress .all').text(slideNumber);
  //active
    swiper.on('transitionEnd', function () {
      $('.swiper-progress .active').text(++swiper.realIndex);
    });
if($('.swiper-mobile_tour').length) {
  swiper.update();
}


var swiper2 = new Swiper('.swiper-animated', {
  slidesPerView: 'auto',
  spaceBetween: 3,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  }
});
if($('.swiper-animated').length) {
  swiper2.update();
}