<template>
  <!-- 正在加载 -->
  <div v-if="loading" id="content">
    <div class="loading">
      <span class="loading-error-text">loading...</span>
    </div>
  </div>
  <!-- 加载失败 -->
  <div v-else-if="fail" id="content">
    <div class="loading">
      <span class="loading-error-text">网络异常，</span>
      <a class="loading-error-text">点击重新加载</a>
    </div>
  </div>
  <!-- 显示主界面 -->
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
  //   // 服务端数据请求
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
    // 请求数据
    this.getList()
  },
  methods: {
    //// 第一种数据请求方式（promise）
    // getList() {
    //  if (!this.loading || this.fail) {
    //    this.loading = true
    //    this.fail = false
    //  }
    //  axios
    //   .get("api/101120602")
    //   .then(res => {
    //     console.log("r", res.data);
    //     this.data = res.data
    //     this.loading = false
    //     this.fail = false
    //   })
    //   .catch(e => {
    //     this.fail = true
    //     this.data = null
    //     this.loading = false
    //   });
    // }
    // 数据请求的第二种写法（async/await）,参考ES7新特性
    async getList() {
      if (!this.loading || this.fail) {
        this.loading = true
        this.fail = false
      }
      try {
        const result = await axios.get("api/101120602")
        this.data = result.data
        this.loading = false
        this.fail = false
        console.log('result', result)
      } catch (e) {
        this.fail = true
        this.data = null
        this.loading = false
      }
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
