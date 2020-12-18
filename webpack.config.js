const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
//Limpia los build anteriores antes de hacer build
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  entry: { app: path.resolve(__dirname, './src/index.js') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    //PublicPath indicamos a webpack la ruta donde vamos a buscar archivos nuevos
    // publicPath: 'dist/',
    //ChuckFileName es usado para personalizar el nombre de los chunks
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
              limit: 1000,
              name: '[contenthash].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      //Asi agregamos el favicon
      // favicon: path.resolve(__dirname, 'src/favicon.ico'),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'js/',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[chunkhash].css',
    }),
    // new webpack.DllReferencePlugin({
    //   manifest: require('./modules-manifest.json'),
    //   // context: path.resolve(__dirname, '.src/'),
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
};
module.exports = config;
