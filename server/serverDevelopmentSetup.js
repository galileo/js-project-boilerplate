const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../webpack.config')

module.exports = function (app, process) {
  // validate app and process

  if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig)

    app.use(webpackMiddleware(compiler, {
      noInfo: false,
      publicPath: webpackConfig.output.publicPath
    }))

    app.use(webpackHotMiddleware(compiler))
  }
}
