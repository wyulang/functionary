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
  {
    path: '/appliy',
    name: "appliy",
    component: () => import(/* webpackChunkName: "exam" */ './pages/apply.vue'),
    meta: {
      index: 0,
      title: '设备申请',
      isFooter: 0,
    }
  },
  {
    path: '/borrow',
    name: "borrow",
    component: () => import(/* webpackChunkName: "exam" */ './pages/borrow.vue'),
    meta: {
      index: 0,
      title: '设备借用',
      isFooter: 0,
    }
  },
  {
    path: '/zgsq',
    name: "zgsq",
    component: () => import(/* webpackChunkName: "exam" */ './pages/zgsq.vue'),
    meta: {
      index: 0,
      title: '智柜申请',
      isFooter: 0,
    }
  },
  {
    path: '/zgjy',
    name: "zgjy",
    component: () => import(/* webpackChunkName: "exam" */ './pages/zgjy.vue'),
    meta: {
      index: 0,
      title: '智柜借用',
      isFooter: 0,
    }
  },
  {
    path: '/servicing',
    name: "servicing",
    component: () => import(/* webpackChunkName: "exam" */ './pages/servicing.vue'),
    meta: {
      index: 0,
      title: '设备维修申请',
      isFooter: 0,
    }
  },
  {
    path: '/inquiry',
    name: "inquiry",
    component: () => import(/* webpackChunkName: "exam" */ './pages/inquiry.vue'),
    meta: {
      index: 0,
      title: '设备保修查询',
      isFooter: 0,
    }
  },
  {
    path: '/test',
    name: "test",
    component: () => import(/* webpackChunkName: "exam" */ './pages/test.vue'),
    meta: {
      index: 0,
      title: '设备保修查询',
      isFooter: 0,
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