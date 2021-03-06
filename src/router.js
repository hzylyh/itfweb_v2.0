import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/portal/login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/portal/index.vue')
    },
    {
      path: '/',
      name: 'case',
      component: () => import('./views/case/index.vue')
    },
  ]
})
