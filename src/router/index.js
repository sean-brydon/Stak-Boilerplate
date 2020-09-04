import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    // Passing in the component like this - Passes in Home from `../views/Home.vue`
    component: Home
  },
  {
    path: '/UserMgmt',
    name: 'User Managment',
    // Uses code splitting
    // I prefer this way as it allows All pages to be loaded
    // Lazy loading
    component: () => import('../views/UserMgmt.vue')
  },
  {
    path: '/Bot',
    name: 'Control the bot',
    component: () => import('../views/Bot.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
