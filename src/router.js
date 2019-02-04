import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import User from '@/views/User.vue'
import UserForm from '@/components/UserForm.vue'
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
      path: '/user',
      name: 'user', 
      component: User     
      // component: () => import( './views/User.vue')
    },
    {
      path: '/user/:id',
      name: 'userForm', 
      component: UserForm     
      // component: () => import( './views/UserForm.vue')
    },
    {
      path: '*',
      name: 'notFound', 
      component: NotFound     
      // component: () => import( './views/NotFound.vue')
    },
  ]
})
