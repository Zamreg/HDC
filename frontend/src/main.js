import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

import VuePapaParse from 'vue-papa-parse'
Vue.use(VuePapaParse)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
