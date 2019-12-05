<template>
  <div>
    <ul>
      <li>
        <!-- 使用 router-link 组件在导航-->
        <!-- 通过属性 to 指定连接 -->
        <!-- router-link 默认会被渲染成 a 标签 -->
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/news">新闻</router-link>
      </li>
      <li>
        <router-link to="/user/张三">用户信息</router-link>
      </li>
    </ul>
    <!-- 路由出口 -->
    <!-- 路由对应组件的内容加载到 router-view 下 -->
    <router-view>
      
    </router-view>
  </div>
</template>