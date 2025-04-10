var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 8,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
