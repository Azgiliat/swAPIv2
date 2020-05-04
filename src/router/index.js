import Vue from 'vue'
import Router from 'vue-router'

import Main from "@/pages/Content.vue";
import Error from "@/pages/Error404.vue";

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '*',
    component: Error
  }
];

export default new Router({
    //mode: 'history',
    routes
})
