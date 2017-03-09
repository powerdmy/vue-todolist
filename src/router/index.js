import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import timeEntry from '@/components/timeEntry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/time-entries',
      component: timeEntry,
      children: [{
        path: 'log-time',
        // 懒加载
        component: resolve => require(['../components/logTime.vue'], resolve),
      }]
    }
  ]
})
