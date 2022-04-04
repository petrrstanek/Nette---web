const path = require('path');
const { resolve: resolvePath } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const ROOT_PATH = __dirname;

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
    web: path.join(ROOT_PATH, 'app/assets/entry.js'),
  },
  output: {
    path: path.join(ROOT_PATH, 'www/assets/dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[name][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // fallback to style-loader in development
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].bundle.css',
      chunkFilename: '[id].bundle.css',
    }),
    new webpack.ProvidePlugin({
      naja: ['naja', 'default'],
      Popper: ['popper.js', 'default'],
    }),
  ],
};
