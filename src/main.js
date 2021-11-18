import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env'

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b 
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

axios.defaults.baseURL = env.baseURL

// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  // 成功的状态
  if(res.status === 0 ) {
 return res.data
  } else if(res.status === 10) {
    // 未登录状态
    // 跳转到登录页面 不用router是因为这个main.js不是vue实例,取不到this
window.location.href('/#/login')
  } else {
    // 报错
    alert(res.msg)
  }
})

Vue.use(VueAxios,axios)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
