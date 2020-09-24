const  path = require('path')
module.exports={
  // 入口
  entry:{
    index:'./lib/index.tsx'
    // slui:'./lib/index.tsx'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
      },
      {
        test:/\.svg$/,
        loader:'svg-sprite-loader'
      }
    ]
  },
}