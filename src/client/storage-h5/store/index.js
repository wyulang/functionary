import Vue from 'vue'
import Vuex from 'vuex'
import api from './webapi.js';
import zgsh from './test.js';
import 'lib/vue-module';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFooter: 0,
    userinfo: {}
  },
  actions: {
    getAuthCode(e, data) {
      return api.get('/api/device/dingding/acctoken', data)
    },
    getUerInfo(e, data) {
      let sql = Object.assign({}, data, { tenant: "0000" });
      return api.get('/api/device/dingding/userInfo', sql).then(dal => {
        if (dal.code == 0) {
          api.storage('userinfo', dal.data);
          e.state.userinfo = dal.data;
        }
        return dal;
      })
    },
    getzglist(e, data) {
      return new Promise((succ, erro) => {
        succ(zgsh)
      })
    }
  },
  mutations: {
    setFooter(state, data) {
      state.isFooter = data.isFooter;
    }
  }
});