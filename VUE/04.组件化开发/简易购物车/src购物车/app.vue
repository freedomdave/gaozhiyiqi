<template>
  <div>
    <Goods></Goods>
    <Cart></Cart>
    <h1>首页</h1>
    <ul>
      <li>
        <router-link to="/goods">商品列表</router-link>
      </li>
      <li>
        <router-link to="/cart">商品列表</router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入商品组件
import Goods from "./components/goods"
// 引入购物车
import Cart from "./components/shoppingcart"
export default {
  /* 注册组件 */
  components: {
    Goods,
    Cart
  }
}
</script>

<style scoped>
  table {
    width: 600px;
  }
  td {
    border: 1px solid #888;
  }
</style>>
  