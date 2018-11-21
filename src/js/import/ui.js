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
  $('.intro__btn').fadeOut();
  setTimeout(function(){
    $('.intro__form').fadeIn();
  }, 400)
})
//close
$(".intro__form__close").on('click', function(){
  $('.intro__form').fadeOut();
  setTimeout(function(){
    $('.intro__btn').fadeIn();
  }, 400)
})
//submit
$('.intro__form__block__submit button').on('click', function(event){
  event.preventDefault();
  if($('.intro__form__block__input').find('input').val().length === 10){
    $(this).addClass('running')
    $(this).closest('.intro__form').fadeOut();
    setTimeout(function(){
      $('.intro__form__result').fadeIn();
      setTimeout(function(){
        $('.intro__form__result').fadeOut();
        setTimeout(function(){
          $('.intro__btn').fadeIn();
          $('.intro__form__block__input input').val('');
          $('.intro__form__block__submit button').removeClass('running');
        }, 400)
      }, 3000)
    }, 400);
  }
});



// //Ajax отправка формы 
// document.querySelectorAll('form').forEach(function(item) {  
//   item.addEventListener('submit', function(event) {    
//     sendAjaxForm(this, event);  
//   })
// });  
// function sendAjaxForm(form, event) {    
//   var fields = form.querySelectorAll('input, select')    
//   var formHasError =  Array.prototype.reduce.call(fields, function(invalidCount, currentItem) {      
//     if (currentItem.matches(':invalid')) invalidCount++;    
//   }, 0);    
//   if (formHasError) {      
//     return true;    
//   } else {      
//     event.preventDefault();      
//     var formData = new FormData(form);      
//     var xhr = new XMLHttpRequest();      
//     xhr.open('POST', 'send.php');      
//     xhr.onreadystatechange = function() {        
//       if ((xhr.readyState === 4) && (xhr.status === 200)) {          
//         data = xhr.responseText;          
//         form.outerHTML = '<h2 style-"color: #fdb827; text-align: center;">Мы перезвоним Вам в ближайшее время для подтверждения заказа</h2><h3 style="color: #fdb827; text-align: center;">Спасибо, Ваш заказ отправлен</h3>';        
//       }      
//     }      
//     xhr.send(formData);      
//     return false;    
//   }  
// }
