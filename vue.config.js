module.exports = {
   devServer: {
     host: 'localhost',
     port: 8888,
     proxy: {
 /*       '/search': {
         target: 'https://www.imooc.com',
         changeOrigin: true,
         pathRewrite: {
          '/search': '/search'
         }
       },
       '/a': {
         target: 'https://www.imooc.com',
         changeOrigin: true,
         pathRewrite: {
          '/a': '/a'
         }
       } */
       // 实际的接口地址中没有/api,这么多接口,很难拦截到,为了统一管理,前面加上/api,访问的时候,地址里可以看到/api,但实际上pathRewrite会进行重写
       '/api': {
         target: 'http://mall-pre.springboot.cn',
         changeOrigin: true,
         pathRewrite: {
           '/api': ''
         }
       },
      },
    },
    // publicPath: '/app',
    // outputDir: 'dist',
    // indexPath: 'index2.html',
    productionSourceMap: false, // 不输出js.map文件,代码被压缩,防止别人看懂代码
    // lintOnSave: false
    chainWebpack: config => {
      // 删除预加载
      config.plugins.delete('prefetch')
    }
}