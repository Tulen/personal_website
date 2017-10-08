// Resources: https://css-tricks.com/snippets/jquery/smooth-scrolling/



$(document).ready(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > (window.innerHeight - 100)) {
      $('.navbar-fixed-top').fadeIn(600);
      $('.navbar-fixed-top').css("display", "flex");
    } else {
      $('.navbar-fixed-top').fadeOut(600);
    }
  });
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
  })
})
