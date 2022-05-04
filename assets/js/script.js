'use strict'

// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-container");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > 200);
//   });
// });

//Popup Searchbar
function openSearch() {
  document.getElementById("searchbar").style.display = "block";
}

function closeSearch() {
  document.getElementById("searchbar").style.display = "none";
}

// Scroll to top button
var mybutton = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Preloader
$(window).on('load', function() {
  // Preloader
  $(".loader").fadeOut(7000);
  $("#preloader").delay(800).fadeOut("slow");
});


// login form
$(".reactive").on("keyup", e => {
  let self = $(e.target);
  let label = self.parent().find("span");
  if (self.val() == "") {
    label.removeClass("expanded");
  } else {
    label.addClass("expanded");
  }
});


(function($) {
  //set background
  $('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  //smooth scrolling
  $(document).ready(function() {
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top - 30
        }, 1000, function() {

          window.location.hash = hash;
        });
      }
    });
  });

  //carousel
  var myCarousel = document.querySelector('.carousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000
  });

})(jQuery);
