<template>
  <div id="detail">
    <div class="detail-left">
      <img class="detail-img" src='../../assets/images/cloudy3.png' />
    </div>
    <div class="detail-right">
      <div class="detail-right-left">
        <p class="temperature-text">36</p>
        <p class="weather-text">晴</p>
        <!-- 使用计算属性获取发布时间 -->
        <p class="release-time-text">{{ releaseTime }} 发布</p>
      </div>
      <p class="unit-text">℃</p>
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
