//
// Foo Service
//
// This is a very basic example factory.
// Other angular services include providers and services
//
// http://docs.angularjs.org/guide/services
// http://stackoverflow.com/questions/15666048/angular-js-service-vs-provider-vs-factory/15666049#15666049
//
// ----------------------------------------------------------------------------

define([ 'services' ], function(services) {

  services.factory('fooFactory', function() {

    return {

      foo: 'A service and directive have activated.'

    };

  });

});

