export function slider(){

    $('.carousel').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 6,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                }
              },

              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 2,
                }
              }
        ]
    });

    $('.carousel-blog').slick({
      dots: false,
      arrows: false,
      autoplay: true,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '40px',
      autoplaySpeed: 4000,
      responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              centerPadding: '10px',

            }
          }
    ]

    });

    $('.hero__slider').slick({
      dots: false,
      arrows: false,
      autoplay: true,
      slidesToShow: 1,
      autoplaySpeed: 4000
    });

}