import Vue from "vue";
import App from "./App.vue";
import apollo from "./apollo";
import store from "./store";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.prototype.$apollo = apollo;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
