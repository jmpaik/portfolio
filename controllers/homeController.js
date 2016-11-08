(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    // $('#curriculumn-vitae').hide();
    // $('#projects').hide();
    // $('#contact-me').hide();
    $('.tab-content').hide();
    $('#home-objects').show();
  };

  module.homeController = homeController;
})(window);
