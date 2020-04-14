import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

  const routes = [
    /*404组件*/
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
    /*空路径重定向*/
  {
    path: '/',
    redirect : '/home'
  },
    /*路由路径*/
  {
    path: '/home',
    name: '/home',
    component: Home
  },
  {
    path: '/about',
    name: '/about',
    //懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
