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



//random
var parent = $(".team__content .row");
var divs = parent.children();
while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}


//sledeDown
$('.menu__content .menu__item').on('click', function(){
  if($(this).hasClass('active')){
    $(this).siblings('.menu__dropdown').slideUp();
    $(this).removeClass('active')
  } else{
    $('.menu__content .menu__item').removeClass('active')
    $('.menu__content .menu__item').siblings('.menu__dropdown').slideUp();
    $(this).siblings('.menu__dropdown').slideDown();
    $(this).addClass('active')
  }
})


//tour
$('.tour__feature__items').on('click', 'li:not(.active)', function() {
  $(this).addClass('active').siblings().removeClass('active')
  $(this).closest('.tour__feature').find('.img-block').removeClass('active').eq($(this).index()).addClass('active');
});

//pricing mobile
$('.pricing__tariff__block__mobile-btn').on('click', function(event){
  event.preventDefault()
  if($(this).hasClass('active')){
    $(this).removeClass('active').find('span').text('View details');
    $(this).siblings('.pricing__tariff__block__mobile').slideUp();
  } else{
    $(this).addClass('active').find('span').text('Hide details');
    $(this).siblings('.pricing__tariff__block__mobile').slideDown()
  }
});