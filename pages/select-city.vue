<!-- @format -->

<template>
  <ul>
    <li>
      <a @click="back({ number: '101120603', name: '寿光市' })">寿光市</a>
    </li>
    <li>
      <a @click="back({ number: '101120604', name: '临朐县' })">临朐县</a>
    </li>
    <li>
      <a @click="back({ number: '101120602', name: '青州市' })">青州市</a>
    </li>
  </ul>
</template>

<script>
// 获取types
import { CHANGE_CITY_NUMBER } from '../store/types'

export default {
  methods: {
    back(val) {
      // 判断是否还有前一个页面
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$store.dispatch(CHANGE_CITY_NUMBER, val)
        // 返回上一级
        this.$router.back(-1)
      }
    },
  },
  head() {
    return {
      title: '选择城市',
    }
  },
}
</script>
