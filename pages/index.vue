<template>
  <div id="content">
    <header-top></header-top>
    <detail></detail>
    <list></list>
  </div>
</template>

<script>
  // 导入标题组件
  import headerTop from '../components/home/header.vue'
  // 详情组件
  import detail from '../components/home/detail.vue'
  // 底部列表组件
  import list from '../components/home/list'

  export default {
    // 引用组件
    components: {
      headerTop,
      detail,
      list
    }
  }
</script>


<style>
  /* 导入样式 */
  @import url('../css/index.css');
</style>
