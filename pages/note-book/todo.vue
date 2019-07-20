<template>
  <div id="todo">
    <header-top :title="'Todo'"></header-top>
    <a @click="showModal" class="theme">Change theme</a>
    <view class="title">
    </view>
    <modal ref="modal">
      <!-- v-slot插槽 https://cn.vuejs.org/v2/guide/components-slots.html -->
      <template v-slot:content>
        <div class="modal-content">
          <div class="modal-header">
            <a @click="hideModal" class="close-text">close X</a>
          </div>
          <div class="modal-center">
            <div v-for="(val, key) in colors" :key="key">
              <div
                @click="onSelect(key)" class="modal-color" 
                :style="{
                          'background-color': val, 
                          'border': selectIndex === key ? '2px solid gray' : '0px',
                          'height': selectIndex === key ? '26px' : '30px',
                          'width': selectIndex === key ? '76px' : '80px'
                        }"
              >
              </div>
            </div>
          </div>
          <a @click="onOkClick" class="ok-btn">OK</a>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
  // 导入标题组件
  import headerTop from '../../components/note/header'
  // 导入modal模态框
  import modal from '../../components/common/Modal'
  // 导入Types
  import { CHANGE_APP_THEME } from '../../store/types'
  // 导入vuex相关
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        selectIndex: -1,
        colors: [
          'cadetblue',
          'chocolate',
          'aqua',
          'yellowgreen',
          'tomato',
          'slategray'
        ]
      }
    },
    mounted() {
      console.log(this.$route)
    },
    methods: {
      ...mapActions([
        CHANGE_APP_THEME
      ]),
      showModal() {
        // 父调子组件方法
        this.$refs.modal.showModal()
      },
      hideModal() {
        this.$refs.modal.showModal(false)
      },
      onSelect(index) {
        this.selectIndex = index
      },
      onOkClick() {
        if (this.selectIndex === -1) {
           alert('请选择主题')
        } else {
          let selectColor = this.colors[this.selectIndex]
          this[CHANGE_APP_THEME]({
            color: selectColor
          })
          this.hideModal()
        }
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

