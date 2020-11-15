module.exports = {
  configureWebpack: {
    resolve: {
      //路径配置
      alias: {
        // '@':'src',
        'assets':'@/assets',
        'common':'@/common',
        'component':'@/component',
        'network':'@/network',
        // 'router':'@/router',
        // 'store':'@/store',
        'views':'@/views',

      }
    }
  }
}
