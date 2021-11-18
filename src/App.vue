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
    return {};
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
  mounted() {
    // console.log(Storage.getItem('userName','user'));
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
