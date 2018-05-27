/*
Menu Notes:
- Smooth Scrolling Aquired From https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
- Collapsing Navbar
*/

$(document).ready(function(){
  $("a").on('click', function(e) {

    if (this.hash !== "") {

      // Store hash Value
      var hash = this.hash;

      //Jquery Animation For Smooth Scrolling
      //Takes 1000ms To Scrolls
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
      });
    }
  });

  //Function For Shrinking Navbar
  function navbarCollapse () {
    if ($("#mainNav").offset().top > 265) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }

  //Execute The Collapsing Navbar Function
  navbarCollapse();

  //Scroll Event
  $(window).scroll(navbarCollapse);
});
