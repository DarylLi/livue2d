<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
}

</script>
<style rel="stylesheet/scss" lang="scss">
html,
body {
  height: 100%;
  margin-top: 0px;
  overflow: hidden!important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  .logoImg {
    height: 200px;
    transition:all .3s;
  }
  .normal{
    margin-top:-200px;
  }
}
</style>
