$(document).ready(function () {
  AOS.init();

  $(".menu_icon").on("click", function () {
    $(".navigation").toggle(300);
  });

  $('a').on('click', function () {
    if (window.innerWidth < 800) {
      $(".navigation").toggle();
    };
  });
})