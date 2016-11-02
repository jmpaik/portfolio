// var projects = [];
function Project (options) {
  for (var keys in options) {
    this[keys] = options[keys];
  }
}
  // this.title = options.title;
  // this.author = options.author;
  // this.authorUrl = options.authorUrl;
  // this.publishedOn = options.publishedOn;

Project.allProjects = [];

Project.prototype.toHtml = function(source) {
  var templateRender = Handlebars.compile($(source).text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = (this.body);
  return templateRender(this);
  // var source = $('#projects-template').html();
};

Project.loadAll = function(inputData) {
  inputData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  })
  .forEach(function(ele) {
    Project.allProjects.push(new Project(ele));
  });
};
// projectsList.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
Project.fetchAll = function() {
  if (localStorage.projectsList) {
    var projectsList = JSON.parse(localStorage.getItem('projectsList'));
    Project.loadAll(projectsList);
    appView.renderIndexPage();
  } else {
// projectsList.forEach(function(projectsListObject) {
//   projects.push(new Project(projectsListObject));
// });
    $.getJSON('../database/projectsList.json', function(data){
      localStorage.setItem('projectsList', JSON.stringify(data));
      Project.loadAll(data);
      appView.renderIndexPage();
    });
  }
};
// projects.forEach(function(newProjectsListObject){
//   $('#projects').append(newProjectsListObject.toHtml());
// });
