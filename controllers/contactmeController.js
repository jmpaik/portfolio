(function(module) {
  var contactmeController = {};

  contactmeController.reveal = function() {
    // $('#home-objects').hide();
    // $('#curriculumn-vitae').hide();
    // $('#projects').hide();
    $('.tab-content').hide();
    $('#contact-me').show();
  };

  module.contactmeController = contactmeController;
})(window);
