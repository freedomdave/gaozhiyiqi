<template>
  <div >
    <label for="">用户名：</label>
    <input type="text" v-model="name">
    <p class="small">请输入用户名</p>
    <label for="">年龄：</label>
    <input type="text" v-model="age">
    <p class="small">请输入年龄</p>
    <button class="add" @click="add">添加</button>
  </div>
</template>

<script>
// 引入bus
import bus from "../bus"

export default {
  data() {
    return {
      name: "",
      age: ""
    }
  },
  methods: {
    add() {
      bus.$emit("send-user",{name: this.name, age: this.age})
    }
  }
}
</script>

<style scoped>
  label {
    display: block;
    margin-top: 10px;
  }
  input {
    display: block;
    width: 100%;
    padding-left: 10px;
    border: 1px solid gray;
    border-radius: 4px;
    outline: 0;
  }
  input:focus {
    border: 1px solid skyblue;
    box-shadow: 0 0 0 2px seagreen;
  }
  .small {
    margin: 0;
    font-size: 12px;
    color: #666;
  }
  .add {
    margin-top: 10px;
    border: 0;
    background-color: #0069d9;
    color: #fff;
    border-radius: 5px;
    padding: 3px 10px;
  }
</style>