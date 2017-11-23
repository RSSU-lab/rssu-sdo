<template>
    <div class="content-area">
      <div class="column">
        <draggable :list="items" :options="{group: 'widgets'}">
          <div class="item-wrapper" v-for="item in items">
            <app-widget :widget="item"></app-widget>
          </div>
        </draggable>
      </div>
      <div class="column">
        <draggable :list="items2" :options="{group: 'widgets'}">
          <div class="item-wrapper" v-for="item in items2">
            <app-widget :widget="item"></app-widget>
          </div>
        </draggable>
      </div>
      <div class="column">
        <draggable :list="items3" :options="{group: 'widgets'}">
          <div class="item-wrapper" v-for="item in items3">
            <app-widget :widget="item"></app-widget>
          </div>
        </draggable>
      </div>
    </div>
</template>

<script>
  import draggable from 'vuedraggable'

  import AppWidget from '@/components/Widget'
  import WEmpty from './widgets/WEmpty'
  import WText from './widgets/WText'
  import WImage from './widgets/WImage'

  export default {
    name: 'PageContent',
    components: {
      AppWidget,
      draggable
    },
    data () {
      return {
        items: [
          WEmpty
        ],
        items2: [
          WText,
          WImage
        ],
        items3: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables.scss";

  .content-area {
    height: 100%;
    overflow: auto;
    display: flex;

    .column {
      width: 33.33%;
      height: 100%;

      &:not(:last-child) {
        border-right: 1px solid $color1;
      }

      > div {
        height: 100%;
      }
    }
  }
</style>
