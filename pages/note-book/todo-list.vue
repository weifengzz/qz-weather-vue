<template>
  <div id="todo-list">
    <header-top :title="'TodoList'"></header-top>
    <div class="conent">
      <!-- 统计 -->
      <report></report>
      <!-- 列表界面 -->
      <list></list>
      <!-- 添加按钮 -->
      <add-button @addButtonClick="onAddButtonClick"></add-button>
    </div>
  </div>
</template>

<script>
  // 导入header组件(不要将组件名称设置为header，header会与vue标签重复)
  import headerTop from '../../components/note/header'
  // 统计组件
  import report from '../../components/note/report'
  // 列表组件
  import list from '../../components/note/list'
  // 添加按钮
  import addButton from '../../components/note/addButton' 
  // 导入vuex状态管理
  import { mapState } from 'vuex'

  export default {
    components: {
      headerTop,
      report,
      list,
      addButton
    },
    computed: {
      ...mapState({
        todoListData: state => state.noteModule.todoListData,
      })
    },
    methods: {
      onAddButtonClick() {
        this.$router.push({path:'todo', query: { edit: false }})
      }
    },
    head() {
      return {
        title: 'ToDoList'
      }
    }
  }
</script>

<style scoped>
  @import url('~/assets/css/note-book/todo-list.css');
</style>
