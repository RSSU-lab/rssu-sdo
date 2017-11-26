<template>
  <textarea class="text-area" v-model="text" 
            :class="{ readonly: !isEditable }"
            :readonly="!isEditable">
  </textarea>
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
  .text-area {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
  }

  .readonly {
    background-color: transparent;
  }
</style>
