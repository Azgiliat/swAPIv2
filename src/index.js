import Vue from 'vue';
import App from './App.vue';
import createRouter from '@/router/index.js';
import createStore from '@/store/index.js';

const req = require.context('@/assets/icons', true);
req.keys().forEach(function (key) {
  req(key);
}); //building sprite

new Vue({
  el: '#app',
  store: createStore,
  router: createRouter,
  render: h => h(App),
});
