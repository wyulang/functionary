import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index';
Vue.use(Router);

const routers = [
  {
    path: '/',
    name: "index",
    component: () => import(/* webpackChunkName: "exam" */ './pages/index.vue'),
    meta: {
      index: 0,
      title: 'index',
      isFooter: 1,
    }
  },
  {
    path: '/car',
    name: "car",
    component: () => import(/* webpackChunkName: "exam" */ './pages/car.vue'),
    meta: {
      index: 0,
      title: '车辆',
      isFooter: 2,
    }
  },
]

const routerDefaut = new Router({
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

routerDefaut.beforeEach(({ meta }, from, next) => {
  // console.log('tag', meta)
  store.commit('setFooter', meta);
  next()
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default routerDefaut;