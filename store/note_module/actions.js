import { CHANGE_FINISH_STATE } from './types'

export default {
  [CHANGE_FINISH_STATE](context, selectItemVal) {
    context.commit(CHANGE_FINISH_STATE, selectItemVal)
  }
}
