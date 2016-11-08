(function(module) {
  var projectsController = {};

  projectsController.reveal = function() {
    // $('#home-objects').hide();
    // $('#curriculumn-vitae').hide();
    // $('#contact-me').hide();
    $('.tab-content').hide();
    $('#projects').show();
  };

  module.projectsController = projectsController;
})(window);
