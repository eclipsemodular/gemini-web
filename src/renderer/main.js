import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import osc from 'osc'
// import midi from 'midi'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(osc)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
