import Vue from 'vue';
import Vuex from 'vuex';
import state from './rootState'
import mutations from './mutations';
import getters from './getters';
import actions from './actions'
// modules


Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})
export default store;
