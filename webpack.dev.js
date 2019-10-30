const merge = require('webpack-merge');
const common = require('./webpack.config.js');

vomdule.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            filename: '[path][name].[ext]'
          },
        ],
      },
    ]
  }
});
