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
    plugins: ['karma-mocha', 'karma-webpack', 'karma-phantomjs-launcher'],
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
          }
        ]
      }
    },
    webpackMiddleware: {
    }
  })
}
