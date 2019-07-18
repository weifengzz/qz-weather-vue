<template>
  <div class='q-header'>
    <a class='q-header-text'>{{selectedCity.name}}</a>
    <router-link class='q-change-city-text' :to="{ path: 'select-city' }">[切换城市]</router-link>
    <div class="q-header-date">
      <a class="q-header-date-text">{{`${date} 周${week}`}}</a>
    </div>
  </div>
</template>

<script>
// 日期管理组件(http://momentjs.cn/)
import moment from 'moment'
// 导入vuex状态管理
import { mapState } from 'vuex'

export default {
  /**
   * data() {} 是vue简写方法
   * 
   * 等同：data: function() {}
   */
  data() {
    return {
      date: `${moment().format('MM')}月${moment().format('DD')}日`, // moment 获取月日
      week: moment().weekday() // moment获取星期
    }
  },
  computed: {
    ...mapState({
      selectedCity: state => state.selectedCity
    })
  }
}
</script>
