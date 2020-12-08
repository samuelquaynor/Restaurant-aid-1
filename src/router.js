import Vue from "vue";
import VueRouter from "vue-router";
import index from "./components/index.vue";
import restaurant from "../view/restaurant.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/restaurant/:id",
    name: "restaurant",
    component: restaurant,
  },
];
export default new VueRouter({
  routes,
});
