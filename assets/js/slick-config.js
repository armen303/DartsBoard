// slickConfigBannerSlider
$('[banner-slider]').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   // variableWidth: true,
   arrows: true,
   autoplay: true,
   asNavFor: '[banner-img-slider]',
   prevArrow: "<button class='slick-prev arrow-hover d-f j-c-e a-i-c'><i class='arrow arrow-left arrow-white slick-arrow-custom'></i></button>",
   nextArrow: "<button class='slick-next arrow-hover'><i class='arrow arrow-right arrow-white slick-arrow-custom'></i></button>",
   responsive: [{
         breakpoint: 1279.98,
         settings: {
            arrows: false,
         },
      },
      {
         breakpoint: 767.98,
         settings: {
            variableWidth: false,
            arrows: false,
         },
      },
   ],
});

$('[banner-img-slider]').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '[banner-slider]',
})

// slickConfigProductsSlider
$('[products-slider]').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   variableWidth: true,
   arrows: true,
   prevArrow: "<button class='slick-prev arrow-hover d-f j-c-e a-i-c'><i class='arrow arrow-left arrow-black slick-arrow-custom'></i></button>",
   nextArrow: "<button class='slick-next arrow-hover'><i class='arrow arrow-right arrow-black slick-arrow-custom'></i></button>",
   responsive: [{
      breakpoint: 1279.98,
      settings: {
         centerMode: true,
         slidesToShow: 1,
      },
   }, ],
});


// slickConfigRecommendedSlider
$('[recommended-slider]').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   // variableWidth: true,
   arrows: true,
   // autoplay: true,
   prevArrow: "<button class='slick-prev arrow-hover d-f j-c-e a-i-c'><i class='arrow arrow-left arrow-white slick-arrow-custom'></i></button>",
   nextArrow: "<button class='slick-next arrow-hover'><i class='arrow arrow-right arrow-white slick-arrow-custom'></i></button>",
   dots: true,
   dotsClass: 'slick-dots-counter',
   customPaging: function (slider, i) {
      return (i + 1) + ' / ' + slider.slideCount;
   },
   responsive: [{
      breakpoint: 767.98,
      settings: {
         variableWidth: false,
      },
   }, ],
});


// slickConfigRecommendedProductsSlider
$('[recommended-products-slider]').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   variableWidth: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 500,
   speed: 1500,
});


// slickConfigCommentsSlider
$('[comments-slider]').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: "<button class='slick-prev arrow-hover d-f j-c-e a-i-c'><i class='arrow arrow-left arrow-black slick-arrow-custom'></i></button>",
   nextArrow: "<button class='slick-next arrow-hover'><i class='arrow arrow-right arrow-black slick-arrow-custom'></i></button>",
   dots: true,
   dotsClass: 'slick-dots-counter',
   customPaging: function (slider, i) {
      return (i + 1) + ' / ' + slider.slideCount;
   },
   responsive: [{
      breakpoint: 767.98,
      settings: {
         variableWidth: false,
      },
   }, ],
});