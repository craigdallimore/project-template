###############################################################################
#
# gulpfile.coffee
#
# [About gulp](https://github.com/gulpjs/gulp/)
# [About coffeescript](http://coffeescript.org/)
#
# Make sure you have coffee-script:
# ---------------------------------
# $ npm install coffee-script -s
#
# To run:
# -------
# $ gulp
#
#### IMPORTS ##################################################################

gulp       = require 'gulp'
sass       = require 'gulp-sass'
gutil      = require 'gulp-util'
browserify = require 'browserify'
watchify   = require 'watchify'
babelify   = require 'babelify'
source     = require 'vinyl-source-stream'  # Bridge text stream -> gulp stream
buffer     = require 'vinyl-buffer'
rename     = require 'gulp-rename'
sourcemaps = require 'gulp-sourcemaps'
modernizr  = require 'gulp-modernizr'
livereload = require 'gulp-livereload'

#### HELPERS ##################################################################

# Handle browserify errors.
handleError = (err) ->
  gutil.log err.message
  this.emit 'end'

#### FILES / FOLDERS  #########################################################

mapsDir        = './' # put sourcemaps at the same level as the bundled files.

jsEntryFile    = './src/js/client.js'
jsPath         = './src/js/'
jsBundle       = 'bundle.js'

scssEntryFile  = './src/scss/main.scss'
scssPath       = './src/scss/'
cssBundle      = 'bundle.css'

destFolder     = './src/dist/'

#### CSS TASKS ################################################################

gulp.task 'css', ->

  gulp.src scssEntryFile,
    errLogToConsole: true,
    onError: handleError
  .pipe sourcemaps.init()
    .pipe sass()
    .pipe rename cssBundle
  .pipe sourcemaps.write mapsDir
  .pipe gulp.dest destFolder
  .pipe livereload()

#### BROWSERIFY BUNDLER #######################################################
# https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

bundler = browserify jsEntryFile,
    cache        : {}
    packageCache : {}
    fullPaths    : true
    debug        : true
  .transform babelify.configure
    optional : [ 'runtime' ]

watchedBundler = watchify bundler

watchAndBundle = () ->
  watchedBundler.bundle()
    .on 'error', handleError
    .pipe source jsBundle
    .pipe gulp.dest destFolder
    .pipe livereload()

watchedBundler.on 'update', watchAndBundle
watchedBundler.on 'log', gutil.log

#### JS TASKS #################################################################

gulp.task 'js', ->

  # Alas, we have duplication - the watch version does almost the same thing.
  # TODO: find a way to have a standalone / watchified version of the same
  # configuration.
  b = browserify jsEntryFile,
    cache        : {}
    packageCache : {}
    fullPaths    : true
    debug        : true
  .transform babelify.configure
    optional : [ 'runtime' ]

  b.bundle()
    .on 'error', handleError
    .pipe source jsBundle
    .pipe buffer()
    .pipe sourcemaps.init
      loadMaps: true
    .pipe sourcemaps.write './'
    .pipe gulp.dest destFolder
    .pipe livereload()

#### CSS TASKS ################################################################

gulp.task 'css', ->

  gulp.src scssEntryFile,
    errLogToConsole: true,
    onError: handleError
  .pipe sourcemaps.init()
    .pipe sass()
    .pipe rename cssBundle
  .pipe sourcemaps.write mapsDir
  .pipe gulp.dest destFolder
  .pipe livereload()

#### FEATURES TASK ############################################################

# Use [gulp-modernizr](https://github.com/doctyper/gulp-modernizr) to crawl
# through project files looking for modernizr tests, and output a custom
# modernizr build with only the required tests.

gulp.task 'features', [ 'js' ], ->

  gulp.src destFolder + jsBundle
    .pipe modernizr()
    .pipe gulp.dest destFolder

#### WATCH TASK ###############################################################

gulp.task 'watch', ->

  livereload.listen()

  watchAndBundle() # Start watchify

  gulp.watch [
    scssPath + '**/*.scss'
  ], [ 'css' ]

#### DEFAULT TASK #############################################################

# For development

gulp.task 'default', [ 'js', 'css', 'watch' ]

#### DEPLOY TASK ##############################################################

# For deployment. The modernizr feature detect script is expensive, so we don't
# want (or need) to run it on every change to the JavaScript, rather only when:
# a) we are deploying
# b) we add a new feature test

gulp.task 'deploy', [ 'js', 'css', 'features' ]

#### KAIZEN ###################################################################
