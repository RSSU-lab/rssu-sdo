<template>
  <div class="widget" :class="{'editable': isEditable}">
    <div v-if="isEditable" class="head">
      <div class="title">
        <icon name="bars" class="icon"></icon>
        {{ widget.title }} 
      </div>
      <div class="btn"
           v-if="container"
           v-on:click="remove()">×</div>
    </div>
    <div class="body">
      <component :is="widget"></component>
    </div>
  </div>
</template>

<script>
  import icon from 'vue-awesome/components/Icon'

  export default {
    name: 'AppWidget',
    components: {
      icon
    },
    props: [
      'widget',
      'container',
      'isEditable'
    ],
    data () {
      return {
      }
    },
    methods: {
      remove () {
        this.container.splice(
          this.container.indexOf(this.widget), 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables.scss";

  $hheight: 20px;
  $headerbgcolor: $color1;

  .widget {
    position: relative;
    height: 100%;
    //border: $headerbgcolor 1px solid;
    border-radius: 2px;
    background-color: lightgrey;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

    font-family: sans-serif;

    .head {
      position: absolute;
      top: -$hheight;
      width: 100%;
      height: $hheight;

      z-index: 5;

      color: #000;
      background-color: $headerbgcolor;
      //border-bottom: $headerbgcolor 1px solid;

      white-space: nowrap;

      .title {
        width: calc(100% - #{$hheight});
        font-size: 13px;
        line-height: $hheight;
        padding-left: 5px;

        cursor: grab;

        .icon {
          opacity: 0.5;
          vertical-align: sub;
          height: 15px;
        }
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
        //border-radius: 50%;

        font-size: $hheight - 3px;

        cursor: pointer;
      }
    }

    .body {
      width: 100%;
      //height: calc(100% - #{$hheight});
      min-height: 4rem;
      //padding: 8px;
    }
  }
</style>
