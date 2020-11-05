(function($){

// scroll------------------------------------------
  var subMenu = $(".sub-menu"),
      menuLinks = subMenu.find("a");

  menuLinks.on("click", function(event) {
    $("html, body").animate({ scrollTop: $(this.hash).offset().top}, 500);
    event.preventDefault();
  });


// back to top-----------------------------------------------
  var backToTop = $("<a>", {
                  href: "#",
                  class: "back_to_top",
                  html: `<i class="fas fa-arrow-up fa-4x"></i>`
                });
  backToTop
        .hide()
        .appendTo("body")
        .on("click", function() {
                $("html, body").animate({scrollTop: 0});
        });
  var win = $(window);
  win.on("scroll", function(){
    if (win.scrollTop() >= 750 ) backToTop.fadeIn();
    else backToTop.fadeOut();
  });

// Lightbox----------------------------------------------------------------

  var gallery = $('.gallery')

  var overlay = $("<div/>",  {id: "overlay" });
      overlay
        .appendTo("body")
        .hide();

      gallery
        .find('a')
        .on('click', function(event){
          var href = $ (this).attr('href'),
              image = $ ('<img>', {src: href});

      overlay
        .html(image)
        .fadeIn();
    event.preventDefault();
});
    overlay.on('click', function(){
      overlay.fadeOut();
    });

    $(document).on('keyup', function(event){
     if (event.which === 27) overlay.fadeOut();
    });


// Menu Responsive----------------------------------------
    var menuCover = $('#menu-cover')

    menuCover.hide();

    $('.menu-icon').click(function() {
      var menuCover = $('#menu-cover')
          menuIcon = $('.menu-icon i')

      menuCover.slideToggle(200);

      /*
      if (menuIcon.hasClass('fa fa-bars')) {
        menuIcon.addClass('fas fa-times');
        menuIcon.removeClass('fa fa-bars');
      } else {
        menuIcon.addClass('fa fa-bars');
        menuIcon.removeClass('fas fa-times');
      }
      */
    });

      menuCover.on('click', function(){
        menuCover.slideToggle();
      });
      $(document).on('keyup', function(event){
       if (event.which === 27) menuCover.slideUp();
    });

// Submenu dropdown - select or die plugin-------------------

    var select = $(".sub-menu-dropdown select");
    select.selectOrDie();

    select.change(function() {
      location = this.options[this.selectedIndex].value;
    });

})(jQuery);