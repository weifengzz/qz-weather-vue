<!-- @format -->

<template>
  <a id="add-button" :style="{ 'background-color': theme.color }" @click="onAddClick">
    +
  </a>
</template>

<script>
// 导入vuex状态管理
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      theme: state => state.theme,
    }),
  },
  methods: {
    onAddClick() {
      this.$emit('addButtonClick')
    },
  },
}
</script>

<style scoped>
@import url('../../assets/css/note-book/add-button.css');
</style>
