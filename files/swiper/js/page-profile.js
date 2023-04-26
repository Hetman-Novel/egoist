var swiper = new Swiper("#small-slider", {
    loop: true,
    spaceBetween: 5,
    /*navigation: {
        nextEl: ".page-profile__button-prev",
        prevEl: ".page-profile__button-next",
    },*/
    slidesPerView: 4,
    slidesPerGroup: 1,
    freeMode: true,
    watchSlidesProgress: true,
    slideToClickedSlide: false,
    // Включить/отключить
   // перетаскивания на ПК
   simulateTouch: false, // true / false
   // Чувствительность свайпа
   touchRation: 1, // По умолчанию 1 / 0 отключает перетаскивание на всех устройствах
   // Угол срабатывания свайпа/перетаскивания
   touchAngle: 45,
   // Курсор перетаскивания
   grabCursor: false, // true / false
    //autoHeight: true,
    //centeredSlides: true,
    //roundLengths: true,
});
var swiper2 = new Swiper("#big-slider", {
    loop: true,
    spaceBetween: 50,
    navigation: {
        nextEl: ".page-profile__button-prev",
        prevEl: ".page-profile__button-next",
    },
    thumbs: {
        swiper: swiper,
    }
});