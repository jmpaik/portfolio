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

  Project.fetchAll = function(next) {
    if (localStorage.projectsList) {
      $.ajax({
        type: 'HEAD',
        url: '/database/projectsList.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {

            Project.getAll(next);
          } else {
            Project.loadAll(JSON.parse(localStorage.projectsList));
            next();
          }
        }
      });
    } else {
      Project.getAll(next);
    }
  };

  Project.getAll = function(next) {
    $.getJSON('/database/projectsList.json', function(responseData, message, xhr) {
      localStorage.eTag = xhr.getResponseHeader('eTag');
      Project.loadAll(responseData);
      localStorage.projectsList = JSON.stringify(responseData);
      next();
    });
  };

  module.Project = Project;
})(window);
