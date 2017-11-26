<template>
  <div class="wrapper">
    <textarea class="text-area" v-model="text" 
              :class="{ readonly: !isEditable }"
              :readonly="!isEditable">
    </textarea>
  </div>
</template>

<script>
  export default {
    name: 'WText',
    title: 'Text',
    props: [
      'isEditable'
    ],
    data () {
      return {
        text: 'Desription of the widget will be shown here later.'
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }

  .text-area {
    border: none;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
  }

  .readonly {
    background-color: transparent;
    resize: none;
  }
</style>
