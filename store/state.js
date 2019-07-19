/**
 * state
 * 
 * vuex中的数据源，我们需要保存的数据就保存在这里，
 * 可以在页面通过 this.$store.state来获取我们定义的数据
 */

/*
  // 老版本写法，不建议,即将移除
  export default {
    selectedCity: {
      name: '青州市',
      number: '101120602'
    }
  }
*/

const state = () => {
  return {
    selectedCity: {
      name: '青州市',
      number: '101120602'
    }
  }
}

export default state
