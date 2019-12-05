const autoprefixer = require("autoprefixer");

// 处理css文件，优化css代码，通过一系列的组件

module.exports = {
  plugins: [
    // 需要加前缀的css属性，用autoprefixer处理
    autoprefixer(),
    
  ]
}