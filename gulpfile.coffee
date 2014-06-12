# gulpfile.coffee
#
# [About gulp](https://github.com/gulpjs/gulp/)
# [About coffeescript](http://coffeescript.org/)
#
# Make sure you have coffee-script:
# ---------------------------------
# $ npm install coffee-script -s
#
# Make sure you have cult
# $ npm install cult -g
#
# To run:
# -------
# $ cult -w

gulp       = require 'gulp'
sass       = require 'gulp-ruby-sass'
rename     = require 'gulp-rename'
gutil      = require 'gulp-util'
gzip       = require 'gulp-zopfli'
browserify = require 'gulp-browserify'

# Tasks relating to JS
gulp.task 'js', ->

  gulp.src './static/js/main.js'
  .pipe browserify
    debug : true
  .on 'error', gutil.log
  .pipe rename 'app.min.js'
  .pipe gzip()
  .pipe gulp.dest './static/dist/'

# Tasks relating to CSS
gulp.task 'css', ->

  gulp.src './static/scss/main.scss'

    # note the sourcemap is appended to the output css
  .pipe sass
    style: 'compressed'
    sourcemap: true


    # --- gulp-sass style --- #
    # sourceComments : 'map'
    # errLogToConsole : true
    # outputStyle    : 'compressed'
    # includePaths   : [ 'static/scss/' ]

  .pipe rename 'app.css'
  .pipe gzip()
  .pipe gulp.dest './static/dist/'

# Watch task
gulp.task 'watch', ->

  gulp.watch [ 'static/scss/**/*.scss' ], [ 'css' ]
  gulp.watch [ 'static/js/**/*.js' ], [ 'js' ]

# Default task
gulp.task 'default', [ 'js', 'css', 'watch' ]


