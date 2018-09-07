let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// let DashboardPlugin = require('webpack-dashboard/plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const sourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './dist');
const testPath = path.join(__dirname, './test');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
       rules: [
           {
               test: /\.jsx?$/,
               loader: 'babel-loader',
               exclude: /node_modules/
           }
       ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
    })
  ],
  devServer: {
    contentBase: isProduction ? buildPath : sourcePath,
    historyApiFallback: true,
    port: 8888,
    proxy: {
      "/api": "http://localhost:8080"
    },
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    }
  },
  devtool: 'eval-source-map'
};
