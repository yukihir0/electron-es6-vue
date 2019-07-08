import Vue from "vue";
import app from "./components/app.vue";

new Vue({
  el: "#hello",
  components: { app },
  template: "<app></app>"
});
