$(document).ready(function () {
  $('.insideTopToggler').click(function () {
    if ($(this).hasClass('active')) {
      $(this).html('Узнать больше +').removeClass('active');
    } else {
      $(this).html('Свернуть -').addClass('active');
    }
    $(this).parent('.insideTopTogglerParent').find('.insideTopTogglerHide, .insideTopTogglerShow').slideToggle();
  })
});