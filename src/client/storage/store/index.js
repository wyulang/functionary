import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isHeader: 1
  },
  actions: {},
  mutations: {
    setShowHeader(state, val) {
      state.isHeader = val.isHeader;
    },
  }
});