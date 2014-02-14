// Configure app loading
// ----------------------------------------------------------------------------

require.config({

  paths: {

    bacon: 'libs/Bacon',
    react: 'libs/react-addons-0.8'

  }

});

require([ 'app/main' ]);
