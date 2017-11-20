<template>
  <div class="widget">
    <div class="head">
      <div class="title"> {{ title }} </div>
      <div class="btn close">×</div>
    </div>
    <div class="body">
      {{ name }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppWidget',
    props: {
      name // this is just test for props
    },
    data () {
      return {
        title: 'windows98'
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

  $hheight: 13px;
  $bcolor: rgb(100,50,200);

  .widget {
    height: 100%;
    border: $bcolor 1px solid;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

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
        font-size: $hheight;
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
        line-height: $hheight - $m * 2;
        margin: $m;
        border-radius: 50%;

        cursor: pointer;
      }

      .close {
        background-color: rgba(255, 50, 50, 0.7);
      }
    }

    .body {
      padding: 10px;
    }
  }
</style>
