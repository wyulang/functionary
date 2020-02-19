import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index.js';
Vue.use(Router);

const routers = [
  {
    path: '/',
    name: "index",
    component: () => import(/* webpackChunkName: "exam" */ './pages/index.vue'),
    meta: {
      index: 0,
      title: '库存管理',
      isHeader: 1,
      isFooter: 1,
    }
  },
  {
    path: '/car',
    name: "car",
    component: () => import(/* webpackChunkName: "exam" */ './pages/car.vue'),
    meta: {
      index: 0,
      title: '车辆管理',
      isHeader: 1,
      isFooter: 1,
    }
  },
  {
    path: '/user',
    name: "user",
    component: () => import(/* webpackChunkName: "exam" */ './pages/user.vue'),
    meta: {
      index: 0,
      title: '车辆管理',
      isHeader: 1,
      isFooter: 1,
    }
  },
  {
    path: '/borrow',
    name: "borrow",
    component: () => import(/* webpackChunkName: "exam" */ './pages/borrow.vue'),
    meta: {
      index: 0,
      title: '借还管理',
      isHeader: 1,
      isFooter: 1,
    }
  },
  {
    path: '/login',
    name: "login",
    component: () => import(/* webpackChunkName: "exam" */ './pages/login.vue'),
    meta: {
      index:1,
      title: '智能存储柜登录',
      isHeader: 0,
      isFooter: 0,
    }
  }
]

let routerDefaut = new Router({
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

routerDefaut.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	store.commit('setShowHeader', {
		isHeader: to.meta.isHeader
	});
	setTimeout(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, 200);
	next();
})

export default routerDefaut;