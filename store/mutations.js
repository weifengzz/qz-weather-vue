/**
 * mutations
 * 
 * 修改state值，更新状态
 */

import { CHANGE_CITY_NUMBER, CHANGE_APP_THEME } from './types'

export default {
  // 修改theme
  [CHANGE_APP_THEME](state, theme) {
    state.theme = theme
  },
  // 修改城市编码
  [CHANGE_CITY_NUMBER](state, selectedCity) {
    state.selectedCity = selectedCity
  }
}
