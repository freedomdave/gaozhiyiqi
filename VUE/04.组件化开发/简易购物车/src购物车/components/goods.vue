<template>
	<div>
		<h1>商品列表</h1>
		<table>
			<thead>
				<tr>
					<td>名称</td>
					<td>单价</td>
					<td>数量</td>
					<td>添加至购物车</td>
				</tr>
			</thead>
			<tbody>
				<!-- 遍历商品 v-for -->
				<tr v-for="(goods,index) in goodslist" :key="index">
					<td>{{goods.name}}</td>
					<td>{{goods.price}}</td>
					<td>
						<!-- 父组件给子组件传值  给子组件绑定属性
              jia-event 自定义事件
						-->
						<Count
							@jian-event="jian"
							v-on:jia-event="jia"
							v-bind:count="goods.count"
							v-bind:index="index"
						></Count>
					</td>
					<td>
						<button @click="addCart(index)">添加到购物车</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
// 引入按钮组件
import Count from "./count.vue";
import bus from "../bus";

export default {
	components: {
		// 属性名： 属性值， 属性名相当于html中的标签，
		// Count: Count
		Count
	},
	// data 是一个有返回值的函数
	data: function() {
		return {
			goodslist: [
				{
					name: "香蕉",
					price: 10.5,
					count: 0
				},
				{
					name: "榴莲",
					price: 50.5,
					count: 0
				},
				{
					name: "葡萄",
					price: 5.5,
					count: 0
				}
			]
		};
	},
	methods: {
		jia(i) {
			this.goodslist[i].count++;
		},
		jian(i) {
			if (this.goodslist[i].count > 0) {
				this.goodslist[i].count--;
			}
		},
		addCart(i) { // 添加到购物车
			// 将数组中对应索引值的元素（对象），传给购物车
			if (this.goodslist[i].count > 0) {
        var obj = this.clone(this.goodslist[i]);
				bus.$emit("add-cart-event",obj);
			}else {
        alert("请输入商品数量！")
      }
    },
    clone(obj) {
      var newObj = {};
      // key 是对象属性名
      for(var key in obj) {
        newObj[key] = obj[key];
      }
      return newObj;
    }
	}
};
</script>

<style scoped>
table {
	width: 600px;
}
td {
	border: 1px solid #888;
}
</style>
  