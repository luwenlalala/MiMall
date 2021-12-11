<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import ServiceBar from "../components/ServiceBar.vue";
// import OrderHeader from "../components/OrderHeader.vue";
export default {
  name: "order",
  components: {
    NavFooter,
    // OrderHeader,
    ServiceBar,
  },
  data() {
    return {
      title: "",
      tip: "",
    };
  },
};
</script>

<style>
</style>