$(document).ready(function () {
  $(".input").focus(function () {
    $(this).parent().find(".label-txt").addClass("label-active");
  });

  $(".input").focusout(function () {
    if ($(this).val() == "") {
      $(this).parent().find(".label-txt").removeClass("label-active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector(".navbar_top").classList.add("fixed-top");
    } else {
      document.querySelector(".navbar_top").classList.remove("fixed-top");
    }
  });
});
