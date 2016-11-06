(function(module) {
  var appView = {};

  appView.handleMainNav = function () {
    $('.main-nav').on('click', '.tab', function() {

      $('.tab-content').hide();
      var $thisContent = $(this).attr('data-content');
      $('#'+$thisContent).show();

    });

    $('.main-nav .tab:first').click();
  };

  appView.renderIndexPage = function() {
    Project.allProjects.forEach(function(a){
      $('#projects').append(a.toHtml('#projects-template'));
    });
    appView.handleMainNav();
  };

  Project.fetchAll(appView.renderIndexPage);

  module.appView = appView;
})(window);
