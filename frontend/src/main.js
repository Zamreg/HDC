import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
