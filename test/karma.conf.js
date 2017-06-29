module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      '*.js'
    ],
    plugins: ['karma-mocha', 'karma-phantomjs-launcher'],
  })
}
