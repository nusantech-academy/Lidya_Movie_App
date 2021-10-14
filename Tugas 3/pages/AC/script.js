$(document).ready(function () {
  $('.carousel').slick({
    //   change prev and next button

    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button">&lt;</button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button">&gt;</button>',

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
});
