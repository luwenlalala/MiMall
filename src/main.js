import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import App from './App.vue'
// import env from './env'
// import是预编译加载,在编译的时候,import文件会被加载进来,写入到内存当中
// mock开关
const mock = false
if(mock) {
  // require是从上到下在执行的时候加载的,当mock为false时是不会被加载的
  require('./mock/api')
}
// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b 
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// axios.defaults.baseURL = env.baseURL

// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  let path = location.hash
  // 成功的状态
  if(res.status === 0 ) {
 return res.data
  } else if(res.status === 10) {
    // 未登录状态
    // 跳转到登录页面 不用router是因为这个main.js不是vue实例,取不到this
    if(path !== '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    // 报错
    // alert(res.msg)
    Message.warning(res.msg)
    return Promise.reject(res)
  }
},error => {
  let res = error.response
  Message.error(res.data.message)
  return Promise.reject(error)
})

Vue.use(VueAxios,axios)
Vue.use(VueCookie)
// Vue.use(Message)
Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$message = Message
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
