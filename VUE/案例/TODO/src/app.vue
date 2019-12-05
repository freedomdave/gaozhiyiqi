<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./todo/footer.jsx";
import Header from "./todo/header.vue";
import Todo from "./todo/todo.vue";
export default {
  components: {
    Footer,
    Header,
    Todo
  },
  data() {
    return {
      msg: "message"
    };
  }
};
</script>

<style lang="stylus">
#app
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    #cover
        position absolute
        left 0
        right 0
        bottom 0
        top 0
        background-color rgba(0,0,0,0.5)
        z-index -1
</style>