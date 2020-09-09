const  path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  mode:'production', //生产模式
  // 入口
  entry:{
    index:'./lib/index.tsx'
    // slui:'./lib/index.tsx'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  // 排除react 打包 否知体积变大
  externals: {
    react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
    },
    'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
    },
},
  // 输出代码
  output:{
    path:path.resolve(__dirname,'dist/lib'), //输出到这个地址
    library:'SLUI',
    libraryTarget:'umd', //webpack模块定义 umd兼容最强
  },
  // 输入 翻译成js
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        loader:'awesome-typescript-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'SLUI',
      template:'index.html'
    })
  ]
}