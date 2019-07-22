import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'
import noteModule from './note_module'
import logger from './logger'

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

/**
 * Module
 * 
 * 参考文档：https://vuex.vuejs.org/zh/guide/modules.html
 * 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。
 * 当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
 * 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
 * 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
 */
const mudules = {
  noteModule
}

// 判断是否为debug模式
const debug = process.env.NODE_ENV !== 'production';

/**
 * logger 日志管理
 */
const plugins = debug ? [logger] : []

export {
  plugins,
  state,
  getters,
  mutations,
  actions,
  mudules
}
