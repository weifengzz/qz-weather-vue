<template>
  <div v-if="loading" id="content">
    <div class="loading">
      <span class="loading-error-text">loading...</span>
    </div>
  </div>
  <div v-else-if="fail" id="content">
    <div class="loading">
      <span class="loading-error-text">网络异常，</span>
      <a class="loading-error-text">点击重新加载</a>
    </div>
  </div>
  <div v-else id="content">
    <header-top></header-top>
    <detail></detail>
    <list></list>
  </div>
</template>

<script>
// 导入标题组件
import headerTop from "../components/home/header.vue";
// 详情组件
import detail from "../components/home/detail.vue";
// 底部列表组件
import list from "../components/home/list";
// 网络请求
import axios from "axios";

export default {
  data() {
    return {
      loading: true, // 正在加载
      fail: false, // 失败
      data: null // 界面数据
    };
  },
  // async asyncData({ params }) {
  //   return axios
  //     .get("http://t.weather.sojson.com/api/weather/city/101120602")
  //     .then(res => {
  //       return {
  //         data: res.data,
  //         loading: false,
  //         fail: false
  //       }
  //     })
  //     .catch(e => {
  //       return {
  //         data: {},
  //         fail: true,
  //         loading: false
  //       }
  //     });
  // },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      axios
      .get("api/101120602")
      .then(res => {
        console.log("r", res.data);
        this.data = res.data
        this.loading = false
        this.fail = false
      })
      .catch(e => {
        this.fail = true
        this.data = null
        this.loading = false
      });
    }
  },
  // 引用组件
  components: {
    headerTop,
    detail,
    list
  }
};
</script>


<style>
/* 导入样式 */
@import url("../css/index.css");
</style>
