<template>
  <div class="widget">
    <div class="head">
      <div class="title"> {{ widget.title }} </div>
      <div class="btn close">×</div>
    </div>
    <div class="body">
      <component :is="widget"></component>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppWidget',
    props: [
      'widget'
    ],
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

  $hheight: 15px;
  $bcolor: rgb(100,50,200);

  .widget {
    height: 100%;
    border: $bcolor 1px solid;
    border-radius: 2px;
    background-color: lightgrey;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

    font-family: sans-serif;

    .head {
      position: relative;
      width: 100%;
      height: $hheight;

      color: white;
      background-color: $bcolor;
      border-bottom: $bcolor 1px solid;

      white-space: nowrap;
      
      .title {
        width: calc(100% - #{$hheight});
        font-size: $hheight - 2px;
        padding-left: 5px;

        cursor: grab;
      }

      $m: 1px;

      .btn {
        position: absolute;
        top: 0px;
        right: 0px;
        width: $hheight - $m * 2;
        height: $hheight - $m * 2;
        text-align: center;
        line-height: $hheight - 1px - $m * 2;
        margin: $m;
        border-radius: 50%;

        font-size: $hheight - 3px;

        cursor: pointer;
      }

      .close {
        background-color: rgba(255, 50, 50, 0.7);
      }
    }

    .body {
      width: 100%;
      height: calc(100% - #{$hheight});
      padding: 8px;
    }
  }
</style>
