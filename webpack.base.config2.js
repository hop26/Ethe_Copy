var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {

  output:{
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
      test:/\.css$/,
      use: ['style-loader', 'css-loader']
      },
    //   {
    // test: /\.(png|svg|jpg|gif|jpeg|ttf)$/,
    // use: 'url-loader'
    //
    // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      // filename: './src/index.html'
    })
  ]
}
