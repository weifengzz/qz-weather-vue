<template>
  <div id="todo">
    <header-top :title="'Todo'"></header-top>
    <a @click="showModal" class="theme">Change theme</a>
    <div class="input-content">
      <label>title:</label>
      <input v-model="title" type="text" class="title-input" />
    </div>
    <div class="input-content">
      <label>desc:</label>
      <textarea value="desc" v-model="desc" class="desc-input" />
    </div>
    <div class="btn-content">
      <a @click="onSubmitClick" class="ok-btn submit-btn">OK</a>
    </div>
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
  // 导入ModuleTypes
  import { ADD_TODO } from '../../store/note_module/types'
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
        ],
        title: '',
        desc: ''
      }
    },
    mounted() {
      console.log(this.$route)
    },
    methods: {
      ...mapActions([
        CHANGE_APP_THEME
      ]),
      ...mapActions('note_module', [
        ADD_TODO
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
           alert('Please select a theme!')
        } else {
          let selectColor = this.colors[this.selectIndex]
          this[CHANGE_APP_THEME]({
            color: selectColor
          })
          this.hideModal()
        }
      },
      onSubmitClick() {
        if (!this.title) {
          return alert('Please input title!')
        }
        if (!this.desc) {
          return alert('Please input desc!')
        }
        // 判断是否还有前一个页面
        if (window.history.length <= 1) {
            this.$router.push({path:'/'})
            return false
        } else {
          this[ADD_TODO]({
            title: this.title,
            desc: this.desc
          })
          this.$router.back('-1')
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

