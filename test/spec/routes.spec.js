//
// Routes spec
// http://stackoverflow.com/questions/15990102/angularjs-route-unit-testing
// ----------------------------------------------------------------------------

define([

  'angular',
  'angularMocks',
  'routes'

], function(angular, mocks) {

  'use strict';

  describe('Route module', function() {

    beforeEach(function() {

      mocks.module('myApp');

    });

    describe('/', function() {

      it('uses the Index controller and the Index template', function() {

        mocks.inject(function($route) {

          expect($route.current).to.be['undefined'];

          expect($route.routes['/'].templateUrl).to.equal('static/templates/index.html');
          expect($route.routes['/'].controller).to.equal('Index');

        });

      });

    });

  });

});

