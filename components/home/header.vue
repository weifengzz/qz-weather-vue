<template>
  <div class='header'>
    <a class='header-text'>青州天气</a>
    <a class='change-city-text'>[切换城市]</a>
    <div class="header-date">
      <a class="header-date-text">{{`${date} 周五`}}</a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      date: '05月10日'
    }
  }
}
</script>


<style>
  /* 导入样式 */
  @import url('../../css');
</style>
