//
// Launch controller spec
//
// ----------------------------------------------------------------------------

define([

  'angular',
  'angularMocks',
  'controllers/index'

], function(angular, mocks) {

  'use strict';

  beforeEach(function() {

    mocks.module('myApp');

  });

  describe('Index controller', function() {

    it('has a helloWorld value', function() {

      mocks.inject(function($rootScope, $controller) {

        var $scope = $rootScope.$new();

        $controller('Index', { $scope: $scope });

        $scope.should.have.property('helloWorld');

      });

    });

  });

});
