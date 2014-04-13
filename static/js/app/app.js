//
// Application
//
// Here the application is created and imbued with modules.
//
// - services
// - controllers
// - directives
//
// In the first argument to define, the Angular application modules are
// imported wrapped in AMD script modules.
//
// Exports: the application itself
//
// ----------------------------------------------------------------------------

define([

  'angular',
  'controllers/index',
  'directives/foo',
  'services/foo',
  'directives/foo',
  'angularRoute'

], function(angular) {

  'use strict';

  return angular.module('myApp', [

    'ngRoute',
    'myApp.controllers',
    'myApp.directives',
    'myApp.services'

  ]);


});

