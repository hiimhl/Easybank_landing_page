"use static";

// $(document).ready(function () {
//   $(".menu-btn").on({
//     click: function () {
//       $(".menu-btn").toggleClass("close");
//       $(".header__menu").toggleClass("disable");
//       $(".overlay").toggleClass("disable");
//     },
//   });
// });

// toggle menubar
const menuBtn = document.querySelector(".menu-btn");

function toggleFn() {
  const headerMenu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");
  menuBtn.classList.toggle("close");
  headerMenu.classList.toggle("disable");
  overlay.classList.toggle("disable");
}

menuBtn.addEventListener("click", toggleFn);
