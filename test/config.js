//
// Test main
//
// Tell Require.js to load our tests, which must be done asynchronously
// as dependencies must be fetched before the tests are run.
//
// ----------------------------------------------------------------------------

var tests = [];

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({

  // Karma serves files from '/base'
  baseUrl: '/base/static/js/app',

  paths: {

    angular        : '../../bower_components/angular/angular.min',
    angularRoute   : '../../bower_components/angular-route/angular-route.min',
    angularAnimate : '../../bower_components/angular-animate/angular-animate.min',
    domready       : '../../bower_components/domready/ready.min',
    jquery         : '../../bower_components/jquery-legacy/jquery'

  },

  shim: {

    'angular'        : { exports : 'angular' },
    'angularRoute'   : [ 'angular' ],
    'angularAnimate' : [ 'angular' ]

  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start

});

