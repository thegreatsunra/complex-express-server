module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      '*.js'
    ],
    preprocessors: {
      '*.js': ['webpack']
    },
    plugins: ['karma-mocha', 'karma-phantomjs-launcher'],
    webpack: {
    },
    webpackMiddleware: {
    }
  })
}
