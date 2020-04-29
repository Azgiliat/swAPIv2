import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

export default function createStore () {
  return new Vuex.Store({
    modules: {},
    state,
    mutations,
    actions,
    getters
  });
}