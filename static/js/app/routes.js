//
// Routes
//
// Establishes relationships between the route and a template & controller.
//
// ----------------------------------------------------------------------------

define([ 'angular', 'app' ], function( angular, myApp ) {

  'use strict';

  return myApp.config([

    '$routeProvider',
    '$locationProvider', function($routeProvider) {

      // Index
      $routeProvider.when('/', {

        templateUrl: 'static/templates/index.html',
        controller:  'Index'

      });

      $routeProvider.otherwise({ redirectTo: '/' });

    }
  ]);

});

