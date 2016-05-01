$('.top-bar-compare').click(function (e) {
  e.preventDefault();
  $('.top-bar-compare-pop, .mask').slideToggle(400);
});

$('.top-bar-basket').click(function (e) {
  e.preventDefault();
  $('.top-bar-basket-pop, .mask').slideToggle(400);
});

$('.mask').click(function () {
  $('.mask, .popMessage').hide(400);
});