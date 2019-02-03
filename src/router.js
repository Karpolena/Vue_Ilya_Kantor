import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import User from '@/views/User.vue'
import NotFound from '@/views/NotFound.vue'

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
      path: '/users',
      name: 'users', 
      component: Users     
      // component: () => import( './views/Users.vue')
    },
    {
      path: '/user/:id',
      name: 'user', 
      component: User     
      // component: () => import( './views/User.vue')
    },
    {
      path: '*',
      name: 'notFound', 
      component: NotFound     
      // component: () => import( './views/NotFound.vue')
    },
  ]
})
