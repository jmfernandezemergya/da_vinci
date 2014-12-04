/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      // Detectar si es Movil
      var isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };

      $('.js-menu-trigger,.js-menu-screen', context).once('mainMenu', function () {
        $(this).click(function () {
          $('.js-menu,.js-menu-screen').toggleClass('is-visible');
        });
      });

      // On click: add class 'hide' to hide message wrapper
      $('.messages').not($('.admin .messages')).click(function() {$(this).addClass('hide');
      });

      // Show back to top button
      $(window).scroll(function() {
        if ($(window).scrollTop() < $(window).height()*2) {
          $('.backtotop').removeClass('active');
        } else {
          $('.backtotop').addClass('active');
        }
      });
      // Back to top click event
      $(".backtotop").click(function(e) {
        e.preventDefault();
        $('body').animate({
          scrollTop: $('body').offset().top
        }, 500);
        return false;
      });
    }
  }
})(jQuery);
