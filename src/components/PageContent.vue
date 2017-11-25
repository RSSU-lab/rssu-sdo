<template>
    <div class="content-area">
      <div v-for="column in columns" class="column">
        <draggable :list="column" :options="{group: 'widgets', disabled: !isEditable}">
          <div class="item-wrapper" v-for="item in column">
            <app-widget :widget="item" :container="column"></app-widget>
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

      .item-wrapper {
        padding: 10px;
      }

      > div {
        height: 100%;
      }
    }
  }
</style>
