<!-- @format -->

<template>
  <div id="report">
    <p class="reprot-text">
      {{ `Total ${getTotalTask} tasks, ${getFinished} done.` }}
    </p>
  </div>
</template>

<script>
// 导入vuex状态管理
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      todoListData: state => state.note_module.todoListData,
    }),
    // 获取完成数量
    getTotalTask() {
      return this.todoListData.length
    },
    // 获取未完成数量
    getFinished() {
      // 参考 es6 filter语法
      return this.todoListData.filter(item => item.finish).length
    },
  },
}
</script>

<style scoped>
@import url('../../assets/css/note-book/report.css');
</style>
