<template>
  <!-- 展示模态框 -->
  <div v-if="show" id="modal">
    <div class="bg" @click="d1">
      1312
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
  <!-- 隐藏模态框 -->
  <div v-else />
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showModal(show = true) {
      this.show = show
    },
    d1() {},
    d2() {}
  }
}
</script>

<style scoped>
@import url('../../assets/css/common/modal.css');
</style>
