///////////////////////////////////////////////////////////////////////////////
//
// Express 4.0 starter application
// http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0
//
// This starts a node webserver on either port 3000 or a number given
// in the environments PORT variable.
//
///////////////////////////////////////////////////////////////////////////////

'use strict';

//// IMPORTS //////////////////////////////////////////////////////////////////

require('babel/register'); // Support jsx and ES6 in `required` modules.

var path         = require('path');
var express      = require('express');
var morgan       = require('morgan');
var compression  = require('compression');
var errorHandler = require('errorhandler');
var serverRender = require('./src/js/server');

//// APP //////////////////////////////////////////////////////////////////////

var app  = express();
var env  = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

//// CONFIGURATION ////////////////////////////////////////////////////////////

app.use(compression());

var oneYear = 31557600000;
var distPath = path.join(__dirname, 'src/dist');

// Everything in src/dist will appear to be available at /
// e.g. curl http://localhost:3000/bundle.css
app.use(express.static(distPath, { maxAge : oneYear }));

if (env === 'development') {

  app.use(morgan('dev'));
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));

} else {

  app.use(morgan());
  app.use(errorHandler());

}

//// ROUTES ///////////////////////////////////////////////////////////////////

// Use the JSX
app.use('/', serverRender);

//// Use the static files

//// Errors
app.use(function(err, req, res) {
  res.status(500);
  // TODO: Send a proper error page when not in development.
  res.send('<pre>' + err.stack + '</pre>');
});

//// LAUNCH ///////////////////////////////////////////////////////////////////

app.listen(port);
console.log('Node server listening on port ' + port);

///////////////////////////////////////////////////////////////////////////////
