#
# Karma configuration
#
# ----------------------------------------------------------------------------

module.exports = (config) ->

  config.set

    basePath   : ''

    frameworks : [

      'mocha'
      'requirejs'
      'sinon-chai'

    ]

    plugins : [ 'karma-*' ]

    files: [

      { pattern: 'static/js/**/*.js', included: false }
      { pattern: 'test/**/*spec.js',  included: false }

    ]

    exclude: [ '**/*.swp' ]

    reporters: [

      'progress'
      'coverage'

    ]

    coverageReporter: {

      reporters: [

        { type : 'lcov', dir : 'test/coverage/' }
        { type : 'text', dir : 'test/coverage/' }

      ]

      dir : 'test/coverage'

    }

    preprocessors : {

      'static/js/**/*.js' : [ 'coverage' ]

    }

    port      : 9876

    colors    : true

    logLevel  : config.LOG_INFO

    autoWatch : true

    # Start these browsers, currently available:
    # - Chrome
    # - ChromeCanary
    # - Firefox
    # - Opera (has to be installed with `npm install karma-opera-launcher`)
    # - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    # - PhantomJS
    # - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)

    browsers: [

      'Chrome',
      # 'PhantomJS'

    ]

    captureTimeout: 60000

    # Continuous Integration mode
    # if true, it capture browsers, run tests and exit
    singleRun: false

