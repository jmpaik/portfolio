(function(module) {

  var appView = {};

  appView.renderIndexPage = function() {
    Project.allProjects.forEach(function(a){
      $('#projects').append(a.toHtml('#projects-template'));
    });
  };

  Project.fetchAll(appView.renderIndexPage);

  module.appView = appView;
})(window);
