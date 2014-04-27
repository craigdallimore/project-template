Project Scaffold
================

[![Build Status](https://travis-ci.org/craigdallimore/project-template.png?branch=master)](https://travis-ci.org/craigdallimore/project-template)

Requires
--------

- [http://sass-lang.com/](SASS 3.3+) CSS preprocessor
- [http://gruntjs.com/](Grunt taskrunner) for managing SCSS and JS build tasks
- [http://nodejs.org/download/](NodeJS and NPM) to install node modules and to run Grunt
- [http://bower.io/](Bower) to fetch browser deps
- [http://karma-runner.github.io/0.12/index.html](Karma) A test runner

Installation
------------

- Install nodeJS and NPM if they are not already installed:

` yum install nodejs npm `

- Install these gems ( used for CSS preprocessing )

` gem install sass compass `

- Install these global node packages

```
npm install -g bower
npm install -g grunt-cli
npm install -g karma
npm install -g nodemon
```

- Install local node packages and bower componenets

` npm install && bower install `

- Run the grunt "sass" task

` grunt sass `

- To start the node server

` forever start server.js `

- To start the Karma tests / coverage reporting

` karma start `

Sets up configuration for:
--------------------------

- Grunt
- Angular with AMD
- Bower
- Karma
- Jade
- Istanbul
- Express 4

Desirable:
----------

- Total coverage
- Coverage badge
- Gulp ?
- Minified env
