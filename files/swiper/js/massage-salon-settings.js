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
      576: {
         slidesPerView: 3,
      },
      641: {
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