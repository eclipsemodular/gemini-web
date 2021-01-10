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
      component: Home
    },

    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },

    {
      path: '/composer',
      name: 'composer',
      component: Composer
    },

    //wildcard so that weird requests aren't unhandeled
    {
      path: '*',
      redirect: '/'
    }
  ]
})
