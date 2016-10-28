var projects = [];

function Project (options) {

  this.title = options.title;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
};

Project.prototype.toHtml = function() {

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  var source = $('#projects-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

projectsList.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectsList.forEach(function(projectsListObject) {
  projects.push(new Project(projectsListObject));
});

projects.forEach(function(newProjectsListObject){
  $('#projects').append(newProjectsListObject.toHtml());
});
