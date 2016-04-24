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
  arrows: false
});