//
// Main
//
// This loads the angular and domready libraries, then the application
// implementation and routes.
//
// When these are loaded and the document is ready, the application can launch.
//
// ----------------------------------------------------------------------------

require([

  'angular',
  'domready',
  'app',
  'routes'

], function(angular, domReady) {

  'use strict';

  domReady(function() {

    // http://docs.angularjs.org/guide/bootstrap
    // This expects ng-app to be set in the DOM
    angular.resumeBootstrap();

  });

});
