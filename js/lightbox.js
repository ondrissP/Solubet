(function($) {
  var gallery = $(".gallery"),
  gallery.find("a").on("click", function(event) {
    $("<div id= "overlay"></div>").appendTo("body");
    event.preventDefault();
  });
}) (jQuery);
