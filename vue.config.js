module.exports = {
   devServer: {
     host: 'localhost',
     port: 8081,
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
       '/api': {
         target: 'https://www.imooc.com',
         changeOrigin: true,
         pathRewrite: {
           '/api': ''
         }
       }
     }
   }
}