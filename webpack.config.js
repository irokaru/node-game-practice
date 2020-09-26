'use strict';

const webpack = require('webpack');
const path = require('path');

const WriteFilePlugin = require('write-file-webpack-plugin');
const PhaserAssetsWebpackPlugin = require('phaser-assets-webpack-plugin');

module.exports = (_env, argv) => ({
  mode: 'production',
  entry: {
    app: './src/index.js',
    vendor: ['phaser']
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        include: path.resolve(__dirname, 'src/'),
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { targets: { node: 'current' } }]
          ]
        }
      }
    ]
  },
  plugins: [
    new WriteFilePlugin(),
    // new PhaserAssetsWebpackPlugin([], { useAbsoluteUrl: false }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
  },
  externals: {},
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  performance: { hints: false }
});
