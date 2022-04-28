$(function(){
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    wow = new WOW(
        {
          boxClass: 'wow',      // default
          animateClass: 'animate__animated', // default
          offset: 0,          // default
          mobile: true,       // default
          live: true        // default
        }
      )
      wow.init();
});