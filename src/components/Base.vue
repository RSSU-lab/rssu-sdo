<template>
  <div class="base-wrapper">
    <page-content :isEditable="isEditable" :columns="pageWidgets"></page-content>
    <app-bar @open="onEditorOpen" @close="onEditorClose"></app-bar>
  </div>
</template>

<script>
  import AppBar from '@/components/Bar.vue'
  import PageContent from './PageContent.vue'
  import WEmpty from './widgets/WEmpty'
  import WText from './widgets/WText'
  import WImage from './widgets/WImage'

  const defaultWidgets = [
    [WEmpty],
    [WText, WImage],
    []
  ]

  export default {
    name: 'AppBase',
    components: {
      PageContent,
      AppBar
    },
    data () {
      return {
        isEditable: false,
        pageWidgets: this.copyWidgets(defaultWidgets),
        savedWidgets: this.copyWidgets(defaultWidgets)
      }
    },
    methods: {
      onEditorOpen () {
        this.isEditable = true
      },
      onEditorClose (action) {
        this.isEditable = false
        if (action === 'save') {
          this.savedWidgets = this.copyWidgets(this.pageWidgets)
        } else {
          this.pageWidgets = this.copyWidgets(this.savedWidgets)
        }
      },
      copyWidgets (widgets) {
        return widgets.map((list) => {
          return list.slice()
        })
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
