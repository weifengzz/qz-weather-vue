/** @format */

import { CHANGE_FINISH_STATE, ADD_TODO, DELETE_TODO, EDIT_TODO } from './types'

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
      finish: false,
    })
  },
  // 添加任务
  [DELETE_TODO](state, id) {
    let todoListData = state.todoListData
    let index = -1
    for (let i = 0; i < todoListData.length; i++) {
      if (id === todoListData[i].id) {
        index = i
        break
      }
    }
    if (index !== -1) {
      delete todoListData.splice(index, 1)
    }
  },
  // 修改任务
  [EDIT_TODO](state, todo) {
    let todoListData = state.todoListData
    let index = -1
    for (let i = 0; i < todoListData.length; i++) {
      if (todo.id === todoListData[i].id) {
        index = i
        break
      }
    }
    if (index > -1) {
      todoListData[index].desc = todo.desc
      todoListData[index].title = todo.title
    }
  },
}
