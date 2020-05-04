import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as mutations from './mut';
import * as actions from './actions';
import * as getters from './getters';
import Axios from 'axios';
import conf from './../../conf.json';

import search from './search/index';
import popup from './popup/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search,
    popup
  },
  state,
  mutations,
  actions,
  getters
});

store.$axios = Axios.create({
  baseURL: conf.baseURL
});

export default store
