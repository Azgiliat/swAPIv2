import Vue from 'vue';
import App from './App.vue';
import createRouter from '@/router/index.js';
import createStore from '@/store/index.js';


new Vue({
  el: '#app',
  store: createStore(),
  router: createRouter(),
  render: h => h(App),
});
