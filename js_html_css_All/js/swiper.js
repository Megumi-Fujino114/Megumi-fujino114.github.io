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
bubbly({
  colorStart: '#fff4e6',
  colorStop: '#ffe9e4',
  blur: 1,
  compose: 'source-over',
  bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
});

