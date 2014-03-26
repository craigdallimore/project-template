// Configure app loading
// ----------------------------------------------------------------------------

require.config({

  baseUrl: 'static/js/app/',

  paths: {

    jquery: '../../bower_components/jquery-legacy/jquery',

  },

  shim: {

    'jquery': { exports: '$' }

  }

});

require([ 'main' ]);
