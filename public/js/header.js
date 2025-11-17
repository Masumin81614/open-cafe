document.addEventListener("DOMContentLoaded", function () {
  // 1. 必要な要素を探す
  const menuButton = document.querySelector(".l-header__menu--btn"); // メニューボタンの親要素
  const menuContent = document.querySelector(".l-header__inner"); // メニューの中身（表示・非表示を切り替える部分）

  // 2. ボタンがクリックされたときの処理を設定
  menuButton.addEventListener("click", function () {
    menuContent.classList.toggle("is-drawerActive");

    menuButton.classList.toggle("is-drawerActive");

    const isExpanded = menuButton.classList.contains("is-drawerActive");
    menuButton.setAttribute("aria-expanded", isExpanded);
  });
});
