import Vue from "vue";
import VueRouter from "vue-router";
import Goods from "../components/goods";
import Cart from "../components/shoppingcart"

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    // 要注意，当 <router-link> 对应的路由匹配成功，
    //将自动设置 class 属性值 .router-link-active
    {
      path: "/goods",
      name: "goods",
      component: Goods
    },
    {
      path: "/cart",
      name: "carts",
      component: Cart
    }
  ]
})

router.beforeEach( function(to,from,next) {
  console.log(to)
  console.log(from)
  next()
})

export default router;