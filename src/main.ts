import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vgl from "vue-golden-layout";
import "golden-layout/src/css/goldenlayout-light-theme.css";

Vue.config.productionTip = false;
Vue.use(vgl);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
