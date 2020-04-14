import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

  const routes = [
    /*404组件*/
  {
    path: '*',
    component: Home
  },
    /*空路径重定向*/
  {
    path: '/',
    redirect : '/home'
  },
    /*路由路径*/
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
