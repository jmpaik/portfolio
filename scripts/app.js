var projects = [];

function Project (options) {
/* TODO: This is our Model constructor. It will take in
   our source data from blogArticles and instantiate a
   new Object according to this new definition. options is
   a placeholder for the object that will ultimately be
   passed in. Use all of the properties in blogArticles
   to populate the new Article data that we'll use.  */
  this.title = options.title;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
};

Project.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();
  /* TODO: We also need to fill in:
  1. author name
  2. author url
  3. article title
  4. article body
  5. publication*/
  $newProject.find('h1').html(this.title);
  $newProject.find('a').attr('href', this.authorUrl);
  $newProject.find('a').html(this.author);
  $newProject.find('section.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
/* TODO: This cloned article is no longer a template, as it now
has real data attached to it. Remove the class from this new article! */
  $newProject.removeClass('template');
  return $newProject;
};

/* This sort method is a standard JavaScript Array function
   that will iterate over an array and compare its values,
   and then arrange them in ascending or descending order
   according to the return value. We are comparing the
   publishedOn properties to arrange the blog posts in
   descending order (most recent first). */
projectsList.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

projectsList.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(article) {
  $('#projects').append(project.toHtml());
});
