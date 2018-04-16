import Vue from 'vue'
import Router from 'vue-router';
import User from '../pages/User/User.vue'
import Register from '../pages/Register/Register.vue'
import Main from '../pages/Main/Main.vue'
import Login from '../pages/Login/Login.vue'
import Category from '../pages/Category/Category.vue'
import Cart from '../pages/Cart/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    }
  ]
})
