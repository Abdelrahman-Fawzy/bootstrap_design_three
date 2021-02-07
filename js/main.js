$(function () {
  'use strict';
  //slider height
  var windowHeight = $(window).height(),
      navbarHeight = $('.navbar').innerHeight(),
      upperbarHeight = $('.upperbar').innerHeight();
  $('.slider, .carousel-item').height(windowHeight - (navbarHeight + upperbarHeight));
  $(window).resize(function () {
    $('.slider, .carousel-item').height(windowHeight - (navbarHeight + upperbarHeight));
  });

  //geatures shuffle images
  $('.featured ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') == 'all') {
      $('.images .col-sm').css('opacity', '1')
    } else {
      $('.images .col-sm').css('opacity', '0.09');
      $($(this).data('class')).parent().css('opacity', '1')
    }
  })

});
