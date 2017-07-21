var webpack = require('webpack')

module.exports = {
  devtool: "source-map",
  entry: {
    index: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  devServer: {
    port: '9999',
    inline: true,
    contentBase: './',

    //Without this, it showed "Cannot GET /home" when refresh
    historyApiFallback: true,

    proxy: {
      '/v4/api/*': {
        target: 'http://m.maizuo.com',
        host: 'm.maizuo.com',
        changeOrigin: true
      }
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]' //目标文件夹
        }
      },
    ]
  }
}