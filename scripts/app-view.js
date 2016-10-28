var appView = {};

appView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {

    $('.tab-content').hide();
    var $thisContent = $(this).attr('data-content');
    $('#'+$thisContent).show();

  });

  $('.main-nav .tab:first').click();
};

appView.handleMainNav();
