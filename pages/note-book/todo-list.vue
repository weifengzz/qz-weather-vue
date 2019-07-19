<template>
  <div id="todo-list">
    <header-top :title="'ToDoList'"></header-top>
  </div>
</template>

<script>
  // 导入header组件(不要将组件名称设置为header，header会与vue标签重复)
  import headerTop from '../../components/note/header.vue'

  export default {
    components: {
      headerTop
    }
  }
</script>

<style scoped>
  @import url('~/assets/css/note-book/todo-list.css');
</style>
