import Vue from "vue";
import Vuex from "vuex";
import app from "./components/app.vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  }
});

new Vue({
  el: "#app",
  components: { app },
  template: "<app></app>",
  store
});
