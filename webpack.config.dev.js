
const base = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= Object.assign({},base, {
  mode:'development', //开发模式
  plugins:[
    new HtmlWebpackPlugin({
      title:'SLUI',
      template:'index.html'
    })
  ]
}
)