<template>
  <div class='q-header'>
    <a class='q-header-text'>青州天气</a>
    <a class='q-change-city-text'>[切换城市]</a>
    <div class="q-header-date">
      <a class="q-header-date-text">{{`${date} 周${week}`}}</a>
    </div>
  </div>
</template>

<script>
// 日期管理组件(http://momentjs.cn/)
import moment from 'moment'

export default {
  /**
   * data() {} 是vue简写方法
   * 
   * 等同：data: function() {}
   */
  data() {
    return {
      date: `${moment().format('MM')}月${moment().format('DD')}日`,
      week: moment().weekday()
    }
  }
}
</script>
