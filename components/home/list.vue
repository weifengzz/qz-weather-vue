<template>
  <div id="q-list">
    <!-- 使用for循环的时候需要添加:key="key" -->
    <div v-for="(val,key) in listdata" :key="key" class='q-item-container'>
      <div class="q-item">
        <span class="q-item-common-text">{{val.ymd}}</span>
        <span class="q-item-common-text">{{val.week}}</span>
        <div class="q-item-center">
          <img class="q-item-img" src="../../assets/images/cloudy3.png" />
        </div>
        <span class="q-item-common-text">{{val.low.split(' ')[1]}}</span>
        <span class="q-item-common-text">/</span>
        <span class="q-item-common-text">{{val.high.split(' ')[1]}}</span>
      </div>
      <!-- 分割线 -->
      <splite-line />
    </div>
  </div>
</template>

<script>

import spliteLine from '../common/splite_line' // 导入分割线
import moment from 'moment'

export default {
  // 获取props
  props: {
    listdata: Array
  },
  components: {
    spliteLine
  },
  computed: {
    // 列表日期格式化
    formatDate: () => {
      return (ymd) => {
        return `${ymd.split('-')[1]}-${ymd.split('-')[2]}`
      }
    }
  }
}
</script>
