<template>
  <div id="app">
    <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1"><router-link to="/">MAIN</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/EDIT2">START</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="*"></router-link></el-menu-item>
    </el-menu>
    <div class="line"></div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
