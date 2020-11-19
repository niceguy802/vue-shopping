// const path=require('path')
// function resolve(dir){
//   return path.join(__dirname,dir)
// }

module.exports = {
  configureWebpack: {
    resolve: {
      //路径配置
      alias: {
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
