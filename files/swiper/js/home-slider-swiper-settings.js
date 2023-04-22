const first_screen_slider = document.querySelector('#first-screen-slider')
if (first_screen_slider) {
   new Swiper(first_screen_slider, {

      // Стрелки
      navigation: {
         prevEl: '.first-screen__button-prev',
         nextEl: '.first-screen__button-next',
      },

      simulateTouch: false,
      slideToClickedSlide: true,

      // Автовысота
      //autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 1,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Отступ между слайдами
      spaceBetween: 20,

      loop: true,

      // Скорость
      speed: 800,
      effect: 'slide',
      parallax: true,
      breakpoints: {
         0: {
            slidesPerView: 1,
         },
         641: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 1,
         }
      }
   });
}