/**
 * Action
 * 
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 */

import { CHANGE_CITY_NUMBER } from './types'

export default {
  [CHANGE_CITY_NUMBER](context, selectedCity) {
    context.commit(CHANGE_CITY_NUMBER, selectedCity)
  }
}
