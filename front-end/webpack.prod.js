const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {
  WebpackBundleSizeAnalyzerPlugin
} = require('webpack-bundle-size-analyzer');
const common = require('./webpack.common');

const webPackConfig = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBundleSizeAnalyzerPlugin('./bundle_report.txt')
  ]
});

module.exports = webPackConfig;
