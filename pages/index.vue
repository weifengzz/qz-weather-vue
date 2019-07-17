<template>
  <div id="content">
    <header-top></header-top>
    <detail></detail>
  </div>
</template>

<script>
  // 导入标题组件
  import headerTop from '../components/home/header.vue'
  // 详情组件
  import detail from '../components/home/detail.vue'

  export default {
    // 引用组件
    components: {
      headerTop,
      detail
    }
  }
</script>


<style>
  /* 导入样式 */
  @import url('../css/index.css');
</style>
