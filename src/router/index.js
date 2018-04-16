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
      component: Main,
      meta:{isfooterShow:true}
    },
    {
      path: '/user',
      component: User,
      meta:{isfooterShow:true}
    },
    {
      path: '/register',
      component: Register,
      meta:{isfooterShow:false}
    },
    {
      path: '/login',
      component: Login,
      meta:{isfooterShow:false}
    },
    {
      path: '/category',
      component: Category,
      meta:{isfooterShow:true}
    },
    {
      path: '/cart',
      component: Cart,
      meta:{isfooterShow:true}
    }
  ]
})
