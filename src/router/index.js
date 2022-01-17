import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect : 'home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  })
  
  export default router  