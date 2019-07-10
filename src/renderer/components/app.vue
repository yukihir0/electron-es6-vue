<template>
  <div>
    <div class="columns">
      <div class="column is-full">
        <hello></hello>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <goodbye></goodbye>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <counter></counter>
      </div>
    </div>
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

<style lang="scss">
@import "../../../node_modules/bulma/bulma.sass";
</style>
