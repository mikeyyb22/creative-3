import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rating from '../views/Rating.vue'
import Buy from '../views/Buy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rating',
    name: 'Rating',
    component: Rating
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
