<template>
  <img class="image-area" :src="img">
</template>

<script>
  export default {
    name: 'WImage',
    title: 'Image',
    data () {
      return {
        img: 'http://modny.spb.ru/sites/default/files/imagecache/news_big/Img12.jpg'
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .image-area {
    max-width: 100%;
    max-height: 100%;
    //border: gray 1px solid;
    resize: none;
  }
</style>
