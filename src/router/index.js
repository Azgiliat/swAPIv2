import Vue from 'vue'
import Router from 'vue-router'

import Main from "@/pages/main.vue";
import Edit from "@/pages/edit.vue";
import Error from "@/pages/404.vue";

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '*',
    component: Error
  }
];

export default function createRouter () {
  return new Router({
    mode: 'history',
    routes
  })
}