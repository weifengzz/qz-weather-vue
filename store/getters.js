/**
 * getter
 *
 * Getter相当于vue中的computed计算属性，
 * getter 的返回值会根据它的依赖被缓存起来，
 * 且只有当它的依赖值发生了改变才会被重新计算，
 * 这里我们可以通过定义vuex的Getter来获取，
 * Getters 可以用于监听、state中的值的变化，
 * 返回计算后的结果，
 */
export default {
  getCityNumber: state => {
    return state.selectedCity
  }
}
