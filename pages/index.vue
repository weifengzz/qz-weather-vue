<template>
  <div id="content">
    <header-top></header-top>
  </div>
</template>

<script>
  // 导入标题组件
  import headerTop from '../components/home/header.vue'

  export default {
    // 引用组件
    components: {
      headerTop
    }
  }
</script>


<style>
  /* 导入样式 */
  @import url('../css/index.css');
</style>
