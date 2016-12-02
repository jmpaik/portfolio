(function(module) {
  var aboutmeController = {};

  aboutmeController.reveal = function() {
    $('.tab-content').hide();
    $('#about-me').show();
  };

  module.aboutmeController = aboutmeController;
})(window);
