import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Composer from '../views/Composer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {transitionType: 'slide-up'}
    },

    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {transitionType: 'slide-up'}
    },

    {
      path: '/composer',
      name: 'composer',
      component: Composer,
      meta: {transitionType: 'slide-up'}
    },

    //wildcard so that weird requests aren't unhandeled
    {
      path: '*',
      redirect: '/',
      meta: {transitionType: 'fade'}
    }
  ]
})
