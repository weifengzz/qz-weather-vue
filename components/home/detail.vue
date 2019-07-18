<template>
  <div id="q-detail">
    <div class="q-detail-left">
      <img class="q-detail-img" src='../../assets/images/cloudy3.png' />
    </div>
    <div class="q-detail-right">
      <div class="q-detail-right-left">
        <p class="q-temperature-text">{{ detaildata.data.wendu }}</p>
        <p class="q-weather-text">{{ detaildata.data.forecast[0].type }}</p>
        <!-- 使用计算属性获取发布时间 -->
        <p class="q-release-time-text">{{ releaseTime(detaildata.time) }} 发布</p>
      </div>
      <p class="q-unit-text">℃</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'detaildata'
  ],
  computed: {
    // 使用计算属性，获取发布时间
    releaseTime: () => {
      return (time) => {
        return time.split(' ')[1]
      }
    }
  }
}
</script>
