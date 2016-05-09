$('.checkbox').on('click',function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
});

(function($){
  $(window).load(function(){
    $(".custom-scroll").mCustomScrollbar({
      scrollbarPosition: 'inside'
    });
  });
})(jQuery);