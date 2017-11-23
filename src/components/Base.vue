<template>
  <div class="base-wrapper">
    <page-content></page-content>
    <app-bar></app-bar>
  </div>
</template>

<script>
  import AppBar from '@/components/Bar.vue'
  import PageContent from './PageContent.vue'

  export default {
    name: 'AppBase',
    components: {
      PageContent,
      AppBar
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .base-wrapper {
    position: absolute;

    left: 0px;
    right: 0px;

    top: 6rem;
    bottom: 0px;
  }
</style>
