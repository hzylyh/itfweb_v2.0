// vue.config.js
module.exports = {
    // 选项...
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: { // 配置跨域
      '/v3': {
        //要访问的跨域的api的域名
        target: 'http://localhost:36000/',
        ws: false,
        changeOrigin: true,
      }
    },
  }
}
