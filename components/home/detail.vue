<!-- @format -->

<template>
  <div id="q-detail">
    <div class="q-detail-left">
      <img class="q-detail-img" src="../../assets/images/cloudy3.png" />
    </div>
    <div class="q-detail-right">
      <div class="q-detail-right-left">
        <p class="q-temperature-text">
          {{ detaildata.data.wendu }}
        </p>
        <p class="q-weather-text">
          {{ detaildata.data.forecast[0].type }}
        </p>
        <!-- 使用计算属性获取发布时间 -->
        <p class="q-release-time-text">
          {{ releaseTime(detaildata.time) }}
          发布
        </p>
      </div>
      <p class="q-unit-text">
        ℃
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // 获取props数据
  // 注意！：非开发原型系统时不建议使用 props['detaildata'] 写法
  // 参考props语法规范，https://cn.vuejs.org/v2/style-guide/#Prop-%E5%AE%9A%E4%B9%89-%E5%BF%85%E8%A6%81
  props: {
    detaildata: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    // 使用计算属性，获取发布时间
    releaseTime: () => {
      return time => {
        return time.split(' ')[1]
      }
    },
  },
}
</script>
