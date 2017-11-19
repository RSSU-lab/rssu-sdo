<template>
  <div class="base-wrapper">

    <app-bar></app-bar>
  </div>
</template>

<script>
  import AppBar from '@/components/Bar.vue'

  export default {
    name: 'AppBase',
    components: {
      AppBar
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .base-wrapper {
    position: absolute;

    left: 0px;
    right: 0px;

    top: 6rem;
    bottom: 0px;
  }
</style>
