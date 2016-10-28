var appView = {};

appView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    /* TODO:
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */

    $('.tab-content').hide();
    var $thisContent = $(this).attr('data-content');
    $('#'+$thisContent).show();

  });
  $('.main-nav .tab:first').click();
};

appView.handleMainNav();
