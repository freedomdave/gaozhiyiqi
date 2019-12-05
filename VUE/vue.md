# vue 作者：尤雨溪

三大框架： 
  * angular 学习难度大
  * react   学习难度中等，jsx模板
  * vue   初期学习简单，后期难
  
公众号：
  * 前端早读课
  * 前端大全

## 核心库 vue.js 类似jquery

vue 关心视图

## 基本指令 

1. 模板中插值  {{ data }}

2. 实例化一个Vue()对象
```js
  new Vue({
    // 属性名固定
    el: "指定容器，通过id选择器",
    data: {
      // 数据
      msg: "这是数据"
    },
    methods: { 
      // 方法
      fn: function(){},
    }
  })
```

3. 指令
   1. 绑定属性 ，该变得是dom元素的属性 <p v-bind:title="msg（data里面的数据）" ></p>
    ```html
      <img v-bind:src="vue实例对象data里面的数据">
    ```
   2. 点击事件 <button v-on:click="vue实例对象methods中的函数，fn(方法里面的函数)" ></button>
   3. 条件  <div v-if="布尔值"> 如果是true,则渲染dom元素；如果是false，不渲染此元素</div>
   4. v-if   v-else  v-else-if 和js中的用法一样
   5. 显示与隐藏元素  <p v-show="布尔值" >只是实现显示与隐藏的效果，是false时，元素隐藏，是true时，元素显示 </p>