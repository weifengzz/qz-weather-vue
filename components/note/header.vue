<!-- @format -->

<template>
  <div id="content" :style="{ 'background-color': theme.color }">
    <h3 class="title-text">
      {{ title }}
    </h3>
  </div>
</template>

<script>
// 导入vuex状态管理
import { mapState } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    ...mapState({
      theme: state => state.theme,
    }),
  },
}
</script>

<style scoped>
@import url('~/assets/css/note-book/header.css');
</style>
