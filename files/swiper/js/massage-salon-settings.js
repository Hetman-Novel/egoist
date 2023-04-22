/*
if (document.querySelectorAll('.big-slider-slide').length > 1) {
   document.getElementById('single-cemeteries-slider-navigation').classList.remove('hidden');
}
*/

var swiper = new Swiper("#small-slider-massage-salon", {
   loop: true,
   spaceBetween: 7,
   navigation: {
      nextEl: ".massage-salon__button-prev",
      prevEl: ".massage-salon__button-next",
   },
   slidesPerView: 2,
   freeMode: true,
   watchSlidesProgress: true,
   slideToClickedSlide: false,
   breakpoints: {
      0: {
         slidesPerView: 4,
      },
      801: {
         slidesPerView: 6,
      }
   },
});
var swiper2 = new Swiper("#big-slider-massage-salon", {
   loop: true,
   spaceBetween: 40,
   navigation: {
      nextEl: ".massage-salon__button-prev",
      prevEl: ".massage-salon__button-next",
   },
   thumbs: {
      swiper: swiper,
   },
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
});
/*
if (document.querySelectorAll('.big-slider-slide').length > 11) {
   document.getElementById('single-cemeteries-number-slides-zero').remove();
}
*/