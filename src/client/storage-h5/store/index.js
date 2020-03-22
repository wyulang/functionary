import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFooter: 0
  },
  actions: {},
  mutations: {
    setFooter(state, data) {
      state.isFooter = data.isFooter;
    }
  }
});