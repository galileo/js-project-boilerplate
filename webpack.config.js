const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/frontend/App.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      React: path.resolve(__dirname, './node_modules/react')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
