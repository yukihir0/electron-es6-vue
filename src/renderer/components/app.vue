<template>
  <div>
    <hello></hello>
    <goodbye></goodbye>
  </div>
</template>

<script>
import Vue from "vue";
import hello from "./hello.vue";
import goodbye from "./goodbye.vue";

export default {}

Vue.component("hello", hello);
Vue.component("goodbye", goodbye);
</script>

<style scoped>
</style>
