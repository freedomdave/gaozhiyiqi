<template>
  <section class="real-app">
    <input 
      type="text"
      class="add-input"
      autofocus = "autofocus"
      placeholder="接下去要做什么"
      v-on:keyup.enter = "addTodo"
    >
    <Item 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
    <Tabs :filter="filter"></Tabs>
  </section>
</template>

<script>
  import Item from "./item.vue"
  import Tabs from "./tabs.vue"
  let id = 0;
  export default {
    data(){
      return {
        // todo: {
        //   id: 0,
        //   content: "this is todo",
        //   completed: false
        // },
        todos: [],
        filter: "all"
      }
    },
    components:{
      Item,
      Tabs
    },
    methods: {
      addTodo(e){
        this.todos.unshift({
          id: id++,
          // 数据中可能有空格，去掉空格
          content:e.target.value.trim(),
          completed: false
        })
        // 清空数据
        e.target.value = "";
      }
    }
  }
</script>

<style lang="stylus" scoped>
.real-app
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
  .add-input
    position relative
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit
    line-height 1.4em
    border 1px solid #999 
    outline 0 
    color inherit 
    padding 16px 16px 16px 60px
    box-shadow inset 0 -1px 5px 0 rgba(0,0,0,0.5)
    box-sizing border-box
    // 字体抗锯齿
    font-smoothing: antialiased 

</style>