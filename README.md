## 青州天气vue版本

### 参考文档
* [vue](https://cn.vuejs.org/v2/guide/)
* [nuxt](https://zh.nuxtjs.org/guide)

### 依赖库
* [vue](https://cn.vuejs.org/v2/guide/)
* vue服务端渲染：[nuxt](https://zh.nuxtjs.org/guide)
* Node.js服务器端呈现：[vue-server-renderer](https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer#readme)
* vue路由管理器：[vue-router](https://github.com/vuejs/vue-router#readme)
* Vue Loader 是一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件: [vue-loader](https://github.com/vuejs/vue-loader),[中文文档](https://vue-loader.vuejs.org/zh/)
* Webpack的Vue样式加载程序模块:[vue-style-loader](https://github.com/vuejs/vue-style-loader#readme)
* 日期处理类库：[moment](http://momentjs.cn/)

### 运行项目

* 安装依赖

```
    npm install
```

or

```
    yarn
```

* 运行 

```
    npm run dev
```

* 打开网页，输入网址

```
    http://localhost:9002/
```

### axios跨域问题
* 添加 @nuxtjs/axios，@nuxtjs/proxy 依赖库
```
    npm install @nuxtjs/axios @nuxtjs/proxy --dev

```
* 在nuxt.config.js文件中配置

```
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
    ],
    axios: {
      proxy: true
    },
    proxy: {
      '/api': {
        target: 'http://t.weather.sojson.com/api/weather/city/',
        pathRewrite: {
          '^/api' : '/'
        }
      }
    }
```

* [详情请参考](https://zh.nuxtjs.org/faq/http-proxy/)
