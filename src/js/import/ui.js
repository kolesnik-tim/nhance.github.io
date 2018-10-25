import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';

//select
// $('select').selectize();

// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });

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
        console.log(up);
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