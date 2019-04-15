const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webPackConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../back-end/server/static')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets'
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = webPackConfig;
