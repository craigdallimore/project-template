///////////////////////////////////////////////////////////////////////////////
//
// server.jsx
//
// Create a server rendered HTML page
//
///////////////////////////////////////////////////////////////////////////////

'use strict';

//// IMPORT ///////////////////////////////////////////////////////////////////

let React      = require('react');
let Router     = require('react-router');
let handlebars = require('handlebars');
let fs         = require('fs');
let routes     = require('./routes.jsx');
let path       = require('path');

//// SHELL ////////////////////////////////////////////////////////////////////

let shellPath = path.join(__dirname, '../template/shell.html');

// Handlebars is used to build the 'shell' html (doctype, head etc) which React
// is not capable of building (having trouble with the seperate <doctype> tag
// and the non-sef-closing <meta> tags.
// Relevant gh issue:
// https://github.com/facebook/react/issues/1035
let shellHTML = fs.readFileSync(shellPath).toString();
let shellTMPL = handlebars.compile(shellHTML);

//// EXPORT ///////////////////////////////////////////////////////////////////

module.exports = (req, res) => {

  Router.run(routes, req.url, Handler => {

    let markup = React.renderToString(<Handler/>);
    res.send(shellTMPL({ content: markup }));

  });

};

///////////////////////////////////////////////////////////////////////////////
