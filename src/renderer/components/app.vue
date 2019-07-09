<template>
  <div>
    <hello></hello>
    <goodbye></goodbye>
    <counter></counter>
  </div>
</template>

<script>
import Vue from "vue";
import hello from "./hello.vue";
import goodbye from "./goodbye.vue";
import counter from "./counter.vue";

export default {
  components: {
    hello,
    goodbye,
    counter
  }
}

</script>

<style scoped>
</style>
