(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    $('.tab-content').hide();
    $('#home-objects').show();
  };

  module.homeController = homeController;
})(window);
