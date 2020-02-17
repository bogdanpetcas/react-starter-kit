var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: __dirname + '/app/',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'production',
  performance: { hints: false },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin(
      {
        filename: 'bundle.js.map',
        exclude: ['vendor.js']
      }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: 'bundle.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader', 'source-map-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]',
              camelCase: true,
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      actions: __dirname + '/app/src/actions',
      components: __dirname + '/app/src/components',
      middlewares: __dirname + '/app/src/middlewares',
      modals: __dirname + '/app/src/modals',
      reducers: __dirname + '/app/src/reducers',
      utils: __dirname + '/app/src/utils'
    },
    extensions: ['*', '.js', '.jsx', '.scss']
  }
};
