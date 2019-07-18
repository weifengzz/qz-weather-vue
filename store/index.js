import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import mutations from './mutations'
import actions from './actions'
import state from './state'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
