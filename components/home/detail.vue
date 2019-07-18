<template>
  <div id="q-detail">
    <div class="q-detail-left">
      <img class="q-detail-img" src='../../assets/images/cloudy3.png' />
    </div>
    <div class="q-detail-right">
      <div class="q-detail-right-left">
        <p class="q-temperature-text">36</p>
        <p class="q-weather-text">晴</p>
        <!-- 使用计算属性获取发布时间 -->
        <p class="q-release-time-text">{{ releaseTime }} 发布</p>
      </div>
      <p class="q-unit-text">℃</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment' // 日期管理组件(http://momentjs.cn/)

export default {
  computed: {
    // 使用计算属性，获取发布时间
    releaseTime: () => {
      return moment().format('hh:mm:ss')
    }
  }
}
</script>
