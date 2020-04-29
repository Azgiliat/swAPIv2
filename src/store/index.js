import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';
import Axios from 'axios';
import conf from './../../conf.json';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state,
  mutations,
  actions,
  getters
});

store.$axios = Axios.create({
  baseURL: conf.baseURL
});

export default store
