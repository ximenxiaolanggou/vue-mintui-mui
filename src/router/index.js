import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/account/login'
import register from '@/components/account/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
