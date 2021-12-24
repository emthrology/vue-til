import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    token: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
  },
  getters: {
    isLoggedin(state) {
      return state.username !== '';
    },
    getToken(state) {
      return state.token;
    },
  },
  actions: {},
  modules: {},
});
