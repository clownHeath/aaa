import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home/Home'
import Order from '@/modules/Order/Order'
import Class from '@/modules/Class/Class'
import Login from '@/modules/Login/Login'
import Register from '@/modules/Register/Register'
import List from '@/modules/List/List'
import Details from '@/modules/Details/Details'
import Supermarket from '@/modules/Supermarket/Supermarket'
import Cart from '@/modules/Cart/Cart'
import User from '@/modules/User/User'

Vue.use(Router)

export default new Router({
  mode:'history',   //去掉router里的#号
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/Order',
      name: 'Order',
      component:Order
    },
     {
      path: '/Class',
      name: 'Class',
      component:Class
    },
    {
      path: '/Register',
      name: 'Register',
      component:Register
    },
    {
      path: '/List/:list_id/:list_name',
      name: 'List',
      component:List
    },
    {
      path: '/Login',
      name: 'Login',
      component:Login
    },
    {
      path: '/Supermarket',
      name: 'Supermarket',
      component:Supermarket
    },
    {
      path: '/User',
      name: 'User',
      component:User
    },
    {
      path: '/Details/:pid',
      name: 'Details',
      component:Details
    },
    {
      path: '/Cart',
      name: 'Cart',
      component:Cart
    }
  ]
})
