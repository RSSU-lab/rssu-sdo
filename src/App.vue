<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
  // Todo: only icons which are used
  import 'vue-awesome/icons'

  import AppHeader from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      AppHeader
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
