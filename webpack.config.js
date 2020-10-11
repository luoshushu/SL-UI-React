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
      },
      {
        test:/\.s([ac]ss$)/,
        use:[
          'style-loader', // 第三步：把css变成style标签 如： <style> //这里是xxx.css解析后的对象内容 </style>
          'css-loader',   // 第二步：把xxx.css变成对象，对象中是css字符串
          'sass-loader'   // 第一步：加载xxx.scss文件变成xxx.css（内容为字符串） 
      ]
      }
    ]
  },
}