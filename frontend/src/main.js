import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

//window._ = require('lodash');

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
