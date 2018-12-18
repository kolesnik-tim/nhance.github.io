//random team
var parent = $(".team__content .row");
var divs = parent.children();
while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
};

//random mobile_tour
var parent1 = $(".swiper-mobile_tour .swiper-wrapper, .swiper-animated .swiper-wrapper");
var divs1 = parent1.children();
while (divs1.length) {
    parent1.append(divs1.splice(Math.floor(Math.random() * divs1.length), 1)[0]);
};
//remove blocks
$("#swiper-random div:gt(5)").remove();