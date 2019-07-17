<template>
  <div class='header'>
    <a class='header-text'>青州天气</a>
    <a class='change-city-text'>[切换城市]</a>
    <div class="header-date">
      <a class="header-date-text">{{`${date} 周${week}`}}</a>
    </div>
  </div>
</template>

<script>
// 日期管理组件(http://momentjs.cn/)
import moment from 'moment'

export default {
  data() {
    return {
      date: `${moment().format('MM')}月${moment().format('DD')}日`,
      week: moment().weekday()
    }
  }
}
</script>
