const fs = require('fs')
const webpack = require('webpack')
const path = require('path')
const express = require('express')
const dockerServer = require('./dockerServerSetup')
const webpackConfig = require('./webpack.config')
const webpackMiddleware = require('webpack-dev-middleware')

const compiler = webpack(webpackConfig)
const PORT = process.env.PORT || 8080
const app = express()

app.use(webpackMiddleware(compiler, {
  noInfo: false,
  publicPath: '/dist'
}))

dockerServer(app, process)

app.get('/', function (req, res) {
  res.send(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'))
})

app.listen(PORT, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '🌎 Listening on port %s (Docker). Open up http://localhost%s in your browser.',
      PORT,
      PORT === 80 ? '' : ':' + PORT
    )
  }
})
