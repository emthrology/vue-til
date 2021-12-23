import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
  getters: {
    isLoggedin(state) {
      return state.username !== '';
    },
  },
  actions: {},
  modules: {},
});
