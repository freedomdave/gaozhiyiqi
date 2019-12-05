<template>
  <div class="container">
    <!-- 3.挂载组件 -->
    <myForm></myForm>
    <userList></userList>
  </div>
</template>

<script>
//1. 引入 myForm 组件
import myForm from "./components/myForm";
import userList from "./components/userlist"

export default {
  //2. 注册组件
  components: {
    myForm,
    userList
  }
}
</script>

<style >
  .container {
    width: 80%;
    margin: 0 auto;
  }
</style>