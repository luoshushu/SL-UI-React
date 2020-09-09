const base = require('./webpack.config.js')
module.exports = Object.assign({},base,
 {
  mode: 'production', //生产模式
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

}
)