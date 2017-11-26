<template>
  <div class="base-wrapper">
    <page-content :isEditable="isEditable" :columns="pageWidgets"></page-content>
    <app-bar @open="onEditorOpen" @close="onEditorClose"></app-bar>
  </div>
</template>

<script>
  // import authenticationService from '@/services/authenticationService.js'

  import AppBar from './Bar'
  import PageContent from './PageContent'
  import WEmpty from './widgets/WEmpty'
  import WText from './widgets/WText'
  import WImage from './widgets/WImage'
  import WPoll from './widgets/WPoll'

  const defaultWidgets = [
    [WEmpty, WPoll],
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
        isLoggedIn: false,
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
  @import "../variables.scss";

  .base-wrapper {
    position: absolute;

    left: 0px;
    right: 0px;

    top: 6rem;
    bottom: 0px;

    background-color: $basebg;
  }
</style>
