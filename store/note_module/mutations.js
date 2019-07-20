
import { CHANGE_FINISH_STATE, ADD_TODO } from './types'

export default {
  // 修改任务完成状态
  [CHANGE_FINISH_STATE](state, selectItemVal) {
    for (let i = 0; i < state.todoListData.length; i++) {
      if (state.todoListData[i].id === selectItemVal.id) {
        state.todoListData[i].finish = !state.todoListData[i].finish
      }
    }
  },
  // 添加任务
  [ADD_TODO](state, todo) {
    let todoListData = state.todoListData
    todoListData.push({
      ...todo,
      id: todoListData.length ? todoListData[todoListData.length - 1].id + 1 : 1,
      finish: false
    })
  }
}
