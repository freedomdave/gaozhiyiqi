## npm 

package.json文件中的所需内容。它必须是实际的JSON，而不仅仅是JavaScript对象文字。

**常见的几种场景如下**：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

### **常用命令**

- 查看版本号 eg： ``npm -v``
- 查看所有命令 eg：  ``npm help``
- 查看某条命令的详细帮助 eg：  ``npm help install``
- 使用淘宝镜像的命令：
  ```bash
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```
- 本地安装和全局安装
  


## webpack

webpack本质上是javascript应用程序的静态模块打包器（module bundler）

### **基本安装**

全局安装webpack webpack-dev-server webpack-cli
```bash
npm i -g webpack
npm i -g webpack-dev-server
npm i -g webpack-cli
```

### **四个核心概念**：

- 入口（entry）
- 输出（output）
- loader 
- 插件（plugin）

我们需要将配置内容写入 webpack.config.js中
