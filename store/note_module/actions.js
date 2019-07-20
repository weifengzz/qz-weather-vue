import { CHANGE_FINISH_STATE, ADD_TODO } from './types'

export default {
  [CHANGE_FINISH_STATE](context, selectItemVal) {
    context.commit(CHANGE_FINISH_STATE, selectItemVal)
  },
  [ADD_TODO](context, todo) {
    context.commit(ADD_TODO, todo)
  }
}
