const merge = require('webpack-merge');
const common = require('./webpack.config.js');

vomdule.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [

    ]
  }
});
