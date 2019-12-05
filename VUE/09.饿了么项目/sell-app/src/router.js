/*1. 引入vue  vue-router */
import Vue from "vue";
import VueRouter from "vue-router";

/* 引入组件 */
import Goods from "./components/goods/goods";
import Ratings from "./components/ratings/ratings";
import Seller from "./components/seller/seller";

/* 2. 安装插件VueRouter */
Vue.use(VueRouter);

/* 3. 创建路由对象，并且配置路由规则 */
var router = new VueRouter({
  /* 固定的键 routes */
  routes: [
    /* 一条一条的路由规则 */
    {
      path: "/goods",
      name: "goods",/* name值可随意定义，要有语义 */
      component: Goods
    },
    {
      path: "/ratings",
      name: "ratings",/* name值可随意定义，要有语义 */
      component: Ratings
    },
    {
      path: "/seller",
      name: "seller",/* name值可随意定义，要有语义 */
      component: Seller
    }
  ]
})

/* 4. 暴露接口 */
export default router;