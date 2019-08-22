/** @format */

export default {
  server: {
    port: 9002, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'http://t.weather.sojson.com/api/weather/city/',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  css: ['./assets/css/home.css'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** 您可以在这里扩展webpack配置
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
