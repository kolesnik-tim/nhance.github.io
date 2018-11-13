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




//product
if($('.product').length) {
  //1
  // init controller
  var product = new ScrollMagic.Controller();
  // build tween
  var productBlock1 = ["#product-img-1"]; 
  var tweenProduct = TweenMax.staggerFrom(productBlock1, 0.5, {y: '160'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".product__capability__block-1",
    duration: "200%"
  })
  .setTween(tweenProduct)
  // .addIndicators()
  .addTo(product);
  

  //2
  // init controller
  var product2 = new ScrollMagic.Controller();
  // build tween
  var productBlock2 = ["#product-img-2"]; 
  var tweenProduct2 = TweenMax.staggerFrom(productBlock2, 0.5, {y: '160'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".product__capability__block-2",
    duration: "200%"
  })
  .setTween(tweenProduct2)
  // .addIndicators()
  .addTo(product2);

  //3
  // init controller
  var product3 = new ScrollMagic.Controller();
  // build tween
  var productBlock3 = ["#product-img-3"]; 
  var tweenProduct3 = TweenMax.staggerFrom(productBlock3, 0.5, {y: '160'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".product__capability__block-3",
    duration: "200%"
  })
  .setTween(tweenProduct3)
  // .addIndicators()
  .addTo(product3);

  //4
  // init controller
  var product4 = new ScrollMagic.Controller();
  // build tween
  var productBlock4 = ["#product-img-4"]; 
  var tweenProduct4 = TweenMax.staggerFrom(productBlock4, 0.5, {y: '160'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".product__capability__block-4",
    duration: "200%"
  })
  .setTween(tweenProduct4)
  // .addIndicators()
  .addTo(product4);

  //5
  // init controller
  var product5 = new ScrollMagic.Controller();
  // build tween
  var productBlock5 = ["#product-img-5"]; 
  var tweenProduct5 = TweenMax.staggerFrom(productBlock5, 0.5, {y: '160'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".product__capability__block-5",
    duration: "200%"
  })
  .setTween(tweenProduct5)
  // .addIndicators()
  .addTo(product5);
}

