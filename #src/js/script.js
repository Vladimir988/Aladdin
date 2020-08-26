(function($) {
  $(document).ready(function() {
    
    $('.slick_slider').slick({
      infinite: true,
      slidesToShow: 1,
      dots: false,
      arrows: false,
      speed: 500,
      slidesToScroll: 1
    });

  });
})( jQuery );