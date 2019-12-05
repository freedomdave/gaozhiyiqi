<template>
	<div>
		<h1>购物车列表</h1>
		<table>
			<thead>
				<tr>
					<td>商品名称</td>
					<td>单价</td>
					<td>数量</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in shoppinglist" v-bind:key="index">
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td>
						<Count
							@jian-event="jian"
							v-on:jia-event="jia"
							v-bind:count="item.count"
							v-bind:index="index"
						></Count>
					</td>
					<td>
						<button @click="del(index)">删除</button>
					</td>
				</tr>
        <tr>
					<!-- colspan="3" 合并列  rowspan="" 合并行 -->
					<td  style="text-align: right;">总价：</td>
					<td colspan="3">￥ {{totalPrice}} 元</td>
				</tr>
			</tbody>
		</table>
    <button @click="jiezhang">结账</button>
	</div>
</template>

<script>
// 引入count组件
import Count from "./count";
import bus from "../bus";
export default {
	components: {
		Count
	},
	data() {
		return {
      shoppinglist: [],
      // 总价钱
      totalPrice: 0
		};
	},
	// 钩子函数  挂载完成时
	mounted() {
		var self = this;
		bus.$on("add-cart-event", function(d) {
			// 传过来的商品是否在购物车中已经存在
			for (var i = 0; i < self.shoppinglist.length; i++) {
				// 如果存在
				if (d.name == self.shoppinglist[i].name) {
					//  两个数量相加2
					self.shoppinglist[i].count += d.count;
					// 计算总价钱
					self.getTotalPrice()               
					// 加完数量后中止函数后面代码运行
					return;
				}
			}
      self.shoppinglist.push(d);
			// 计算总价钱
			self.getTotalPrice()
    });
    
	},
	methods: {
    jia(i) {
      this.shoppinglist[i].count++;
			this.getTotalPrice()
		},
		jian(i) {
			if (this.shoppinglist[i].count > 0) {
				this.shoppinglist[i].count--;
			}
			this.getTotalPrice()
		},
		del(i) {
			this.shoppinglist.splice(i, 1);
			// 调用计算总价钱函数
			this.getTotalPrice()
		},
		// 计算总价钱
    getTotalPrice() {
      this.totalPrice = 0;
			for(var i=0; i<this.shoppinglist.length; i++) {

				this.totalPrice += this.shoppinglist[i].count*this.shoppinglist[i].price
			}
			// alert()-
		},
		jiezhang() {
			this.getTotalPrice();
			alert("您消费了"+ this.totalPrice+ "元")
		}
	}
};


// var sum = 0;
// for(var i=1;i<=5;i++) {
// 	sum += i;
// }
</script>

<style scoped>
table {
	width: 600px;
}
td {
	border: 1px solid #888;
}
</style>