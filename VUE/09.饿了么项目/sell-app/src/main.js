import Vue from "vue";
/* 引入axios */
import axios from "axios";
/* 引入router */
// import a from "./router"
import router from "./router"

import app from "./app";
/* 将axios添加到Vue构造函数的原型中 */
Vue.prototype.$axios = axios;

new Vue({
  // router, // router: router
  // router: a,
  router: router, // router
  render: h => h(app)
}).$mount("#app")