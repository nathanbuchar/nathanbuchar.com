const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const baseConfig = {
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve('dist'),
    filename: 'page.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: ['html-loader', {
          loader: 'nunjucks-html-loader',
          options: {
            searchPaths: [path.resolve('src')],
          },
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
      global: path.resolve(__dirname, 'src/global/'),
      pages: path.resolve(__dirname, 'src/pages/'),
    },
  },
};

module.exports = [
  {
    ...baseConfig,
    entry: path.resolve('src/pages/home'),
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve('src/pages/home/index.njk'),
        filename: path.resolve('dist/index.html'),
      }),
    ],
  },
];
