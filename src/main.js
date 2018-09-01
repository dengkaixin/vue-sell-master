// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import './common/stylus/index.styl';

Vue.use(Router)
Vue.use(VueResource)
/* eslint-disable no-new */

const routes = [{
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

const router = new Router({
	linkActiveClass: 'active',
  	routes // （缩写）相当于 routes: routes
})
const app = new Vue({
	components: { App },
  	router
}).$mount('#app')
