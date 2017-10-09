$(document).ready(function() { 

  // navbar appear on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > (window.innerHeight - 100)) {
      $('.navbar-fixed-top').fadeIn(600);
      $('.navbar-fixed-top').css("display", "flex");
    } else {
      $('.navbar-fixed-top').fadeOut(600);
    }
  });

  // slow scroll
  $('a[href*="#"]').click(function(e) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function(){
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          }
        })
      }
    }
  });

  // portfolio overlay
  $('.portfolio__item').hover(function(e) {
    if ($(this).children('.portfolio__overlay').is(':hidden')) {
      $(this).children('.portfolio__overlay').fadeIn(1000);
    } else {
      $(this).children('.portfolio__overlay').fadeOut(500);
    }
    
  })
})
