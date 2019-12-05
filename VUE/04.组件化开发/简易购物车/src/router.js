// 引入vue
import Vue from "vue";
//1. 引入vue-router
import VueRouter from "vue-router";

// 引入组件
import Home from "./views/home"
import News from "./views/news"
import User from "./views/user"


// 2. 在Vue中使用路由，安装插件
Vue.use(VueRouter);

// 3. 创建路由对象，并配置路由规则
var router = new VueRouter({
  routes: [
    {
      // path 路径
      path: "/home",
      // 指定组件
      component: Home
    },
    {
      path: "/news",
      component: News
    },
    // 动态路由
    {
      path: "/user/:username",
      component: User
    }
  ]
})

export default router;