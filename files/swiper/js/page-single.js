const last_news_slider = document.querySelector('.page-single-blog__slider')
if (last_news_slider) {
   new Swiper(last_news_slider, {

      // Стрелки
      navigation: {
         prevEl: '.last_news__button-prev',
         nextEl: '.last_news__button-next',
      },

      simulateTouch: false,
      slideToClickedSlide: true,

      // Автовысота
      //autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 3,

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
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         }
      }
   });
}