<template>
  <div>
    <nav-header></nav-header>
    <!-- index detail product会嵌套在里面 -->
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import NavHeader from '../components/NavHeader.vue'
export default {
  components: { NavFooter, NavHeader },

}
</script>

<style>

</style>