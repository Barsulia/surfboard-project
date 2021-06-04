$(document).ready(function(){
  let owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
  });
    // Go to the next item
  $('.products-slider__arrow--right').on('click', function(e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel', [500]);
  });
    // Go to the previous item
  $('.products-slider__arrow--left').on('click', function(e) {
    e.preventDefault();
    owl.trigger('prev.owl.carousel', [500]);
  });
});