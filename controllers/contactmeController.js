(function(module) {
  var contactmeController = {};

  contactmeController.reveal = function() {
    $('.tab-content').hide();
    $('#contact-me').show();
  };

  module.contactmeController = contactmeController;
})(window);
