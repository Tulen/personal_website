// Resources: https://css-tricks.com/snippets/jquery/smooth-scrolling/

// const state = {
//   aboutDisplay: false,
//   projectDisplay: false,
//   contactDisplay: false
// }

$(document).ready(function() {
  // $('.about__switch').click(function(e) {
  //   state.aboutDisplay ? state.aboutDisplay = false : state.aboutDisplay = true;
  //   alert(state.aboutDisplay);
  // })
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
