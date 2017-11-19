<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;  
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
