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
    // 主题(只演示主题色)
    theme: {
      color: '#6da0cd' // 初始化主题色
    },
    // 选中的城市
    selectedCity: {
      name: '青州市',
      number: '101120602'
    }
  }
}

export default state
