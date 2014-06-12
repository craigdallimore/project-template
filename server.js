//
// Express 4.0 starter application
// http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0
//
// This starts a node webserver on either port 3000 or a number given
// in the environments PORT variable.
//
// View templates are written in Jade
// http://jade-lang.com/
//
// Routes are imported from server/routes.js
//

// Set up
// ----------------------------------------------------------------------------
var express    = require('express'),
  morgan       = require('morgan'),
  compression  = require('compression'),
  errorHandler = require('errorhandler'),
  app          = express(),
  env          = process.env.NODE_ENV || 'development',
  port         = process.env.PORT || 3000;

// Configuration
// - static file paths
// - view engine
// - logging
// ----------------------------------------------------------------------------

app.set('views', __dirname + '/server/views/');
app.use(compression());

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/static'));

if (env === 'development') {

  app.use(morgan('dev'));
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));

} else {

  app.use(morgan());
  app.use(errorHandler());

}

// Routes
// ----------------------------------------------------------------------------
require('./server/routes')(app);

// Launch
// ----------------------------------------------------------------------------
app.listen(port);
console.log('Node server listening on port ' + port);

