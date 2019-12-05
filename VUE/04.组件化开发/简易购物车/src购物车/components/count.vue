<template>
  <div>
    <button v-on:click="jian">-</button> 
    <!-- 子组件给父组件传值，通过自定义事件 -->
    {{count}} 
    <button v-on:click="jia">+</button> 
  </div>
</template>

<script>
export default {
  // props接收
  props: ["count","index"],
  methods: {
    jia() {
      // $emit 触发自定义事件
      this.$emit("jia-event",this.index)
    },
    jian() {
      this.$emit("jian-event",this.index)
    }
  }
}
</script>