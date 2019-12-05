<template>
  <div>
    我是首页内容
    <p v-if="1+1 === 2">你真好看</p>
    <p v-else>你真难看</p>
    <input type="text" v-model="msg">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>


export default {
  data() {
    return {
      msg: ""
    }
  }
}
</script>