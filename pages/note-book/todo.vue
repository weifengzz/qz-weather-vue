<template>
  <div id="todo">
    <header-top :title="'Todo'" />
    <!-- 主题按钮  -->
    <a class="theme" @click="showModal">Change theme</a>
    <!-- 标题输入框 -->
    <div class="input-content">
      <label>title:</label>
      <input v-model="title" value="title" type="text" class="title-input" />
    </div>
    <!-- 描述输入框 -->
    <div class="input-content">
      <label>desc:</label>
      <textarea v-model="desc" value="desc" class="desc-input" />
    </div>
    <!-- 提交按钮 -->
    <div class="btn-content">
      <a class="ok-btn submit-btn" @click="onSubmitClick">OK</a>
    </div>
    <!-- 公共组件模态框 -->
    <modal ref="modal">
      <!-- v-slot插槽 https://cn.vuejs.org/v2/guide/components-slots.html -->
      <template v-slot:content>
        <!-- 模态框内容 -->
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-text" @click="hideModal">close X</a>
          </div>
          <div class="modal-center">
            <div v-for="(val, key) in colors" :key="key">
              <div
                class="modal-color"
                :style="{
                  'background-color': val,
                  border: selectIndex === key ? '2px solid gray' : '0px',
                  height: selectIndex === key ? '26px' : '30px',
                  width: selectIndex === key ? '76px' : '80px'
                }"
                @click="onSelect(key)"
              />
            </div>
          </div>
          <a class="ok-btn" @click="onOkClick">OK</a>
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
import { ADD_TODO, EDIT_TODO } from '../../store/note_module/types'
// 导入vuex相关
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    headerTop,
    modal
  },
  data() {
    return {
      selectIndex: -1, // 主题选择颜色index
      colors: [
        // 主题颜色
        'cadetblue',
        'chocolate',
        'aqua',
        'yellowgreen',
        'tomato',
        'slategray'
      ],
      title: '', // 标题
      desc: '', // 描述
      isEdit: false // 添加或修改判断
    }
  },
  computed: {
    ...mapState('note_module', {
      todoListData: state => state.todoListData
    })
  },
  mounted() {
    if (this.$route.query && this.$route.query.edit) {
      for (let todo of this.todoListData) {
        if (todo.id === this.$route.query.id) {
          this.isEdit = true
          this.desc = todo.desc
          this.title = todo.title
          break
        }
      }
    }
  },
  methods: {
    ...mapActions([CHANGE_APP_THEME]),
    ...mapActions('note_module', [ADD_TODO, EDIT_TODO]),
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
        this.$router.push({ path: '/' })
        return false
      } else {
        if (this.isEdit) {
          this[EDIT_TODO]({
            id: this.$route.query.id,
            title: this.title,
            desc: this.desc
          })
        } else {
          this[ADD_TODO]({
            title: this.title,
            desc: this.desc
          })
        }
        this.$router.back('-1')
      }
    }
  },
  head() {
    return {
      title: 'ToDo'
    }
  }
}
</script>

<style scoped>
@import url('../../assets/css/note-book/todo.css');
</style>
