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

//Custom Directives

Vue.directive("Theme",{
  bind(el,binding){
    if(binding.value == "wide"){
      el.style.maxWidth = "960px";
    }else if (binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "column"){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
}),

//Filters
/*Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
});*/

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
});


//export const bus = new Vue();
new Vue({
  //router,
  //store,
  //vuetify,
  render: h => h(App)
}).$mount("#app");
