Router.route('/', function () {
  this.render('welcome', {});
});
Router.route('/welcome', function () {
  this.layout('layoutDefault');
  this.render('welcome', {});
});

Router.route('/shared', function () {
  this.layout('layoutDefault');
  this.render('shared', {});
});

Router.route('/publish', function () {
  this.layout('layoutDefault');
  this.render('publish', {});
});
