$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".slider-banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  var topHeaderHeight = $(".header-section").outerHeight();
  var footerHeight = $(".footer-section").outerHeight();
  var documentHeight = $(document).height();
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var scrollBottom = scrollTop + windowHeight;

    // Check if scroll is past the header and not in the footer
    if (
      scrollTop > topHeaderHeight + 50 &&
      scrollBottom < documentHeight - footerHeight + 150
    ) {
      $(".bottom-header-section").fadeIn();
    } else {
      $(".bottom-header-section").fadeOut();
    }
  });

  var dynamicNumberElement = document.querySelectorAll(".dynamic-number");
  var number = 0; // This can be set dynamically
  dynamicNumberElement.forEach((element) => {
    element.setAttribute("data-number", "#" + ++number);
  });
});
