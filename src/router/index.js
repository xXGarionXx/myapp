import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DailyTodo from '../views/DailyTodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DailyTodo',
    name: 'DailyTodo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: DailyTodo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
