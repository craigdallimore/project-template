Project Scaffold
================

[![Build Status](https://travis-ci.org/craigdallimore/project-template.png?branch=master)](https://travis-ci.org/craigdallimore/project-template)

Yo, this is the classic never-finished project scaffold. I'll keep on poking it
and prodding it whenever I am distracted by some hipster library or other,
adding new bits and pulling old bits out.

Todo
----
- Total coverage
- use jest instead of karma
- fix travis
- move script tag to bottom (moar speed!)
- Coverage badge
- Minified output depending on environment
- Livereload injected in dev mode
- Error pages when not in development mode
- Moar docs
- scss-lint.yml https://github.com/causes/scss-lint
- compressed html output
- automated testing
- docs for:
 - how to install node, npm etc, how to get it running
 - developing
 - deploying
 - testing
 - a better intro (explain the opinions etc)
 - toc

Keeping packages up to date:
----------------------------

When coming back to the scaffold, it might be useful to pre-emptively check
whether any of the packages need updates:

```
npm i -g npm-check-updates
npm-check-updates -u
```

Requires
--------

- [http://sass-lang.com/](SASS 3.3+) CSS preprocessor
- [http://gulpjs.com/](Gulp taskrunner) for managing SCSS and JS build tasks
- [http://nodejs.org/download/](NodeJS and NPM) to install node modules and to run Grunt
- [http://browserify.org/](Browserify) for dependency resolution and minification
- [http://karma-runner.github.io/0.12/index.html](Karma) A test runner

Installation
------------

- Install nodeJS and NPM if they are not already installed:

` yum install nodejs npm `
TODO: no no no, use nvm plz.

- Install these global node packages

```
npm install -g grunt-cli
npm install -g nodemon
npm install -g browserify
```

- Install local node packages

` npm install `

- Install bower components

` bower install `

- Run the gulp "css" task

` gulp css `

- To start the node server

` nodemon server.js `
