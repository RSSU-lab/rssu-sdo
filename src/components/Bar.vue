<template>
  <transition v-if="show" name="pop">
    <div class="bar-wrapper">
      <div class="on-top">
        <div class="label-button top" v-on:click="cancel">Cancel</div>
        <div class="label-button top" v-on:click="save">Save</div>
      </div>

      <div class="container">
        <draggable v-model="items" :options="{group: {name: 'widgets',  pull: 'clone', put: false}}">
          <div class="item-wrapper" v-for="item in items" v-bind:key="item">
            <app-widget :widget="item"></app-widget>
          </div>
        </draggable>
      </div>
    </div>
  </transition>

  <div v-else class="on-bottom">
    <div class="label-button down" v-on:click="open">
      <span>Edit</span>
      <icon name="pencil"></icon>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  import icon from 'vue-awesome/components/Icon'

  import AppWidget from '@/components/Widget'
  import WEmpty from './widgets/WEmpty'
  import WText from './widgets/WText'
  import WImage from './widgets/WImage'
  import WPoll from './widgets/WPoll'

  export default {
    name: 'AppBar',
    components: {
      AppWidget,
      draggable,
      icon
    },
    data () {
      return {
        show: false,
        items: [
          WText,
          WImage,
          WEmpty,
          WPoll
        ]
      }
    },
    methods: {
      open () {
        this.show = true
        this.$emit('open')
      },
      cancel () {
        this.show = false
        this.$emit('close', 'cancel')
      },
      save () {
        this.show = false
        this.$emit('close', 'save')
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

    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    .item-wrapper {
      display: inline-block;
      vertical-align: top;
      width: 190px;
      height: 100%;
      padding: 10px;
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

    span {
      padding: 0.4rem;
    }
  }

  .on {
    position: absolute;
    text-align: center;
    left: calc(50% - 45px);
  }

  .on-top {
    @extend .on;
    z-index: 5;
    top: -$label-height;
  }

  .on-bottom {
    @extend .on;
    z-index: 4;
    bottom: 0;
  }

  .pop-enter-active, .pop-leave-active {
    transition: bottom .5s;
  }

  .pop-enter, .pop-leave-to {
    bottom: calc(-190px - #{$label-height});
  }
</style>
