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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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

  // Typewriter effect for slider
  function typeText(element, text) {
    element.innerText = '';
    let index = 0;

    function type() {
      if (index < text.length) {
        element.innerText += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
      }
    }

    type();
  }

  function initTypingEffect() {
    const currentSlide = $('.slider-banner').slick('slickCurrentSlide');
    const textElement = $('.slider-banner .slick-slide[data-slick-index="' + currentSlide + '"] #typing-text');
    const textToType = textElement.data('text');

    typeText(textElement[0], textToType);
  }

  $('.slider-banner').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    const textElement = $('.slider-banner .slick-slide[data-slick-index="' + nextSlide + '"] #typing-text');
    const textToType = textElement.data('text');

    typeText(textElement[0], textToType);
  });

  // Initialize typing effect on page load
  // initTypingEffect();
  
  document.getElementById('indigenousFeatures').addEventListener('click', () => {
      document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('typing-text');
  const textToType = textElement.dataset.text;
  textElement.innerText = '';

  let index = 0;

  function typeText() {
      if (index < textToType.length) {
          textElement.innerText += textToType.charAt(index);
          index++;
          setTimeout(typeText, 100); // Adjust typing speed here
      }
  }

  typeText();
});

$(".banner-button").on("click", function () {
  var currentSlide = $(".slider-banner").slick("slickCurrentSlide");
  var targetSection;

  switch (currentSlide) {
    case 0:
      targetSection = "#business"; // Replace with the ID of your first section
      break;
    case 1:
      targetSection = "#product"; // Replace with the ID of your second section
      break;
    case 2:
      targetSection = "#features"; // Replace with the ID of your third section
      break;
    default:
      targetSection = "#"; // Default to first section
      break;
  }

  $(targetSection)[0].scrollIntoView({ behavior: "smooth" });
});



// function typeText(element, text) {
//   element.innerText = '';
//   let index = 0;

//   function type() {
//       if (index < text.length) {
//           if (text.charAt(index) === ' ') {
//               // If the character is a space, add a non-breaking space
//               element.innerHTML += '&nbsp;';
//           } else {
//               element.innerText += text.charAt(index);
//           }
//           index++;
//           setTimeout(type, 100); // Adjust typing speed here
//       }
//   }

//   type();
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const textElement = document.getElementById('typing-text');
//   const textToType = textElement.dataset.text;
//   textElement.innerText = '';

//   typeText(textElement, textToType);
// });

// -------------------------------------------
// Goto top button script

$(window).scroll(function() {
  if ($(this).scrollTop()) {
      $('#toTop').fadeIn();
  } else {
      $('#toTop').fadeOut();
  }
});

$("#toTop").click(function () {
 //1 second of animation time
 //html works for FFX but not Chrome
 //body works for Chrome but not FFX
 //This strange selector seems to work universally
 $("html, body").animate({scrollTop: 0}, 500);
});

// -------------------------------------------