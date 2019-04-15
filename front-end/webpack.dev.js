const merge = require('webpack-merge');
const common = require('./webpack.common');

const webPackConfig = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8081,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true
      }
    }
  }
});

module.exports = webPackConfig;
