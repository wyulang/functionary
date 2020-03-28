import Vue from 'vue'
import Vuex from 'vuex'
import api from './webapi.js';
import zgsh from './test.js';
import 'lib/vue-module';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFooter: 0,
    userinfo:{}
  },
  actions: {
    getAuthCode(e,data){
     return  api.get('/api/device/dingding/acctoken',data)
    },
    getUerInfo(e,data){
     return e.dispatch('getAuthCode',{}).then(res=>{
        if(res.code==0){
          let sql=Object.assign({},data,{acctoken:res.data.acctoekn,tenant:"0000"});
          return api.get('/api/device/dingding/userInfo',sql)
        }else{
          return res
        }
      })
    },
    getzglist(e,data){
      return new Promise((succ,erro)=>{
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