import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import Login from '@/components/Login'
import Login2 from '@/components/Login2'
import Register from '@/components/Register'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login2',
      name: 'Login2',
      component: Login2
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
