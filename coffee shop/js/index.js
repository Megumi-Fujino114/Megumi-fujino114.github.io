let mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides : true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    speed: 5000,
    autoplay: {
    delay: 1000,
    disableOnInteraction: true
},
});
