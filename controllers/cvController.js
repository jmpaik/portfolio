(function(module) {
  var cvController = {};

  cvController.reveal = function() {
    $('.tab-content').hide();
    $('#curriculumn-vitae').show();
  };

  module.cvController = cvController;
})(window);
