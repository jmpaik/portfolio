(function(module) {
  var projectsController = {};

  projectsController.reveal = function() {
    $('.tab-content').hide();
    $('#projects').show();
  };

  module.projectsController = projectsController;
})(window);
