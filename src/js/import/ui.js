// import '../lib/selectize.min.js';
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


//select
let result = $('.select-tn__result');
let dropdownItem = $('.select-tn__dorpdown li');


result.on('click', function() {
  if($(this).hasClass('active')) {
    $(this).removeClass('active').next('.select-tn__dorpdown').fadeOut();
  } else{
    $(this).addClass('active').next('.select-tn__dorpdown').fadeIn();
  }
});

dropdownItem.on('click', function() {
  $(this).siblings().removeClass('active');
  let htmltegs = $(this).html();
  let indexItem = $(this).index();
  $(this).closest('.select-tn__dorpdown').siblings('select').val(++indexItem);
  $(this).addClass('active').closest('.select-tn__dorpdown').prev('.select-tn__result').html(htmltegs);
  $(this).closest('.select-tn__dorpdown').fadeOut();
  $(this).closest('.select-tn__dorpdown').prev('.select-tn__result').removeClass('active');
});

$(document).mouseup(function(e) {
  var container = $('.select-tn');
  if (container.has(e.target).length === 0) {
    $('.select-tn__dorpdown').fadeOut();
    result.removeClass('active');
  }
});


//submit home
//open
$(".intro__form__open").on('click', function(event){
  event.preventDefault();
  $('.intro__btn').addClass('no-active');
  setTimeout(function(){
    $('.intro__form').addClass('active');
  }, 400)
})
//close
$(".intro__form__close").on('click', function(){
  $('.intro__form').removeClass('active');
  setTimeout(function(){
    $('.intro__btn').removeClass('no-active');
  }, 400)
})
//submit
$('.intro__form__block__submit button').on('click', function(event){
  event.preventDefault();
  if($('.intro__form__block__input').find('input').val().length === 10){
    $(this).addClass('running');
    setTimeout(function(){
      $('.intro__form__block__submit button').closest('.intro__form').removeClass('active');
      setTimeout(function(){
        $('.intro__form__result').addClass('active');
        setTimeout(function(){
          $('.intro__form__result').removeClass('active');
          setTimeout(function(){
            $('.intro__btn').removeClass('no-active');
            $('.intro__form__block__input input').val('');
            $('.intro__form__block__submit button').removeClass('running');
            $('.intro__form__block').removeClass('shake');
          }, 400)
        }, 3000)
      }, 400);
    }, 1600);
  } else{
    $('.intro__form__block').addClass('shake');
    setTimeout(function(){
      $('.intro__form__block').removeClass('shake');
    }, 500)
  }
});
//number
$('.intro__form__block__input input').bind('keypress', function (event) {
  var regex = new RegExp("^[0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
     event.preventDefault();
     return false;
  }
  $('.intro__form__block').removeClass('shake');
});


document.addEventListener('touchmove', function(event) {
  event = event.originalEvent || event;
  if (event.scale !== 1) {
     event.preventDefault();
  }
}, false);