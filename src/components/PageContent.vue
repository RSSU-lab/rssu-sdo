<template>
    <div class="content-area">
      <div class="column" v-for="column in columns" v-bind:key="column">
        <draggable :list="column" 
                   :options="{group: 'widgets',
                              disabled: !isEditable,
                              animation: 300,
                              handle: '.head'}">
          <div class="item-wrapper" v-for="item in column" v-bind:key="item">
            <app-widget :widget="item"
                        :container="column"
                        :isEditable="isEditable"></app-widget>
          </div>
        </draggable>
      </div>
    </div>
</template>

<script>
  import draggable from 'vuedraggable'

  import AppWidget from '@/components/Widget'

  export default {
    name: 'PageContent',
    components: {
      AppWidget,
      draggable
    },
    props: {
      isEditable: false,
      columns: Array
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
      padding-top: 15px;

      .item-wrapper {
        padding: 15px;
      }

      > div {
        height: 100%;
      }
    }
  }
</style>
