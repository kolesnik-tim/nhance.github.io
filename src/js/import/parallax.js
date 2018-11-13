import ScrollMagic from 'scrollmagic'
import 'animation.gsap';
import 'debug.addIndicators';
import {TweenMax} from "gsap";


//scrollmagic


//mobile_tour
if($('.mobile_tour').length) {
    //1
    // init controller
    var mobile_tour = new ScrollMagic.Controller();
    // build tween
    var mobile_tourBlock1 = ["#mobile_tour-img-1"]; 
    var tweenMobile_tour = TweenMax.staggerFrom(mobile_tourBlock1, 0.5, {y: '160'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".mobile_tour__capability__block-1",
      duration: "200%"
    })
    .setTween(tweenMobile_tour)
    // .addIndicators()
    .addTo(mobile_tour);
    

    //2
    // init controller
    var mobile_tour2 = new ScrollMagic.Controller();
    // build tween
    var mobile_tourBlock2 = ["#mobile_tour-img-2"]; 
    var tweenMobile_tou2 = TweenMax.staggerFrom(mobile_tourBlock2, 0.5, {y: '160'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".mobile_tour__capability__block-2",
      duration: "200%"
    })
    .setTween(tweenMobile_tou2)
    // .addIndicators()
    .addTo(mobile_tour2);

    //3
    // init controller
    var mobile_tour3 = new ScrollMagic.Controller();
    // build tween
    var mobile_tourBlock3 = ["#mobile_tour-img-3"]; 
    var tweenMobile_tou3 = TweenMax.staggerFrom(mobile_tourBlock3, 0.5, {y: '160'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".mobile_tour__capability__block-3",
      duration: "200%"
    })
    .setTween(tweenMobile_tou3)
    // .addIndicators()
    .addTo(mobile_tour3);

    //4
    // init controller
    var mobile_tour4 = new ScrollMagic.Controller();
    // build tween
    var mobile_tourBlock4 = ["#mobile_tour-img-4"]; 
    var tweenMobile_tou4 = TweenMax.staggerFrom(mobile_tourBlock4, 0.5, {y: '160'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".mobile_tour__capability__block-4",
      duration: "200%"
    })
    .setTween(tweenMobile_tou4)
    // .addIndicators()
    .addTo(mobile_tour4);

    //5
    // init controller
    var mobile_tour5 = new ScrollMagic.Controller();
    // build tween
    var mobile_tourBlock5 = ["#mobile_tour-img-5"]; 
    var tweenMobile_tou5 = TweenMax.staggerFrom(mobile_tourBlock5, 0.5, {y: '160'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".mobile_tour__capability__block-5",
      duration: "200%"
    })
    .setTween(tweenMobile_tou5)
    // .addIndicators()
    .addTo(mobile_tour5);

    //6
    // init controller
    var mobile_tour6 = new ScrollMagic.Controller();
    // build tween
    var mobile_tourBlock6 = ["#mobile_tour-img-6"]; 
    var tweenMobile_tou6 = TweenMax.staggerFrom(mobile_tourBlock6, 0.5, {y: '160'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".mobile_tour__capability__block-6",
      duration: "200%"
    })
    .setTween(tweenMobile_tou6)
    // .addIndicators()
    .addTo(mobile_tour6);

    //7
    // init controller
    var mobile_tour7 = new ScrollMagic.Controller();
    // build tween
    var mobile_tourBlock7 = ["#mobile_tour-img-7"]; 
    var tweenMobile_tou7 = TweenMax.staggerFrom(mobile_tourBlock7, 0.5, {y: '160'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".mobile_tour__capability__block-7",
      duration: "200%"
    })
    .setTween(tweenMobile_tou7)
    // .addIndicators()
    .addTo(mobile_tour7);
}




//customerSolutions
if($('.customer-solutions').length) {
  // init controller
  var customerSolutions = new ScrollMagic.Controller();
  // build tween
  var customerSolutionsBlock = [".product-triger-block"]; 
  var tweenCustomerSolutions = TweenMax.staggerFrom(customerSolutionsBlock, 0.01, {y: '110'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".product-triger",
    duration: "200%"
  })
  .setTween(tweenCustomerSolutions)
  // .addIndicators()
  .addTo(customerSolutions);
}


