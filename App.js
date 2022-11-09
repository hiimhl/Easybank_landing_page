"use static";
// toggle menubar
$(document).ready(function () {
  $(".menu-btn").on({
    click: function () {
      $(".menu-btn").toggleClass("close");
      $(".header__menu").toggleClass("disable");
      $(".overlay").toggleClass("disable");
      console.log("hi");
    },
  });
});
