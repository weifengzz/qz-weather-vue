import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import mutations from './mutations'
import actions from './actions'
import state from './state'

Vue.use(Vuex)

/*
  // 老版本写法现在版本不建议这么写,即将移除
  const store = () => new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })

  export default store
*/

export {
  state,
  getters,
  mutations,
  actions
}
