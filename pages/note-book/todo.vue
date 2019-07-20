<template>
  <div id="todo">
    <header-top :title="'Todo'"></header-top>
    <a @click="showModal" class="theme">Change theme</a>
    <view class="title">
    </view>
    <modal ref="modal">
      <!-- v-slot插槽 https://cn.vuejs.org/v2/guide/components-slots.html -->
      <template v-slot:content>
        <div class="modal-content"></div>
      </template>
    </modal>
  </div>
</template>

<script>
  // 导入标题组件
  import headerTop from '../../components/note/header'
  // 导入modal模态框
  import modal from '../../components/common/Modal'
  export default {
    mounted() {
      console.log(this.$route)
    },
    methods: {
      showModal() {
        // 父调子组件方法
        this.$refs.modal.showModal()
      }
    },
    components: {
      headerTop,
      modal
    }
  }
</script>

<style scoped>
  @import url('../../assets/css/note-book/todo.css');
</style>

