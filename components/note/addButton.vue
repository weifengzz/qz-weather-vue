<template>
  <a @click="onAddClick" id="add-button">+</a>
</template>

<script>
  export default {
    methods: {
      onAddClick() {
        this.$emit('addButtonClick')
      }
    }
  }
</script>


<style scoped>
  @import url('../../assets/css/note-book/add-button.css');
</style>

