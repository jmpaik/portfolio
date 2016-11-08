(function(module) {
  var cvController = {};

  cvController.reveal = function() {
    // $('#home-objects').hide();
    // $('#projects').hide();
    // $('#contact-me').hide();
    $('.tab-content').hide();
    $('#curriculumn-vitae').show();
  };

  module.cvController = cvController;
})(window);
