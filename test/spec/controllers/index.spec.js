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

  describe('Index controller', function() {

    beforeEach(function() {

      mocks.module('myApp');

    });

    it('has a helloWorld value', function() {

      mocks.inject(function($rootScope, $controller) {

        var $scope = $rootScope.$new();

        $controller('Index', { $scope: $scope });

        $scope.should.have.property('helloWorld');
        $scope.helloWorld.should.equal('Kaizen!');

      });

    });

  });

});
