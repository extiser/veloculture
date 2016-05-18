$('.product-images-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-images-small'
});
$('.product-images-small').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-images-big',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: true,
  prevArrow: '<button class="product-images-small__control product-images-small__control--previous"><i class="icon-angle-left"></i></button>',
  nextArrow: '<button class="product-images-small__control product-images-small__control--next"><i class="icon-angle-right"></i></button>'
});