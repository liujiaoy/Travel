import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'
import Waiting from '@/pages/waiting/Waiting.vue'
const Orders = () => import('@/pages/orders/Orders')
const Raiders = () => import('@/pages/raiders/Raiders')
const Profile = () => import('@/pages/profile/Profile')
const HotList = () => import('@/pages/hotlist/HotList')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hotlist',
      name: 'HotList',
      component: HotList
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/waiting',
      name: 'Waiting',
      component: Waiting
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/raiders',
      name: 'Raiders',
      component: Raiders
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
