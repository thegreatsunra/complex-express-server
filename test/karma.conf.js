module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    files: [
      '*.js'
    ],
    plugins: ['karma-mocha'],
  })
}
