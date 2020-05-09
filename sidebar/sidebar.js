const $closebtn = document.querySelector(".close");

const $menu = document.querySelector(".show-menu");

const $sideBar = document.querySelector(".sidebar");

$menu.addEventListener("click", (e) => {
  $sideBar.style.left = "0";
});

$closebtn.addEventListener("click", (e) => {
  $sideBar.style.left = "-25rem";
});
