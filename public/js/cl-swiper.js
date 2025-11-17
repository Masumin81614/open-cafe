const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 4000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
