<template>
  <transition v-if="show" name="pop">
    <div class="bar-wrapper">
      <div class="on-top">
        <div class="label-button top" v-on:click="toggle">Cancel</div>
        <div class="label-button top" v-on:click="toggle">Save</div>
      </div>

      <div class="container">
        <div class="item-wrapper" v-for="item in items" v-bind:key="item">
          <div class="item">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </transition>

  <div v-else class="on-bottom">
    <div class="label-button down" v-on:click="toggle">Edit</div>
  </div>
</template>

<script>
  export default {
    name: 'AppBar',
    data () {
      return {
        show: false,
        items: [
          'Tinky-Winky',
          'Dipsy',
          'Laa-Laa',
          'Po',
          'Tinky-Winky',
          'Dipsy',
          'Laa-Laa',
          'Po'
        ]
      }
    },
    methods: {
      toggle () {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="scss" scoped>

  $bl-color: rgba(0, 0, 0, .5);
  $label-height: 35px;

  .bar-wrapper {
    position: absolute;
  
    width: 90%;
    height: 190px;
    
    left: 5%;
    bottom: 0px;
    
    border-radius: 10px 10px 0px 0px;
    background-color: rgb(200, 200, 200);

    border: $bl-color 3px solid;
    border-bottom: 0px;

    z-index: 5;
  }

  .container {
    position: relative;
    height: 100%;
    top: -$label-height;

    white-space: nowrap;
    overflow-x: scroll;

    .item-wrapper {
      display: inline-block;
      width: 190px;
      height: 100%;
      padding: 10px;

      .item {
        height: 100%;
        padding: 10px;
        border: black 2px solid;
        border-radius: 10px;
        background-color: white;
      }
    }
  }

  .label-button {
    display: inline-block;

    width: 90px;
    height: $label-height;

    bottom: 0px;

    line-height: 30px;
    border-radius: 10px 10px 0px 0px;
    color: white;
    background-color: $bl-color;

    cursor: pointer;
  }

  .on {
    position: relative;
    text-align: center;
  }

  .on-top {
    @extend .on;
    z-index: 5;
    top: -$label-height;
  }

  .on-bottom {
    @extend .on;
    z-index: 4;
    top: calc(100% - #{$label-height});
  }

  .pop-enter-active, .pop-leave-active {
    transition: bottom .5s;
  }

  .pop-enter, .pop-leave-to {
    bottom: calc(-190px - #{$label-height});
  }
</style>
