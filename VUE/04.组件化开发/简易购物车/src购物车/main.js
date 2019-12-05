// 引入vue  node_modules
import Vue from "vue";

// 引入路由 
import router from "./router/index"

// 引入app组件
import app from "./app";

new Vue({
  el: "#app",
  router,
  render: (h) => h(app),
})