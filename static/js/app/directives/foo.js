//
// Foo directive
//
// ----------------------------------------------------------------------------

define([ 'directives', 'services/foo' ], function(directives) {

  'use strict';

  directives.directive('foo', [ 'fooFactory', function( fooFactory ) {

    return {

      link: function (scope, el) {
    
        el.text(fooFactory.foo);
    
      }

    };

  }]);

});


