<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
// import jsonp from "jsonp";
// import Storage from './storage/index'

export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {}
    };
  },
  // mounted() {
  //   let url = "/api/search/hotwords";
  //   // let url = '/search/hotwords'
  //   /*  axios.get(url).then(() => {
      
  //   }) */
  //   jsonp(url, (err, res) => {
  //     this.result = res;
  //   });
  // },
 /*  mounted() {
    // console.log(Storage.getItem('userName','user'));
    
  } */
  mounted() {
    // 可以用this.axios是因为VueAxios把axios挂载到了vue实例上
    // 不需要写/public
    // 本地加载请求静态json文件的形式
   /*  this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res
    }) */
     // 通过easy-mock平台实现数据mock
   /*  this.axios.get('/user/login').then((res) => {
      this.res = res
    }) */

    /* // 本地集成mock.js实现数据mock
    this.axios.get('/user/login').then((res) => {
      this.res = res
    }) */

    this.getUser()
    this.getCartCount()
  },

  methods: {
    getUser() {
      this.axios.get('/user').then((res={}) => {
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res=0) => {
        this.$store.dispatch('saveCartCount',res)
      })
    }
  }
};
</script>

<style lang="scss">
@import './assets/scss/config.scss';
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';

</style>
