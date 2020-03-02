import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Statistics from './views/Statistics.vue'
import Suggestions from './views/Suggestions.vue'
import Timeline from './views/Timeline.vue'
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
    {
      path: '/suggestions',
      name: 'suggestions',
      component: Suggestions
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    }
  ]
})