import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../../../webpack.config'
import { isProd } from '../../shared/util'

export default function (app) {
  if (!isProd) {
    const compiler = webpack(webpackConfig)

    app.use(webpackMiddleware(compiler, {
      noInfo: false,
      publicPath: webpackConfig.output.publicPath
    }))

    app.use(webpackHotMiddleware(compiler))
  }
}
