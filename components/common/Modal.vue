<template>
  <!-- 展示模态框 -->
  <div v-if="show" id="modal">
    <div @click="d1" class="bg">1312</div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
  <!-- 隐藏模态框 -->
  <div v-else></div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    methods: {
      showModal(show = true) {
        this.show = show
      },
      d1() {

      },
      d2() {

      }
    }
  }
</script>

<style scoped>
  @import url('../../assets/css/common/modal.css');
</style>

