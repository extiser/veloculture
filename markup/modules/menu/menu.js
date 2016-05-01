$('.left-menu__item .icon').click(function () {
  $(this).next('.menu-drop').slideToggle(100);
  $(this).parent().toggleClass('active');
})
