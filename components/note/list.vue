<template>
  <div id="list">
    <div v-for="(val, key) in todoListData" :key="key" class="list-item">
      <!-- 根据状态修改颜色 -->
      <div
        class="list-header"
        :style="{ 'background-color': val.finish ? 'yellowgreen' : 'sienna' }"
      >
        <div class="list-header-left">
          <span class="title-text">{{ val.title }} </span>
        </div>
        <!-- v-model双向绑定 -->
        <input
          id="val.id"
          v-model="checkDatas"
          type="checkbox"
          :value="val.id"
          @click="handleClick(val)"
        />
      </div>
      <div class="list-content">
        <div class="list-content-left">
          {{ val.desc }}
        </div>
        <div class="list-content-right" @click="onEdit(val.id)">
          <span class="change-span">Edit</span>
        </div>
        <div
          class="list-content-right"
          style="background-color: tomato"
          @click="onDelete(val.id)"
        >
          <span class="change-span">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入vuex状态管理
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('note_module')

// 导入Types
import { CHANGE_FINISH_STATE, DELETE_TODO } from '../../store/note_module/types'

export default {
  data() {
    return {
      // checkbox的数据
      checkDatas: []
    }
  },
  computed: {
    ...mapState({
      todoListData: state => state.todoListData
    })
  },
  mounted() {
    // 获取选中标签数据
    let selectData = []
    for (let d of this.todoListData) {
      if (d.finish) {
        selectData.push(d.id)
      }
    }
    this.checkDatas = selectData
  },
  methods: {
    ...mapActions([CHANGE_FINISH_STATE, DELETE_TODO]),
    handleClick(val) {
      this[CHANGE_FINISH_STATE](val)
    },
    onDelete(id) {
      this[DELETE_TODO](id)
    },
    onEdit(id) {
      this.$router.push({ path: 'todo', query: { edit: true, id } })
    }
  }
}
</script>

<style scoped>
@import url('../../assets/css/note-book/list.css');
</style>
