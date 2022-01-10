var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    heyboard: true,  
    breakpoints: {
        500: {
            slidesPerView: 2,
            setWrapperSize: true
        },

        776: {
            slidesPerView: 3
        },

        992: {
            slidesPerView: 3,
            setWrapperSize: true
        },

        1200: {
            slidesPerView: 4,
            setWrapperSize: true
        }
    }
})