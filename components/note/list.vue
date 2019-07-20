<template>
  <div id="list">
    <div v-for="(val, key) in todoListData" :key="key" class="list-item">
      <!-- 根据装填修改颜色 -->
      <div class="list-header" :style="{'background-color': val.finish ? 'yellowgreen' : 'sienna'}">
        <div class="list-header-left">
          <span class="title-text">{{val.title}} </span>
        </div>
        <!-- v-model双向绑定 -->
        <input @click="handleClick(val)" id="val.id" type="checkbox" :value="val.id" v-model="checkDatas" />
      </div>
      <div class="list-content" >
        <div class="list-content-left">{{val.desc}}</div>
        <div class="list-content-right">
          <span class="change-span">Edit</span>
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
  import { CHANGE_FINISH_STATE } from '../../store/note_module/types'

  export default {
    data() {
      return {
        // checkbox的数据
        checkDatas: []
      }
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
    computed: {
      ...mapState({
        todoListData: state => state.todoListData,
      })
    },
    methods: {
      handleClick(val) {
        this[CHANGE_FINISH_STATE](val)
      },
      ...mapActions([
        CHANGE_FINISH_STATE
      ])
    }
  }
</script>

<style scoped>
  @import url('../../assets/css/note-book/list.css');
</style>

