//
// RequireJS AMD Configuration
// http://www.requirejs.org/
//
// Configures the script loader / dependency tree
// 
// ----------------------------------------------------------------------------

require.config({

  baseUrl: 'static/js/app/',

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
    'angularAnimate' : [ 'angular' ],
    'angularCookies' : [ 'angular' ]

  }

});

//
// Now the scriptloader is configured, the Angular application can be loaded
// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
//

window.name = 'NG_DEFER_BOOTSTRAP!';

require([ 'main' ]);

