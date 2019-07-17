<template>
  <div id="detail">
    <div class="detail-left">
      <img class="detail-img" src='../../assets/images/cloudy3.png' />
    </div>
    <div class="detail-right">
      <div class="detail-right-left">
        <p class="temperature-text">36</p>
        <p class="weather-text">晴</p>
        <p class="release-time-text">{{ releaseTime }} 发布</p>
      </div>
      <p class="unit-text">℃</p>
    </div>
  </div>
</template>

<script>
// 日期管理组件(http://momentjs.cn/)
import moment from 'moment'

export default {
  data() {
    return {
      releaseTime: moment().format('hh:mm:ss')
    }
  }
}
</script>
