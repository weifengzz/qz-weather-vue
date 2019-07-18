<template>
  <!-- 正在加载 -->
  <div v-if="loading" id="q-content">
    <div class="q-loading">
      <span class="q-loading-error-text">loading...</span>
    </div>
  </div>
  <!-- 加载失败 -->
  <div v-else-if="fail" id="q-content">
    <div class="q-loading">
      <span class="q-loading-error-text">网络异常，</span>
      <a class="q-loading-error-text">点击重新加载</a>
    </div>
  </div>
  <!-- 显示主界面 -->
  <div v-else id="q-content">
    <header-top></header-top>
    <detail v-bind:detaildata="data" ></detail>
    <!-- :是v-bind的缩写 -->
    <list :listdata="filterListData(data.data.forecast)"></list>
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
  computed: {
    /**
     * 数据筛选
     * 
     * 数据格式
     * [{"date":"19","sunrise":"05:00","high":"高温 30.0℃","low":"低温 24.0℃","sunset":"19:23","aqi":214,"ymd":"2019-07-19","week":"星期五","fx":"南风","fl":"3-4级","type":"雷阵雨","notice":"带好雨具，别在树下躲雨"},{"date":"20","sunrise":"05:01","high":"高温 33.0℃","low":"低温 25.0℃","sunset":"19:23","aqi":349,"ymd":"2019-07-20","week":"星期六","fx":"南风","fl":"3-4级","type":"雷阵雨","notice":"带好雨具，别在树下躲雨"},{"date":"21","sunrise":"05:02","high":"高温 35.0℃","low":"低温 26.0℃","sunset":"19:22","aqi":275,"ymd":"2019-07-21","week":"星期日","fx":"南风","fl":"3-4级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"22","sunrise":"05:03","high":"高温 35.0℃","low":"低温 29.0℃","sunset":"19:21","aqi":227,"ymd":"2019-07-22","week":"星期一","fx":"南风","fl":"3-4级","type":"阴","notice":"不要被阴云遮挡住好心情"},{"date":"23","sunrise":"05:03","high":"高温 36.0℃","low":"低温 27.0℃","sunset":"19:21","aqi":317,"ymd":"2019-07-23","week":"星期二","fx":"南风","fl":"3-4级","type":"雷阵雨","notice":"带好雨具，别在树下躲雨"},{"date":"24","sunrise":"05:04","high":"高温 36.0℃","low":"低温 29.0℃","sunset":"19:20","ymd":"2019-07-24","week":"星期三","fx":"北风","fl":"3-4级","type":"雷阵雨","notice":"带好雨具，别在树下躲雨"}]
     */
    filterListData: () => {
      return lists => {
        let ldata = []
        for (let i = 1; i < 7; i++) {
          ldata.push(lists[i])
        }
        return ldata
      }
    }
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
        // 网络请求需修改请求名称
        const result = await axios.get("api/101120602")
        this.data = result.data
        this.loading = false
        this.fail = false
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
/* 导入样式，使用<style scoped> 样式只作用在本模块 */
@import url("../css/index.css");
</style>
