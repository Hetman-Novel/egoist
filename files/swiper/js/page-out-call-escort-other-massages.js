const page_out_call_escort_other_massages = document.getElementById('other-massages')
if (page_out_call_escort_other_massages) {
    new Swiper(page_out_call_escort_other_massages, {

    // Стрелки
    navigation: {
        prevEl: '.other-massages__button-prev',
        nextEl: '.other-massages__button-next',
    },

    simulateTouch: false,
    slideToClickedSlide: true,

    // Автовысота
    //autoHeight: true,

    // Количество слайдов для показа
    slidesPerView: 4,

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 16,

    loop: true,

    // Скорость
    speed: 800,
    effect: 'slide',
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        801: {
            slidesPerView: 4,
        },
    }

    });
}