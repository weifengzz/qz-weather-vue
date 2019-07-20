<template>
  <a @click="onAddClick" id="add-button" :style="{'background-color': theme.color}">+</a>
</template>

<script>
  // 导入vuex状态管理
  import { mapState } from 'vuex'
  export default {
    methods: {
      onAddClick() {
        this.$emit('addButtonClick')
      }
    },
    computed: {
      ...mapState({
        theme: state => state.theme,
      })
    }
  }
</script>


<style scoped>
  @import url('../../assets/css/note-book/add-button.css');
</style>

