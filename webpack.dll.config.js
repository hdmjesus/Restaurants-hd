const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router',
      'react-hot-loader',
      'react-router-dom',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].dll.js',
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
};
