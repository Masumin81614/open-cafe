document.addEventListener("DOMContentLoaded", function () {
  const pageTopBtn = document.getElementById("pageTop");

  if (pageTopBtn) {
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY > 80) {
        pageTopBtn.classList.add("is-active");
      } else {
        pageTopBtn.classList.remove("is-active");
      }
    });

    pageTopBtn.addEventListener("click", function (e) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
