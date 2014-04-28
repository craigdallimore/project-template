//
// Foo directive spec
//
// https://github.com/vojtajina/ng-directive-testing/blob/master/test/tabsSpec.js
// ----------------------------------------------------------------------------

define([

  'angular',
  'angularMocks',
  'directives/foo'

], function(angular, mocks) {

  'use strict';

  describe('Foo directive', function() {

    var elm, scope, html = '<div foo>Original</div>';

    beforeEach(function() {

      mocks.module('myApp');

      mocks.inject(function($rootScope, $compile) {

        elm = angular.element(html);

        scope = $rootScope;
        $compile(elm)(scope);

        scope.$digest();

      });

    });

    it('updates an elements text', function() {

      expect(elm.text()).to.equal('A service and directive have activated.');

    });

  });

});
