import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Statistics from './views/Statistics.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    },
  ]
})