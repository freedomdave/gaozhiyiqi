import Vue from "vue";
import App from "./App";

// 引入路由
import router from "./router"
    
new Vue({
  el: "#app",
  render: h => h(App),
  // 注册路由
  router: router
})