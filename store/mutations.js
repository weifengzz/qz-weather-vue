/**
 * mutations
 * 
 * 修改state值，更新状态
 */

import { CHANGE_CITY_NUMBER } from './types'

export default {
  // 修改城市编码
  [CHANGE_CITY_NUMBER](state, selectedCity) {
    state.selectedCity = selectedCity
  }
}
