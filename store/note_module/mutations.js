
import { CHANGE_FINISH_STATE } from './types'

export default {
  // 修改任务完成状态
  [CHANGE_FINISH_STATE](state, selectItemVal) {
    for (let i = 0; i < state.todoListData.length; i++) {
      if (state.todoListData[i].id === selectItemVal.id) {
        state.todoListData[i].finish = !state.todoListData[i].finish
      }
    }
  }
}
