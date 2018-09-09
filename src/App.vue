<template>
  <div id="app">
    <!--<img src="./assets/38991975_10205067363118981_9153276276503478272_n.jpg">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  height: 100px;
  width: 100px;
}
</style>
