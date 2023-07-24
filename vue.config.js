const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
  // 配置反向代理
  // devServer :{
  //   proxy: {
  //     // '/ajax':{
  //     //   target:"https://www.maoyan.com/",
  //     //   changeOrigin: true
  //     'liuyu':{
  //       target:'https://www.maoyan.com',
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '^/liuyu': ''
  //       }
  //     }
  //   }

  // }
})
