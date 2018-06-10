import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
