(function(module) {

  function Project (options) {
    for (var keys in options) {
      this[keys] = options[keys];
    }
  }

  Project.allProjects = [];

  Project.prototype.toHtml = function(source) {
    var templateRender = Handlebars.compile($(source).text());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = (this.body);
    return templateRender(this);
  };

  Project.loadAll = function(inputData) {
    inputData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    })
    .forEach(function(ele) {
      Project.allProjects.push(new Project(ele));
    });
  };

  Project.fetchAll = function() {
    if (localStorage.projectsList) {
      var projectsList = JSON.parse(localStorage.getItem('projectsList'));
      Project.loadAll(projectsList);
      appView.renderIndexPage();
    } else {

      $.getJSON('../database/projectsList.json', function(data){
        localStorage.setItem('projectsList', JSON.stringify(data));
        Project.loadAll(data);
        appView.renderIndexPage();
      });
    }

  module.Project = Project;
})(window);
