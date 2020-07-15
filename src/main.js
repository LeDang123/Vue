import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
//import router from "./router";
//import store from "./store";
//import vuetify from "./plugins/vuetify";
//import "./assets/css/style.css";
//import "./assets/css/bootstrap.css";
//Vue.config.productionTip = false;

Vue.use(VueResource);
export const bus = new Vue();

new Vue({
  //router,
  //store,
  //vuetify,
  render: h => h(App)
}).$mount("#app");
