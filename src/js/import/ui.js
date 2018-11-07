import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
import modal from 'jquery-modal';

//select
// $('select').selectize();

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});

//header
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
  if(mywindow.scrollTop() > 50){
    $('.header').addClass('active');
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.header').stop().removeClass('scroll');
        up = !up;
    } else if(newscroll < mypos && up) {
        $('.header').stop().addClass('scroll');
        up = !up;
    }
    mypos = newscroll;
  } else {
    $('.header').removeClass('active');
  }
});
//dropdown
$('.header__nav li').hover(function(){
  $(this).toggleClass('active')
})


//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


//sledeDown
$('.pricing__questions__block strong').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).next('.pricing__questions__block__text').slideUp();
  } else {
    $(this).addClass('active');
    $(this).next('.pricing__questions__block__text').slideDown();
  }
})


//open mobile menu
$('.menu-open').on('click', function() {
  $('.menu').addClass('active');
  $('.menu-bg').fadeIn();
});
//close mobile menu
$('.menu-bg').on('click', function() {
  $('.menu').removeClass('active');
  $(this).fadeOut();
});
