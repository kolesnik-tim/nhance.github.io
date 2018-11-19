import '../lib/selectize.min.js';
import modal from 'jquery-modal';

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});



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

//random
var parent = $(".team__content .row");
var divs = parent.children();
while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}



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



//ture
if($(window).width() <= 767){
  $('.tour__feature__mobile__block').on('click', function(event){
    event.preventDefault()
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.tour__feature__items').removeClass('active');
    } else{
      $(this).addClass('active');
      $('.tour__feature__items').addClass('active');
    }
  });
  $('.tour__feature__items li').on('click', function(){
    let strong = $(this).find('strong').text();
    let b = $(this).find('b').text();
    $('.tour__feature__mobile__block strong').text(strong);
    $('.tour__feature__mobile__block b').text(b);
    $('.tour__feature__mobile__block').removeClass('active');
    $('.tour__feature__items').removeClass('active');
  })
}
$('.tour__feature__items').on('click', 'li:not(.active)', function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  $(this).closest('.tour__feature').find('.img-block').removeClass('active').eq($(this).index()).addClass('active');
});



//якорь
$(".baner-scroll").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});



//footer
$('.footer__nav__block h3').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).next('ul').slideUp();
  } else{
    $('.footer__nav__block h3').removeClass('active').next('ul').slideUp();
    $(this).addClass('active');
    $(this).next('ul').slideDown();
  }
});