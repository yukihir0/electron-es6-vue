import Vue from "vue";
import hello from "./hello.vue";

new Vue({
  el: '#hello',
  components: { hello },
  template: "<hello></hello>"
});
