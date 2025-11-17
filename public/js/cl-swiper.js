const swiper = new Swiper(".swiper", {
  effect: "fade",

  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // ページネーション（ドット）
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
